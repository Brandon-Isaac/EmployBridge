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
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

interface Profile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  currentRole: string;
  experience: number;
  education: string;
  skills: string[];
  languages: string[];
  availability: string;
  salaryExpectation: number;
  summary: string;
}

@Component({
  selector: 'app-profile-manager',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  template: `
    <div class="profile-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Profile Manager</mat-card-title>
          <mat-card-subtitle>Manage your professional profile</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="profileForm" (ngSubmit)="updateProfile()" class="profile-form">
            <div class="form-section">
              <h3>Personal Information</h3>
              <div class="form-row">
                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Full Name</mat-label>
                  <input matInput formControlName="fullName" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Email</mat-label>
                  <input matInput formControlName="email" type="email" required />
                </mat-form-field>
              </div>

              <div class="form-row">
                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Phone Number</mat-label>
                  <input matInput formControlName="phone" type="tel" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Location</mat-label>
                  <input matInput formControlName="location" required />
                </mat-form-field>
              </div>
            </div>

            <div class="form-section">
              <h3>Professional Details</h3>
              <div class="form-row">
                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Current Role</mat-label>
                  <input matInput formControlName="currentRole" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Years of Experience</mat-label>
                  <input matInput formControlName="experience" type="number" required />
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Education</mat-label>
                <input matInput formControlName="education" required />
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Professional Summary</mat-label>
                <textarea matInput formControlName="summary" rows="4" required></textarea>
              </mat-form-field>
            </div>

            <div class="form-section">
              <h3>Skills & Preferences</h3>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Skills</mat-label>
                <mat-chip-grid #skillGrid>
                  <mat-chip-row *ngFor="let skill of skills" (removed)="removeSkill(skill)">
                    {{ skill }}
                    <button matChipRemove>
                      <i class="fas fa-times"></i>
                    </button>
                  </mat-chip-row>
                </mat-chip-grid>
                <input placeholder="Add skill..." [matChipInputFor]="skillGrid" (matChipInputTokenEnd)="addSkill($event)" />
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Languages</mat-label>
                <mat-chip-grid #languageGrid>
                  <mat-chip-row *ngFor="let language of languages" (removed)="removeLanguage(language)">
                    {{ language }}
                    <button matChipRemove>
                      <i class="fas fa-times"></i>
                    </button>
                  </mat-chip-row>
                </mat-chip-grid>
                <input placeholder="Add language..." [matChipInputFor]="languageGrid" (matChipInputTokenEnd)="addLanguage($event)" />
              </mat-form-field>

              <div class="form-row">
                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Availability</mat-label>
                  <mat-select formControlName="availability">
                    <mat-option value="Immediate">Immediate</mat-option>
                    <mat-option value="1-2 weeks">1-2 weeks</mat-option>
                    <mat-option value="1 month">1 month</mat-option>
                    <mat-option value="2+ months">2+ months</mat-option>
                  </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline" class="half-width">
                  <mat-label>Salary Expectation (USD)</mat-label>
                  <input matInput formControlName="salaryExpectation" type="number" required />
                </mat-form-field>
              </div>
            </div>

            <div class="form-actions">
              <button mat-raised-button color="primary" type="submit" [disabled]="!profileForm.valid">
                <i class="fas fa-save"></i> Save Profile
              </button>
              <button mat-stroked-button type="button" (click)="resetForm()">
                <i class="fas fa-undo"></i> Reset
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-section {
      background: rgba(245, 245, 245, 0.5);
      padding: 20px;
      border-radius: 8px;
    }

    .form-section h3 {
      color: #2e7d32;
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 500;
    }

    .form-row {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }

    .half-width {
      flex: 1;
    }

    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    .form-actions {
      display: flex;
      gap: 16px;
      justify-content: flex-end;
      margin-top: 24px;
    }

    mat-form-field {
      margin-bottom: 8px;
    }

    mat-chip-row {
      background-color: rgba(76, 175, 80, 0.1);
      color: #2e7d32;
    }

    mat-chip-row button {
      color: #2e7d32;
    }

    .form-actions button {
      min-width: 120px;
    }

    .form-actions button i {
      margin-right: 8px;
    }

    @media (max-width: 768px) {
      .form-row {
        flex-direction: column;
      }

      .half-width {
        width: 100%;
      }
    }
  `]
})
export class ProfileManagerComponent implements OnInit {
  profileForm: FormGroup;
  skills: string[] = [];
  languages: string[] = [];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      currentRole: ['', Validators.required],
      experience: [0, [Validators.required, Validators.min(0)]],
      education: ['', Validators.required],
      summary: ['', Validators.required],
      availability: ['Immediate', Validators.required],
      salaryExpectation: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  updateProfile(): void {
    if (this.profileForm.valid) {
      const profile: Profile = {
        id: Date.now().toString(),
        ...this.profileForm.value,
        skills: [...this.skills],
        languages: [...this.languages],
      };
      // Here you would typically send the profile to your backend
      console.log('Profile updated:', profile);
    }
  }

  resetForm(): void {
    this.profileForm.reset();
    this.skills = [];
    this.languages = [];
  }

  addSkill(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.skills.push(value);
      event.chipInput!.clear();
    }
  }

  removeSkill(skill: string): void {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  addLanguage(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.languages.push(value);
      event.chipInput!.clear();
    }
  }

  removeLanguage(language: string): void {
    const index = this.languages.indexOf(language);
    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }
}
