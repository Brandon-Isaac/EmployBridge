import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEducationData {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
}

export interface UpdateEducationData {
  institution?: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = `${environment.apiUrl}/educations`;

  constructor(private http: HttpClient) { }

  // Create new education
  createEducation(data: CreateEducationData): Observable<Education> {
    const formattedData = this.formatDates(data);
    return this.http.post<Education>(this.apiUrl, formattedData);
  }

  // Get all educations for a user
  getEducations(userId: string): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/${userId}`);
  }

  // Update education
  updateEducation(id: string, data: UpdateEducationData): Observable<Education> {
    const formattedData = this.formatDates(data);
    return this.http.put<Education>(`${this.apiUrl}/${id}`, formattedData);
  }

  // Delete education
  deleteEducation(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  // Helper method to format dates for API
  private formatDates(data: any): any {
    const formattedData = { ...data };
    
    if (data.startDate) {
      formattedData.startDate = this.formatDate(data.startDate);
    }
    
    if (data.endDate) {
      formattedData.endDate = this.formatDate(data.endDate);
    }

    return formattedData;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
} 