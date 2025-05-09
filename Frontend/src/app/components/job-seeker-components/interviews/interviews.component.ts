import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes, faCalendarAlt, faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ApplicationService, Interview } from '../../../services/application.service';
import { AuthService } from '../../../services/auth.service';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    FontAwesomeModule
  ],
  template: `
    <div class="interviews-container">
      <h2>Your Interviews</h2>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading your interviews...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="loadInterviews()">Retry</button>
      </div>

      <!-- Interviews List -->
      <div *ngIf="!isLoading && !error" class="interviews-list">
        <div *ngIf="interviews.length === 0" class="no-interviews">
          <p>You don't have any interviews scheduled yet.</p>
        </div>

        <div *ngFor="let interview of interviews" class="interview-card">
          <div class="interview-header">
            <h3>{{interview.jobTitle}}</h3>
            <span class="company-name">{{interview.companyName}}</span>
          </div>

          <div class="interview-details">
            <div class="detail-item">
              <fa-icon [icon]="faCalendarAlt"></fa-icon>
              <span>{{interview.scheduledTime | date:'medium'}}</span>
            </div>
            <div class="detail-item" *ngIf="interview.location">
              <fa-icon [icon]="faBuilding"></fa-icon>
              <span>{{interview.location}}</span>
            </div>
            <div class="detail-item">
              <fa-icon [icon]="faBriefcase"></fa-icon>
              <span>{{interview.status | titlecase}}</span>
            </div>
          </div>

          <div class="interview-notes" *ngIf="interview.notes">
            <p>{{interview.notes}}</p>
          </div>

          <div class="interview-actions" *ngIf="interview.status === 'pending'">
            <button mat-button color="primary" (click)="respondToInterview(interview.id, 'accepted')">
              <fa-icon [icon]="faCheck"></fa-icon>
              Accept
            </button>
            <button mat-button color="warn" (click)="respondToInterview(interview.id, 'rejected')">
              <fa-icon [icon]="faTimes"></fa-icon>
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .interviews-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 24px;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      gap: 16px;
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      gap: 16px;
    }

    .error-message {
      color: #dc3545;
      font-size: 1.1rem;
    }

    .interviews-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }

    .interview-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .interview-header {
      margin-bottom: 16px;
    }

    .interview-header h3 {
      margin: 0;
      color: #2c3e50;
    }

    .company-name {
      color: #666;
      font-size: 0.9rem;
    }

    .interview-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .interview-notes {
      background: #f8f9fa;
      padding: 12px;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .interview-notes p {
      margin: 0;
      color: #666;
    }

    .interview-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .no-interviews {
      grid-column: 1 / -1;
      text-align: center;
      padding: 48px;
      background: #f8f9fa;
      border-radius: 8px;
      color: #666;
    }
  `]
})
export class InterviewsComponent implements OnInit {
  interviews: Interview[] = [];
  isLoading = false;
  error: string | null = null;

  // Font Awesome icons
  faCheck = faCheck;
  faTimes = faTimes;
  faCalendarAlt = faCalendarAlt;
  faBuilding = faBuilding;
  faBriefcase = faBriefcase;

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadInterviews();
  }

  loadInterviews(): void {
    this.isLoading = true;
    this.error = null;

    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'Please log in to view your interviews.';
      this.isLoading = false;
      return;
    }

    this.applicationService.getUserInterviews(user.id).subscribe({
      next: (interviews: Interview[]) => {
        this.interviews = interviews;
        this.isLoading = false;
      },
      error: (error: Error) => {
        console.error('Error loading interviews:', error);
        this.error = 'Failed to load interviews. Please try again.';
        this.isLoading = false;
      }
    });
  }

  respondToInterview(interviewId: string, response: 'accepted' | 'rejected'): void {
    this.applicationService.respondToInterview(interviewId, response).subscribe({
      next: () => {
        const message = response === 'accepted' 
          ? 'Interview accepted successfully!' 
          : 'Interview rejected successfully!';
        
        this.snackBar.open(message, 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });

        // Update the interview status in the local array
        const interview = this.interviews.find(i => i.id === interviewId);
        if (interview) {
          interview.status = response;
        }
      },
      error: (error: Error) => {
        console.error('Error responding to interview:', error);
        this.snackBar.open('Failed to respond to interview. Please try again.', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
} 