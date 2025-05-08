import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

export interface CV {
  id: string;
  fileName: string;
  filePath: string;
  extractedSkills: string[];
  userId: string;
  content?: string;
  downloadUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CVUploadResponse {
  id: string;
  fileName: string;
  filePath: string;
  extractedSkills: string[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SkillExtractionResponse {
  skills: string[];
}

export interface AICVGenerationResponse {
  message: string;
  cv: {
    id: string;
    fileName: string;
    downloadUrl: string;
    content: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CVService {
  private apiUrl = 'http://localhost:3000/api/cvs';

  constructor(private http: HttpClient) { }

  // Upload CV file
  uploadCV(file: File): Observable<HttpEvent<CVUploadResponse>> {
    const formData = new FormData();
    formData.append('cv', file);

    return this.http.post<CVUploadResponse>(`${this.apiUrl}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // Get CV by user ID
  getCV(userId: string): Observable<CV | null> {
    return this.http.get<CV>(`${this.apiUrl}/${userId}`).pipe(
      catchError(error => {
        if (error.status === 404) {
          // Return null when CV is not found
          return of(null);
        }
        throw error;
      })
    );
  }

  // Delete CV
  deleteCV(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.apiUrl);
  }

  // Extract skills from CV file
  extractSkillsFromCV(file: File): Observable<SkillExtractionResponse> {
    const formData = new FormData();
    formData.append('cv', file);

    return this.http.post<SkillExtractionResponse>(`${this.apiUrl}/extract-skills`, formData);
  }

  // Generate CV using AI
  generateAICV(): Observable<AICVGenerationResponse> {
    return this.http.post<AICVGenerationResponse>(`${this.apiUrl}/generate`, {});
  }

  // Download CV file
  downloadCV(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${id}`, {
      responseType: 'blob'
    });
  }

  // Helper method to calculate upload progress
  getUploadProgress(event: HttpEvent<any>): number {
    if (event.type === HttpEventType.UploadProgress) {
      const progress = Math.round(100 * event.loaded / (event.total || event.loaded));
      return progress;
    }
    return 0;
  }

  // Helper method to save downloaded file
  saveFile(blob: Blob, fileName: string): void {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
} 