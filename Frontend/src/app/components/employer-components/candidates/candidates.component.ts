import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faFileAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { CandidateService, Candidate } from '../../../services/candidate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employer-candidates',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  template: `
    <div class="candidates-container">
      <mat-card class="candidates-card">
        <mat-card-header>
          <mat-card-title>Candidate List</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="candidates-content">
            <table mat-table [dataSource]="candidates" matSort class="candidates-table">
              <!-- Name Column -->
              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="candidate-name">
                    <fa-icon [icon]="faUser"></fa-icon>
                    {{candidate.name}}
                  </div>
                </td>
              </ng-container>

              <!-- Contact Column -->
              <ng-container matColumnDef="contact">
                <th mat-header-cell *matHeaderCellDef>Contact</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="contact-info">
                    <div class="contact-item">
                      <fa-icon [icon]="faEnvelope"></fa-icon>
                      {{candidate.email}}
                    </div>
                    <div class="contact-item">
                      <fa-icon [icon]="faPhone"></fa-icon>
                      {{candidate.phone}}
                    </div>
                  </div>
                </td>
              </ng-container>

              <!-- Location Column -->
              <ng-container matColumnDef="location">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="location">
                    <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                    {{candidate.location}}
                  </div>
                </td>
              </ng-container>

              <!-- Skills Column -->
              <ng-container matColumnDef="skills">
                <th mat-header-cell *matHeaderCellDef>Skills</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="skills-list">
                    <mat-chip *ngFor="let skill of candidate.skills">
                      {{skill}}
                    </mat-chip>
                  </div>
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let candidate">
                  <button mat-button color="primary" (click)="viewDetails(candidate)">
                    View Details
                  </button>
                  <a mat-button color="accent" [href]="candidate.resumeUrl" target="_blank">
                    <fa-icon [icon]="faDownload"></fa-icon>
                    Resume
                  </a>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

              <!-- Expanded Content -->
              <tr class="detail-row" *matRowDef="let row; columns: ['expandedDetail']" class="expanded-detail"></tr>
            </table>

            <mat-paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>

            <!-- Candidate Details Dialog -->
            <div class="candidate-details" *ngIf="selectedCandidate">
              <h3>Experience</h3>
              <mat-accordion>
                <mat-expansion-panel *ngFor="let exp of selectedCandidate.experience">
                  <mat-expansion-panel-header>
                    <mat-panel-title>
                      <fa-icon [icon]="faBriefcase"></fa-icon>
                      {{exp.position}} at {{exp.company}}
                    </mat-panel-title>
                    <mat-panel-description>
                      {{exp.duration}}
                    </mat-panel-description>
                  </mat-expansion-panel-header>
                  <p>{{exp.description}}</p>
                </mat-expansion-panel>
              </mat-accordion>

              <h3>Education</h3>
              <mat-accordion>
                <mat-expansion-panel *ngFor="let edu of selectedCandidate.education">
                  <mat-expansion-panel-header>
                    <mat-panel-title>
                      <fa-icon [icon]="faGraduationCap"></fa-icon>
                      {{edu.degree}} in {{edu.field}}
                    </mat-panel-title>
                    <mat-panel-description>
                      {{edu.institution}} ({{edu.graduationYear}})
                    </mat-panel-description>
                  </mat-expansion-panel-header>
                </mat-expansion-panel>
              </mat-accordion>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .candidates-container {
      padding: 20px;
    }
    .candidates-card {
      max-width: 1200px;
      margin: 0 auto;
    }
    .candidates-content {
      padding: 20px 0;
    }
    .candidates-table {
      width: 100%;
    }
    .candidate-name {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .location {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .candidate-details {
      margin-top: 20px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .candidate-details h3 {
      margin: 16px 0 8px;
      color: #333;
    }
    mat-expansion-panel {
      margin-bottom: 8px;
    }
    fa-icon {
      margin-right: 8px;
      color: #666;
    }
    .mat-column-actions {
      width: 200px;
    }
  `]
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[] = [];
  selectedCandidate: Candidate | null = null;
  displayedColumns: string[] = ['name', 'contact', 'location', 'skills', 'actions'];

  // Font Awesome icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faFileAlt = faFileAlt;
  faDownload = faDownload;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Candidate>;

  constructor(
    private candidateService: CandidateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadCandidates();
  }

  loadCandidates() {
    this.candidateService.getCandidates().subscribe({
      next: (candidates) => {
        this.candidates = candidates;
      },
      error: (error) => {
        console.error('Error loading candidates:', error);
        this.snackBar.open(
          'Failed to load candidates. Please try again.',
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

  viewDetails(candidate: Candidate) {
    this.selectedCandidate = candidate;
  }
} 