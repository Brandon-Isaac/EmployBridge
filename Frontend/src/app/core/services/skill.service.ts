import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description?: string;
  level?: string;
}

export interface JobSeekerSkill {
  id: string;
  skill: Skill;
  proficiencyLevel: number;
  yearsOfExperience: number;
  lastUsedDate: Date;
  isVerified: boolean;
  endorsements: {
    id: string;
    endorserName: string;
    note?: string;
    date: Date;
  }[];
}

export interface SkillCategory {
  name: string;
  skills: JobSeekerSkill[];
}

export enum SkillCategoryEnum {
  TECHNICAL = 'technical',
  SOFT = 'soft',
  LANGUAGE = 'language',
  CERTIFICATION = 'certification',
  OTHER = 'other'
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = `${environment.apiUrl}/job-seeker/skills`;

  constructor(private http: HttpClient) {}

  getJobSeekerSkills(): Observable<JobSeekerSkill[]> {
    return this.http.get<JobSeekerSkill[]>(this.apiUrl);
  }

  addSkill(skillId: string): Observable<{ message: string; skill: Skill }> {
    return this.http.post<{ message: string; skill: Skill }>(`${this.apiUrl}/${skillId}`, {});
  }

  removeSkill(skillId: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${skillId}`);
  }

  updateSkills(skills: Partial<JobSeekerSkill>[]): Observable<{ message: string; skills: JobSeekerSkill[] }> {
    return this.http.put<{ message: string; skills: JobSeekerSkill[] }>(this.apiUrl, { skills });
  }

  searchSkills(name?: string, category?: SkillCategoryEnum): Observable<{ skills: Skill[] }> {
    const params: any = {};
    if (name) params.name = name;
    if (category) params.category = category;
    return this.http.get<{ skills: Skill[] }>(`${environment.apiUrl}/skills/search`, { params });
  }

  getPopularSkills(): Observable<{ skills: Skill[] }> {
    return this.http.get<{ skills: Skill[] }>(`${environment.apiUrl}/skills/popular`);
  }
} 