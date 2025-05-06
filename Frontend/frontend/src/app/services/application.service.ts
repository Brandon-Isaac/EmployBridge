import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum ApplicationStatus {
  PENDING = 'PENDING',
  REVIEWED = 'REVIEWED',
  INTERVIEW = 'INTERVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}

export interface Application {
  id: string;
  user: {
    id: string;
    name: string;
    skills: { id: string; name: string; }[];
  };
  job: {
    id: string;
    title: string;
    employer: {
      id: string;
      name: string;
      company: string;
    };
    requiredSkills: { id: string; name: string; }[];
  };
  status: ApplicationStatus;
  matchScore: number;
  appliedAt: Date;
  interviewDate?: Date;
}

export interface CreateApplicationData {
  jobId: string;
}

export interface UpdateApplicationStatusData {
  status: ApplicationStatus;
  interviewDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://localhost:3000/api/applications';

  constructor(private http: HttpClient) { }

  // Create a new application
  createApplication(data: CreateApplicationData): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, data);
  }

  // Get application by ID
  getApplicationById(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  // Update application status
  updateApplicationStatus(id: string, data: UpdateApplicationStatusData): Observable<Application> {
    return this.http.put<Application>(`${this.apiUrl}/${id}/status`, data);
  }

  // Get all applications for a user
  getUserApplications(userId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Get all applications for a job
  getJobApplications(jobId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/job/${jobId}`);
  }

  // Get application match score
  getApplicationMatchScore(id: string): Observable<{ matchScore: number }> {
    return this.http.get<{ matchScore: number }>(`${this.apiUrl}/${id}/match-score`);
  }

  // Helper method to format match score
  formatMatchScore(score: number): string {
    return `${score.toFixed(1)}%`;
  }

  // Helper method to format date
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  // Helper method to check if application is in interview stage
  isInterviewStage(status: ApplicationStatus): boolean {
    return status === ApplicationStatus.INTERVIEW;
  }

  // Helper method to check if application is accepted
  isAccepted(status: ApplicationStatus): boolean {
    return status === ApplicationStatus.ACCEPTED;
  }

  // Helper method to check if application is rejected
  isRejected(status: ApplicationStatus): boolean {
    return status === ApplicationStatus.REJECTED;
  }

  // Helper method to get status color for UI
  getStatusColor(status: ApplicationStatus): string {
    switch (status) {
      case ApplicationStatus.ACCEPTED:
        return 'success';
      case ApplicationStatus.REJECTED:
        return 'danger';
      case ApplicationStatus.INTERVIEW:
        return 'warning';
      case ApplicationStatus.REVIEWED:
        return 'info';
      default:
        return 'secondary';
    }
  }
} 