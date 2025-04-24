import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerPathService {
  private apiUrl = `${environment.apiUrl}/gemini`;

  constructor(private http: HttpClient) {}

  generateCareerPath(prompt: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate-career-path`, { prompt });
  }
} 