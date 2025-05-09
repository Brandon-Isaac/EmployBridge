import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faBuilding, faMapMarkerAlt, faMoneyBillWave, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { SkillService, Skill } from '../../../services/skill.service';
import { JobService, Job } from '../../../services/job.service';
import { AuthService } from '../../../services/auth.service';
import { ApplicationFormComponent } from '../application-form/application-form.component';

interface JobMatch {
  job: Job;
  matchScore: number;
  matchingSkills: Skill[];
  missingSkills: Skill[];
}

@Component({
  selector: 'app-job-matching',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    FontAwesomeModule
  ],
  template: `
    <div class="job-matching-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Finding your perfect job matches...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="retryLoading()">Retry</button>
      </div>

      <!-- No Matches State -->
      <div *ngIf="!isLoading && !error && jobMatches.length === 0" class="no-matches-container">
        <h2>No Job Matches Found</h2>
        <p>We couldn't find any jobs that match your skills. Try updating your skills in your profile.</p>
        <button mat-raised-button color="primary" (click)="goToProfileUpdate()">
          Update Skills
        </button>
      </div>

      <!-- Job Matches -->
      <div *ngIf="!isLoading && !error && jobMatches.length > 0" class="job-matches">
        <h2>Your Job Matches</h2>
        <p class="subtitle">Based on your skills and experience</p>

        <div class="job-cards">
          <mat-card *ngFor="let match of jobMatches" class="job-card">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faBriefcase" class="icon"></fa-icon>
                {{match.job.title}}
              </mat-card-title>
              <mat-card-subtitle>
                <fa-icon [icon]="faBuilding" class="icon"></fa-icon>
                {{match.job.employer.name}}
              </mat-card-subtitle>
            </mat-card-header>

            <mat-card-content>
              <div class="job-details">
                <div class="detail">
                  <fa-icon [icon]="faMapMarkerAlt" class="icon"></fa-icon>
                  {{match.job.location}}
                </div>
                <div class="detail">
                  <fa-icon [icon]="faMoneyBillWave" class="icon"></fa-icon>
                  {{match.job.salary}}
                </div>
              </div>

              <div class="match-score">
                <div class="score" [ngClass]="getScoreClass(match.matchScore)">
                  {{match.matchScore}}% Match
                </div>
              </div>

              <div class="skills-section">
                <h3>Matching Skills</h3>
                <div class="skills">
                  <mat-chip *ngFor="let skill of match.matchingSkills" class="matching-skill">
                    <fa-icon [icon]="faCheckCircle" class="icon"></fa-icon>
                    {{skill.name}}
                  </mat-chip>
                </div>

                <h3>Missing Skills</h3>
                <div class="skills">
                  <mat-chip *ngFor="let skill of match.missingSkills" class="missing-skill">
                    <fa-icon [icon]="faTimesCircle" class="icon"></fa-icon>
                    {{skill.name}}
                  </mat-chip>
                </div>
              </div>

              <p class="job-description">{{match.job.description}}</p>
            </mat-card-content>

            <mat-card-actions>
              <button mat-raised-button color="primary" (click)="applyForJob(match.job)">
                Apply Now
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .job-matching-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
      font-family: 'Poppins', sans-serif;
    }

    .loading-container, .error-container, .no-matches-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
      text-align: center;
    }

    .error-message {
      color: #dc3545;
      font-size: 1.1rem;
    }

    .job-matches {
      h2 {
        margin: 0 0 8px 0;
        color: #2c3e50;
      }

      .subtitle {
        color: #666;
        margin-bottom: 24px;
      }
    }

    .job-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 24px;
    }

    .job-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    mat-card-header {
      margin-bottom: 16px;
    }

    mat-card-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.2rem;
    }

    mat-card-subtitle {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .job-details {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }

    .detail {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .match-score {
      margin-bottom: 16px;
      
      .score {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 1.1rem;

        &.high {
          background-color: #d4edda;
          color: #155724;
        }

        &.medium {
          background-color: #fff3cd;
          color: #856404;
        }

        &.low {
          background-color: #f8d7da;
          color: #721c24;
        }
      }
    }

    .skills-section {
      margin-bottom: 16px;

      h3 {
        margin: 16px 0 8px 0;
        font-size: 1rem;
        color: #2c3e50;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    }

    .matching-skill {
      background-color: #d4edda;
      color: #155724;
    }

    .missing-skill {
      background-color: #f8d7da;
      color: #721c24;
    }

    .job-description {
      color: #666;
      margin-bottom: 16px;
      line-height: 1.5;
    }

    mat-card-actions {
      margin-top: auto;
      padding: 16px;
      display: flex;
      justify-content: flex-end;
    }

    .icon {
      margin-right: 4px;
    }
  `]
})
export class JobMatchingComponent implements OnInit {
  // Font Awesome icons
  faBriefcase = faBriefcase;
  faBuilding = faBuilding;
  faMapMarkerAlt = faMapMarkerAlt;
  faMoneyBillWave = faMoneyBillWave;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  jobMatches: JobMatch[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(
    private jobService: JobService,
    private skillService: SkillService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadJobMatches();
  }

  private loadJobMatches(): void {
    this.isLoading = true;
    this.error = null;

    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'Please log in to view job matches';
      this.isLoading = false;
      return;
    }

    // Get user skills
    this.skillService.getUserSkills(user.id).subscribe({
      next: (userSkills) => {
        // Get all jobs
        this.jobService.getAllJobs().subscribe({
          next: (jobs) => {
            this.jobMatches = this.calculateJobMatches(jobs, userSkills);
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error loading jobs:', error);
            this.error = 'Failed to load jobs. Please try again.';
            this.isLoading = false;
          }
        });
      },
      error: (error) => {
        console.error('Error loading user skills:', error);
        this.error = 'Failed to load your skills. Please try again.';
        this.isLoading = false;
      }
    });
  }

  private calculateJobMatches(jobs: Job[], userSkills: Skill[]): JobMatch[] {
    return jobs.map(job => {
      const requiredSkills = job.requiredSkills || [];
      const matchingSkills = userSkills.filter(skill => 
        requiredSkills.some(required => required.id === skill.id)
      );
      const missingSkills = requiredSkills.filter(skill =>
        !userSkills.some(userSkill => userSkill.id === skill.id)
      );

      const matchScore = requiredSkills.length > 0
        ? Math.round((matchingSkills.length / requiredSkills.length) * 100)
        : 0;

      return {
        job,
        matchScore,
        matchingSkills,
        missingSkills
      };
    }).sort((a, b) => b.matchScore - a.matchScore); // Sort by match score descending
  }

  getScoreClass(score: number): string {
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }

  applyForJob(job: Job): void {
    const dialogRef = this.dialog.open(ApplicationFormComponent, {
      width: '600px',
      data: { job }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Optionally refresh the job matches or show a success message
        this.loadJobMatches();
      }
    });
  }

  goToProfileUpdate(): void {
    this.router.navigate(['/job-seeker/profile-update']);
  }

  retryLoading(): void {
    this.loadJobMatches();
  }
} 