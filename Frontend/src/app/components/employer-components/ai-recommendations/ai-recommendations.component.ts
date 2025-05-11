import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faSpinner, 
  faSearch, 
  faUser, 
  faGraduationCap, 
  faBriefcase,
  faLocationDot,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { ChatbotService, CandidateQueryResponse } from '../../../services/chatbot.service';

@Component({
  selector: 'app-ai-recommendations',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  template: `
    <div class="ai-recommendations-container">
      <mat-card class="search-card">
        <mat-card-header>
          <mat-card-title>AI Candidate Recommendations</mat-card-title>
          <mat-card-subtitle>
            Use natural language to find the perfect candidates for your job
          </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="search-section">
            <mat-form-field class="search-input">
              <mat-label>Describe your ideal candidate</mat-label>
              <input matInput
                     [(ngModel)]="searchQuery"
                     placeholder="e.g., 'Find me a senior React developer with 5+ years of experience'"
                     (keyup.enter)="searchCandidates()">
            </mat-form-field>
            <button mat-raised-button 
                    color="primary" 
                    (click)="searchCandidates()"
                    [disabled]="isLoading || !searchQuery.trim()">
              <fa-icon [icon]="faSearch"></fa-icon>
              Search
            </button>
          </div>

          <!-- Loading State -->
          <div *ngIf="isLoading" class="loading-container">
            <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
            <p>Finding the perfect candidates...</p>
          </div>

          <!-- Results Section -->
          <div *ngIf="!isLoading && queryResponse" class="results-section">
            <div class="summary-section">
              <h3>AI Analysis</h3>
              <p>{{ queryResponse.summary }}</p>
            </div>

            <div class="candidates-grid">
              <mat-card *ngFor="let candidate of queryResponse.candidates" class="candidate-card">
                <mat-card-header>
                  <mat-card-title>
                    <fa-icon [icon]="faUser"></fa-icon>
                    {{ candidate.name }}
                  </mat-card-title>
                </mat-card-header>

                <mat-card-content>
                  <div class="candidate-details">
                    <div class="detail-item">
                      <fa-icon [icon]="faBriefcase"></fa-icon>
                      <span>{{ candidate.experienceCount }} years experience</span>
                    </div>
                    <div class="detail-item">
                      <fa-icon [icon]="faGraduationCap"></fa-icon>
                      <span>{{ candidate.education[0] }}</span>
                    </div>
                  </div>

                  <div class="skills-section">
                    <h4>Skills</h4>
                    <div class="skills-list">
                      <mat-chip *ngFor="let skill of candidate.skills">
                        {{ skill }}
                      </mat-chip>
                    </div>
                  </div>
                </mat-card-content>

                <mat-card-actions>
                  <button mat-button color="primary" (click)="viewCandidateProfile(candidate.id)">
                    View Profile
                  </button>
                </mat-card-actions>
              </mat-card>
            </div>

            <!-- Filters Section -->
            <div class="filters-section" *ngIf="queryResponse.filters">
              <h3>Applied Filters</h3>
              <div class="filters-list">
                <mat-chip *ngIf="queryResponse.filters.skills?.length">
                  Skills: {{ queryResponse.filters.skills }}
                </mat-chip>
                <mat-chip *ngIf="queryResponse.filters.minExperience">
                  Min Experience: {{ queryResponse.filters.minExperience }} years
                </mat-chip>
                <mat-chip *ngIf="queryResponse.filters.educationLevel">
                  Education: {{ queryResponse.filters.educationLevel }}
                </mat-chip>
                <mat-chip *ngIf="queryResponse.filters.location">
                  Location: {{ queryResponse.filters.location }}
                </mat-chip>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div *ngIf="!isLoading && !queryResponse" class="empty-state">
            <h3>Start Your Search</h3>
            <p>Describe the type of candidate you're looking for, and our AI will help you find the perfect match.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .ai-recommendations-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .search-card {
      margin-bottom: 24px;
    }
    .search-section {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }
    .search-input {
      flex: 1;
    }
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      gap: 16px;
    }
    .results-section {
      margin-top: 24px;
    }
    .summary-section {
      margin-bottom: 24px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .candidates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .candidate-card {
      height: 100%;
    }
    .candidate-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 16px 0;
    }
    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }
    .skills-section {
      margin-top: 16px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }
    .filters-section {
      margin-top: 24px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .filters-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }
    .empty-state {
      text-align: center;
      padding: 40px;
      color: #666;
    }
    fa-icon {
      margin-right: 8px;
    }
    button fa-icon {
      margin-right: 8px;
    }
  `]
})
export class AIRecommendationsComponent implements OnInit {
  searchQuery: string = '';
  isLoading: boolean = false;
  queryResponse: CandidateQueryResponse | null = null;

  // Font Awesome icons
  faSpinner = faSpinner;
  faSearch = faSearch;
  faUser = faUser;
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;
  faStar = faStar;

  constructor(
    private chatbotService: ChatbotService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  searchCandidates() {
    if (!this.searchQuery.trim()) return;

    this.isLoading = true;
    this.queryResponse = null;

    this.chatbotService.queryCandidates(this.searchQuery).subscribe({
      next: (response) => {
        this.queryResponse = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error searching candidates:', error);
        this.snackBar.open(
          error.error?.message || 'Failed to search candidates. Please try again.',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
        this.isLoading = false;
      }
    });
  }

  viewCandidateProfile(candidateId: string) {
    // TODO: Implement navigation to candidate profile
    console.log('View profile for candidate:', candidateId);
  }
} 