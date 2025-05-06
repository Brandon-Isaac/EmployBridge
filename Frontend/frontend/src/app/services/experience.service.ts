import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateExperienceData {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
}

export interface UpdateExperienceData {
  title?: string;
  company?: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:3000/api/experiences';

  constructor(private http: HttpClient) { }

  // Create new experience
  createExperience(data: CreateExperienceData): Observable<Experience> {
    const formattedData = this.formatDates(data);
    return this.http.post<Experience>(this.apiUrl, formattedData);
  }

  // Get all experiences for a user
  getExperiences(userId: string): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/${userId}`);
  }

  // Update experience
  updateExperience(id: string, data: UpdateExperienceData): Observable<Experience> {
    const formattedData = this.formatDates(data);
    return this.http.put<Experience>(`${this.apiUrl}/${id}`, formattedData);
  }

  // Delete experience
  deleteExperience(id: string): Observable<{ message: string }> {
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