import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  id: string;
  name: string;
  category: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'http://localhost:3000/api/skills'; // Adjust port if different

  constructor(private http: HttpClient) { }

  // Get all skills
  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  // Get skill by ID
  getSkillById(id: string): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/${id}`);
  }

  // Create new skill
  createSkill(skill: Partial<Skill>): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl, skill);
  }

  // Update skill
  updateSkill(id: string, skill: Partial<Skill>): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/${id}`, skill);
  }

  // Delete skill
  deleteSkill(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Get user skills
  getUserSkills(userId: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Add skill to user
  addUserSkill(userId: string, skillId: string): Observable<Skill[]> {
    return this.http.post<Skill[]>(`${this.apiUrl}/user/${userId}`, { skillId });
  }

  // Remove skill from user
  removeUserSkill(userId: string, skillId: string): Observable<Skill[]> {
    return this.http.delete<Skill[]>(`${this.apiUrl}/user/${userId}/${skillId}`);
  }

  // Generate skills based on job title and description
  generateSkills(jobTitle: string, jobDescription?: string): Observable<{
    message: string;
    skills: Skill[];
    isNew: boolean;
  }> {
    return this.http.post<{
      message: string;
      skills: Skill[];
      isNew: boolean;
    }>(`${this.apiUrl}/generate`, { jobTitle, jobDescription });
  }
} 