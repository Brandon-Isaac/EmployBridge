import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBuilding, 
  faLocationDot, 
  faUsers, 
  faGlobe, 
  faSpinner, 
  faCircleExclamation 
} from '@fortawesome/free-solid-svg-icons';
import { CompanyService, CompanyProfile, Company } from '../../../services/company.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  template: `
    <div class="profile-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
        <p>Loading company profile...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <mat-card class="error-card">
          <mat-card-content>
            <fa-icon [icon]="faCircleExclamation" class="error-icon" size="2x"></fa-icon>
            <h2>Error Loading Profile</h2>
            <p>{{ error }}</p>
            <button mat-raised-button color="primary" (click)="retryLoading()">
              Retry
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Profile Content -->
      <mat-card class="profile-card" *ngIf="companyProfile && !isLoading && !error">
        <mat-card-header>
          <div class="header-content">
            <img [src]="companyProfile.company.logo || 'assets/default-company.png'" 
                 alt="Company Logo" 
                 class="company-logo"
                 (error)="handleImageError($event)">
            <div class="header-text">
              <mat-card-title>{{ companyProfile.company.name }}</mat-card-title>
              <mat-card-subtitle>
                <fa-icon [icon]="faBuilding"></fa-icon>
                {{ companyProfile.company.industry }}
              </mat-card-subtitle>
            </div>
          </div>
        </mat-card-header>

        <mat-card-content>
          <div class="profile-content">
            <section class="info-section">
              <h3>About</h3>
              <p>{{ companyProfile.company.description }}</p>
            </section>

            <mat-divider></mat-divider>

            <section class="info-section">
              <h3>Details</h3>
              <div class="details-grid">
                <div class="detail-item">
                  <fa-icon [icon]="faLocationDot"></fa-icon>
                  <span>{{ companyProfile.company.location }}</span>
                </div>
                <div class="detail-item">
                  <fa-icon [icon]="faUsers"></fa-icon>
                  <span>{{ companyProfile.company.employeeCount }} Employees</span>
                </div>
                <div class="detail-item" *ngIf="companyProfile.company.website">
                  <fa-icon [icon]="faGlobe"></fa-icon>
                  <a [href]="companyProfile.company.website" target="_blank">Website</a>
                </div>
              </div>
            </section>

            <mat-divider></mat-divider>

            <section class="info-section">
              <h3>Open Positions</h3>
              <div class="jobs-grid" *ngIf="companyProfile?.jobs && companyProfile.jobs.length > 0; else noJobs">
                <mat-card class="job-card" *ngFor="let job of companyProfile.jobs">
                  <mat-card-header>
                    <mat-card-title>{{ job.title }}</mat-card-title>
                    <mat-card-subtitle>{{ job.location }}</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p>{{ job.description | slice:0:150 }}...</p>
                    <div class="job-tags">
                      <mat-chip *ngFor="let skill of job.requiredSkills">
                        {{ skill.name }}
                      </mat-chip>
                    </div>
                  </mat-card-content>
                </mat-card>
              </div>
              <ng-template #noJobs>
                <p>No open positions at the moment.</p>
              </ng-template>
            </section>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 20px;
      min-height: 400px;
    }
    .profile-card {
      max-width: 1000px;
      margin: 0 auto;
    }
    .profile-content {
      padding: 20px 0;
    }
    .header-content {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
    }
    .company-logo {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }
    .header-text {
      flex: 1;
    }
    .info-section {
      margin: 20px 0;
    }
    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 10px;
    }
    .detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .jobs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 10px;
    }
    .job-card {
      height: 100%;
    }
    .job-tags {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    fa-icon {
      color: #666;
    }
    a {
      color: #1976d2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 20px;
    }
    .error-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .error-card {
      text-align: center;
      padding: 20px;
    }
    .error-icon {
      color: #f44336;
      margin-bottom: 16px;
    }
  `]
})
export class ProfileComponent implements OnInit {
  companyProfile: CompanyProfile | null = null;
  isLoading = true;
  error: string | null = null;

  // Font Awesome icons
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;
  faUsers = faUsers;
  faGlobe = faGlobe;
  faSpinner = faSpinner;
  faCircleExclamation = faCircleExclamation;

  constructor(
    private companyService: CompanyService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadCompanyProfile();
  }

  loadCompanyProfile() {
    this.isLoading = true;
    this.error = null;
    
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== 'employer') {
      this.error = 'You must be logged in as a company to view the profile';
      this.isLoading = false;
      this.router.navigate(['/login']);
      return;
    }

    // First get the company using the user ID
    this.companyService.getCompanyByUserId(currentUser.id).subscribe({
      next: (company: Company) => {
        // Then get the full profile using the company ID
        this.companyService.getCompanyProfile(company.id).subscribe({
          next: (profile) => {
            this.companyProfile = profile;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error fetching company profile:', error);
            this.error = error.error?.message || 'Failed to load company profile. Please try again.';
            this.isLoading = false;
            this.snackBar.open(this.error || 'An error occurred', 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom'
            });
          }
        });
      },
      error: (error) => {
        console.error('Error fetching company:', error);
        this.error = 'Failed to load company information';
        this.isLoading = false;
        this.snackBar.open(this.error, 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    });
  }

  retryLoading() {
    this.loadCompanyProfile();
  }

  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/default-company.png';
  }
} 