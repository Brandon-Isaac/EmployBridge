import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LearningResource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'article' | 'video';
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LearningResourcesService {
  private apiUrl = `${environment.apiUrl}/learning-resources`;

  constructor(private http: HttpClient) {}

  getResources(): Observable<LearningResource[]> {
    return this.http.get<LearningResource[]>(`${this.apiUrl}`);
  }
} 