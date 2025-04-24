import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SearchResult {
  id: string;
  name: string;
  title: string;
  skills: string[];
  experience: string;
  location: string;
  matchScore: number;
  summary: string;
  applicationId: string;
  status: string;
}

export interface JobSuggestions {
  description: string;
  requirements: string[];
  benefits: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AIService {
  private apiUrl = `${environment.apiUrl}/ai`;

  constructor(private http: HttpClient) {}

  searchCandidates(jobId: string, query: string, skills: string[], location: string, minExperience: number): Observable<SearchResult[]> {
    return this.http.post<SearchResult[]>(`${this.apiUrl}/search-candidates`, {
      jobId,
      query,
      skills,
      location,
      minExperience
    });
  }

  getJobSuggestions(title: string, department: string, requiredSkills: string[]): Observable<JobSuggestions> {
    return this.http.post<JobSuggestions>(`${this.apiUrl}/job-suggestions`, {
      title,
      department,
      requiredSkills
    });
  }
} 