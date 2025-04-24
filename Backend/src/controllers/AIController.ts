import { Request, Response } from 'express';
import { JobListing } from '../models/JobListing';
import { User } from '../models/User';
import { Application } from '../models/Application';

export class AIController {
  // Search for candidates based on job requirements
  async searchCandidates(req: Request, res: Response) {
    try {
      const { jobId, query, skills, location, minExperience } = req.body;

      // Get the job listing
      const jobListing = await JobListing.findById(jobId);
      if (!jobListing) {
        return res.status(404).json({ message: 'Job listing not found' });
      }

      // Get all applications for this job
      const applications = await Application.find({ jobId })
        .populate('userId', 'firstName lastName email skills experience location')
        .exec();

      // Filter and rank candidates based on AI matching
      const rankedCandidates = applications.map(application => {
        const user = application.userId as any;
        const matchScore = this.calculateMatchScore(
          user,
          jobListing,
          query,
          skills,
          location,
          minExperience
        );

        return {
          id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          title: user.title || 'Job Seeker',
          skills: user.skills || [],
          experience: user.experience || '0 years',
          location: user.location || 'Not specified',
          matchScore,
          summary: this.generateCandidateSummary(user, jobListing),
          applicationId: application._id,
          status: application.status
        };
      });

      // Sort by match score
      rankedCandidates.sort((a, b) => b.matchScore - a.matchScore);

      res.json(rankedCandidates);
    } catch (error) {
      console.error('Error in AI search:', error);
      res.status(500).json({ message: 'Error performing AI search' });
    }
  }

  // Calculate match score between candidate and job
  private calculateMatchScore(
    candidate: any,
    job: any,
    query: string,
    requiredSkills: string[],
    location: string,
    minExperience: number
  ): number {
    let score = 0;
    const weights = {
      skills: 0.4,
      experience: 0.3,
      location: 0.2,
      query: 0.1
    };

    // Skills matching
    if (candidate.skills && job.requiredSkills) {
      const matchingSkills = candidate.skills.filter((skill: string) =>
        job.requiredSkills.includes(skill)
      );
      score += (matchingSkills.length / job.requiredSkills.length) * weights.skills;
    }

    // Experience matching
    if (candidate.experience) {
      const candidateExp = parseInt(candidate.experience);
      if (candidateExp >= minExperience) {
        score += weights.experience;
      } else {
        score += (candidateExp / minExperience) * weights.experience;
      }
    }

    // Location matching
    if (location && candidate.location) {
      if (location.toLowerCase() === 'remote' || 
          candidate.location.toLowerCase().includes(location.toLowerCase())) {
        score += weights.location;
      }
    }

    // Query matching (simple text matching for now)
    if (query) {
      const searchText = `${candidate.firstName} ${candidate.lastName} ${candidate.skills?.join(' ')}`.toLowerCase();
      if (searchText.includes(query.toLowerCase())) {
        score += weights.query;
      }
    }

    return Math.round(score * 100);
  }

  // Generate a summary for the candidate
  private generateCandidateSummary(candidate: any, job: any): string {
    const skills = candidate.skills?.join(', ') || 'No skills listed';
    const experience = candidate.experience || 'No experience listed';
    const location = candidate.location || 'Location not specified';

    return `${candidate.firstName} ${candidate.lastName} is a ${experience} professional with skills in ${skills}. Based in ${location}, they are a potential match for the ${job.title} position.`;
  }

  // Get AI-generated job description suggestions
  async getJobDescriptionSuggestions(req: Request, res: Response) {
    try {
      const { title, department, requiredSkills } = req.body;

      // Generate suggestions based on the input
      const suggestions = {
        description: this.generateJobDescription(title, department, requiredSkills),
        requirements: this.generateJobRequirements(requiredSkills),
        benefits: this.generateJobBenefits(department)
      };

      res.json(suggestions);
    } catch (error) {
      console.error('Error generating suggestions:', error);
      res.status(500).json({ message: 'Error generating suggestions' });
    }
  }

  private generateJobDescription(title: string, department: string, skills: string[]): string {
    return `We are seeking a ${title} to join our ${department} team. The ideal candidate will be responsible for developing and implementing solutions using ${skills.join(', ')}. This role requires strong problem-solving skills and the ability to work collaboratively in a team environment.`;
  }

  private generateJobRequirements(skills: string[]): string[] {
    return [
      `Proficiency in ${skills.join(', ')}`,
      'Strong problem-solving and analytical skills',
      'Excellent communication and teamwork abilities',
      'Bachelor\'s degree in a related field or equivalent experience'
    ];
  }

  private generateJobBenefits(department: string): string[] {
    return [
      'Competitive salary and benefits package',
      'Flexible work arrangements',
      'Professional development opportunities',
      'Collaborative and innovative work environment',
      `Opportunity to work with cutting-edge technologies in ${department}`
    ];
  }
} 