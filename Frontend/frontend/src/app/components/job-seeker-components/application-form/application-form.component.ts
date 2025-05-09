import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faTimes, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { ApplicationService } from '../../../services/application.service';
import { ProfileService } from '../../../services/profile.service';
import { CareerPathService } from '../../../services/career-path.service';
import { CVService } from '../../../services/cv.service';
import { AuthService } from '../../../services/auth.service';
import { SkillService } from '../../../services/skill.service';

interface Job {
  id: string;
  title: string;
  employer: {
    company: string;
  };
}

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FontAwesomeModule
  ],
  template: `
    <div class="application-form-container">
      <div class="form-header">
        <h2>Apply for {{data.job.title}}</h2>
        <p class="company">{{data.job.employer.company}}</p>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Processing your application...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="checkProfileCompletion()">Retry</button>
      </div>

      <!-- Application Form -->
      <form *ngIf="!isLoading && !error" [formGroup]="applicationForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Cover Letter</mat-label>
          <textarea matInput formControlName="coverLetter" rows="6" 
                    placeholder="Explain why you're a good fit for this position..."></textarea>
          <mat-error *ngIf="applicationForm.get('coverLetter')?.hasError('required')">
            Cover letter is required
          </mat-error>
        </mat-form-field>

        <div class="form-actions">
          <button mat-button type="button" (click)="onCancel()">
            <fa-icon [icon]="faTimes" class="icon"></fa-icon>
            Cancel
          </button>
          <button mat-raised-button color="primary" type="submit" [disabled]="applicationForm.invalid">
            <fa-icon [icon]="faPaperPlane" class="icon"></fa-icon>
            Submit Application
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .application-form-container {
      padding: 24px;
      max-width: 600px;
      margin: 0 auto;
    }

    .form-header {
      margin-bottom: 24px;
      text-align: center;
    }

    .form-header h2 {
      margin: 0;
      color: #2c3e50;
    }

    .company {
      color: #666;
      margin: 8px 0 0;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      gap: 16px;
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      gap: 16px;
    }

    .error-message {
      color: #dc3545;
      font-size: 1.1rem;
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

    .icon {
      margin-right: 8px;
    }
  `]
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  isLoading = false;
  error: string | null = null;
  profileCompletion: number = 0;
  user: any;
  skills: any[] = [];
  cv: any;
  careerPath: any;
  applications: any[] = [];

  // Font Awesome icons
  faPaperPlane = faPaperPlane;
  faTimes = faTimes;
  faCheck = faCheck;
  faClock = faClock;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ApplicationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { job: Job },
    private applicationService: ApplicationService,
    private profileService: ProfileService,
    private snackBar: MatSnackBar,
    private careerPathService: CareerPathService,
    private skillService: SkillService,
    private authService: AuthService,
    private cvService: CVService,
  ) {
    this.applicationForm = this.fb.group({
      coverLetter: ['', [Validators.required, Validators.minLength(100)]]
    });
  }

  ngOnInit(): void {
    this.checkProfileCompletion();
  }

  checkProfileCompletion(): void {
    this.isLoading = true;
    this.error = null;

    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.user = profile;
        this.calculateProfileCompletion();
        this.loadUserSkills();
        this.loadUserApplications();
        this.loadUserCV();
        this.loadCareerPath();

        // if (this.profileCompletion < 100) {
        //   this.error = 'Please complete your profile before applying for jobs.';
        //   this.snackBar.open('Please complete your profile before applying for jobs.', 'Close', {
        //     duration: 5000,
        //     panelClass: ['error-snackbar']
        //   });
        // }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error checking profile:', error);
        this.error = 'Failed to verify profile completion. Please try again.';
        this.isLoading = false;
      }
    });
  }

  private loadUserSkills(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.skillService.getUserSkills(user.id).subscribe({
        next: (skills) => {
          this.skills = skills;
          this.calculateProfileCompletion();
        },
        error: (error) => {
          console.error('Error loading skills:', error);
          // Don't set error state here, just log it
        }
      });
    }
  }

  private loadUserApplications(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.applicationService.getUserApplications(user.id).subscribe({
        next: (applications) => {
          this.applications = applications;
        },
        error: (error) => {
          console.error('Error loading applications:', error);
          // Don't set error state here, just log it
        }
      });
    }
  }

  private loadUserCV(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.cvService.getCV(user.id).subscribe({
        next: (cv) => {
          this.cv = cv;
          this.calculateProfileCompletion();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading CV:', error);
          // Don't set error state here, just log it
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
  }

  private loadCareerPath(): void {
    this.careerPathService.getUserCareerPaths().subscribe({
      next: (careerPaths) => {
        if (careerPaths.length > 0) {
          // Get the most recent career path
          this.careerPath = careerPaths[0];
          this.calculateProfileCompletion();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading career path:', error);
        // Don't set error state here, just log it
        this.isLoading = false;
      }
    });
  }

  getStatusIcon(status: string) {
    switch (status.toLowerCase()) {
      case 'accepted':
        return this.faCheck;
      case 'rejected':
        return this.faTimes;
      default:
        return this.faClock;
    }
  }

  private calculateProfileCompletion(): void {
    let completion = 0;
    const totalFields = 5; // name, skills, cv, position, career path

    if (this.user?.name) completion++;
    if (this.skills.length > 0) completion++;
    if (this.cv) completion++;
    if (this.user?.position) completion++;
    if (this.careerPath) completion++;

    this.profileCompletion = Math.round((completion / totalFields) * 100);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.applicationForm.valid) {
      this.isLoading = true;
      this.error = null;

      const applicationData = {
        jobId: this.data.job.id,
        coverLetter: this.applicationForm.value.coverLetter,
        status: 'pending',
        createdAt: new Date()
      };

      this.applicationService.createApplication(applicationData).subscribe({
        next: () => {
          this.isLoading = false;
          this.snackBar.open('Application submitted successfully!', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error submitting application:', error);
          this.isLoading = false;
          this.error = 'Failed to submit application. Please try again.';
        }
      });
    }
  }  
} 