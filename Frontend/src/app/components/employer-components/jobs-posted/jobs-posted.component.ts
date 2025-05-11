import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faSpinner, 
  faCircleExclamation,
  faBriefcase,
  faLocationDot,
  faUsers,
  faCalendarAlt,
  faEllipsisVertical,
  faEdit,
  faTrash,
  faMoneyBill,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { JobService, Job } from '../../../services/job.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-jobs-posted',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    FontAwesomeModule
  ],
  template: `
    <div class="jobs-posted-container">
      <!-- Header -->
      <div class="header">
        <h1>Jobs Posted</h1>
        <button mat-raised-button color="primary" (click)="navigateToJobPosting()">
          Post New Job
        </button>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
        <p>Loading jobs...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <mat-card class="error-card">
          <mat-card-content>
            <fa-icon [icon]="faCircleExclamation" class="error-icon" size="2x"></fa-icon>
            <h2>Error Loading Jobs</h2>
            <p>{{ error }}</p>
            <button mat-raised-button color="primary" (click)="loadJobs()">
              Retry
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Jobs List -->
      <div class="jobs-grid" *ngIf="!isLoading && !error">
        <mat-card class="job-card" *ngFor="let job of jobs">
          <mat-card-header>
            <div class="job-header">
              <div class="job-title-section">
                <mat-card-title>{{ job.title }}</mat-card-title>
                <mat-card-subtitle>
                  <fa-icon [icon]="faLocationDot"></fa-icon>
                  {{ job.location }}
                </mat-card-subtitle>
              </div>
              <button mat-icon-button [matMenuTriggerFor]="menu">
                <fa-icon [icon]="faEllipsisVertical"></fa-icon>
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editJob(job)">
                  <fa-icon [icon]="faEdit"></fa-icon>
                  <span>Edit</span>
                </button>
                <button mat-menu-item (click)="viewApplications(job)">
                  <fa-icon [icon]="faUsers"></fa-icon>
                  <span>View Applications</span>
                </button>
                <button mat-menu-item (click)="deleteJob(job)">
                  <fa-icon [icon]="faTrash"></fa-icon>
                  <span>Delete</span>
                </button>
              </mat-menu>
            </div>
          </mat-card-header>

          <mat-card-content>
            <p class="job-description">{{ job.description | slice:0:150 }}...</p>
            
            <div class="job-details">
              <div class="detail-item">
                <fa-icon [icon]="faBriefcase"></fa-icon>
                <span>{{ job.employmentType }}</span>
              </div>
              <div class="detail-item" *ngIf="job.salary">
                <fa-icon [icon]="faMoneyBill"></fa-icon>
                <span>{{ job.salary | currency }}</span>
              </div>
              <div class="detail-item">
                <fa-icon [icon]="faUsers"></fa-icon>
                <span>{{ getApplicationCount(job) }} Applications</span>
              </div>
              <div class="detail-item">
                <fa-icon [icon]="faCalendarAlt"></fa-icon>
                <span>Posted {{ job.createdAt | date }}</span>
              </div>
            </div>

            <div class="job-tags">
              <mat-chip *ngFor="let skill of job.requiredSkills">
                {{ skill.name }}
              </mat-chip>
            </div>

            <div class="job-status">
              <mat-chip [color]="isJobOpen(job) ? 'primary' : 'warn'" selected>
                <fa-icon [icon]="isJobOpen(job) ? faCheckCircle : faTimesCircle"></fa-icon>
                {{ getJobStatus(job) | titlecase }}
              </mat-chip>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Empty State -->
      <div *ngIf="!isLoading && !error && (!jobs || jobs.length === 0)" class="empty-state">
        <mat-card>
          <mat-card-content>
            <h2>No Jobs Posted Yet</h2>
            <p>Start posting jobs to find the perfect candidates for your company.</p>
            <button mat-raised-button color="primary" (click)="navigateToJobPosting()">
              Post Your First Job
            </button>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .jobs-posted-container {
      padding: 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .jobs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .job-card {
      height: 100%;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }
    .job-title-section {
      flex: 1;
    }
    .job-description {
      margin: 16px 0;
      color: #666;
    }
    .job-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin: 16px 0;
    }
    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }
    .job-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 16px 0;
    }
    .job-status {
      margin-top: 16px;
    }
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 20px;
    }
    .error-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .error-card {
      text-align: center;
      padding: 20px;
    }
    .error-icon {
      color: #f44336;
      margin-bottom: 16px;
    }
    .empty-state {
      max-width: 600px;
      margin: 40px auto;
      text-align: center;
    }
    fa-icon {
      color: #666;
    }
    mat-menu-item fa-icon {
      margin-right: 8px;
    }
    .job-status fa-icon {
      margin-right: 4px;
    }
  `]
})
export class JobsPostedComponent implements OnInit {
  jobs: Job[] = [];
  isLoading = true;
  error: string | null = null;

  // Font Awesome icons
  faSpinner = faSpinner;
  faCircleExclamation = faCircleExclamation;
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;
  faUsers = faUsers;
  faCalendarAlt = faCalendarAlt;
  faEllipsisVertical = faEllipsisVertical;
  faEdit = faEdit;
  faTrash = faTrash;
  faMoneyBill = faMoneyBill;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  constructor(
    private jobService: JobService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadJobs();
  }

  getApplicationCount(job: Job): number {
    return job.applications?.length || 0;
  }

  getJobStatus(job: Job): string {
    if (!job.deadline) return 'open';
    return new Date(job.deadline) > new Date() ? 'open' : 'closed';
  }

  isJobOpen(job: Job): boolean {
    return this.getJobStatus(job) === 'open';
  }

  loadJobs() {
    this.isLoading = true;
    this.error = null;

    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== 'employer') {
      this.error = 'You must be logged in as a company to view posted jobs';
      this.isLoading = false;
      this.router.navigate(['/login']);
      return;
    }

    this.jobService.getJobsByEmployer(currentUser.id).subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching jobs:', error);
        this.error = error.error?.message || 'Failed to load jobs. Please try again.';
        this.isLoading = false;
        this.snackBar.open(this.error || 'An error occurred', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    });
  }

  navigateToJobPosting() {
    this.router.navigate(['/employer/job-posting']);
  }

  editJob(job: Job) {
    this.router.navigate(['/employer/job-posting', job.id]);
  }

  viewApplications(job: Job) {
    this.router.navigate(['/employer/applications', job.id]);
  }

  deleteJob(job: Job) {
    if (confirm('Are you sure you want to delete this job posting?')) {
      this.jobService.deleteJob(job.id).subscribe({
        next: () => {
          this.snackBar.open('Job deleted successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          this.loadJobs(); // Reload the jobs list
        },
        error: (error: any) => {
          console.error('Error deleting job:', error);
          this.snackBar.open(error.error?.message || 'Failed to delete job', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      });
    }
  }
} 