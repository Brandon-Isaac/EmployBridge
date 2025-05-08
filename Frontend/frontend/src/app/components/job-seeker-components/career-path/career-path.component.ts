import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faBriefcase, faLightbulb, faChartLine, faCheckCircle, faTimesCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CareerPathService, CareerPath } from '../../../services/career-path.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-path',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  template: `
    <div class="career-path-container">
      <!-- Initial Form -->
      <div *ngIf="!careerPath" class="initial-form">
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="faChartLine" class="icon"></fa-icon>
              Plan Your Career Path
            </mat-card-title>
            <mat-card-subtitle>
              Let's map out your journey to your dream career
            </mat-card-subtitle>
          </mat-card-header>

          <mat-card-content>
            <form [formGroup]="careerForm" (ngSubmit)="generateCareerPath()">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Your Dream Career</mat-label>
                <input matInput formControlName="targetRole" placeholder="e.g., Software Architect">
                <mat-error *ngIf="careerForm.get('targetRole')?.hasError('required')">
                  Please enter your target career
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Current Role</mat-label>
                <input matInput formControlName="currentRole" placeholder="e.g., Junior Developer">
                <mat-error *ngIf="careerForm.get('currentRole')?.hasError('required')">
                  Please enter your current role
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Years of Experience</mat-label>
                <input matInput type="number" formControlName="yearsOfExperience" min="0">
                <mat-error *ngIf="careerForm.get('yearsOfExperience')?.hasError('required')">
                  Please enter your years of experience
                </mat-error>
              </mat-form-field>

              <div class="form-actions">
                <button mat-raised-button color="primary" type="submit" [disabled]="isLoading">
                  <mat-spinner diameter="20" *ngIf="isLoading"></mat-spinner>
                  <span *ngIf="!isLoading">Generate Career Path</span>
                </button>
              </div>
            </form>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Career Path Results -->
      <div *ngIf="careerPath" class="career-path-results">
        <!-- Timeline Section -->
        <mat-card class="section-card">
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="faChartLine" class="icon"></fa-icon>
              Your Career Timeline
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <mat-stepper orientation="vertical">
              <mat-step *ngFor="let phase of careerPath.timeline">
                <ng-template matStepLabel>
                  <div class="step-label">
                    <span class="phase">{{phase.phase}}</span>
                    <span class="duration">{{phase.duration}}</span>
                  </div>
                </ng-template>
                <div class="step-content">
                  <h3>Activities</h3>
                  <ul>
                    <li *ngFor="let activity of phase.activities">{{activity}}</li>
                  </ul>
                  <h3>Milestones</h3>
                  <ul>
                    <li *ngFor="let milestone of phase.milestones">{{milestone}}</li>
                  </ul>
                </div>
              </mat-step>
            </mat-stepper>
          </mat-card-content>
        </mat-card>

        <!-- Education Section -->
        <mat-card class="section-card">
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="faGraduationCap" class="icon"></fa-icon>
              Required Education
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="education-list">
              <div *ngFor="let edu of careerPath.education" class="education-item">
                <h3>{{edu.level}} in {{edu.field}}</h3>
                <p class="duration">{{edu.duration}}</p>
                <h4>Requirements:</h4>
                <ul>
                  <li *ngFor="let req of edu.requirements">{{req}}</li>
                </ul>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Skills Section -->
        <mat-card class="section-card">
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="faBriefcase" class="icon"></fa-icon>
              Skills Development
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="skills-section">
              <div class="skills-group">
                <h3>Current Skills</h3>
                <div class="skills-list">
                  <mat-chip *ngFor="let skill of careerPath.requiredSkills.current" class="current-skill">
                    <fa-icon [icon]="faCheckCircle" class="icon"></fa-icon>
                    {{skill.name}}
                  </mat-chip>
                </div>
              </div>

              <div class="skills-group">
                <h3>Skills to Develop</h3>
                <div class="skills-list">
                  <mat-chip *ngFor="let skill of careerPath.requiredSkills.missing" class="missing-skill">
                    <fa-icon [icon]="faTimesCircle" class="icon"></fa-icon>
                    {{skill.name}}
                  </mat-chip>
                </div>
              </div>

              <div class="skills-development">
                <h3>Development Plan</h3>
                <mat-expansion-panel *ngFor="let dev of careerPath.requiredSkills.development">
                  <mat-expansion-panel-header>
                    <mat-panel-title>{{dev.skill.name}}</mat-panel-title>
                    <mat-panel-description>{{dev.timeline}}</mat-panel-description>
                  </mat-expansion-panel-header>
                  <div class="resources-list">
                    <h4>Recommended Resources:</h4>
                    <ul>
                      <li *ngFor="let resource of dev.resources">{{resource}}</li>
                    </ul>
                  </div>
                </mat-expansion-panel>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Alternative Paths -->
        <mat-card class="section-card">
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="faLightbulb" class="icon"></fa-icon>
              Alternative Career Paths
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="alternative-paths">
              <mat-card *ngFor="let path of careerPath.alternativePaths" class="path-card">
                <mat-card-header>
                  <mat-card-title>{{path.role}}</mat-card-title>
                  <mat-card-subtitle>Match Score: {{path.matchScore}}%</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{path.description}}</p>
                  <div class="skills-list">
                    <mat-chip *ngFor="let skill of path.requiredSkills">
                      {{skill.name}}
                    </mat-chip>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
          </mat-card-content>
        </mat-card>

        <div class="actions">
          <button mat-button (click)="resetCareerPath()">Start Over</button>
          <button mat-raised-button color="primary" (click)="saveCareerPath()">Save Career Path</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .career-path-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
      font-family: 'Poppins', sans-serif;
    }

    .initial-form {
      max-width: 600px;
      margin: 0 auto;
    }

    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;
    }

    .section-card {
      margin-bottom: 24px;
    }

    .icon {
      margin-right: 8px;
    }

    .step-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .phase {
      font-weight: 500;
    }

    .duration {
      color: #666;
      font-size: 0.9rem;
    }

    .step-content {
      padding: 16px 0;

      h3 {
        margin: 16px 0 8px 0;
        color: #2c3e50;
      }

      ul {
        margin: 0;
        padding-left: 24px;
      }
    }

    .education-list {
      display: grid;
      gap: 24px;
    }

    .education-item {
      padding: 16px;
      background-color: #f8f9fa;
      border-radius: 8px;

      h3 {
        margin: 0 0 8px 0;
        color: #2c3e50;
      }

      .duration {
        color: #666;
        margin-bottom: 16px;
      }

      ul {
        margin: 0;
        padding-left: 24px;
      }
    }

    .skills-section {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .skills-group {
      h3 {
        margin: 0 0 16px 0;
        color: #2c3e50;
      }
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .current-skill {
      background-color: #d4edda;
      color: #155724;
    }

    .missing-skill {
      background-color: #f8d7da;
      color: #721c24;
    }

    .skills-development {
      h3 {
        margin: 0 0 16px 0;
        color: #2c3e50;
      }
    }

    .resources-list {
      padding: 16px 0;

      h4 {
        margin: 0 0 8px 0;
        color: #2c3e50;
      }

      ul {
        margin: 0;
        padding-left: 24px;
      }
    }

    .alternative-paths {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }

    .path-card {
      height: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
    }
  `]
})
export class CareerPathComponent implements OnInit {
  // Font Awesome icons
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faLightbulb = faLightbulb;
  faChartLine = faChartLine;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faArrowRight = faArrowRight;

  careerForm: FormGroup;
  careerPath: CareerPath | null = null;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private careerPathService: CareerPathService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.careerForm = this.fb.group({
      targetRole: ['', Validators.required],
      currentRole: ['', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    // Check if there's a career path ID in the URL
    this.route.paramMap.subscribe(params => {
      const pathId = params.get('id');
      if (pathId) {
        this.loadCareerPath(pathId);
      }
    });
  }

  generateCareerPath(): void {
    if (this.careerForm.valid) {
      this.isLoading = true;
      this.error = null;

      this.careerPathService.generateCareerPath(this.careerForm.value).subscribe({
        next: (careerPath) => {
          this.careerPath = careerPath;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error generating career path:', error);
          this.error = 'Failed to generate career path. Please try again.';
          this.isLoading = false;
        }
      });
    }
  }

  loadCareerPath(id: string): void {
    this.isLoading = true;
    this.error = null;

    this.careerPathService.getCareerPath(id).subscribe({
      next: (careerPath) => {
        this.careerPath = careerPath;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading career path:', error);
        this.error = 'Failed to load career path. Please try again.';
        this.isLoading = false;
      }
    });
  }

  resetCareerPath(): void {
    this.careerPath = null;
    this.careerForm.reset();
  }

  saveCareerPath(): void {
    if (this.careerPath) {
      this.careerPathService.updateProgress(this.careerPath.id, {
        progress: this.careerPath.progress,
        isCompleted: this.careerPath.isCompleted
      }).subscribe({
        next: (updatedPath) => {
          this.careerPath = updatedPath;
          // Show success message or navigate
        },
        error: (error) => {
          console.error('Error saving career path:', error);
          this.error = 'Failed to save career path. Please try again.';
        }
      });
    }
  }
} 