import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faFileAlt,
  faCheckCircle,
  faTimesCircle,
  faClock,
  faEye,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { ApplicationService, Application, ApplicationStatus } from '../../../services/application.service';
import { CandidateService, Candidate } from '../../../services/candidate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employer-applications',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    FontAwesomeModule
  ],
  template: `
    <div class="applications-container">
      <mat-card class="applications-card">
        <mat-card-header>
          <mat-card-title>Job Applications</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="applications-content">
            <table mat-table [dataSource]="applications" matSort class="applications-table">
              <!-- Candidate Name Column -->
              <ng-container matColumnDef="candidateName">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Candidate</th>
                <td mat-cell *matCellDef="let application">
                  <div class="candidate-info">
                    <fa-icon [icon]="faUser"></fa-icon>
                    {{getCandidateName(application.userId)}}
                  </div>
                </td>
              </ng-container>

              <!-- Applied Date Column -->
              <ng-container matColumnDef="appliedAt">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Applied Date</th>
                <td mat-cell *matCellDef="let application">
                  {{applicationService.formatDate(application.appliedAt)}}
                </td>
              </ng-container>

              <!-- Match Score Column -->
              <ng-container matColumnDef="matchScore">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Match Score</th>
                <td mat-cell *matCellDef="let application">
                  <div class="match-score" [ngClass]="getMatchScoreClass(application.matchScore)">
                    {{application.matchScore}}%
                  </div>
                </td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                <td mat-cell *matCellDef="let application">
                  <mat-chip [color]="applicationService.getStatusColor(application.status)" selected>
                    {{application.status}}
                  </mat-chip>
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let application">
                  <button mat-icon-button [matMenuTriggerFor]="menu">
                    <fa-icon [icon]="faEllipsisV"></fa-icon>
                  </button>
                  <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="viewApplication(application)">
                      <fa-icon [icon]="faEye"></fa-icon>
                      <span>View Details</span>
                    </button>
                    <button mat-menu-item (click)="updateStatus(application.id, ApplicationStatus.REVIEWED)">
                      <fa-icon [icon]="faCheckCircle"></fa-icon>
                      <span>Mark as Reviewed</span>
                    </button>
                    <button mat-menu-item (click)="updateStatus(application.id, ApplicationStatus.INTERVIEW)">
                      <fa-icon [icon]="faClock"></fa-icon>
                      <span>Schedule Interview</span>
                    </button>
                    <button mat-menu-item (click)="updateStatus(application.id, ApplicationStatus.REJECTED)">
                      <fa-icon [icon]="faTimesCircle"></fa-icon>
                      <span>Reject</span>
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
            <mat-paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>

            <!-- Application Details Dialog -->
            <div class="application-details" *ngIf="selectedApplication">
              <h3>Application Details</h3>
              <div class="details-content">
                <div class="detail-section">
                  <h4>Cover Letter</h4>
                  <p>{{selectedApplication.coverLetter}}</p>
                </div>
                <div class="detail-section">
                  <h4>Candidate Information</h4>
                  <div class="candidate-details" *ngIf="selectedCandidate">
                    <p><strong>Name:</strong> {{selectedCandidate.name}}</p>
                    <p><strong>Email:</strong> {{selectedCandidate.email}}</p>
                    <p><strong>Phone:</strong> {{selectedCandidate.phone}}</p>
                    <p><strong>Location:</strong> {{selectedCandidate.location}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .applications-container {
      padding: 20px;
    }
    .applications-card {
      max-width: 1200px;
      margin: 0 auto;
    }
    .applications-content {
      padding: 20px 0;
    }
    .applications-table {
      width: 100%;
    }
    .candidate-info {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .match-score {
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 500;
    }
    .match-score.high {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    .match-score.medium {
      background-color: #fff3e0;
      color: #ef6c00;
    }
    .match-score.low {
      background-color: #ffebee;
      color: #c62828;
    }
    .application-details {
      margin-top: 20px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .detail-section {
      margin-bottom: 20px;
    }
    .detail-section h4 {
      margin-bottom: 8px;
      color: #333;
    }
    fa-icon {
      margin-right: 8px;
      color: #666;
    }
    .mat-column-actions {
      width: 80px;
    }
  `]
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];
  selectedApplication: Application | null = null;
  selectedCandidate: Candidate | null = null;
  displayedColumns: string[] = ['candidateName', 'appliedAt', 'matchScore', 'status', 'actions'];
  ApplicationStatus = ApplicationStatus; // Make enum available in template

  // Font Awesome icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faClock = faClock;
  faEye = faEye;
  faEllipsisV = faEllipsisV;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Application>;

  constructor(
    public applicationService: ApplicationService,
    private candidateService: CandidateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationService.getJobApplications('all').subscribe({
      next: (applications) => {
        this.applications = applications;
      },
      error: (error) => {
        console.error('Error loading applications:', error);
        this.snackBar.open(
          'Failed to load applications. Please try again.',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      }
    });
  }

  getCandidateName(userId: string): string {
    // TODO: Implement candidate name lookup
    return 'Loading...';
  }

  getMatchScoreClass(score: number): string {
    if (score >= 80) return 'high';
    if (score >= 60) return 'medium';
    return 'low';
  }

  viewApplication(application: Application) {
    this.selectedApplication = application;
    // Load candidate details
    this.candidateService.getCandidateById(application.userId).subscribe({
      next: (candidate) => {
        this.selectedCandidate = candidate;
      },
      error: (error) => {
        console.error('Error loading candidate details:', error);
        this.snackBar.open(
          'Failed to load candidate details. Please try again.',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      }
    });
  }

  updateStatus(applicationId: string, newStatus: ApplicationStatus) {
    this.applicationService.updateApplicationStatus(applicationId, newStatus).subscribe({
      next: () => {
        this.loadApplications(); // Reload applications after status update
        this.snackBar.open(
          'Application status updated successfully.',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      },
      error: (error) => {
        console.error('Error updating application status:', error);
        this.snackBar.open(
          'Failed to update application status. Please try again.',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      }
    });
  }
} 