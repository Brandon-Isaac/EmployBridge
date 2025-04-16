import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  template: `
    <div class="post-job-container" [@fadeIn]>
      <div class="page-header">
        <h1 class="page-title">Post New Job</h1>
        <p class="page-subtitle">Create a new job listing for your company</p>
      </div>
      
      <mat-card class="job-form-card">
        <mat-card-content>
          <form [formGroup]="jobForm" (ngSubmit)="onSubmit()">
            <div class="form-section">
              <h3 class="section-title">
                <i class="fas fa-file-alt section-icon"></i>
                Job Details
              </h3>
              <mat-divider></mat-divider>
              
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Job Title</mat-label>
                  <input matInput formControlName="title" required placeholder="e.g. Senior Frontend Developer">
                  <mat-error *ngIf="jobForm.get('title')?.hasError('required')">
                    Job title is required
                  </mat-error>
                </mat-form-field>
              </div>

              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Job Description</mat-label>
                  <textarea
                    matInput
                    formControlName="description"
                    rows="6"
                    required
                    placeholder="Describe the role, responsibilities, and qualifications..."
                  ></textarea>
                  <mat-error *ngIf="jobForm.get('description')?.hasError('required')">
                    Job description is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title">
                <i class="fas fa-map-marker-alt section-icon"></i>
                Location & Work Type
              </h3>
              <mat-divider></mat-divider>
              
              <div class="form-row two-column">
                <mat-form-field appearance="outline">
                  <mat-label>Location</mat-label>
                  <input matInput formControlName="location" required placeholder="e.g. New York, NY or Remote">
                  <mat-error *ngIf="jobForm.get('location')?.hasError('required')">
                    Location is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Job Type</mat-label>
                  <mat-select formControlName="jobType" required>
                    <mat-option value="fulltime">Full-time</mat-option>
                    <mat-option value="parttime">Part-time</mat-option>
                    <mat-option value="contract">Contract</mat-option>
                    <mat-option value="internship">Internship</mat-option>
                  </mat-select>
                  <mat-error *ngIf="jobForm.get('jobType')?.hasError('required')">
                    Job type is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title">
                <i class="fas fa-laptop-code section-icon"></i>
                Skills & Requirements
              </h3>
              <mat-divider></mat-divider>
              
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Required Skills</mat-label>
                  <mat-chip-grid #chipGrid>
                    <mat-chip-row
                      *ngFor="let skill of requiredSkills"
                      (removed)="removeSkill(skill)"
                      class="skill-chip"
                    >
                      {{ skill }}
                      <button matChipRemove>
                        <i class="fas fa-times"></i>
                      </button>
                    </mat-chip-row>
                  </mat-chip-grid>
                  <input
                    placeholder="Add skill and press Enter..."
                    [matChipInputFor]="chipGrid"
                    (matChipInputTokenEnd)="addSkill($event)"
                  />
                </mat-form-field>
              </div>

              <div class="form-row two-column">
                <mat-form-field appearance="outline">
                  <mat-label>Experience Level</mat-label>
                  <mat-select formControlName="experienceLevel" required>
                    <mat-option value="entry">Entry Level</mat-option>
                    <mat-option value="mid">Mid Level</mat-option>
                    <mat-option value="senior">Senior Level</mat-option>
                    <mat-option value="executive">Executive Level</mat-option>
                  </mat-select>
                  <mat-error *ngIf="jobForm.get('experienceLevel')?.hasError('required')">
                    Experience level is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Salary Range</mat-label>
                  <input matInput formControlName="salaryRange" required placeholder="e.g. $80,000 - $100,000">
                  <mat-error *ngIf="jobForm.get('salaryRange')?.hasError('required')">
                    Salary range is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

            <div class="form-actions">
              <button mat-button type="button" class="cancel-button">
                Cancel
              </button>
              <button
                mat-raised-button
                type="submit"
                [disabled]="!jobForm.valid"
                class="post-button"
              >
                <i class="fas fa-paper-plane"></i>
                Post Job
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      :host {
        --primary-green: #4caf50;
        --primary-green-light: rgba(200, 230, 201, 0.5);
        --primary-green-medium: rgba(129, 199, 132, 0.8);
        --primary-green-dark: #2e7d32;
        --neutral-bg: #f8f9fa;
        --neutral-dark: #455a64;
        --neutral-light: #eceff1;
        --card-bg: #ffffff;
        --error-color: #f44336;
      }

      .post-job-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 0 40px 0;
      }

      .page-header {
        margin-bottom: 24px;
      }

      .page-title {
        color: var(--primary-green-dark);
        font-size: 28px;
        font-weight: 500;
        margin: 0 0 8px 0;
      }

      .page-subtitle {
        color: var(--neutral-dark);
        font-size: 16px;
        margin: 0;
        opacity: 0.8;
      }

      .job-form-card {
        background-color: var(--card-bg);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      .form-section {
        margin-bottom: 32px;
      }

      .section-title {
        display: flex;
        align-items: center;
        color: var(--primary-green-dark);
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 8px 0;
        gap: 8px;
      }

      .section-icon {
        color: var(--primary-green);
        font-size: 18px;
        opacity: 0.9;
      }

      mat-divider {
        margin-bottom: 20px;
        border-color: var(--primary-green-light);
      }

      .form-row {
        margin-bottom: 20px;
      }

      .two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .full-width {
        width: 100%;
      }

      /* Form styling */
      ::ng-deep .mat-mdc-form-field-subscript-wrapper {
        height: 16px !important;
      }

      ::ng-deep .mat-mdc-form-field {
        background: var(--card-bg);
        border-radius: 8px;
      }

      ::ng-deep .mat-mdc-text-field-wrapper {
        background: var(--card-bg) !important;
      }

      ::ng-deep .mat-mdc-form-field-flex {
        background: var(--card-bg) !important;
      }

      ::ng-deep .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
      ::ng-deep .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
      ::ng-deep .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
        border-color: rgba(0, 0, 0, 0.12);
      }

      ::ng-deep .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
      ::ng-deep .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
      ::ng-deep .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
        border-color: var(--primary-green);
      }

      ::ng-deep .mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
        color: var(--primary-green);
      }

      ::ng-deep .mat-mdc-form-field-type-mat-select.mat-focused .mat-mdc-form-field-infix {
        color: var(--primary-green);
      }

      /* Chip styling */
      ::ng-deep .skill-chip {
        background-color: var(--primary-green-light) !important;
        color: var(--primary-green-dark) !important;
        border: 1px solid var(--primary-green-medium) !important;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        margin-top: 32px;
      }

      .cancel-button {
        color: var(--neutral-dark);
        background-color: var(--neutral-light);
        border-radius: 30px;
        padding: 0 24px;
        height: 46px;
        font-weight: 500;
      }

      .post-button {
        background: linear-gradient(to right, var(--primary-green), var(--primary-green-dark));
        color: white;
        border-radius: 30px;
        padding: 0 32px;
        height: 46px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
        transition: all 0.3s ease;
      }

      .post-button:not([disabled]):hover {
        box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4);
        transform: translateY(-2px);
      }

      .post-button[disabled] {
        background: linear-gradient(to right, #b0bec5, #90a4ae);
        box-shadow: none;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .post-job-container {
          padding: 0 0 20px 0;
        }
        
        .two-column {
          grid-template-columns: 1fr;
          gap: 0;
        }

        .form-actions {
          flex-direction: column-reverse;
          gap: 12px;
        }

        .cancel-button, .post-button {
          width: 100%;
        }
      }
    `,
  ],
})
export class PostJobComponent implements OnInit {
  jobForm: FormGroup;
  requiredSkills: string[] = [];

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      jobType: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      salaryRange: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.jobForm.valid) {
      const jobData = {
        ...this.jobForm.value,
        requiredSkills: this.requiredSkills,
      };
      console.log('Job data:', jobData);
      // Save job data to backend
    }
  }

  addSkill(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.requiredSkills.push(value);
      event.chipInput!.clear();
    }
  }

  removeSkill(skill: string): void {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }
}