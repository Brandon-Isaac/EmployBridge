import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { animate, style, transition, trigger } from '@angular/animations';

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  status: string;
  applicants: number;
  posted: string;
}

@Component({
  selector: 'app-active-listings',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
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
    <div class="listings-container" [@fadeIn]>
      <div class="page-header">
        <h1 class="page-title">Active Job Listings</h1>
        <p class="page-subtitle">Manage your current job postings</p>
      </div>
      
      <mat-card class="listings-card">
        <mat-card-content>
          <table mat-table [dataSource]="jobListings" class="mat-elevation-z0 job-table">
            <ng-container matColumnDef="title">
              <th mat-header-cell *matHeaderCellDef>Position</th>
              <td mat-cell *matCellDef="let job" class="job-title">{{ job.title }}</td>
            </ng-container>

            <ng-container matColumnDef="department">
              <th mat-header-cell *matHeaderCellDef>Department</th>
              <td mat-cell *matCellDef="let job" class="department-cell">{{ job.department }}</td>
            </ng-container>

            <ng-container matColumnDef="location">
              <th mat-header-cell *matHeaderCellDef>Location</th>
              <td mat-cell *matCellDef="let job" class="location-cell">
                <span class="location-text">
                  <i class="fas fa-map-marker-alt location-icon"></i>
                  <span class="location-value">{{ job.location }}</span>
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="type">
              <th mat-header-cell *matHeaderCellDef>Type</th>
              <td mat-cell *matCellDef="let job" class="type-cell">
                <span class="job-type">{{ job.type }}</span>
              </td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let job" class="status-cell">
                <span class="status-chip" [ngClass]="job.status === 'Active' ? 'status-active' : 'status-paused'">
                  <i class="fas" [ngClass]="job.status === 'Active' ? 'fa-check-circle' : 'fa-pause-circle'"></i>
                  <span class="status-text">{{ job.status }}</span>
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="applicants">
              <th mat-header-cell *matHeaderCellDef>Applicants</th>
              <td mat-cell *matCellDef="let job" class="applicants-cell">
                <div class="applicants-count">
                  <span class="applicant-number">{{ job.applicants }}</span>
                  <span class="applicant-text">applicants</span>
                </div>
              </td>
            </ng-container>

            <ng-container matColumnDef="posted">
              <th mat-header-cell *matHeaderCellDef>Posted</th>
              <td mat-cell *matCellDef="let job" class="posted-cell">
                <div class="posted-date">
                  <i class="fas fa-calendar-alt date-icon"></i>
                  <span class="date-text">{{ job.posted | date:'MMM d, y' }}</span>
                </div>
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let job" class="actions-cell">
                <div class="action-buttons">
                  <button mat-button class="edit-button">
                    <i class="fas fa-edit"></i>
                    <span class="button-text">Edit</span>
                  </button>
                  <button mat-button class="close-button">
                    <i class="fas fa-times"></i>
                    <span class="button-text">Close</span>
                  </button>
                </div>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns" class="header-row"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns" class="job-row"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      :host {
        --primary-color: rgba(102, 187, 106, 0.95);
        --primary-dark: rgba(56, 142, 60, 0.95);
        --primary-light: rgba(200, 230, 201, 0.7);
        --accent-color: #4caf50;
        --text-primary: #2e7d32;
        --text-secondary: #455a64;
        --background-light: rgba(245, 245, 245, 0.95);
        --card-bg: rgba(255, 255, 255, 0.98);
        --active-bg: rgba(200, 230, 201, 0.5);
        --hover-opacity: 0.08;
      }

      .listings-container {
        padding: 0;
        width: 100%;
      }

      .page-header {
        margin-bottom: 24px;
      }

      .page-title {
        color: var(--text-primary);
        font-size: 28px;
        font-weight: 500;
        margin: 0 0 8px 0;
      }

      .page-subtitle {
        color: var(--text-secondary);
        font-size: 16px;
        margin: 0;
        opacity: 0.8;
      }

      .listings-card {
        background-color: var(--card-bg);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      .job-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
      }

      .header-row {
        height: 56px;
        background-color: var(--primary-light);
      }

      th.mat-header-cell {
        color: var(--text-primary);
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 0 16px !important;
        border: none;
      }

      td.mat-cell {
        padding: 12px 16px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        color: var(--text-secondary);
        font-size: 14px;
        transition: all 0.2s ease;
      }

      .job-row {
        height: 72px;
        transition: background-color 0.2s ease;
      }

      .job-row:hover {
        background-color: rgba(200, 230, 201, 0.2);
      }

      .job-title {
        font-weight: 500;
        color: var(--text-primary);
        font-size: 15px;
      }

      .location-text {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .location-icon {
        color: var(--text-primary);
        font-size: 14px;
      }

      .job-type {
        padding: 4px 10px;
        border-radius: 16px;
        background-color: var(--primary-light);
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 500;
      }

      .status-chip {
        display: inline-flex;
        align-items: center;
        padding: 4px 10px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;
        gap: 6px;
      }

      .status-active {
        background-color: rgba(76, 175, 80, 0.15);
        color: #2e7d32;
      }

      .status-paused {
        background-color: rgba(255, 152, 0, 0.15);
        color: #ef6c00;
      }

      .applicants-count {
        display: flex;
        flex-direction: column;
      }

      .applicant-number {
        font-weight: 600;
        font-size: 16px;
        color: var(--text-primary);
      }

      .applicant-text {
        font-size: 12px;
        opacity: 0.7;
      }

      .posted-date {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .date-icon {
        color: var(--text-primary);
        opacity: 0.7;
      }

      .action-buttons {
        display: flex;
        gap: 8px;
      }

      .edit-button {
        color: var(--text-primary);
        background-color: rgba(76, 175, 80, 0.1);
        border-radius: 6px;
        transition: all 0.2s ease;
      }

      .edit-button:hover {
        background-color: rgba(76, 175, 80, 0.2);
      }

      .close-button {
        color: #f44336;
        background-color: rgba(244, 67, 54, 0.1);
        border-radius: 6px;
        transition: all 0.2s ease;
      }

      .close-button:hover {
        background-color: rgba(244, 67, 54, 0.2);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .listings-container {
          padding: 0;
        }

        .job-table {
          display: block;
          overflow-x: auto;
          white-space: nowrap;
        }
      }

      .department-cell {
        min-width: 120px;
      }

      .location-cell {
        min-width: 150px;
      }

      .location-text {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .location-value {
        white-space: nowrap;
      }

      .type-cell {
        min-width: 100px;
      }

      .status-cell {
        min-width: 120px;
      }

      .status-text {
        margin-left: 4px;
      }

      .applicants-cell {
        min-width: 120px;
      }

      .posted-cell {
        min-width: 140px;
      }

      .actions-cell {
        min-width: 180px;
      }

      .job-title {
        min-width: 200px;
        font-weight: 500;
        color: var(--text-primary);
      }
    `,
  ],
})
export class ActiveListingsComponent {
  displayedColumns: string[] = [
    'title',
    'department',
    'location',
    'type',
    'status',
    'applicants',
    'posted',
    'actions',
  ];

  jobListings: JobListing[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      status: 'Active',
      applicants: 12,
      posted: '2024-03-01',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      status: 'Active',
      applicants: 8,
      posted: '2024-03-05',
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Contract',
      status: 'Paused',
      applicants: 5,
      posted: '2024-03-10',
    },
  ];
}