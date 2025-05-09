import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export enum ApplicationStatus {
  PENDING = 'PENDING',
  REVIEWED = 'REVIEWED',
  INTERVIEW = 'INTERVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  coverLetter: string;
  status: string;
  appliedAt: Date;
  updatedAt: Date;
}

export interface CreateApplicationData {
  jobId: string;
  coverLetter: string;
}

export interface UpdateApplicationStatusData {
  status: ApplicationStatus;
  interviewDate?: Date;
}

export interface Interview {
  id: string;
  applicationId: string;
  jobTitle: string;
  companyName: string;
  scheduledTime: Date;
  status: 'pending' | 'accepted' | 'rejected';
  location?: string;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = `${environment.apiUrl}/applications`;

  constructor(private http: HttpClient) {}

  createApplication(data: CreateApplicationData): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, data);
  }

  getUserApplications(userId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/user/${userId}`);
  }

  getApplication(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  updateApplicationStatus(id: string, status: string): Observable<Application> {
    return this.http.patch<Application>(`${this.apiUrl}/${id}/status`, { status });
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

  getUserInterviews(userId: string): Observable<Interview[]> {
    return this.http.get<Interview[]>(`${this.apiUrl}/interviews/${userId}`);
  }

  respondToInterview(interviewId: string, response: 'accepted' | 'rejected'): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/interviews/${interviewId}/respond`, { response });
  }
} 