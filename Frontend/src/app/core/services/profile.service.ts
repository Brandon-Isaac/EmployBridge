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
} 