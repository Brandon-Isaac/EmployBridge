import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

interface Application {
  id: string;
  job: {
    title: string;
    company: {
      name: string;
    };
    description: string;
    requirements: string[];
  };
  coverLetter: string;
  resume: {
    url: string;
    fileName: string;
    fileType: string;
  };
  answers: {
    question: string;
    answer: string;
  }[];
  appliedDate: Date;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  lastUpdated: Date;
}

@Component({
  selector: 'app-application-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
  ],
  template: `
    <h2 mat-dialog-title>Application Details</h2>
    <mat-dialog-content>
      <div class="application-details">
        <div class="job-info">
          <h3>{{ data.job.title }}</h3>
          <p class="company">{{ data.job.company.name }}</p>
          <mat-chip [class]="getStatusClass(data.status)" selected>
            {{ data.status | titlecase }}
          </mat-chip>
        </div>

        <mat-divider></mat-divider>

        <div class="application-info">
          <h4>Application Information</h4>
          <p><strong>Applied Date:</strong> {{ data.appliedDate | date : 'mediumDate' }}</p>
          <p><strong>Last Updated:</strong> {{ data.lastUpdated | date : 'mediumDate' }}</p>
        </div>

        <mat-divider></mat-divider>

        <div class="cover-letter">
          <h4>Cover Letter</h4>
          <p>{{ data.coverLetter }}</p>
        </div>

        <mat-divider></mat-divider>

        <div class="resume">
          <h4>Resume</h4>
          <a [href]="data.resume.url" target="_blank" class="resume-link">
            <i class="fas fa-file-pdf"></i>
            {{ data.resume.fileName }}
          </a>
        </div>

        <mat-divider></mat-divider>

        <div class="answers" *ngIf="data.answers && data.answers.length > 0">
          <h4>Additional Questions</h4>
          <div class="answer" *ngFor="let answer of data.answers">
            <p class="question">{{ answer.question }}</p>
            <p class="answer-text">{{ answer.answer }}</p>
          </div>
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .application-details {
        padding: 16px;
      }

      .job-info {
        margin-bottom: 16px;
      }

      .job-info h3 {
        margin: 0;
        color: var(--dark-brown);
        font-size: 1.5rem;
      }

      .company {
        color: var(--light-brown);
        margin: 8px 0;
      }

      .application-info {
        margin: 16px 0;
      }

      .application-info h4 {
        margin: 0 0 8px 0;
        color: var(--dark-brown);
      }

      .cover-letter {
        margin: 16px 0;
      }

      .cover-letter h4 {
        margin: 0 0 8px 0;
        color: var(--dark-brown);
      }

      .resume {
        margin: 16px 0;
      }

      .resume h4 {
        margin: 0 0 8px 0;
        color: var(--dark-brown);
      }

      .resume-link {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-brown);
        text-decoration: none;
      }

      .resume-link:hover {
        text-decoration: underline;
      }

      .answers {
        margin: 16px 0;
      }

      .answers h4 {
        margin: 0 0 8px 0;
        color: var(--dark-brown);
      }

      .answer {
        margin: 16px 0;
      }

      .question {
        font-weight: 500;
        color: var(--dark-brown);
        margin: 0 0 4px 0;
      }

      .answer-text {
        color: var(--text-brown);
        margin: 0;
      }

      mat-divider {
        margin: 16px 0;
      }
    `
  ]
})
export class ApplicationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Application) {}

  getStatusClass(status: string): string {
    switch (status) {
      case 'hired':
        return 'hired-chip';
      case 'shortlisted':
        return 'shortlisted-chip';
      case 'rejected':
        return 'rejected-chip';
      case 'reviewed':
        return 'reviewed-chip';
      case 'pending':
      default:
        return 'pending-chip';
    }
  }
} 