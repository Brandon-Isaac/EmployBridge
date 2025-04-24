import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {
  private apiUrl = `${environment.apiUrl}/jobs`;

  constructor(private http: HttpClient) {}

  searchJobs(filters: {
    search?: string;
    location?: string;
    type?: string;
  }): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/search`, { params: filters as any });
  }
} 