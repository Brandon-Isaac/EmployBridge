import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface JobSeekerProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  profilePicture: string;
  skills: Array<{
    id: string;
    name: string;
    level: string;
    category: string;
  }>;
  portfolios: Array<{
    id: string;
    title: string;
    description: string;
    url: string;
  }>;
  cvs: Array<{
    id: string;
    title: string;
    fileUrl: string;
  }>;
  applications: Array<{
    id: string;
    jobId: string;
    status: string;
    appliedAt: string;
  }>;
  experiences: Array<{
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string;
  }>;
  educations: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string;
    gpa: number;
  }>;
}

interface ProfileResponse {
  jobSeeker: JobSeekerProfile;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Server Error: ${error.status} - ${error.statusText}`;
      if (error.error && typeof error.error === 'object') {
        errorMessage += `\nDetails: ${JSON.stringify(error.error)}`;
      }
    }
    
    console.error('Profile Service Error:', {
      status: error.status,
      statusText: error.statusText,
      url: error.url,
      error: error.error
    });
    
    return throwError(() => new Error(errorMessage));
  }

  getJobSeekerProfile(): Observable<ProfileResponse> {
    console.log('Fetching profile from:', `${environment.apiUrl}/job-seekers/profile`);
    return this.http.get<ProfileResponse>(`${environment.apiUrl}/job-seekers/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`
      }
    }).pipe(
      catchError(this.handleError)
    );
  }

  updateJobSeekerProfile(profileData: Partial<JobSeekerProfile>): Observable<ProfileResponse> {
    return this.http.put<ProfileResponse>(`${environment.apiUrl}/job-seekers/profile`, profileData)
      .pipe(
        catchError(this.handleError)
      );
  }

  changePassword(currentPassword: string, newPassword: string): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${environment.apiUrl}/job-seekers/change-password`, {
      currentPassword,
      newPassword
    }).pipe(
      catchError(this.handleError)
    );
  }

  getEmployerProfile(userId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/employers/${userId}/profile`);
  }

  getAdminProfile(userId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/${userId}/profile`);
  }

  // Experience methods
  getExperiences(): Observable<{ experiences: JobSeekerProfile['experiences'] }> {
    return this.http.get<{ experiences: JobSeekerProfile['experiences'] }>(
      `${environment.apiUrl}/job-seekers/experience`
    ).pipe(
      catchError(this.handleError)
    );
  }

  addExperience(experience: Partial<JobSeekerProfile['experiences'][0]>): Observable<{ message: string; experience: JobSeekerProfile['experiences'][0] }> {
    return this.http.post<{ message: string; experience: JobSeekerProfile['experiences'][0] }>(
      `${environment.apiUrl}/job-seekers/experience`,
      experience
    ).pipe(
      catchError(this.handleError)
    );
  }

  updateExperience(id: string, experience: Partial<JobSeekerProfile['experiences'][0]>): Observable<{ message: string; experience: JobSeekerProfile['experiences'][0] }> {
    return this.http.put<{ message: string; experience: JobSeekerProfile['experiences'][0] }>(
      `${environment.apiUrl}/job-seekers/experience/${id}`,
      experience
    ).pipe(
      catchError(this.handleError)
    );
  }

  deleteExperience(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.apiUrl}/job-seekers/experience/${id}`
    ).pipe(
      catchError(this.handleError)
    );
  }

  // Education methods
  getEducations(): Observable<{ educations: JobSeekerProfile['educations'] }> {
    return this.http.get<{ educations: JobSeekerProfile['educations'] }>(
      `${environment.apiUrl}/job-seekers/education`
    ).pipe(
      catchError(this.handleError)
    );
  }

  addEducation(education: Partial<JobSeekerProfile['educations'][0]>): Observable<{ message: string; education: JobSeekerProfile['educations'][0] }> {
    return this.http.post<{ message: string; education: JobSeekerProfile['educations'][0] }>(
      `${environment.apiUrl}/job-seekers/education`,
      education
    ).pipe(
      catchError(this.handleError)
    );
  }

  updateEducation(id: string, education: Partial<JobSeekerProfile['educations'][0]>): Observable<{ message: string; education: JobSeekerProfile['educations'][0] }> {
    return this.http.put<{ message: string; education: JobSeekerProfile['educations'][0] }>(
      `${environment.apiUrl}/job-seekers/education/${id}`,
      education
    ).pipe(
      catchError(this.handleError)
    );
  }

  deleteEducation(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.apiUrl}/job-seekers/education/${id}`
    ).pipe(
      catchError(this.handleError)
    );
  }
} 