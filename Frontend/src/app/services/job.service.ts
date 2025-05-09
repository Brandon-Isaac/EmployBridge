import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './skill.service';
import { environment } from '../../environments/environment';

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  salary?: number;
  employmentType: string;
  deadline?: Date;
  employer: {
    id: string;
    name: string;
    email: string;
  };
  requiredSkills: Skill[];
  applications?: any[];
  createdAt: Date;
  updatedAt: Date;
}

export interface JobWithMatchScore extends Job {
  matchScore: number;
}

export interface JobSearchParams {
  query?: string;
  location?: string;
  skills?: string[];
  employmentType?: string;
  sortBy?: string;
  minSalary?: number;
}

export interface JobGenerationParams {
  title: string;
  location: string;
  employmentType: string;
  salary?: number;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = `${environment.apiUrl}/jobs`;

  constructor(private http: HttpClient) { }

  // Get all jobs
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  // Get job by ID
  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  // Create new job
  createJob(job: Partial<Job>): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  // Update job
  updateJob(id: string, job: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/${id}`, job);
  }

  // Delete job
  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Get jobs by employer
  getJobsByEmployer(employerId: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/employer/${employerId}`);
  }

  // Search jobs
  searchJobs(params: JobSearchParams): Observable<Job[]> {
    const queryParams = new URLSearchParams();
    if (params.query) queryParams.set('query', params.query);
    if (params.location) queryParams.set('location', params.location);
    if (params.skills?.length) queryParams.set('skills', params.skills.join(','));
    if (params.employmentType) queryParams.set('employmentType', params.employmentType);
    if (params.sortBy) queryParams.set('sortBy', params.sortBy);
    if (params.minSalary) queryParams.set('minSalary', params.minSalary.toString());

    return this.http.get<Job[]>(`${this.apiUrl}/search?${queryParams.toString()}`);
  }

  // Get recommended jobs for the current user
  getRecommendedJobs(): Observable<JobWithMatchScore[]> {
    return this.http.get<JobWithMatchScore[]>(`${this.apiUrl}/recommended`);
  }

  // Generate job with AI
  generateJobWithAI(params: JobGenerationParams): Observable<{
    job: Job;
    generatedSkills: Skill[];
    message: string;
  }> {
    return this.http.post<{
      job: Job;
      generatedSkills: Skill[];
      message: string;
    }>(`${this.apiUrl}/generate`, params);
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }
} 