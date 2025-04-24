import { Component, OnInit } from '@angular/core';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AIService, SearchResult } from '../../../services/ai.service';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

interface Candidate {
  id: string;
  name: string;
  matchScore: number;
  skills: string[];
  status: string;
  applicationId: string;
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
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './ai-search.component.html',
  styleUrls: ['./ai-search.component.scss']
})
export class AiSearchComponent implements OnInit {
  searchQuery: string = '';
  requiredSkills: string[] = [];
  location: string = '';
  minExperience: number = 0;
  jobId: string = '';
  isLoading = false;

  searchResults: SearchResult[] = [];
  candidates: Candidate[] = [];

  constructor(
    private aiService: AIService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('jobId') || '';
    if (!this.jobId) {
      this.snackBar.open('No job ID provided', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
  }

  formatLabel(value: number): string {
    return `${value}+ years`;
  }

  addSkill(event: any): void {
    const value = (event.value || '').trim();
    if (value && !this.requiredSkills.includes(value)) {
      this.requiredSkills.push(value);
      event.chipInput!.clear();
    }
  }

  removeSkill(skill: string): void {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }

  search(): void {
    if (!this.jobId) {
      this.snackBar.open('No job ID provided', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      return;
    }

    this.isLoading = true;
    this.aiService.searchCandidates(
      this.jobId,
      this.searchQuery,
      this.requiredSkills,
      this.location,
      this.minExperience
    ).subscribe({
      next: (results) => {
        this.searchResults = results;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error searching candidates:', error);
        this.snackBar.open('Error searching candidates. Please try again.', 'Close', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.snackBar.open('Please enter a search query', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      return;
    }

    this.isLoading = true;
    // TODO: Implement actual search logic
    setTimeout(() => {
      this.isLoading = false;
      // Mock data for testing
      this.candidates = [
        {
          id: '1',
          name: 'John Doe',
          matchScore: 85,
          skills: ['Angular', 'TypeScript', 'Node.js'],
          status: 'active',
          applicationId: 'app1'
        }
      ];
    }, 1000);
  }

  getScoreColor(score: number): string {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#ff9800';
    return '#f44336';
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'primary';
      case 'reviewed':
        return 'accent';
      case 'rejected':
        return 'warn';
      default:
        return '';
    }
  }
}