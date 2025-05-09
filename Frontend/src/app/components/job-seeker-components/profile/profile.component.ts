import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faUser, 
  faBriefcase, 
  faFileAlt, 
  faDownload, 
  faCheck, 
  faTimes, 
  faClock, 
  faRoute,
  faGraduationCap,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { ProfileService } from '../../../services/profile.service';
import { SkillService } from '../../../services/skill.service';
import { ApplicationService } from '../../../services/application.service';
import { AuthService, User } from '../../../services/auth.service';
import { CVService } from '../../../services/cv.service';
import { CareerPathService, CareerPath } from '../../../services/career-path.service';
import { ExperienceService, Experience } from '../../../services/experience.service';
import { EducationService, Education } from '../../../services/education.service';

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
          <!-- Experience Section -->
          <mat-card class="profile-section">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faBuilding" class="icon"></fa-icon>
                Work Experience
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="experience-list">
                <div class="experience-item" *ngFor="let exp of experiences">
                  <div class="experience-header">
                    <h3>{{exp.title}}</h3>
                    <span class="company">{{exp.company}}</span>
                  </div>
                  <div class="experience-dates">
                    <span>{{exp.startDate | date:'MMM yyyy'}} - {{exp.current ? 'Present' : (exp.endDate | date:'MMM yyyy')}}</span>
                  </div>
                  <p class="experience-description">{{exp.description}}</p>
                </div>
                <div *ngIf="experiences.length === 0" class="no-data">
                  No work experience added yet
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Education Section -->
          <mat-card class="profile-section">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faGraduationCap" class="icon"></fa-icon>
                Education
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="education-list">
                <div class="education-item" *ngFor="let edu of educations">
                  <div class="education-header">
                    <h3>{{edu.degree}}</h3>
                    <span class="institution">{{edu.institution}}</span>
                  </div>
                  <div class="education-details">
                    <span class="field-of-study">{{edu.fieldOfStudy}}</span>
                    <span class="education-dates">
                      {{edu.startDate | date:'MMM yyyy'}} - {{edu.current ? 'Present' : (edu.endDate | date:'MMM yyyy')}}
                    </span>
                  </div>
                  <p class="education-description" *ngIf="edu.description">{{edu.description}}</p>
                </div>
                <div *ngIf="educations.length === 0" class="no-data">
                  No education history added yet
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Career Path Section -->
          <mat-card class="profile-section" *ngIf="careerPath">
            <mat-card-header>
              <mat-card-title>
                <fa-icon [icon]="faRoute" class="icon"></fa-icon>
                Career Path
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="career-path-info">
                <div class="career-path-header">
                  <div class="path-progress">
                    <div class="progress-bar">
                      <div class="progress" [style.width.%]="careerPath.progress"></div>
                    </div>
                    <span class="progress-text">{{careerPath.progress}}% Complete</span>
                  </div>
                  <div class="path-details">
                    <p><strong>Current Role:</strong> {{careerPath.currentRole}}</p>
                    <p><strong>Target Role:</strong> {{careerPath.targetRole}}</p>
                    <p><strong>Experience:</strong> {{careerPath.yearsOfExperience}} years</p>
                  </div>
                </div>

                <div class="timeline-section" *ngIf="careerPath.timeline.length > 0">
                  <h3>Timeline</h3>
                  <div class="timeline">
                    <div class="timeline-item" *ngFor="let phase of careerPath.timeline">
                      <div class="phase-header">
                        <h4>{{phase.phase}}</h4>
                        <span class="duration">{{phase.duration}}</span>
                      </div>
                      <div class="phase-content">
                        <div class="activities" *ngIf="phase.activities.length > 0">
                          <h5>Activities:</h5>
                          <ul>
                            <li *ngFor="let activity of phase.activities">{{activity}}</li>
                          </ul>
                        </div>
                        <div class="milestones" *ngIf="phase.milestones.length > 0">
                          <h5>Milestones:</h5>
                          <ul>
                            <li *ngFor="let milestone of phase.milestones">{{milestone}}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="skills-section" *ngIf="careerPath.requiredSkills">
                  <h3>Required Skills</h3>
                  <div class="skills-grid">
                    <div class="skill-category">
                      <h4>Current Skills</h4>
                      <div class="skill-tags">
                        <span class="skill-tag" *ngFor="let skill of careerPath.requiredSkills.current">
                          {{skill.name}}
                        </span>
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4>Skills to Develop</h4>
                      <div class="skill-tags">
                        <span class="skill-tag missing" *ngFor="let skill of careerPath.requiredSkills.missing">
                          {{skill.name}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

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

    .experience-list, .education-list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .experience-item, .education-item {
      padding: 16px;
      border-left: 3px solid #3498db;
      background: #f8f9fa;
      border-radius: 0 8px 8px 0;
    }

    .experience-header, .education-header {
      margin-bottom: 8px;
    }

    .experience-header h3, .education-header h3 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.1rem;
    }

    .company, .institution {
      color: #666;
      font-size: 0.9rem;
    }

    .experience-dates, .education-dates {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .field-of-study {
      display: block;
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 4px;
    }

    .experience-description, .education-description {
      color: #666;
      margin: 8px 0 0;
      font-size: 0.9rem;
      line-height: 1.5;
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

    .career-path-info {
      padding: 16px 0;
    }

    .career-path-header {
      margin-bottom: 24px;
    }

    .path-progress {
      margin-bottom: 16px;
    }

    .progress-bar {
      height: 8px;
      background: #f0f0f0;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .progress {
      height: 100%;
      background: #3498db;
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: 0.9rem;
      color: #666;
    }

    .path-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .path-details p {
      margin: 0;
      color: #666;
    }

    .timeline-section {
      margin-top: 24px;
    }

    .timeline {
      margin-top: 16px;
    }

    .timeline-item {
      padding: 16px;
      border-left: 2px solid #3498db;
      margin-left: 16px;
      position: relative;
      margin-bottom: 24px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 20px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #3498db;
    }

    .phase-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .phase-header h4 {
      margin: 0;
      color: #2c3e50;
    }

    .duration {
      font-size: 0.9rem;
      color: #666;
      background: #f8f9fa;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .phase-content {
      color: #666;
    }

    .phase-content h5 {
      margin: 12px 0 8px;
      color: #2c3e50;
    }

    .phase-content ul {
      margin: 0;
      padding-left: 20px;
    }

    .phase-content li {
      margin-bottom: 4px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-top: 16px;
    }

    .skill-category h4 {
      margin: 0 0 12px;
      color: #2c3e50;
    }

    .skill-tags {
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

    .skill-tag.missing {
      background: rgba(220, 53, 69, 0.1);
      color: #dc3545;
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
  faRoute = faRoute;
  faGraduationCap = faGraduationCap;
  faBuilding = faBuilding;

  user: User | null = null;
  skills: any[] = [];
  applications: any[] = [];
  cv: any = null;
  careerPath: CareerPath | null = null;
  experiences: Experience[] = [];
  educations: Education[] = [];
  profileCompletion = 0;
  isLoading = true;
  error: string | null = null;

  constructor(
    private profileService: ProfileService,
    private skillService: SkillService,
    private applicationService: ApplicationService,
    private authService: AuthService,
    private cvService: CVService,
    private careerPathService: CareerPathService,
    private experienceService: ExperienceService,
    private educationService: EducationService
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
        this.loadCareerPath();
        this.loadUserExperiences();
        this.loadUserEducations();
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.error = 'Failed to load profile data. Please try again.';
        this.isLoading = false;
      }
    });
  }

  private loadUserExperiences(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.experienceService.getExperiences(user.id).subscribe({
        next: (experiences) => {
          this.experiences = experiences;
          this.calculateProfileCompletion();
        },
        error: (error) => {
          console.error('Error loading experiences:', error);
        }
      });
    }
  }

  private loadUserEducations(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.educationService.getEducations(user.id).subscribe({
        next: (educations) => {
          this.educations = educations;
          this.calculateProfileCompletion();
        },
        error: (error) => {
          console.error('Error loading educations:', error);
        }
      });
    }
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
          this.careerPath = careerPaths[0];
          this.calculateProfileCompletion();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading career path:', error);
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
    const totalFields = 7; // name, skills, cv, position, career path, experiences, education

    if (this.user?.name) completion++;
    if (this.skills.length > 0) completion++;
    if (this.cv) completion++;
    if (this.user?.position) completion++;
    if (this.careerPath) completion++;
    if (this.experiences.length > 0) completion++;
    if (this.educations.length > 0) completion++;

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