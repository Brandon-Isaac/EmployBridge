import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  id: string;
  content: string;
  isFromUser: boolean;
  timestamp: Date;
  userId: string;
}

export interface ChatResponse {
  response: string;
  context: {
    role: 'job_seeker' | 'employer';
    name: string;
    skills?: string[];
    applicationCount?: number;
    company?: string;
    jobCount?: number;
  };
}

export interface CandidateQueryResponse {
  summary: string;
  candidates: {
    id: string;
    name: string;
    skills: string[];
    experienceCount: number;
    education: string[];
  }[];
  filters: {
    skills?: string[];
    minExperience?: number;
    educationLevel?: string;
    location?: string;
  };
}

export interface JobQueryResponse {
  summary: string;
  jobs: {
    id: string;
    title: string;
    description: string;
    location: string;
    employmentType: string;
    requiredSkills: string[];
    matchScore: number;
  }[];
  filters: {
    skills?: string[];
    jobTitle?: string;
    location?: string;
    employmentType?: string;
    experienceLevel?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:3000/api/chatbot';

  constructor(private http: HttpClient) { }

  // Send message to chatbot
  sendMessage(message: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/chat`, { message });
  }

  // Get chat history
  getChatHistory(limit: number = 20): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.apiUrl}/history`, {
      params: { limit: limit.toString() }
    });
  }

  // Query candidates (for employers)
  queryCandidates(query: string): Observable<CandidateQueryResponse> {
    return this.http.post<CandidateQueryResponse>(`${this.apiUrl}/query/candidates`, { query });
  }

  // Query jobs (for job seekers)
  queryJobs(query: string): Observable<JobQueryResponse> {
    return this.http.post<JobQueryResponse>(`${this.apiUrl}/query/jobs`, { query });
  }

  // Helper method to format chat messages for display
  formatMessage(message: ChatMessage): string {
    return message.content;
  }

  // Helper method to check if message is from user
  isUserMessage(message: ChatMessage): boolean {
    return message.isFromUser;
  }

  // Helper method to format timestamp
  formatTimestamp(timestamp: Date): string {
    return new Date(timestamp).toLocaleString();
  }

  // Helper method to calculate match score percentage
  formatMatchScore(score: number): string {
    return `${score}%`;
  }

  // Clear chat history
  clearHistory(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/history`);
  }
} 