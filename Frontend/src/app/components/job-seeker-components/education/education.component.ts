import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EducationService, CreateEducationData } from '../../../services/education.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  template: `
    <div class="education-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Education</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="educationForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Institution Name</mat-label>
              <input matInput formControlName="institutionName" placeholder="Enter institution name">
              <mat-error *ngIf="educationForm.get('institutionName')?.hasError('required')">
                Institution name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Degree/Certificate</mat-label>
              <input matInput formControlName="degree" placeholder="Enter your degree or certificate">
              <mat-error *ngIf="educationForm.get('degree')?.hasError('required')">
                Degree is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Field of Study</mat-label>
              <input matInput formControlName="fieldOfStudy" placeholder="Enter your field of study">
              <mat-error *ngIf="educationForm.get('fieldOfStudy')?.hasError('required')">
                Field of study is required
              </mat-error>
            </mat-form-field>

            <div class="date-range">
              <mat-form-field appearance="outline">
                <mat-label>Start Date</mat-label>
                <input matInput [matDatepicker]="startPicker" formControlName="startDate">
                <mat-datepicker-toggle matSuffix [for]="startPicker"></mat-datepicker-toggle>
                <mat-datepicker #startPicker></mat-datepicker>
                <mat-error *ngIf="educationForm.get('startDate')?.hasError('required')">
                  Start date is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>End Date</mat-label>
                <input matInput [matDatepicker]="endPicker" formControlName="endDate">
                <mat-datepicker-toggle matSuffix [for]="endPicker"></mat-datepicker-toggle>
                <mat-datepicker #endPicker></mat-datepicker>
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Grade/GPA</mat-label>
              <input matInput formControlName="grade" placeholder="Enter your grade or GPA">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" rows="4" 
                placeholder="Describe your academic achievements and activities"></textarea>
            </mat-form-field>

            <div class="form-actions">
              <button mat-raised-button color="primary" type="submit" 
                [disabled]="!educationForm.valid || isLoading">
                <mat-spinner diameter="20" *ngIf="isLoading"></mat-spinner>
                <span *ngIf="!isLoading">Save Education</span>
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .education-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    .date-range {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }

    .date-range mat-form-field {
      flex: 1;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .form-actions button {
      min-width: 120px;
    }

    mat-spinner {
      display: inline-block;
      margin-right: 8px;
    }
  `]
})
export class EducationComponent implements OnInit {
  educationForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private educationService: EducationService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.educationForm = this.fb.group({
      institutionName: ['', Validators.required],
      degree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      grade: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  onSubmit(): void {
    if (this.educationForm.valid) {
      this.isLoading = true;
      const currentUser = this.authService.getCurrentUser();
      
      if (!currentUser) {
        this.snackBar.open('User not authenticated', 'Close', { duration: 3000 });
        this.isLoading = false;
        return;
      }

      const educationData: CreateEducationData = {
        institution: this.educationForm.value.institutionName,
        degree: this.educationForm.value.degree,
        fieldOfStudy: this.educationForm.value.fieldOfStudy,
        startDate: this.educationForm.value.startDate,
        endDate: this.educationForm.value.endDate,
        current: !this.educationForm.value.endDate,
        description: this.educationForm.value.description
      };

      this.educationService.createEducation(educationData).subscribe({
        next: (response) => {
          this.snackBar.open('Education saved successfully', 'Close', { duration: 3000 });
          this.educationForm.reset();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error saving education:', error);
          this.snackBar.open('Error saving education. Please try again.', 'Close', { duration: 3000 });
          this.isLoading = false;
        }
      });
    }
  }
} 