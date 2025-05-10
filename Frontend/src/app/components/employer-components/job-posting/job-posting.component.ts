import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-job-posting',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="job-posting-container">
      <mat-card class="job-posting-card">
        <mat-card-header>
          <mat-card-title>Post a New Job</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="job-posting-content">
            <!-- Job posting form will go here -->
            <p>Job posting form will be displayed here.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .job-posting-container {
      padding: 20px;
    }
    .job-posting-card {
      max-width: 800px;
      margin: 0 auto;
    }
    .job-posting-content {
      padding: 20px 0;
    }
  `]
})
export class JobPostingComponent {} 