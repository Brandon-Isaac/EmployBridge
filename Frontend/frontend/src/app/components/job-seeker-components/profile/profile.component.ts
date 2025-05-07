import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faBriefcase, faFileAlt, faDownload, faCheck, faTimes, faClock } from '@fortawesome/free-solid-svg-icons';
import { ProfileService } from '../../../services/profile.service';
import { SkillService } from '../../../services/skill.service';
import { ApplicationService } from '../../../services/application.service';
import { AuthService, User } from '../../../services/auth.service';
import { CVService } from '../../../services/cv.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  template: `
    <div class="profile-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading profile data...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="retryLoading()">Retry</button>
      </div>

      <!-- Profile Content -->
      <ng-container *ngIf="!isLoading && !error">
        <!-- Profile Header -->
        <mat-card class="profile-header">
          <div class="profile-cover"></div>
          <div class="profile-info">
            <div class="profile-avatar">
              <fa-icon [icon]="faUser" size="3x"></fa-icon>
            </div>
            <div class="profile-details">
              <h1>{{user?.name || 'Loading...'}}</h1>
              <p class="profile-title">
                <fa-icon [icon]="faBriefcase" class="icon"></fa-icon>
                {{user?.position || 'Job Seeker'}}
              </p>
              <div class="profile-stats">
                <div class="stat">
                  <span class="stat-value">{{profileCompletion}}%</span>
                  <span class="stat-label">Profile Completion</span>
                </div>
              </div>
            </div>
          </div>
        </mat-card>

        <!-- Profile Content -->
        <div class="profile-content">
          <!-- Skills Section -->
          <mat-card class="profile-section">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faBriefcase" class="icon"></fa-icon>
                Skills
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="skills-container">
                <div class="skill-tag" *ngFor="let skill of skills">
                  {{skill.name}}
                </div>
                <div *ngIf="skills.length === 0" class="no-data">
                  No skills added yet
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- CV Section -->
          <mat-card class="profile-section" *ngIf="cv">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faFileAlt" class="icon"></fa-icon>
                CV
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="cv-info">
                <p>File: {{cv.fileName}}</p>
                <p>Last Updated: {{cv.updatedAt | date}}</p>
                <button mat-button color="primary" (click)="downloadCV()">
                  <fa-icon [icon]="faDownload" class="icon"></fa-icon>
                  Download CV
                </button>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Applications Section -->
          <mat-card class="profile-section">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faBriefcase" class="icon"></fa-icon>
                Recent Applications
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="application-item" *ngFor="let app of applications">
                <div class="application-info">
                  <h3>{{app.job.title}}</h3>
                  <p class="company">{{app.job.employer.company}}</p>
                  <p class="status" [class]="app.status.toLowerCase()">
                    <fa-icon [icon]="getStatusIcon(app.status)" class="icon"></fa-icon>
                    {{app.status}}
                  </p>
                </div>
                <div class="application-date">
                  <fa-icon [icon]="faClock" class="icon"></fa-icon>
                  {{app.appliedAt | date}}
                </div>
              </div>
              <div *ngIf="applications.length === 0" class="no-data">
                No applications yet
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
    }

    .error-message {
      color: #dc3545;
      font-size: 1.1rem;
    }

    .no-data {
      color: #666;
      text-align: center;
      padding: 16px;
      font-style: italic;
    }

    .profile-header {
      position: relative;
      margin-bottom: 24px;
      overflow: hidden;
    }

    .profile-cover {
      height: 200px;
      background: linear-gradient(135deg, #3498db, #2980b9);
    }

    .profile-info {
      padding: 24px;
      display: flex;
      align-items: flex-end;
      margin-top: -60px;
    }

    .profile-avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid white;
      overflow: hidden;
      margin-right: 24px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
    }

    .profile-details {
      flex: 1;
    }

    .profile-details h1 {
      margin: 0;
      color: #2c3e50;
    }

    .profile-title {
      color: #666;
      margin: 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .profile-stats {
      display: flex;
      gap: 24px;
      margin-top: 16px;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 500;
      color: #3498db;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
    }

    .profile-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .profile-section {
      height: 100%;
    }

    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      background: rgba(52, 152, 219, 0.1);
      color: #3498db;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.9rem;
    }

    .application-item {
      padding: 16px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .application-item:last-child {
      border-bottom: none;
    }

    .company {
      color: #666;
      margin: 4px 0;
    }

    .status {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
      margin-top: 4px;
    }

    .status.pending {
      background: #fff3cd;
      color: #856404;
    }

    .status.accepted {
      background: #d4edda;
      color: #155724;
    }

    .status.rejected {
      background: #f8d7da;
      color: #721c24;
    }

    .cv-info {
      padding: 16px 0;
    }

    .cv-info p {
      margin: 8px 0;
      color: #666;
    }

    .icon {
      margin-right: 4px;
    }

    mat-card-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class ProfileComponent implements OnInit {
  // Font Awesome icons
  faUser = faUser;
  faBriefcase = faBriefcase;
  faFileAlt = faFileAlt;
  faDownload = faDownload;
  faCheck = faCheck;
  faTimes = faTimes;
  faClock = faClock;

  user: User | null = null;
  skills: any[] = [];
  applications: any[] = [];
  cv: any = null;
  profileCompletion = 0;
  isLoading = true;
  error: string | null = null;

  constructor(
    private profileService: ProfileService,
    private skillService: SkillService,
    private applicationService: ApplicationService,
    private authService: AuthService,
    private cvService: CVService
  ) {}

  ngOnInit(): void {
    this.loadAllData();
  }

  retryLoading(): void {
    this.error = null;
    this.loadAllData();
  }

  private loadAllData(): void {
    this.isLoading = true;
    this.error = null;

    // First check if we have a logged-in user
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      this.error = 'No user is currently logged in';
      this.isLoading = false;
      return;
    }

    // Load profile data
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.user = profile;
        this.calculateProfileCompletion();
        this.loadUserSkills();
        this.loadUserApplications();
        this.loadUserCV();
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.error = 'Failed to load profile data. Please try again.';
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
    const totalFields = 4; // name, skills, cv, position

    if (this.user?.name) completion++;
    if (this.skills.length > 0) completion++;
    if (this.cv) completion++;
    if (this.user?.position) completion++;

    this.profileCompletion = Math.round((completion / totalFields) * 100);
  }

  downloadCV(): void {
    if (this.cv) {
      this.cvService.downloadCV(this.cv.id).subscribe({
        next: (blob) => {
          this.cvService.saveFile(blob, this.cv.fileName);
        },
        error: (error) => {
          console.error('Error downloading CV:', error);
        }
      });
    }
  }
} 