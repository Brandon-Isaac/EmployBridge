import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

interface SearchResult {
  id: number;
  name: string;
  title: string;
  skills: string[];
  experience: string;
  location: string;
  matchScore: number;
  summary: string;
}

@Component({
  selector: 'app-ai-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatSliderModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: `ai-search.component.html`,
  styleUrl: 
    `ai-search.component.css`,
  
})
export class AiSearchComponent {
  searchQuery: string = '';
  requiredSkills: string[] = [];
  location: string = '';
  minExperience: number = 0;

  searchResults: SearchResult[] = [];

  formatLabel(value: number): string {
    return `${value}+ years`;
  }

  addSkill(skill: string): void {
    if (skill.trim() && !this.requiredSkills.includes(skill)) {
      this.requiredSkills.push(skill.trim());
    }
  }

  removeSkill(skill: string): void {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }

  search(): void {
    // Simulated search results
    this.searchResults = [
      {
        id: 1,
        name: 'John Smith',
        title: 'Senior Software Engineer',
        skills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js'],
        experience: '8 years',
        location: 'San Francisco, CA',
        matchScore: 92,
        summary:
          'Experienced software engineer with a strong background in full-stack development and team leadership.',
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        title: 'Full Stack Developer',
        skills: ['React', 'Node.js', 'Python', 'AWS'],
        experience: '5 years',
        location: 'Remote',
        matchScore: 85,
        summary:
          'Full stack developer with expertise in modern web technologies and cloud platforms.',
      },
      {
        id: 3,
        name: 'Michael Chen',
        title: 'Frontend Developer',
        skills: ['JavaScript', 'Vue.js', 'CSS', 'UI/UX'],
        experience: '3 years',
        location: 'New York, NY',
        matchScore: 78,
        summary:
          'Frontend specialist focused on creating responsive and accessible web applications.',
      },
    ];
  }
}