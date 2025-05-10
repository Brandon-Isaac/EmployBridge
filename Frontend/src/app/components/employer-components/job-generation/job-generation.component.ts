import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-job-generation',
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
    <div class="job-generation-container">
      <mat-card class="job-generation-card">
        <mat-card-header>
          <mat-card-title>AI Job Description Generator</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="job-generation-content">
            <!-- Job generation form will go here -->
            <p>AI-powered job description generator will be displayed here.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .job-generation-container {
      padding: 20px;
    }
    .job-generation-card {
      max-width: 800px;
      margin: 0 auto;
    }
    .job-generation-content {
      padding: 20px 0;
    }
  `]
})
export class JobGenerationComponent {} 