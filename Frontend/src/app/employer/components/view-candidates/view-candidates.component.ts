import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, Sort, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';

interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: number;
  matchScore: number;
  skills: string[];
  status: string;
  appliedDate?: Date;
  education?: string;
}

@Component({
  selector: 'app-view-candidates',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  template: `
    <div class="view-candidates-container">
      <div class="header-section">
        <div class="title-section">
          <h1>Candidate Analytics</h1>
          <p class="subtitle">Track, analyze, and manage your talent pipeline</p>
        </div>
        <div class="metrics-section">
          <div class="metric-card">
            <div class="metric-value">{{ candidates.length }}</div>
            <div class="metric-label">Active Candidates</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">{{ getInterviewingCount() }}</div>
            <div class="metric-label">Interviews Scheduled</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">{{ getAverageMatchScore() }}%</div>
            <div class="metric-label">Avg. Match Score</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">{{ getPositionsToFill() }}</div>
            <div class="metric-label">Positions to Fill</div>
          </div>
        </div>
      </div>

      <mat-divider></mat-divider>

      <mat-tab-group>
        <mat-tab label="Card View">
          <div class="filters-panel">
            <div class="search-filter">
              <mat-form-field appearance="outline">
                <mat-label>Search Candidates</mat-label>
                <input matInput placeholder="Name, skills, or location" [(ngModel)]="searchText">
                <i class="fas fa-search" matSuffix></i>
              </mat-form-field>
            </div>

            <div class="filter-controls">
              <mat-form-field appearance="outline">
                <mat-label>Skills</mat-label>
                <mat-select multiple [(ngModel)]="selectedSkills">
                  <mat-option *ngFor="let skill of availableSkills" [value]="skill">
                    {{ skill }}
                  </mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Experience</mat-label>
                <mat-select [(ngModel)]="experienceLevel">
                  <mat-option value="">All Levels</mat-option>
                  <mat-option value="entry">Entry Level (0-2 years)</mat-option>
                  <mat-option value="mid">Mid Level (3-5 years)</mat-option>
                  <mat-option value="senior">Senior Level (6+ years)</mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Status</mat-label>
                <mat-select [(ngModel)]="selectedStatus">
                  <mat-option value="">All Statuses</mat-option>
                  <mat-option value="New">New</mat-option>
                  <mat-option value="Reviewed">Reviewed</mat-option>
                  <mat-option value="Interview">Interview Scheduled</mat-option>
                  <mat-option value="Offer">Offer Extended</mat-option>
                </mat-select>
              </mat-form-field>

              <button mat-flat-button color="primary" (click)="applyFilters()">
                <i class="fas fa-filter"></i> Apply Filters
              </button>
            </div>
          </div>

          <div class="candidates-summary">
            <span class="results-count">Showing {{ filteredCandidates.length }} candidates</span>
            <div class="sort-controls">
              <mat-form-field appearance="outline">
                <mat-label>Sort by</mat-label>
                <mat-select [(ngModel)]="sortOption" (selectionChange)="sortCandidates()">
                  <mat-option value="matchScore">Match Score (High to Low)</mat-option>
                  <mat-option value="experience">Experience (High to Low)</mat-option>
                  <mat-option value="name">Name (A to Z)</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <div class="candidates-list">
            <mat-card *ngFor="let candidate of filteredCandidates" class="candidate-card" [ngClass]="'status-' + candidate.status.toLowerCase()">
              <div class="status-indicator" [matTooltip]="'Status: ' + candidate.status">
                {{ candidate.status }}
              </div>
              
              <mat-card-header>
                <div mat-card-avatar class="candidate-avatar">
                  {{ getInitials(candidate.name) }}
                </div>
                <mat-card-title>{{ candidate.name }}</mat-card-title>
                <mat-card-subtitle>{{ candidate.title }}</mat-card-subtitle>
              </mat-card-header>
              
              <mat-card-content>
                <div class="candidate-analytics">
                  <div class="match-score-indicator">
                    <div class="score-header">
                      <span>Match Score</span>
                      <span class="score-value">{{ candidate.matchScore }}%</span>
                    </div>
                    <mat-progress-bar
                      mode="determinate"
                      [value]="candidate.matchScore"
                      [color]="getMatchScoreColor(candidate.matchScore)"
                    ></mat-progress-bar>
                  </div>
                </div>

                <div class="candidate-details">
                  <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ candidate.location }}</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-briefcase"></i>
                    <span>{{ candidate.experience }} years experience</span>
                  </div>
                  <div class="detail-item" *ngIf="candidate.education">
                    <i class="fas fa-graduation-cap"></i>
                    <span>{{ candidate.education }}</span>
                  </div>
                </div>
                
                <div class="skills-section">
                  <mat-chip-set>
                    <mat-chip *ngFor="let skill of candidate.skills" [highlighted]="isHighlightedSkill(skill)">
                      {{ skill }}
                    </mat-chip>
                  </mat-chip-set>
                </div>
              </mat-card-content>
              
              <mat-divider></mat-divider>
              
              <mat-card-actions>
                <button mat-button color="primary" (click)="viewProfile(candidate)">
                  <i class="fas fa-user"></i> Profile
                </button>
                <button mat-button color="accent" (click)="scheduleInterview(candidate)">
                  <i class="fas fa-calendar-alt"></i> Interview
                </button>
                <button mat-icon-button [matMenuTriggerFor]="menu">
                  <i class="fas fa-ellipsis-v"></i>
                </button>

                <mat-menu #menu="matMenu">
                  <button mat-menu-item (click)="downloadResume(candidate)">
                    <i class="fas fa-download"></i> Download Resume
                  </button>
                  <button mat-menu-item (click)="sendMessage(candidate)">
                    <i class="fas fa-envelope"></i> Send Message
                  </button>
                  <mat-divider></mat-divider>
                  <button mat-menu-item (click)="moveToShortlist(candidate)">
                    <i class="fas fa-star"></i> Add to Shortlist
                  </button>
                  <button mat-menu-item (click)="rejectCandidate(candidate)" class="reject-action">
                    <i class="fas fa-times"></i> Reject Candidate
                  </button>
                </mat-menu>
              </mat-card-actions>
            </mat-card>
          </div>
        </mat-tab>

        <mat-tab label="Table View">
          <div class="table-container">
            <table mat-table [dataSource]="filteredCandidates" matSort (matSortChange)="sortTable($event)" class="mat-elevation-z2">
              <!-- Name Column -->
              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
                <td mat-cell *matCellDef="let candidate"> {{ candidate.name }} </td>
              </ng-container>

              <!-- Title Column -->
              <ng-container matColumnDef="title">
                <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>
                <td mat-cell *matCellDef="let candidate"> {{ candidate.title }} </td>
              </ng-container>

              <!-- Location Column -->
              <ng-container matColumnDef="location">
                <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>
                <td mat-cell *matCellDef="let candidate"> {{ candidate.location }} </td>
              </ng-container>

              <!-- Experience Column -->
              <ng-container matColumnDef="experience">
                <th mat-header-cell *matHeaderCellDef mat-sort-header> Experience </th>
                <td mat-cell *matCellDef="let candidate"> {{ candidate.experience }} years </td>
              </ng-container>

              <!-- Skills Column -->
              <ng-container matColumnDef="skills">
                <th mat-header-cell *matHeaderCellDef> Key Skills </th>
                <td mat-cell *matCellDef="let candidate"> 
                  <mat-chip-set>
                    <mat-chip *ngFor="let skill of candidate.skills.slice(0, 2)" [highlighted]="isHighlightedSkill(skill)">
                      {{ skill }}
                    </mat-chip>
                    <mat-chip *ngIf="candidate.skills.length > 2" color="primary">
                      +{{ candidate.skills.length - 2 }}
                    </mat-chip>
                  </mat-chip-set>
                </td>
              </ng-container>

              <!-- Match Score Column -->
              <ng-container matColumnDef="matchScore">
                <th mat-header-cell *matHeaderCellDef mat-sort-header> Match Score </th>
                <td mat-cell *matCellDef="let candidate"> 
                  <div class="table-match-score">
                    <mat-progress-bar
                      mode="determinate"
                      [value]="candidate.matchScore"
                      [color]="getMatchScoreColor(candidate.matchScore)"
                    ></mat-progress-bar>
                    <span>{{ candidate.matchScore }}%</span>
                  </div>
                </td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
                <td mat-cell *matCellDef="let candidate"> 
                  <span class="status-badge" [ngClass]="'status-' + candidate.status.toLowerCase()">
                    {{ candidate.status }}
                  </span>
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef> Actions </th>
                <td mat-cell *matCellDef="let candidate">
                  <button mat-icon-button color="primary" matTooltip="View Profile" (click)="viewProfile(candidate)">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button mat-icon-button color="accent" matTooltip="Schedule Interview" (click)="scheduleInterview(candidate)">
                    <i class="fas fa-calendar-alt"></i>
                  </button>
                  <button mat-icon-button [matMenuTriggerFor]="tableMenu">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <mat-menu #tableMenu="matMenu">
                    <button mat-menu-item (click)="downloadResume(candidate)">
                      <i class="fas fa-download"></i> Download Resume
                    </button>
                    <button mat-menu-item (click)="sendMessage(candidate)">
                      <i class="fas fa-envelope"></i> Send Message
                    </button>
                    <mat-divider></mat-divider>
                    <button mat-menu-item (click)="moveToShortlist(candidate)">
                      <i class="fas fa-star"></i> Add to Shortlist
                    </button>
                    <button mat-menu-item (click)="rejectCandidate(candidate)" class="reject-action">
                      <i class="fas fa-times"></i> Reject Candidate
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>

            <mat-paginator [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>
          </div>
        </mat-tab>

        <mat-tab label="Analytics">
          <div class="analytics-placeholder">
            <h3>Candidate Analytics Dashboard</h3>
            <p>Analytics features would display here with charts showing:</p>
            <ul>
              <li>Candidate distribution by skill</li>
              <li>Match score trends</li>
              <li>Hiring pipeline metrics</li>
              <li>Time-to-hire analytics</li>
            </ul>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .view-candidates-container {
      padding: 0;
      background-color: #f5f7fa;
      min-height: 100vh;
    }

    .header-section {
      background-color: #fff;
      padding: 24px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .title-section h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 500;
      color: #263238;
    }

    .subtitle {
      color: #607d8b;
      margin: 4px 0 0;
      font-size: 16px;
    }

    .metrics-section {
      display: flex;
      gap: 24px;
    }

    .metric-card {
      padding: 12px 20px;
      background-color: #f5f7fa;
      border-radius: 8px;
      min-width: 120px;
      text-align: center;
      border-left: 4px solid #5c6bc0;
    }

    .metric-value {
      font-size: 24px;
      font-weight: 700;
      color: #263238;
    }

    .metric-label {
      font-size: 13px;
      color: #607d8b;
      margin-top: 4px;
    }

    mat-divider {
      margin: 0;
    }

    .filters-panel {
      background-color: #fff;
      padding: 16px 24px;
      margin: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .filter-controls {
      display: flex;
      gap: 16px;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    .filter-controls mat-form-field {
      flex: 1;
      min-width: 200px;
    }

    .candidates-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
      margin-bottom: 16px;
    }

    .results-count {
      color: #607d8b;
      font-size: 14px;
    }

    .sort-controls {
      width: 200px;
    }

    .candidates-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 24px;
      padding: 0 24px 24px;
    }

    .candidate-card {
      height: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      position: relative;
      transition: transform 0.2s, box-shadow 0.2s;
      overflow: hidden;
    }

    .candidate-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    }

    .status-indicator {
      position: absolute;
      top: 12px;
      right: 12px;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 12px;
      background-color: #e0e0e0;
      color: #424242;
    }

    .status-new .status-indicator {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .status-reviewed .status-indicator {
      background-color: #e8f5e9;
      color: #388e3c;
    }

    .status-interview .status-indicator {
      background-color: #fff8e1;
      color: #ffa000;
    }

    .status-offer .status-indicator {
      background-color: #e8eaf6;
      color: #3949ab;
    }

    .candidate-avatar {
      background-color: #5c6bc0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      text-transform: uppercase;
    }

    .candidate-analytics {
      margin: 16px 0;
    }

    .match-score-indicator {
      margin-bottom: 16px;
    }

    .score-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .score-value {
      font-weight: 500;
    }

    .candidate-details {
      margin: 16px 0;
    }

    .detail-item {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      color: #546e7a;
    }

    .detail-item i {
      margin-right: 8px;
      width: 20px;
      text-align: center;
      color: #666;
    }

    .skills-section {
      margin: 16px 0;
    }

    mat-card-actions {
      padding: 8px 16px;
      display: flex;
      justify-content: space-between;
    }

    /* Table Styles */
    .table-container {
      padding: 24px;
    }

    table {
      width: 100%;
    }

    .table-match-score {
      display: flex;
      align-items: center;
    }

    .table-match-score mat-progress-bar {
      width: 100px;
      margin-right: 8px;
    }

    .status-badge {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      background-color: #e0e0e0;
      color: #424242;
    }

    .status-badge.status-new {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .status-badge.status-reviewed {
      background-color: #e8f5e9;
      color: #388e3c;
    }

    .status-badge.status-interview {
      background-color: #fff8e1;
      color: #ffa000;
    }

    .status-badge.status-offer {
      background-color: #e8eaf6;
      color: #3949ab;
    }

    /* Analytics Tab */
    .analytics-placeholder {
      padding: 48px;
      text-align: center;
      color: #546e7a;
    }

    .analytics-placeholder ul {
      display: inline-block;
      text-align: left;
      margin-top: 16px;
    }

    .analytics-placeholder li {
      margin-bottom: 8px;
    }

    /* Responsive design */
    @media (max-width: 960px) {
      .header-section {
        flex-direction: column;
        align-items: flex-start;
      }

      .metrics-section {
        margin-top: 16px;
        width: 100%;
        overflow-x: auto;
      }

      .candidates-list {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    }

    @media (max-width: 600px) {
      .filter-controls {
        flex-direction: column;
        gap: 0;
      }

      .candidates-list {
        grid-template-columns: 1fr;
      }
    }

    /* Helper classes */
    .reject-action {
      color: #f44336;
    }

    mat-tab-group {
      margin-top: 16px;
    }

    mat-card-actions i,
    mat-menu-item i {
      margin-right: 8px;
    }

    .reject-action i {
      color: #f44336;
    }
  `],
})
export class ViewCandidatesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchText: string = '';
  selectedSkills: string[] = [];
  experienceLevel: string = '';
  selectedStatus: string = '';
  sortOption: string = 'matchScore';
  displayedColumns: string[] = ['name', 'title', 'location', 'experience', 'skills', 'matchScore', 'status', 'actions'];

  availableSkills: string[] = [
    'Angular', 'React', 'Vue', 'TypeScript', 'JavaScript',
    'Node.js', 'Python', 'Java', 'C#', 'SQL',
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB',
    'GraphQL', 'REST API', 'RxJS', 'NgRx', 'Redux'
  ];

  candidates: Candidate[] = [
    {
      id: '1',
      name: 'John Doe',
      title: 'Senior Frontend Developer',
      location: 'New York, NY',
      experience: 5,
      matchScore: 95,
      skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
      status: 'New',
      appliedDate: new Date(2025, 3, 10),
      education: 'B.S. Computer Science'
    },
    {
      id: '2',
      name: 'Jane Smith',
      title: 'Full Stack Developer',
      location: 'San Francisco, CA',
      experience: 3,
      matchScore: 88,
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      status: 'Reviewed',
      appliedDate: new Date(2025, 3, 8),
      education: 'M.S. Software Engineering'
    },
    {
      id: '3',
      name: 'Robert Johnson',
      title: 'DevOps Engineer',
      location: 'Austin, TX',
      experience: 7,
      matchScore: 92,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      status: 'Interview',
      appliedDate: new Date(2025, 3, 5)
    },
    {
      id: '4',
      name: 'Emily Chen',
      title: 'UI/UX Developer',
      location: 'Seattle, WA',
      experience: 4,
      matchScore: 82,
      skills: ['React', 'CSS', 'Figma', 'UX Research'],
      status: 'New',
      appliedDate: new Date(2025, 3, 12),
      education: 'B.A. Design & Computer Science'
    },
    {
      id: '5',
      name: 'Michael Brown',
      title: 'Backend Developer',
      location: 'Chicago, IL',
      experience: 6,
      matchScore: 78,
      skills: ['Java', 'Spring Boot', 'SQL', 'Microservices'],
      status: 'Reviewed',
      appliedDate: new Date(2025, 3, 7)
    },
    {
      id: '6',
      name: 'Sarah Wilson',
      title: 'Frontend Engineer',
      location: 'Boston, MA',
      experience: 2,
      matchScore: 90,
      skills: ['Angular', 'TypeScript', 'SCSS', 'Material UI'],
      status: 'New',
      appliedDate: new Date(2025, 3, 14),
      education: 'B.S. Information Systems'
    }
  ];

  filteredCandidates: Candidate[] = [];

  constructor() {
    this.filteredCandidates = [...this.candidates];
  }

  ngOnInit(): void {
    this.sortCandidates();
  }

  applyFilters(): void {
    this.filteredCandidates = this.candidates.filter(candidate => {
      // Filter by search text
      const searchMatch = !this.searchText || 
        candidate.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.location.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(this.searchText.toLowerCase()));

      // Filter by skills
      const skillsMatch = this.selectedSkills.length === 0 || 
        this.selectedSkills.every(skill => candidate.skills.includes(skill));

      // Filter by experience level
      let experienceMatch = true;
      if (this.experienceLevel) {
        if (this.experienceLevel === 'entry') {
          experienceMatch = candidate.experience < 3;
        } else if (this.experienceLevel === 'mid') {
          experienceMatch = candidate.experience >= 3 && candidate.experience < 6;
        } else if (this.experienceLevel === 'senior') {
          experienceMatch = candidate.experience >= 6;
        }
      }

      // Filter by status
      const statusMatch = !this.selectedStatus || candidate.status === this.selectedStatus;

      return searchMatch && skillsMatch && experienceMatch && statusMatch;
    });

    this.sortCandidates();
  }

  sortCandidates(): void {
    if (this.sortOption === 'matchScore') {
      this.filteredCandidates.sort((a, b) => b.matchScore - a.matchScore);
    } else if (this.sortOption === 'experience') {
      this.filteredCandidates.sort((a, b) => b.experience - a.experience);
    } else if (this.sortOption === 'name') {
      this.filteredCandidates.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  sortTable(sort: Sort): void {
    const data = [...this.filteredCandidates];
    if (!sort.active || sort.direction === '') {
      this.filteredCandidates = data;
      return;
    }

    this.filteredCandidates = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'location': return this.compare(a.location, b.location, isAsc);
        case 'experience': return this.compare(a.experience, b.experience, isAsc);
        case 'matchScore': return this.compare(a.matchScore, b.matchScore, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getMatchScoreColor(score: number): string {
    if (score >= 90) return 'primary';
    if (score >= 75) return 'accent';
    return 'warn';
  }
  isHighlightedSkill(skill: string): boolean {
    return this.selectedSkills.includes(skill);
  }

  viewProfile(candidate: Candidate): void {
    console.log('Viewing profile:', candidate);
    // Implement view profile functionality
  }

  scheduleInterview(candidate: Candidate): void {
    console.log('Scheduling interview for:', candidate);
    // Implement schedule interview functionality
    candidate.status = 'Interview';
  }

  downloadResume(candidate: Candidate): void {
    console.log('Downloading resume for:', candidate);
    // Implement download resume functionality
  }

  sendMessage(candidate: Candidate): void {
    console.log('Sending message to:', candidate);
    // Implement send message functionality
  }

  rejectCandidate(candidate: Candidate): void {
    console.log('Rejecting candidate:', candidate);
    // Implement reject candidate functionality
  }

  moveToShortlist(candidate: Candidate): void {
    console.log('Moving to shortlist:', candidate);
    // Implement shortlist functionality
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  getAverageMatchScore(): number {
    if (this.candidates.length === 0) return 0;
    const total = this.candidates.reduce((sum, candidate) => sum + candidate.matchScore, 0);
    return Math.round(total / this.candidates.length);
  }

  getPositionsToFill(): number {
    // This is a placeholder - implement your actual logic here
    return 8;
  }

  getInterviewingCount(): number {
    // This is a placeholder - implement your actual logic here
    return 18;
  }
}
