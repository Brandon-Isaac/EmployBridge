import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
  url?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  gpa?: number;
}

export interface Portfolio {
  id: string;
  userId: string;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioUpdateData {
  projects?: Project[];
  experience?: Experience[];
  education?: Education[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = `${environment.apiUrl}/portfolios`;

  constructor(private http: HttpClient) { }

  // Get portfolio by user ID
  getPortfolio(userId: string): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.apiUrl}/${userId}`);
  }

  // Create or update portfolio
  createOrUpdatePortfolio(data: PortfolioUpdateData): Observable<Portfolio> {
    return this.http.post<Portfolio>(this.apiUrl, data);
  }

  // Delete portfolio
  deletePortfolio(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.apiUrl);
  }

  // Helper method to format dates for API
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // Helper method to prepare portfolio data for API
  preparePortfolioData(data: PortfolioUpdateData): any {
    const preparedData: any = {};

    if (data.projects) {
      preparedData.projects = data.projects.map(project => ({
        ...project,
        startDate: this.formatDate(project.startDate),
        endDate: project.endDate ? this.formatDate(project.endDate) : null
      }));
    }

    if (data.experience) {
      preparedData.experience = data.experience.map(exp => ({
        ...exp,
        startDate: this.formatDate(exp.startDate),
        endDate: exp.endDate ? this.formatDate(exp.endDate) : null
      }));
    }

    if (data.education) {
      preparedData.education = data.education.map(edu => ({
        ...edu,
        startDate: this.formatDate(edu.startDate),
        endDate: edu.endDate ? this.formatDate(edu.endDate) : null
      }));
    }

    return preparedData;
  }
} 