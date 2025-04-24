import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService, Skill } from '../../../core/services/skill.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-skill-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <h2 mat-dialog-title>Add New Skill</h2>
    <mat-dialog-content>
      <form [formGroup]="skillForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Skill</mat-label>
          <mat-select formControlName="skillId" required>
            <mat-option *ngFor="let skill of availableSkills" [value]="skill.id">
              {{ skill.name }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="skillForm.get('skillId')?.hasError('required')">
            Skill is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Proficiency Level</mat-label>
          <mat-select formControlName="proficiencyLevel" required>
            <mat-option [value]="1">Beginner</mat-option>
            <mat-option [value]="2">Intermediate</mat-option>
            <mat-option [value]="3">Advanced</mat-option>
            <mat-option [value]="4">Expert</mat-option>
            <mat-option [value]="5">Master</mat-option>
          </mat-select>
          <mat-error *ngIf="skillForm.get('proficiencyLevel')?.hasError('required')">
            Proficiency level is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Years of Experience</mat-label>
          <input matInput type="number" formControlName="yearsOfExperience" required min="0" step="0.5">
          <mat-error *ngIf="skillForm.get('yearsOfExperience')?.hasError('required')">
            Years of experience is required
          </mat-error>
          <mat-error *ngIf="skillForm.get('yearsOfExperience')?.hasError('min')">
            Years of experience must be greater than 0
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Last Used Date</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="lastUsedDate" required>
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
          <mat-error *ngIf="skillForm.get('lastUsedDate')?.hasError('required')">
            Last used date is required
          </mat-error>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onSubmit()" [disabled]="!skillForm.valid || isLoading">
        Add Skill
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .w-full {
      width: 100%;
      margin-bottom: 16px;
    }
  `]
})
export class AddSkillDialogComponent implements OnInit {
  skillForm: FormGroup;
  availableSkills: Skill[] = [];
  isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<AddSkillDialogComponent>,
    private fb: FormBuilder,
    private skillService: SkillService,
    private snackBar: MatSnackBar
  ) {
    this.skillForm = this.fb.group({
      skillId: ['', Validators.required],
      proficiencyLevel: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      yearsOfExperience: [0, [Validators.required, Validators.min(0)]],
      lastUsedDate: [new Date(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAvailableSkills();
  }

  loadAvailableSkills(): void {
    this.isLoading = true;
    this.skillService.searchSkills().subscribe({
      next: (response: { skills: Skill[] }) => {
        this.availableSkills = response.skills;
        this.isLoading = false;
      },
      error: (error: Error) => {
        console.error('Error loading skills:', error);
        this.snackBar.open('Failed to load available skills', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.skillForm.valid) {
      const formData = this.skillForm.value;
      this.isLoading = true;

      this.skillService.addSkill(formData.skillId).subscribe({
        next: (response: { message: string; skill: Skill }) => {
          this.snackBar.open(response.message, 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.dialogRef.close(true);
        },
        error: (error: Error) => {
          console.error('Error adding skill:', error);
          this.snackBar.open(error.message || 'Failed to add skill', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          this.isLoading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
} 