import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService, Job, JobGenerationParams } from '../../../services/job.service';
import { AuthService } from '../../../services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner, faMagic, faCheck, faTimes, faMapMarkerAlt, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';

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
    MatChipsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  template: `
    <div class="job-generation-container">
      <mat-card class="job-generation-card">
        <mat-card-header>
          <mat-card-title>AI Job Description Generator</mat-card-title>
          <mat-card-subtitle>
            Let AI help you create a comprehensive job description
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="generationForm" (ngSubmit)="onGenerate()" class="job-generation-form">
            <!-- Job Title -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Title</mat-label>
              <input matInput formControlName="title" placeholder="e.g., Senior Software Engineer">
              <mat-error *ngIf="generationForm.get('title')?.hasError('required')">
                Job title is required
              </mat-error>
            </mat-form-field>

            <!-- Location -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" placeholder="e.g., New York, NY">
              <fa-icon [icon]="faMapMarkerAlt" class="field-icon"></fa-icon>
              <mat-error *ngIf="generationForm.get('location')?.hasError('required')">
                Location is required
              </mat-error>
            </mat-form-field>

            <!-- Employment Type -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Employment Type</mat-label>
              <mat-select formControlName="employmentType">
                <mat-option value="Full-time">Full-time</mat-option>
                <mat-option value="Part-time">Part-time</mat-option>
                <mat-option value="Contract">Contract</mat-option>
                <mat-option value="Temporary">Temporary</mat-option>
                <mat-option value="Internship">Internship</mat-option>
              </mat-select>
              <fa-icon [icon]="faBriefcase" class="field-icon"></fa-icon>
              <mat-error *ngIf="generationForm.get('employmentType')?.hasError('required')">
                Employment type is required
              </mat-error>
            </mat-form-field>

            <!-- Salary -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Salary (Annual)</mat-label>
              <input matInput type="number" formControlName="salary" placeholder="e.g., 75000">
              <fa-icon [icon]="faDollarSign" class="field-icon"></fa-icon>
              <mat-error *ngIf="generationForm.get('salary')?.hasError('min')">
                Salary must be greater than 0
              </mat-error>
            </mat-form-field>

            <!-- Generated Content -->
            <div *ngIf="generatedJob" class="generated-content">
              <h3>Generated Job Description</h3>
              <div class="description-section">
                <h4>Description</h4>
                <p>{{ generatedJob.description }}</p>
              </div>

              <div class="skills-section">
                <h4>Required Skills</h4>
                <mat-chip-set>
                  <mat-chip *ngFor="let skill of generatedSkills" (removed)="removeSkill(skill)">
                    {{ skill.name }}
                    <button matChipRemove>
                      <fa-icon [icon]="faTimes"></fa-icon>
                    </button>
                  </mat-chip>
                </mat-chip-set>
              </div>

              <div class="message-section" *ngIf="generationMessage">
                <p>{{ generationMessage }}</p>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="form-actions">
              <button mat-button type="button" (click)="goBack()">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="generationForm.invalid || isGenerating">
                <fa-icon [icon]="faSpinner" *ngIf="isGenerating" animation="spin"></fa-icon>
                <fa-icon [icon]="faMagic" *ngIf="!isGenerating"></fa-icon>
                {{ isGenerating ? 'Generating...' : 'Generate Description' }}
              </button>
              <button mat-raised-button color="accent" type="button" 
                      *ngIf="generatedJob"
                      (click)="onPostJob()"
                      [disabled]="isPosting">
                <fa-icon [icon]="faSpinner" *ngIf="isPosting" animation="spin"></fa-icon>
                <fa-icon [icon]="faCheck" *ngIf="!isPosting"></fa-icon>
                {{ isPosting ? 'Posting...' : 'Post Job' }}
              </button>
            </div>
          </form>
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
    .job-generation-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 20px 0;
    }
    .full-width {
      width: 100%;
    }
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
    }
    .generated-content {
      margin-top: 24px;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .description-section, .skills-section {
      margin-bottom: 20px;
    }
    .description-section h4, .skills-section h4 {
      margin-bottom: 8px;
      color: #666;
    }
    .message-section {
      margin-top: 16px;
      padding: 12px;
      background: #e3f2fd;
      border-radius: 4px;
      color: #1976d2;
    }
    mat-form-field {
      margin-bottom: 8px;
    }
    .mat-mdc-chip-set {
      margin-top: 8px;
    }
    .field-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
    }
    button matChipRemove {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class JobGenerationComponent {
  generationForm: FormGroup;
  isGenerating = false;
  isPosting = false;
  generatedJob: Job | null = null;
  generatedSkills: any[] = [];
  generationMessage: string | null = null;
  faSpinner = faSpinner;
  faMagic = faMagic;
  faCheck = faCheck;
  faTimes = faTimes;
  faMapMarkerAlt = faMapMarkerAlt;
  faBriefcase = faBriefcase;
  faDollarSign = faDollarSign;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.generationForm = this.fb.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      employmentType: ['', Validators.required],
      salary: [null, [Validators.min(0)]]
    });
  }

  onGenerate() {
    if (this.generationForm.invalid) return;

    this.isGenerating = true;
    this.generatedJob = null;
    this.generatedSkills = [];
    this.generationMessage = null;

    const params: JobGenerationParams = this.generationForm.value;

    this.jobService.generateJobWithAI(params).subscribe({
      next: (response) => {
        this.generatedJob = response.job;
        this.generatedSkills = response.generatedSkills;
        this.generationMessage = response.message;
        this.isGenerating = false;
      },
      error: (error) => {
        console.error('Error generating job:', error);
        this.snackBar.open(
          error.error?.message || 'Failed to generate job description',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
        this.isGenerating = false;
      }
    });
  }

  onPostJob() {
    if (!this.generatedJob) return;

    this.isPosting = true;
    const currentUser = this.authService.getCurrentUser();
    
    if (!currentUser) {
      this.snackBar.open('You must be logged in to post a job', 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      this.router.navigate(['/login']);
      return;
    }

    const jobData: Partial<Job> = {
      ...this.generatedJob,
      employer: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email
      }
    };

    this.jobService.createJob(jobData).subscribe({
      next: () => {
        this.snackBar.open('Job posted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.router.navigate(['/employer/jobs-posted']);
      },
      error: (error) => {
        console.error('Error posting job:', error);
        this.snackBar.open(
          error.error?.message || 'Failed to post job',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
        this.isPosting = false;
      }
    });
  }

  removeSkill(skill: string) {
    const index = this.generatedSkills.findIndex(s => s.name === skill);
    if (index >= 0) {
      this.generatedSkills.splice(index, 1);
    }
  }

  goBack() {
    this.router.navigate(['/employer/jobs-posted']);
  }
} 