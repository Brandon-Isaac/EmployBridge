import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CareerPath {
  id: string;
  targetRole: string;
  currentRole: string;
  yearsOfExperience: number;
  timeline: {
    phase: string;
    duration: string;
    activities: string[];
    milestones: string[];
  }[];
  education: {
    level: string;
    field: string;
    duration: string;
    requirements: string[];
  }[];
  requiredSkills: {
    current: Array<{ id: string; name: string }>;
    missing: Array<{ id: string; name: string }>;
    development: {
      skill: { id: string; name: string };
      resources: string[];
      timeline: string;
    }[];
  };
  alternativePaths: {
    role: string;
    description: string;
    requiredSkills: Array<{ id: string; name: string }>;
    matchScore: number;
  }[];
  isCompleted: boolean;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GenerateCareerPathData {
  targetRole: string;
  currentRole: string;
  yearsOfExperience: number;
}

export interface UpdateProgressData {
  progress: number;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CareerPathService {
  private apiUrl = `${environment.apiUrl}/career-paths`;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  generateCareerPath(data: GenerateCareerPathData): Observable<CareerPath> {
    return this.http.post<CareerPath>(this.apiUrl, data, { headers: this.getHeaders() });
  }

  getUserCareerPaths(): Observable<CareerPath[]> {
    return this.http.get<CareerPath[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getCareerPath(id: string): Observable<CareerPath> {
    return this.http.get<CareerPath>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }


  updateProgress(id: string, data: UpdateProgressData): Observable<CareerPath> {
    return this.http.patch<CareerPath>(`${this.apiUrl}/${id}/progress`, data, { headers: this.getHeaders() });
  }

  deleteCareerPath(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
} 