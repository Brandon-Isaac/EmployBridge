import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ExperienceService, CreateExperienceData } from '../../../services/experience.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-experience',
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
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  template: `
    <div class="experience-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Work Experience</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="experienceForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Company Name</mat-label>
              <input matInput formControlName="companyName" placeholder="Enter company name">
              <mat-error *ngIf="experienceForm.get('companyName')?.hasError('required')">
                Company name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Position</mat-label>
              <input matInput formControlName="position" placeholder="Enter your position">
              <mat-error *ngIf="experienceForm.get('position')?.hasError('required')">
                Position is required
              </mat-error>
            </mat-form-field>

            <div class="date-range">
              <mat-form-field appearance="outline">
                <mat-label>Start Date</mat-label>
                <input matInput [matDatepicker]="startPicker" formControlName="startDate">
                <mat-datepicker-toggle matSuffix [for]="startPicker"></mat-datepicker-toggle>
                <mat-datepicker #startPicker></mat-datepicker>
                <mat-error *ngIf="experienceForm.get('startDate')?.hasError('required')">
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
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" rows="4" 
                placeholder="Describe your responsibilities and achievements"></textarea>
              <mat-error *ngIf="experienceForm.get('description')?.hasError('required')">
                Description is required
              </mat-error>
            </mat-form-field>

            <div class="form-actions">
              <button mat-raised-button color="primary" type="submit" 
                [disabled]="!experienceForm.valid || isLoading">
                <mat-spinner diameter="20" *ngIf="isLoading"></mat-spinner>
                <span *ngIf="!isLoading">Save Experience</span>
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .experience-container {
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
export class ExperienceComponent implements OnInit {
  experienceForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private experienceService: ExperienceService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.experienceForm = this.fb.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  onSubmit(): void {
    if (this.experienceForm.valid) {
      this.isLoading = true;
      const currentUser = this.authService.getCurrentUser();
      
      if (!currentUser) {
        this.snackBar.open('User not authenticated', 'Close', { duration: 3000 });
        this.isLoading = false;
        return;
      }

      const experienceData: CreateExperienceData = {
        company: this.experienceForm.value.companyName,
        title: this.experienceForm.value.position,
        startDate: this.experienceForm.value.startDate,
        endDate: this.experienceForm.value.endDate,
        current: !this.experienceForm.value.endDate,
        description: this.experienceForm.value.description
      };

      this.experienceService.createExperience(experienceData).subscribe({
        next: (response) => {
          this.snackBar.open('Experience saved successfully', 'Close', { duration: 3000 });
          this.experienceForm.reset();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error saving experience:', error);
          this.snackBar.open('Error saving experience. Please try again.', 'Close', { duration: 3000 });
          this.isLoading = false;
        }
      });
    }
  }
} 