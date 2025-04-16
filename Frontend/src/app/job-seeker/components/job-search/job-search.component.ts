import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="search-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Job Search</mat-card-title>
          <mat-card-subtitle>Find your next opportunity</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="searchForm" class="search-form">
            <div class="search-row">
              <mat-form-field appearance="outline" class="search-field">
                <mat-label>Keywords</mat-label>
                <input matInput formControlName="keywords" placeholder="Job title, skills, or company">
                <mat-icon matSuffix>search</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" class="search-field">
                <mat-label>Location</mat-label>
                <input matInput formControlName="location" placeholder="City, state, or remote">
                <mat-icon matSuffix>location_on</mat-icon>
              </mat-form-field>
            </div>

            <div class="filters-row">
              <mat-form-field appearance="outline">
                <mat-label>Job Type</mat-label>
                <mat-select formControlName="jobType" multiple>
                  <mat-option value="full-time">Full-time</mat-option>
                  <mat-option value="part-time">Part-time</mat-option>
                  <mat-option value="contract">Contract</mat-option>
                  <mat-option value="internship">Internship</mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Experience Level</mat-label>
                <mat-select formControlName="experience">
                  <mat-option value="entry">Entry Level</mat-option>
                  <mat-option value="mid">Mid Level</mat-option>
                  <mat-option value="senior">Senior Level</mat-option>
                  <mat-option value="executive">Executive</mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Salary Range</mat-label>
                <mat-select formControlName="salary">
                  <mat-option value="0-50k">$0 - $50,000</mat-option>
                  <mat-option value="50k-100k">$50,000 - $100,000</mat-option>
                  <mat-option value="100k-150k">$100,000 - $150,000</mat-option>
                  <mat-option value="150k+">$150,000+</mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <div class="search-actions">
              <button mat-raised-button color="primary" (click)="search()">
                <mat-icon>search</mat-icon>
                Search Jobs
              </button>
              <button mat-stroked-button (click)="clearFilters()">
                <mat-icon>clear</mat-icon>
                Clear Filters
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .search-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .search-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    .search-row {
      display: flex;
      gap: 20px;
    }

    .search-field {
      flex: 1;
    }

    .filters-row {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .filters-row mat-form-field {
      flex: 1;
      min-width: 200px;
    }

    .search-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }

    .search-actions button mat-icon {
      margin-right: 8px;
    }

    @media (max-width: 768px) {
      .search-row {
        flex-direction: column;
      }
    }
  `]
})
export class JobSearchComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      keywords: [''],
      location: [''],
      jobType: [[]],
      experience: [''],
      salary: ['']
    });
  }

  search(): void {
    if (this.searchForm.valid) {
      console.log('Searching with filters:', this.searchForm.value);
      // Implement search logic here
    }
  }

  clearFilters(): void {
    this.searchForm.reset();
  }
} 