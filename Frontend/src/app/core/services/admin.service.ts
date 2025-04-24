import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface Employer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobPostings: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface JobSeeker {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface SystemStats {
  totalJobSeekers: number;
  totalEmployers: number;
  totalJobs: number;
  totalCompanies: number;
  activeJobs: number;
  activeCompanies: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status} - ${error.statusText}`;
      if (error.error && typeof error.error === 'object') {
        errorMessage += `\nDetails: ${JSON.stringify(error.error)}`;
      }
    }
    
    console.error('Admin Service Error:', {
      status: error.status,
      statusText: error.statusText,
      url: error.url,
      error: error.error
    });
    
    return throwError(() => new Error(errorMessage));
  }

  // User Management
  getEmployers(): Observable<{ success: boolean; employers: Employer[] }> {
    return this.http.get<{ success: boolean; employers: Employer[] }>(
      `${environment.apiUrl}/api/admin/employers`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  getJobSeekers(): Observable<{ success: boolean; jobSeekers: JobSeeker[] }> {
    return this.http.get<{ success: boolean; jobSeekers: JobSeeker[] }>(
      `${environment.apiUrl}/api/admin/job-seekers`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  deactivateUser(type: 'job-seeker' | 'employer', id: string): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(
      `${environment.apiUrl}/api/admin/users/${type}/${id}/deactivate`,
      {},
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  activateUser(type: 'job-seeker' | 'employer', id: string): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(
      `${environment.apiUrl}/api/admin/users/${type}/${id}/activate`,
      {},
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  // System Statistics
  getSystemStats(): Observable<{ success: boolean; stats: SystemStats }> {
    return this.http.get<{ success: boolean; stats: SystemStats }>(
      `${environment.apiUrl}/api/admin/stats`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }
} 