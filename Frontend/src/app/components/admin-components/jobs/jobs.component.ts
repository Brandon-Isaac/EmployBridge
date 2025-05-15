import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule
  ],
  template: `
    <div class="jobs-container">
      <div class="header-section">
        <h2>Job Management</h2>
        <div class="actions">
          <button mat-raised-button color="primary">
            <mat-icon>add</mat-icon>
            Add New Job
          </button>
          <button mat-raised-button color="accent">
            <mat-icon>filter_list</mat-icon>
            Filter
          </button>
        </div>
      </div>

      <!-- Statistics Cards -->
      <div class="stats-cards">
        <div class="stat-card">
          <h3>Total Jobs</h3>
          <p class="stat-number">{{totalJobs}}</p>
        </div>
        <div class="stat-card">
          <h3>Active Jobs</h3>
          <p class="stat-number">{{activeJobs}}</p>
        </div>
        <div class="stat-card">
          <h3>Total Applications</h3>
          <p class="stat-number">{{totalApplications}}</p>
        </div>
        <div class="stat-card">
          <h3>Expiring Soon</h3>
          <p class="stat-number">{{expiringJobs}}</p>
        </div>
      </div>

      <!-- Jobs Table -->
      <table mat-table [dataSource]="jobs" matSort class="mat-elevation-z8">
        <!-- Title Column -->
        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>
          <td mat-cell *matCellDef="let job">{{job.title}}</td>
        </ng-container>

        <!-- Company Column -->
        <ng-container matColumnDef="company">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Company</th>
          <td mat-cell *matCellDef="let job">{{job.company}}</td>
        </ng-container>

        <!-- Location Column -->
        <ng-container matColumnDef="location">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>
          <td mat-cell *matCellDef="let job">{{job.location}}</td>
        </ng-container>

        <!-- Applications Column -->
        <ng-container matColumnDef="applications">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Applications</th>
          <td mat-cell *matCellDef="let job">
            <span class="application-count" [matBadge]="job.applications" matBadgeColor="primary">
              {{job.applications}}
            </span>
          </td>
        </ng-container>

        <!-- Deadline Column -->
        <ng-container matColumnDef="deadline">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Deadline</th>
          <td mat-cell *matCellDef="let job">
            <span [class.expiring]="isExpiringSoon(job.deadline)">
              {{job.deadline | date:'mediumDate'}}
            </span>
          </td>
        </ng-container>

        <!-- Status Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
          <td mat-cell *matCellDef="let job">
            <mat-chip [color]="getStatusColor(job.status)" selected>
              {{job.status}}
            </mat-chip>
          </td>
        </ng-container>

        <!-- Actions Column -->
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let job">
            <button mat-icon-button [matMenuTriggerFor]="menu" color="primary">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
              <button mat-menu-item (click)="viewApplications(job)">
                <mat-icon>list</mat-icon>
                <span>View Applications</span>
              </button>
              <button mat-menu-item (click)="editJob(job)">
                <mat-icon>edit</mat-icon>
                <span>Edit</span>
              </button>
              <button mat-menu-item (click)="deleteJob(job)">
                <mat-icon>delete</mat-icon>
                <span>Delete</span>
              </button>
            </mat-menu>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <mat-paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
    </div>
  `,
  styles: [`
    .jobs-container {
      padding: 20px;
    }

    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .actions {
      display: flex;
      gap: 10px;
    }

    .stats-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .stat-card h3 {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .stat-number {
      margin: 10px 0 0;
      font-size: 1.8rem;
      font-weight: 600;
      color: #3498db;
    }

    table {
      width: 100%;
      margin-bottom: 20px;
    }

    .mat-column-actions {
      width: 80px;
      text-align: center;
    }

    .application-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      height: 30px;
      border-radius: 15px;
      background: #e3f2fd;
      color: #1976d2;
      font-weight: 500;
    }

    .expiring {
      color: #f44336;
      font-weight: 500;
    }

    .mat-column-status {
      width: 120px;
    }

    .mat-column-applications {
      width: 100px;
      text-align: center;
    }
  `]
})
export class JobsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'company', 'location', 'applications', 'deadline', 'status', 'actions'];
  
  // Statistics
  totalJobs: number = 0;
  activeJobs: number = 0;
  totalApplications: number = 0;
  expiringJobs: number = 0;

  // Sample data
  jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'New York, NY',
      applications: 15,
      deadline: new Date('2024-04-15'),
      status: 'Active'
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'Digital Solutions',
      location: 'Remote',
      applications: 8,
      deadline: new Date('2024-03-30'),
      status: 'Active'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      location: 'San Francisco, CA',
      applications: 23,
      deadline: new Date('2024-04-01'),
      status: 'Active'
    }
  ];

  ngOnInit() {
    this.calculateStatistics();
  }

  calculateStatistics() {
    this.totalJobs = this.jobs.length;
    this.activeJobs = this.jobs.filter(job => job.status === 'Active').length;
    this.totalApplications = this.jobs.reduce((sum, job) => sum + job.applications, 0);
    this.expiringJobs = this.jobs.filter(job => this.isExpiringSoon(job.deadline)).length;
  }

  isExpiringSoon(deadline: Date): boolean {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  }

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    switch (status.toLowerCase()) {
      case 'active':
        return 'primary';
      case 'draft':
        return 'accent';
      case 'closed':
        return 'warn';
      default:
        return 'primary';
    }
  }

  viewApplications(job: any): void {
    console.log('View applications for job:', job);
    // Implement view applications functionality
  }

  editJob(job: any): void {
    console.log('Edit job:', job);
    // Implement edit functionality
  }

  deleteJob(job: any): void {
    console.log('Delete job:', job);
    // Implement delete functionality
  }
} 