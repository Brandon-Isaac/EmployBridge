import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface JobTemplate {
  id: number;
  title: string;
  department: string;
  type: string;
  description: string;
  skills: string[];
  lastUsed: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobTemplateService {
  private apiUrl = `${environment.apiUrl}/job-templates`;

  constructor(private http: HttpClient) {}

  getJobTemplates(): Observable<JobTemplate[]> {
    return this.http.get<JobTemplate[]>(this.apiUrl);
  }

  createJobTemplate(template: Partial<JobTemplate>): Observable<JobTemplate> {
    return this.http.post<JobTemplate>(this.apiUrl, template);
  }

  updateJobTemplate(id: number, template: Partial<JobTemplate>): Observable<JobTemplate> {
    return this.http.put<JobTemplate>(`${this.apiUrl}/${id}`, template);
  }

  deleteJobTemplate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 