import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService, Job } from '../../../services/job.service';
import { AuthService } from '../../../services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faSpinner, 
  faSave, 
  faTimes, 
  faMapMarkerAlt, 
  faBriefcase, 
  faDollarSign,
  faCalendarAlt,
  faTag
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  template: `
    <div class="edit-job-container">
      <mat-card class="edit-job-card">
        <mat-card-header>
          <mat-card-title>{{ isEditMode ? 'Edit Job' : 'Create New Job' }}</mat-card-title>
          <mat-card-subtitle>
            {{ isEditMode ? 'Update the job details below' : 'Fill in the job details below' }}
          </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="jobForm" (ngSubmit)="onSubmit()" class="edit-job-form">
            <!-- Title -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Title</mat-label>
              <input matInput formControlName="title" placeholder="e.g., Senior Software Engineer">
              <mat-error *ngIf="jobForm.get('title')?.hasError('required')">
                Job title is required
              </mat-error>
            </mat-form-field>

            <!-- Description -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Description</mat-label>
              <textarea matInput formControlName="description" rows="6" 
                placeholder="Describe the role, responsibilities, and requirements..."></textarea>
              <mat-error *ngIf="jobForm.get('description')?.hasError('required')">
                Job description is required
              </mat-error>
            </mat-form-field>

            <!-- Location -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" placeholder="e.g., New York, NY">
              <fa-icon [icon]="faMapMarkerAlt" class="field-icon"></fa-icon>
              <mat-error *ngIf="jobForm.get('location')?.hasError('required')">
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
              <mat-error *ngIf="jobForm.get('employmentType')?.hasError('required')">
                Employment type is required
              </mat-error>
            </mat-form-field>

            <!-- Salary -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Salary (Annual)</mat-label>
              <input matInput type="number" formControlName="salary" placeholder="e.g., 75000">
              <fa-icon [icon]="faDollarSign" class="field-icon"></fa-icon>
              <mat-error *ngIf="jobForm.get('salary')?.hasError('min')">
                Salary must be greater than 0
              </mat-error>
            </mat-form-field>

            <!-- Deadline -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Application Deadline</mat-label>
              <input matInput [matDatepicker]="picker" formControlName="deadline">
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
              <fa-icon [icon]="faCalendarAlt" class="field-icon"></fa-icon>
              <mat-error *ngIf="jobForm.get('deadline')?.hasError('required')">
                Deadline is required
              </mat-error>
            </mat-form-field>

            <!-- Required Skills -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Required Skills</mat-label>
              <mat-chip-grid #chipGrid>
                <mat-chip-row *ngFor="let skill of requiredSkills" (removed)="removeSkill(skill)">
                  {{skill}}
                  <button matChipRemove>
                    <fa-icon [icon]="faTimes"></fa-icon>
                  </button>
                </mat-chip-row>
              </mat-chip-grid>
              <input placeholder="Add skills..."
                     [matChipInputFor]="chipGrid"
                     (matChipInputTokenEnd)="addSkill($event)">
              <fa-icon [icon]="faTag" class="field-icon"></fa-icon>
            </mat-form-field>

            <!-- Form Actions -->
            <div class="form-actions">
              <button mat-button type="button" (click)="goBack()">
                <fa-icon [icon]="faTimes"></fa-icon>
                Cancel
              </button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="jobForm.invalid || isSubmitting">
                <fa-icon [icon]="faSpinner" *ngIf="isSubmitting" animation="spin"></fa-icon>
                <fa-icon [icon]="faSave" *ngIf="!isSubmitting"></fa-icon>
                {{ isSubmitting ? 'Saving...' : (isEditMode ? 'Update Job' : 'Create Job') }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .edit-job-container {
      padding: 20px;
    }
    .edit-job-card {
      max-width: 800px;
      margin: 0 auto;
    }
    .edit-job-form {
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
    .field-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
    }
    mat-form-field {
      margin-bottom: 8px;
    }
    .mat-mdc-chip-input {
      width: 100%;
    }
    button fa-icon {
      margin-right: 8px;
    }
  `]
})
export class EditJobComponent implements OnInit {
  jobForm: FormGroup;
  isSubmitting = false;
  isEditMode = false;
  jobId: string | null = null;
  requiredSkills: string[] = [];

  // Font Awesome icons
  faSpinner = faSpinner;
  faSave = faSave;
  faTimes = faTimes;
  faMapMarkerAlt = faMapMarkerAlt;
  faBriefcase = faBriefcase;
  faDollarSign = faDollarSign;
  faCalendarAlt = faCalendarAlt;
  faTag = faTag;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      employmentType: ['', Validators.required],
      salary: [null, [Validators.min(0)]],
      deadline: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    if (this.jobId) {
      this.isEditMode = true;
      this.loadJob();
    }
  }

  loadJob() {
    if (!this.jobId) return;
    
    this.jobService.getJobById(this.jobId).subscribe({
      next: (job) => {
        this.jobForm.patchValue({
          title: job.title,
          description: job.description,
          location: job.location,
          employmentType: job.employmentType,
          salary: job.salary,
          deadline: job.deadline
        });
        this.requiredSkills = job.requiredSkills.map(skill => skill.name);
      },
      error: (error) => {
        console.error('Error loading job:', error);
        this.snackBar.open('Failed to load job details', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.router.navigate(['/employer/jobs-posted']);
      }
    });
  }

  addSkill(event: any) {
    const value = (event.value || '').trim();
    if (value) {
      this.requiredSkills.push(value);
      event.chipInput!.clear();
    }
  }

  removeSkill(skill: string) {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.jobForm.invalid) return;

    this.isSubmitting = true;
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
      ...this.jobForm.value,
      requiredSkills: this.requiredSkills.map(skill => ({ name: skill })),
      employer: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email
      }
    };

    const request = this.isEditMode && this.jobId
      ? this.jobService.updateJob(this.jobId, jobData)
      : this.jobService.createJob(jobData);

    request.subscribe({
      next: () => {
        this.snackBar.open(
          `Job ${this.isEditMode ? 'updated' : 'created'} successfully`,
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
        this.router.navigate(['/employer/jobs-posted']);
      },
      error: (error) => {
        console.error('Error saving job:', error);
        this.snackBar.open(
          error.error?.message || `Failed to ${this.isEditMode ? 'update' : 'create'} job`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
        this.isSubmitting = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/employer/jobs-posted']);
  }
} 