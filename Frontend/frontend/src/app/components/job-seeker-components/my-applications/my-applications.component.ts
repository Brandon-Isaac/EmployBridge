import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCheck, 
  faTimes, 
  faClock, 
  faFileAlt,
  faBuilding,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { ApplicationService } from '../../../services/application.service';
import { AuthService } from '../../../services/auth.service';

interface Application {
  id: string;
  jobId: string;
  userId: string;
  coverLetter: string;
  status: string;
  appliedAt: Date;
  updatedAt: Date;
  job?: {
    title: string;
    employer: {
      company: string;
    };
  };
}

@Component({
  selector: 'app-my-applications',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  template: `
    <div class="applications-container">
      <h1>My Applications</h1>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading applications...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="loadApplications()">Retry</button>
      </div>

      <!-- Applications List -->
      <div *ngIf="!isLoading && !error" class="applications-list">
        <mat-card *ngFor="let application of applications" class="application-card">
          <div class="application-header">
            <div class="job-info">
              <h2>{{application.job?.title}}</h2>
              <p class="company">
                <fa-icon [icon]="faBuilding" class="icon"></fa-icon>
                {{application.job?.employer?.company}}
              </p>
            </div>
            <div class="status-badge" [class]="application.status.toLowerCase()">
              <fa-icon [icon]="getStatusIcon(application.status)" class="icon"></fa-icon>
              {{application.status}}
            </div>
          </div>

          <div class="application-details">
            <div class="detail-item">
              <fa-icon [icon]="faCalendarAlt" class="icon"></fa-icon>
              <span>Applied: {{application.appliedAt | date}}</span>
            </div>
            <div class="detail-item">
              <fa-icon [icon]="faFileAlt" class="icon"></fa-icon>
              <span>Last Updated: {{application.updatedAt | date}}</span>
            </div>
          </div>
        </mat-card>

        <!-- No Applications State -->
        <div *ngIf="applications.length === 0" class="no-applications">
          <p>You haven't applied to any jobs yet.</p>
          <button mat-raised-button color="primary" routerLink="/job-seeker/job-search">
            Browse Jobs
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .applications-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    h1 {
      margin-bottom: 24px;
      color: #2c3e50;
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

    .applications-list {
      display: grid;
      gap: 16px;
    }

    .application-card {
      padding: 20px;
    }

    .application-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    .job-info h2 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.2rem;
    }

    .company {
      color: #666;
      margin: 4px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .status-badge.pending {
      background: #fff3cd;
      color: #856404;
    }

    .status-badge.accepted {
      background: #d4edda;
      color: #155724;
    }

    .status-badge.rejected {
      background: #f8d7da;
      color: #721c24;
    }

    .application-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #eee;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .icon {
      color: #666;
    }

    .no-applications {
      text-align: center;
      padding: 48px;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .no-applications p {
      margin-bottom: 16px;
      color: #666;
    }
  `]
})
export class MyApplicationsComponent implements OnInit {
  applications: Application[] = [];
  isLoading = true;
  error: string | null = null;

  // Font Awesome icons
  faCheck = faCheck;
  faTimes = faTimes;
  faClock = faClock;
  faFileAlt = faFileAlt;
  faBuilding = faBuilding;
  faCalendarAlt = faCalendarAlt;

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.isLoading = true;
    this.error = null;

    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'No user is currently logged in';
      this.isLoading = false;
      return;
    }

    this.applicationService.getUserApplications(user.id).subscribe({
      next: (applications) => {
        this.applications = applications;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading applications:', error);
        this.error = 'Failed to load applications. Please try again.';
        this.isLoading = false;
      }
    });
  }

  getStatusIcon(status: string) {
    switch (status.toLowerCase()) {
      case 'accepted':
        return this.faCheck;
      case 'rejected':
        return this.faTimes;
      default:
        return this.faClock;
    }
  }
} 