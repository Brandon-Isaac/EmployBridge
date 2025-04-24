import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobSearchService, Job } from '../../services/job-search.service';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  template: `
    <div class="job-search-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Job Search</mat-card-title>
          <mat-card-subtitle>Find your next career opportunity</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="search-filters">
            <mat-form-field appearance="outline" class="search-field">
              <mat-label>Search Jobs</mat-label>
              <input matInput placeholder="Job title, keywords, or company" [(ngModel)]="searchTerm" (keyup.enter)="searchJobs()">
              <button mat-icon-button matSuffix (click)="searchJobs()">
                <i class="fas fa-search"></i>
              </button>
            </mat-form-field>

            <mat-form-field appearance="outline" class="location-field">
              <mat-label>Location</mat-label>
              <input matInput placeholder="City, state, or remote" [(ngModel)]="location" (keyup.enter)="searchJobs()">
              <button mat-icon-button matSuffix (click)="searchJobs()">
                <i class="fas fa-map-marker-alt"></i>
              </button>
            </mat-form-field>

            <mat-form-field appearance="outline" class="job-type-field">
              <mat-label>Job Type</mat-label>
              <mat-select [(ngModel)]="jobType" (selectionChange)="searchJobs()">
                <mat-option value="">All Types</mat-option>
                <mat-option value="full-time">Full Time</mat-option>
                <mat-option value="part-time">Part Time</mat-option>
                <mat-option value="contract">Contract</mat-option>
                <mat-option value="internship">Internship</mat-option>
                <mat-option value="remote">Remote</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <div class="search-results">
            <mat-card class="job-card" *ngFor="let job of jobs">
              <div class="job-header">
                <div class="job-title">{{ job.title }}</div>
                <div class="job-company">{{ job.company }}</div>
              </div>
              <div class="job-details">
                <div class="job-location">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ job.location }}
                </div>
                <div class="job-type">
                  <i class="fas fa-briefcase"></i>
                  {{ job.type }}
                </div>
                <div class="job-salary">
                  <i class="fas fa-dollar-sign"></i>
                  {{ job.salary }}
                </div>
              </div>
              <div class="job-description">{{ job.description }}</div>
              <div class="job-actions">
                <button mat-button color="primary" (click)="viewJobDetails(job)">
                  <i class="fas fa-eye"></i>
                  View Details
                </button>
                <button mat-button color="accent" (click)="applyForJob(job)">
                  <i class="fas fa-paper-plane"></i>
                  Apply Now
                </button>
              </div>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .job-search-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .search-filters {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .search-field {
      flex: 2;
      min-width: 300px;
    }

    .location-field,
    .job-type-field {
      flex: 1;
      min-width: 200px;
    }

    .search-results {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .job-card {
      margin-bottom: 16px;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .job-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .job-header {
      margin-bottom: 12px;
    }

    .job-title {
      font-size: 18px;
      font-weight: 500;
      color: #1976d2;
    }

    .job-company {
      font-size: 14px;
      color: #666;
    }

    .job-details {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .job-location,
    .job-type,
    .job-salary {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      color: #666;
    }

    .job-description {
      margin-bottom: 16px;
      color: #333;
    }

    .job-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    i {
      font-size: 16px;
      margin-right: 4px;
    }
  `]
})
export class JobSearchComponent implements OnInit {
  searchTerm = '';
  location = '';
  jobType = '';
  jobs: Job[] = [];

  constructor(private jobSearchService: JobSearchService) {}

  ngOnInit() {
    this.searchJobs();
  }

  searchJobs() {
    this.jobSearchService.searchJobs({
      search: this.searchTerm,
      location: this.location,
      type: this.jobType
    }).subscribe({
      next: (jobs) => {
        this.jobs = jobs;
      },
      error: (error) => {
        console.error('Error fetching jobs:', error);
        // You might want to show an error message to the user here
      }
    });
  }

  viewJobDetails(job: Job) {
    // Implement job details view
    console.log('Viewing job details:', job);
  }

  applyForJob(job: Job) {
    // Implement job application
    console.log('Applying for job:', job);
  }
} 