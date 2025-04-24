import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-job-matches',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  template: `
    <div class="job-matches-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Job Matches</mat-card-title>
          <mat-card-subtitle>Jobs that match your profile</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="matches-list">
            <mat-card class="match-card" *ngFor="let match of matches">
              <div class="match-header">
                <div class="match-title">{{ match.title }}</div>
                <div class="match-company">{{ match.company }}</div>
              </div>
              <div class="match-details">
                <div class="match-location">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ match.location }}
                </div>
                <div class="match-type">
                  <i class="fas fa-briefcase"></i>
                  {{ match.type }}
                </div>
              </div>
              <div class="match-score">
                <div class="score-label">Match Score</div>
                <mat-progress-bar
                  mode="determinate"
                  [value]="match.matchScore"
                  [color]="getScoreColor(match.matchScore)"
                ></mat-progress-bar>
                <div class="score-value">{{ match.matchScore }}%</div>
              </div>
              <div class="match-actions">
                <button mat-button color="primary" (click)="viewJob(match)">
                  <i class="fas fa-eye"></i>
                  View Details
                </button>
                <button mat-button color="accent" (click)="applyForJob(match)">
                  <i class="fas fa-paper-plane"></i>
                  Apply Now
                </button>
              </div>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .job-matches-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .matches-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .match-card {
      margin-bottom: 16px;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .match-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .match-header {
      margin-bottom: 12px;
    }

    .match-title {
      font-size: 18px;
      font-weight: 500;
      color: #1976d2;
    }

    .match-company {
      font-size: 14px;
      color: #666;
    }

    .match-details {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .match-location,
    .match-type {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      color: #666;
    }

    .match-score {
      margin: 16px 0;
    }

    .score-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 4px;
    }

    .score-value {
      font-size: 14px;
      color: #1976d2;
      text-align: right;
      margin-top: 4px;
    }

    .match-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    i {
      margin-right: 4px;
    }
  `]
})
export class JobMatchesComponent {
  matches = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full Time',
      matchScore: 95
    },
    {
      title: 'Full Stack Developer',
      company: 'WebSolutions Ltd.',
      location: 'New York, NY',
      type: 'Full Time',
      matchScore: 88
    },
    {
      title: 'React Developer',
      company: 'Digital Innovations',
      location: 'San Francisco, CA',
      type: 'Contract',
      matchScore: 82
    }
  ];

  getScoreColor(score: number): string {
    if (score >= 90) return 'primary';
    if (score >= 80) return 'accent';
    return 'warn';
  }

  viewJob(match: any) {
    console.log('Viewing job:', match);
  }

  applyForJob(match: any) {
    console.log('Applying for job:', match);
  }
}
