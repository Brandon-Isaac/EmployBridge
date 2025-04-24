import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

interface Job {
  id: string;
  title: string;
  company: {
    name: string;
  };
  description: string;
  requirements: string[];
  questions: {
    question: string;
    required: boolean;
  }[];
}

@Component({
  selector: 'app-job-application-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  template: `
    <div class="application-form-container">
      <mat-card class="form-card">
        <mat-card-header>
          <mat-card-title>Apply for {{ job?.title }}</mat-card-title>
          <mat-card-subtitle>{{ job?.company?.name }}</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="applicationForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Cover Letter</mat-label>
              <textarea
                matInput
                formControlName="coverLetter"
                rows="10"
                placeholder="Write your cover letter here..."
              ></textarea>
              <mat-error *ngIf="applicationForm.get('coverLetter')?.hasError('required')">
                Cover letter is required
              </mat-error>
            </mat-form-field>

            <div class="resume-upload">
              <label for="resume">Resume</label>
              <input
                type="file"
                id="resume"
                (change)="onFileSelected($event)"
                accept=".pdf,.doc,.docx"
              />
              <mat-error *ngIf="applicationForm.get('resume')?.hasError('required')">
                Resume is required
              </mat-error>
            </div>

            <div class="questions" *ngIf="job?.questions?.length">
              <h3>Additional Questions</h3>
              <div
                *ngFor="let question of job.questions; let i = index"
                class="question"
                [formGroupName]="'answers'"
              >
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>{{ question.question }}</mat-label>
                  <textarea
                    matInput
                    [formControlName]="i.toString()"
                    rows="3"
                    [placeholder]="'Answer here...'"
                  ></textarea>
                  <mat-error *ngIf="applicationForm.get('answers')?.get(i.toString())?.hasError('required')">
                    This question is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

            <div class="form-actions">
              <button mat-button type="button" (click)="onCancel()">Cancel</button>
              <button
                mat-raised-button
                color="primary"
                type="submit"
                [disabled]="applicationForm.invalid || isSubmitting"
              >
                {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .application-form-container {
        padding: 24px;
        max-width: 800px;
        margin: 0 auto;
      }

      .form-card {
        padding: 24px;
      }

      .full-width {
        width: 100%;
        margin-bottom: 16px;
      }

      .resume-upload {
        margin-bottom: 24px;
      }

      .resume-upload label {
        display: block;
        margin-bottom: 8px;
        color: rgba(0, 0, 0, 0.6);
      }

      .questions {
        margin-top: 24px;
      }

      .questions h3 {
        margin-bottom: 16px;
        color: rgba(0, 0, 0, 0.87);
      }

      .question {
        margin-bottom: 16px;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        margin-top: 24px;
      }

      mat-card-title {
        font-size: 24px;
        margin-bottom: 8px;
      }

      mat-card-subtitle {
        font-size: 16px;
        margin-bottom: 24px;
      }
    `,
  ],
})
export class JobApplicationFormComponent implements OnInit {
  job: Job | null = null;
  applicationForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.applicationForm = this.fb.group({
      coverLetter: ['', Validators.required],
      resume: [null, Validators.required],
      answers: this.fb.group({}),
    });
  }

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['id'];
    this.http.get<Job>(`${environment.apiUrl}/jobs/${jobId}`).subscribe({
      next: (job) => {
        this.job = job;
        if (job.questions) {
          const answersGroup = this.applicationForm.get('answers') as FormGroup;
          job.questions.forEach((_, index) => {
            answersGroup.addControl(
              index.toString(),
              this.fb.control('', _.required ? Validators.required : null)
            );
          });
        }
      },
      error: (error) => {
        this.snackBar.open('Failed to load job details', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
        this.router.navigate(['/jobs']);
      },
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.applicationForm.patchValue({ resume: file });
    }
  }

  onSubmit(): void {
    if (this.applicationForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('jobId', this.job?.id || '');
    formData.append('coverLetter', this.applicationForm.get('coverLetter')?.value);
    formData.append('resume', this.applicationForm.get('resume')?.value);

    const answers = this.applicationForm.get('answers')?.value;
    if (answers && this.job?.questions) {
      const formattedAnswers = Object.keys(answers).map((key) => ({
        question: this.job?.questions[parseInt(key)].question,
        answer: answers[key],
      }));
      formData.append('answers', JSON.stringify(formattedAnswers));
    }

    this.http.post(`${environment.apiUrl}/job-applications`, formData).subscribe({
      next: () => {
        this.snackBar.open('Application submitted successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        this.router.navigate(['/applications']);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.snackBar.open('Failed to submit application', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/jobs']);
  }
} 