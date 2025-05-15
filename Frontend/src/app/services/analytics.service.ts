import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AnalyticsData {
  totalUsers: number;
  userTypes: {
    jobSeekers: number;
    employers: number;
    admins: number;
  };
  totalGenerations: number;
  generationsByType: {
    cv: number;
    coverLetter: number;
    resume: number;
  };
  totalCVs: number;
  cvsByStatus: {
    draft: number;
    published: number;
    archived: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiUrl = `${environment.apiUrl}/analytics`;

  constructor(private http: HttpClient) {}

  getAnalytics(): Observable<AnalyticsData> {
    return this.http.get<AnalyticsData>(this.apiUrl);
  }
} 