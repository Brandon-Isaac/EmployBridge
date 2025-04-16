import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, Sort, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';

interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: number;
  matchScore: number;
  skills: string[];
  status: string;
  appliedDate?: Date;
  education?: string;
}

@Component({
  selector: 'app-view-candidates',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  templateUrl: `./view-candidate.component.html`,
  styleUrl:`./view-candidate.component.css`,
})
export class ViewCandidatesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchText: string = '';
  selectedSkills: string[] = [];
  experienceLevel: string = '';
  selectedStatus: string = '';
  sortOption: string = 'matchScore';
  displayedColumns: string[] = ['name', 'title', 'location', 'experience', 'skills', 'matchScore', 'status', 'actions'];

  availableSkills: string[] = [
    'Angular', 'React', 'Vue', 'TypeScript', 'JavaScript',
    'Node.js', 'Python', 'Java', 'C#', 'SQL',
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB',
    'GraphQL', 'REST API', 'RxJS', 'NgRx', 'Redux'
  ];

  candidates: Candidate[] = [
    {
      id: '1',
      name: 'John Doe',
      title: 'Senior Frontend Developer',
      location: 'New York, NY',
      experience: 5,
      matchScore: 95,
      skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
      status: 'New',
      appliedDate: new Date(2025, 3, 10),
      education: 'B.S. Computer Science'
    },
    {
      id: '2',
      name: 'Jane Smith',
      title: 'Full Stack Developer',
      location: 'San Francisco, CA',
      experience: 3,
      matchScore: 88,
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      status: 'Reviewed',
      appliedDate: new Date(2025, 3, 8),
      education: 'M.S. Software Engineering'
    },
    {
      id: '3',
      name: 'Robert Johnson',
      title: 'DevOps Engineer',
      location: 'Austin, TX',
      experience: 7,
      matchScore: 92,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      status: 'Interview',
      appliedDate: new Date(2025, 3, 5)
    },
    {
      id: '4',
      name: 'Emily Chen',
      title: 'UI/UX Developer',
      location: 'Seattle, WA',
      experience: 4,
      matchScore: 82,
      skills: ['React', 'CSS', 'Figma', 'UX Research'],
      status: 'New',
      appliedDate: new Date(2025, 3, 12),
      education: 'B.A. Design & Computer Science'
    },
    {
      id: '5',
      name: 'Michael Brown',
      title: 'Backend Developer',
      location: 'Chicago, IL',
      experience: 6,
      matchScore: 78,
      skills: ['Java', 'Spring Boot', 'SQL', 'Microservices'],
      status: 'Reviewed',
      appliedDate: new Date(2025, 3, 7)
    },
    {
      id: '6',
      name: 'Sarah Wilson',
      title: 'Frontend Engineer',
      location: 'Boston, MA',
      experience: 2,
      matchScore: 90,
      skills: ['Angular', 'TypeScript', 'SCSS', 'Material UI'],
      status: 'New',
      appliedDate: new Date(2025, 3, 14),
      education: 'B.S. Information Systems'
    }
  ];

  filteredCandidates: Candidate[] = [];

  constructor() {
    this.filteredCandidates = [...this.candidates];
  }

  ngOnInit(): void {
    this.sortCandidates();
  }

  applyFilters(): void {
    this.filteredCandidates = this.candidates.filter(candidate => {
      // Filter by search text
      const searchMatch = !this.searchText || 
        candidate.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.location.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(this.searchText.toLowerCase()));

      // Filter by skills
      const skillsMatch = this.selectedSkills.length === 0 || 
        this.selectedSkills.every(skill => candidate.skills.includes(skill));

      // Filter by experience level
      let experienceMatch = true;
      if (this.experienceLevel) {
        if (this.experienceLevel === 'entry') {
          experienceMatch = candidate.experience < 3;
        } else if (this.experienceLevel === 'mid') {
          experienceMatch = candidate.experience >= 3 && candidate.experience < 6;
        } else if (this.experienceLevel === 'senior') {
          experienceMatch = candidate.experience >= 6;
        }
      }

      // Filter by status
      const statusMatch = !this.selectedStatus || candidate.status === this.selectedStatus;

      return searchMatch && skillsMatch && experienceMatch && statusMatch;
    });

    this.sortCandidates();
  }

  sortCandidates(): void {
    if (this.sortOption === 'matchScore') {
      this.filteredCandidates.sort((a, b) => b.matchScore - a.matchScore);
    } else if (this.sortOption === 'experience') {
      this.filteredCandidates.sort((a, b) => b.experience - a.experience);
    } else if (this.sortOption === 'name') {
      this.filteredCandidates.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  sortTable(sort: Sort): void {
    const data = [...this.filteredCandidates];
    if (!sort.active || sort.direction === '') {
      this.filteredCandidates = data;
      return;
    }

    this.filteredCandidates = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'location': return this.compare(a.location, b.location, isAsc);
        case 'experience': return this.compare(a.experience, b.experience, isAsc);
        case 'matchScore': return this.compare(a.matchScore, b.matchScore, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getMatchScoreColor(score: number): string {
    if (score >= 90) return 'primary';
    if (score >= 75) return 'accent';
    return 'warn';
  }
  isHighlightedSkill(skill: string): boolean {
    return this.selectedSkills.includes(skill);
  }

  viewProfile(candidate: Candidate): void {
    console.log('Viewing profile:', candidate);
    // Implement view profile functionality
  }

  scheduleInterview(candidate: Candidate): void {
    console.log('Scheduling interview for:', candidate);
    // Implement schedule interview functionality
    candidate.status = 'Interview';
  }

  downloadResume(candidate: Candidate): void {
    console.log('Downloading resume for:', candidate);
    // Implement download resume functionality
  }

  sendMessage(candidate: Candidate): void {
    console.log('Sending message to:', candidate);
    // Implement send message functionality
  }

  rejectCandidate(candidate: Candidate): void {
    console.log('Rejecting candidate:', candidate);
    // Implement reject candidate functionality
  }

  moveToShortlist(candidate: Candidate): void {
    console.log('Moving to shortlist:', candidate);
    // Implement shortlist functionality
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  getAverageMatchScore(): number {
    if (this.candidates.length === 0) return 0;
    const total = this.candidates.reduce((sum, candidate) => sum + candidate.matchScore, 0);
    return Math.round(total / this.candidates.length);
  }

  getPositionsToFill(): number {
    // This is a placeholder - implement your actual logic here
    return 8;
  }

  getInterviewingCount(): number {
    // This is a placeholder - implement your actual logic here
    return 18;
  }
}
