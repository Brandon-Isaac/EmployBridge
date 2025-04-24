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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../../../core/services/profile.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { ToastNotificationComponent } from '../../../shared/components/toast-notification/toast-notification.component';

interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  gpa: number;
}

@Component({
  selector: 'app-experience-education',
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTabsModule,
    LoadingSpinnerComponent,
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Experience & Education</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <!-- Experience Tab -->
            <mat-tab label="Experience">
              <form [formGroup]="experienceForm" (ngSubmit)="addExperience()" class="form">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Company</mat-label>
                  <input matInput formControlName="company" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Position</mat-label>
                  <input matInput formControlName="position" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Location</mat-label>
                  <input matInput formControlName="location" />
                </mat-form-field>

                <div class="form-row">
                  <mat-form-field appearance="outline" class="half-width">
                    <mat-label>Start Date</mat-label>
                    <input matInput [matDatepicker]="expStartPicker" formControlName="startDate" required />
                    <mat-datepicker-toggle matSuffix [for]="expStartPicker"></mat-datepicker-toggle>
                    <mat-datepicker #expStartPicker></mat-datepicker>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="half-width" *ngIf="!experienceForm.get('isCurrent')?.value">
                    <mat-label>End Date</mat-label>
                    <input matInput [matDatepicker]="expEndPicker" formControlName="endDate" />
                    <mat-datepicker-toggle matSuffix [for]="expEndPicker"></mat-datepicker-toggle>
                    <mat-datepicker #expEndPicker></mat-datepicker>
                  </mat-form-field>
                </div>

                <mat-checkbox formControlName="isCurrent" (change)="onCurrentJobChange($event)">
                  I currently work here
                </mat-checkbox>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Description</mat-label>
                  <textarea matInput formControlName="description" rows="4"></textarea>
                </mat-form-field>

                <button mat-raised-button color="primary" type="submit" [disabled]="!experienceForm.valid || isLoading">
                  Add Experience
                </button>
              </form>

              <mat-accordion class="list">
                <mat-expansion-panel *ngFor="let exp of experiences">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ exp.position }}</mat-panel-title>
                    <mat-panel-description>{{ exp.company }}</mat-panel-description>
                  </mat-expansion-panel-header>

                  <p>{{ exp.description }}</p>
                  <div class="details">
                    <span>Location: {{ exp.location }}</span>
                    <span>Duration: {{ exp.startDate | date }} - {{ exp.isCurrent ? 'Present' : (exp.endDate | date) }}</span>
                  </div>

                  <mat-action-row>
                    <button mat-button color="primary" (click)="editExperience(exp)">Edit</button>
                    <button mat-button color="warn" (click)="deleteExperience(exp)">Delete</button>
                  </mat-action-row>
                </mat-expansion-panel>
              </mat-accordion>
            </mat-tab>

            <!-- Education Tab -->
            <mat-tab label="Education">
              <form [formGroup]="educationForm" (ngSubmit)="addEducation()" class="form">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Institution</mat-label>
                  <input matInput formControlName="institution" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Degree</mat-label>
                  <input matInput formControlName="degree" required />
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Field of Study</mat-label>
                  <input matInput formControlName="field" required />
                </mat-form-field>

                <div class="form-row">
                  <mat-form-field appearance="outline" class="half-width">
                    <mat-label>Start Date</mat-label>
                    <input matInput [matDatepicker]="eduStartPicker" formControlName="startDate" required />
                    <mat-datepicker-toggle matSuffix [for]="eduStartPicker"></mat-datepicker-toggle>
                    <mat-datepicker #eduStartPicker></mat-datepicker>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="half-width" *ngIf="!educationForm.get('isCurrent')?.value">
                    <mat-label>End Date</mat-label>
                    <input matInput [matDatepicker]="eduEndPicker" formControlName="endDate" />
                    <mat-datepicker-toggle matSuffix [for]="eduEndPicker"></mat-datepicker-toggle>
                    <mat-datepicker #eduEndPicker></mat-datepicker>
                  </mat-form-field>
                </div>

                <mat-checkbox formControlName="isCurrent" (change)="onCurrentEducationChange($event)">
                  Currently studying here
                </mat-checkbox>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>GPA</mat-label>
                  <input matInput type="number" step="0.01" formControlName="gpa" />
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Description</mat-label>
                  <textarea matInput formControlName="description" rows="4"></textarea>
                </mat-form-field>

                <button mat-raised-button color="primary" type="submit" [disabled]="!educationForm.valid || isLoading">
                  Add Education
                </button>
              </form>

              <mat-accordion class="list">
                <mat-expansion-panel *ngFor="let edu of educations">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{ edu.degree }}</mat-panel-title>
                    <mat-panel-description>{{ edu.institution }}</mat-panel-description>
                  </mat-expansion-panel-header>

                  <p>{{ edu.description }}</p>
                  <div class="details">
                    <span>Field: {{ edu.field }}</span>
                    <span>Duration: {{ edu.startDate | date }} - {{ edu.isCurrent ? 'Present' : (edu.endDate | date) }}</span>
                    <span *ngIf="edu.gpa">GPA: {{ edu.gpa }}</span>
                  </div>

                  <mat-action-row>
                    <button mat-button color="primary" (click)="editEducation(edu)">Edit</button>
                    <button mat-button color="warn" (click)="deleteEducation(edu)">Delete</button>
                  </mat-action-row>
                </mat-expansion-panel>
              </mat-accordion>
            </mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
    </div>
    <app-loading-spinner *ngIf="isLoading"></app-loading-spinner>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .form {
      margin-bottom: 20px;
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

    .list {
      margin-top: 20px;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 16px;
    }

    mat-action-row {
      margin-top: 16px;
    }

    @media (max-width: 600px) {
      .form-row {
        flex-direction: column;
      }
    }
  `]
})
export class ExperienceEducationComponent implements OnInit {
  experienceForm: FormGroup;
  educationForm: FormGroup;
  experiences: Experience[] = [];
  educations: Education[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private snackBar: MatSnackBar
  ) {
    this.experienceForm = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      location: [''],
      startDate: [null, Validators.required],
      endDate: [null],
      isCurrent: [false],
      description: ['']
    });

    this.educationForm = this.fb.group({
      institution: ['', Validators.required],
      degree: ['', Validators.required],
      field: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null],
      isCurrent: [false],
      gpa: [null],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.profileService.getExperiences().subscribe({
      next: (response) => {
        this.experiences = response.experiences;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading experiences:', error);
        this.showError('Failed to load experiences');
        this.isLoading = false;
      }
    });

    this.profileService.getEducations().subscribe({
      next: (response) => {
        this.educations = response.educations;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading educations:', error);
        this.showError('Failed to load educations');
        this.isLoading = false;
      }
    });
  }

  onCurrentJobChange(event: any): void {
    const isCurrent = event.checked;
    if (isCurrent) {
      this.experienceForm.get('endDate')?.disable();
    } else {
      this.experienceForm.get('endDate')?.enable();
    }
  }

  onCurrentEducationChange(event: any): void {
    const isCurrent = event.checked;
    if (isCurrent) {
      this.educationForm.get('endDate')?.disable();
    } else {
      this.educationForm.get('endDate')?.enable();
    }
  }

  addExperience(): void {
    if (this.experienceForm.valid) {
      this.isLoading = true;
      const experienceData = {
        ...this.experienceForm.value,
        startDate: this.experienceForm.value.startDate.toISOString(),
        endDate: this.experienceForm.value.endDate?.toISOString()
      };

      this.profileService.addExperience(experienceData).subscribe({
        next: (response) => {
          this.experiences.push(response.experience);
          this.experienceForm.reset();
          this.showSuccess('Experience added successfully');
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error adding experience:', error);
          this.showError('Failed to add experience');
          this.isLoading = false;
        }
      });
    }
  }

  addEducation(): void {
    if (this.educationForm.valid) {
      this.isLoading = true;
      const educationData = {
        ...this.educationForm.value,
        startDate: this.educationForm.value.startDate.toISOString(),
        endDate: this.educationForm.value.endDate?.toISOString()
      };

      this.profileService.addEducation(educationData).subscribe({
        next: (response) => {
          this.educations.push(response.education);
          this.educationForm.reset();
          this.showSuccess('Education added successfully');
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error adding education:', error);
          this.showError('Failed to add education');
          this.isLoading = false;
        }
      });
    }
  }

  editExperience(experience: Experience): void {
    // TODO: Implement edit functionality
    console.log('Edit experience:', experience);
  }

  editEducation(education: Education): void {
    // TODO: Implement edit functionality
    console.log('Edit education:', education);
  }

  deleteExperience(experience: Experience): void {
    if (confirm('Are you sure you want to delete this experience?')) {
      this.isLoading = true;
      this.profileService.deleteExperience(experience.id).subscribe({
        next: () => {
          this.experiences = this.experiences.filter(e => e.id !== experience.id);
          this.showSuccess('Experience deleted successfully');
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error deleting experience:', error);
          this.showError('Failed to delete experience');
          this.isLoading = false;
        }
      });
    }
  }

  deleteEducation(education: Education): void {
    if (confirm('Are you sure you want to delete this education?')) {
      this.isLoading = true;
      this.profileService.deleteEducation(education.id).subscribe({
        next: () => {
          this.educations = this.educations.filter(e => e.id !== education.id);
          this.showSuccess('Education deleted successfully');
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error deleting education:', error);
          this.showError('Failed to delete education');
          this.isLoading = false;
        }
      });
    }
  }

  private showSuccess(message: string): void {
    this.snackBar.openFromComponent(ToastNotificationComponent, {
      data: {
        message,
        type: 'success',
        duration: 5000,
      },
    });
  }

  private showError(message: string): void {
    this.snackBar.openFromComponent(ToastNotificationComponent, {
      data: {
        message,
        type: 'error',
        duration: 5000,
      },
    });
  }
} 