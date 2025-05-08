import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faMapMarkerAlt, faBuilding, faMoneyBillWave, faBriefcase, faFilter } from '@fortawesome/free-solid-svg-icons';
import { JobService } from '../../../services/job.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  salary?: number;
  employmentType: string;
  employer: {
    id: string;
    name: string;
    email: string;
  };
  matchScore?: number;
  requiredSkills: Array<{
    name: string;
  }>;
}

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  template: `
    <div class="job-search-container">
      <!-- Search and Filter Section -->
      <mat-card class="search-filter-card">
        <mat-card-content>
          <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
            <div class="search-bar">
              <mat-form-field appearance="outline" class="search-input">
                <mat-label>Search Jobs</mat-label>
                <input matInput formControlName="query" placeholder="Job title, skills, or keywords">
                <fa-icon [icon]="faSearch" matSuffix></fa-icon>
              </mat-form-field>
            </div>

            <mat-expansion-panel class="filter-panel">
              <mat-expansion-panel-header>
                <mat-panel-title>
                  <fa-icon [icon]="faFilter"></fa-icon>
                  Filters
                </mat-panel-title>
              </mat-expansion-panel-header>

              <div class="filters-grid">
                <!-- Location Filter -->
                <mat-form-field appearance="outline">
                  <mat-label>Location</mat-label>
                  <input matInput formControlName="location" placeholder="City, State, or Remote">
                </mat-form-field>

                <!-- Salary Range -->
                <mat-form-field appearance="outline">
                  <mat-label>Minimum Salary</mat-label>
                  <input matInput type="number" formControlName="minSalary" placeholder="Minimum salary">
                </mat-form-field>

                <!-- Employment Type -->
                <mat-form-field appearance="outline">
                  <mat-label>Employment Type</mat-label>
                  <mat-select formControlName="employmentType">
                    <mat-option value="">All Types</mat-option>
                    <mat-option value="FULL-TIME">Full-time</mat-option>
                    <mat-option value="PART-TIME">Part-time</mat-option>
                    <mat-option value="CONTRACT">Contract</mat-option>
                    <mat-option value="INTERNSHIP">Internship</mat-option>
                  </mat-select>
                </mat-form-field>

                <!-- Sort By -->
                <mat-form-field appearance="outline">
                  <mat-label>Sort By</mat-label>
                  <mat-select formControlName="sortBy">
                    <mat-option value="matchScore">Best Match</mat-option>
                    <mat-option value="salary">Salary</mat-option>
                    <mat-option value="date">Date Posted</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>

              <div class="filter-actions">
                <button mat-button type="button" (click)="resetFilters()">Reset</button>
                <button mat-raised-button color="primary" type="submit">Apply Filters</button>
              </div>
            </mat-expansion-panel>
          </form>
        </mat-card-content>
      </mat-card>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading jobs...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="loadJobs()">Retry</button>
      </div>

      <!-- Jobs List -->
      <div *ngIf="!isLoading && !error" class="jobs-list">
        <div *ngIf="jobs.length === 0" class="no-jobs">
          <p>No jobs found matching your criteria.</p>
        </div>

        <mat-card *ngFor="let job of jobs" class="job-card">
          <mat-card-header>
            <mat-card-title>{{job.title}}</mat-card-title>
            <mat-card-subtitle>
              <fa-icon [icon]="faBuilding"></fa-icon>
              {{job.employer.name}}
            </mat-card-subtitle>
          </mat-card-header>

          <mat-card-content>
            <div class="job-details">
              <div class="detail-item">
                <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                <span>{{job.location}}</span>
              </div>
              <div class="detail-item">
                <fa-icon [icon]="faMoneyBillWave"></fa-icon>
                <span>{{job.salary | currency}}</span>
              </div>
              <div class="detail-item">
                <fa-icon [icon]="faBriefcase"></fa-icon>
                <span>{{job.employmentType}}</span>
              </div>
            </div>

            <p class="job-description">{{job.description | slice:0:200}}...</p>

            <div class="skills-container">
              <mat-chip-set>
                <mat-chip *ngFor="let skill of job.requiredSkills" color="primary" selected>
                  {{skill.name}}
                </mat-chip>
              </mat-chip-set>
            </div>

            <div *ngIf="job.matchScore" class="match-score">
              Match Score: {{job.matchScore}}%
            </div>
          </mat-card-content>

          <mat-card-actions>
            <button mat-button color="primary" (click)="viewJobDetails(job.id)">View Details</button>
            <button mat-raised-button color="accent" (click)="applyForJob(job.id)">Apply Now</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .job-search-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
      font-family: 'Poppins', sans-serif;
    }

    .search-filter-card {
      margin-bottom: 24px;
    }

    .search-bar {
      margin-bottom: 16px;
    }

    .search-input {
      width: 100%;
    }

    .filters-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }

    .filter-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
    }

    .jobs-list {
      display: grid;
      gap: 24px;
    }

    .job-card {
      transition: transform 0.2s;
    }

    .job-card:hover {
      transform: translateY(-2px);
    }

    .job-details {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .job-description {
      margin: 16px 0;
      color: #444;
    }

    .skills-container {
      margin: 16px 0;
    }

    .match-score {
      display: inline-block;
      padding: 4px 12px;
      background-color: #e3f2fd;
      color: #1976d2;
      border-radius: 16px;
      font-weight: 500;
      margin-top: 16px;
    }

    .loading-container,
    .error-container,
    .no-jobs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      gap: 16px;
    }

    .error-message {
      color: #dc3545;
    }

    mat-card-title {
      font-size: 1.25rem;
      margin-bottom: 8px;
    }

    mat-card-subtitle {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      padding: 16px;
    }
  `]
})
export class JobSearchComponent implements OnInit {
  // Font Awesome icons
  faSearch = faSearch;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;
  faMoneyBillWave = faMoneyBillWave;
  faBriefcase = faBriefcase;
  faFilter = faFilter;

  searchForm: FormGroup;
  jobs: Job[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService
  ) {
    this.searchForm = this.fb.group({
      query: [''],
      location: [''],
      minSalary: [null],
      employmentType: [''],
      sortBy: ['matchScore']
    });

    // Setup search input debounce
    this.searchForm.get('query')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(() => this.onSearch());
  }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.isLoading = true;
    this.error = null;

    const filters = this.searchForm.value;
    this.jobService.searchJobs(filters).subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.error = 'Failed to load jobs. Please try again.';
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    this.loadJobs();
  }

  resetFilters(): void {
    this.searchForm.reset({
      query: '',
      location: '',
      minSalary: null,
      employmentType: '',
      sortBy: 'matchScore'
    });
    this.loadJobs();
  }

  viewJobDetails(jobId: string): void {
    // Navigate to job details page
    console.log('View job details:', jobId);
  }

  applyForJob(jobId: string): void {
    // Handle job application
    console.log('Apply for job:', jobId);
  }
} 