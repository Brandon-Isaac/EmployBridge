import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService, Company } from '../../../services/company.service';
import { AuthService } from '../../../services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faLocationDot, faGlobe, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employer-profile-update',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  template: `
    <div class="profile-update-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
        <p>Loading company profile...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <mat-card class="error-card">
          <mat-card-content>
            <p>{{ error }}</p>
            <button mat-raised-button color="primary" (click)="retryLoading()">
              Retry
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Update Form -->
      <mat-card class="profile-update-card" *ngIf="!isLoading && !error">
        <mat-card-header>
          <mat-card-title>Update Company Profile</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="updateForm" (ngSubmit)="onSubmit()" class="profile-update-form">
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Company Name</mat-label>
                <input matInput formControlName="name" placeholder="Enter company name">
                <mat-error *ngIf="updateForm.get('name')?.hasError('required')">
                  Company name is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Industry</mat-label>
                <input matInput formControlName="industry" placeholder="Enter industry">
                <mat-icon matSuffix>
                  <fa-icon [icon]="faBuilding"></fa-icon>
                </mat-icon>
                <mat-error *ngIf="updateForm.get('industry')?.hasError('required')">
                  Industry is required
                </mat-error>
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" 
                        placeholder="Enter company description"
                        rows="4"></textarea>
              <mat-error *ngIf="updateForm.get('description')?.hasError('required')">
                Description is required
              </mat-error>
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Location</mat-label>
                <input matInput formControlName="location" placeholder="Enter location">
                <mat-icon matSuffix>
                  <fa-icon [icon]="faLocationDot"></fa-icon>
                </mat-icon>
                <mat-error *ngIf="updateForm.get('location')?.hasError('required')">
                  Location is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Website</mat-label>
                <input matInput formControlName="website" placeholder="Enter website URL">
                <mat-icon matSuffix>
                  <fa-icon [icon]="faGlobe"></fa-icon>
                </mat-icon>
                <mat-error *ngIf="updateForm.get('website')?.hasError('pattern')">
                  Please enter a valid URL
                </mat-error>
              </mat-form-field>
            </div>

            <div class="form-actions">
              <button mat-button type="button" (click)="onCancel()">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="updateForm.invalid || isSubmitting">
                {{ isSubmitting ? 'Updating...' : 'Update Profile' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-update-container {
      padding: 20px;
      min-height: 400px;
    }
    .profile-update-card {
      max-width: 800px;
      margin: 0 auto;
    }
    .profile-update-form {
      padding: 20px 0;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }
    .full-width {
      width: 100%;
      margin-bottom: 20px;
    }
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 20px;
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
    mat-form-field {
      width: 100%;
    }
  `]
})
export class ProfileUpdateComponent implements OnInit {
  updateForm: FormGroup;
  isLoading = true;
  isSubmitting = false;
  error: string | null = null;
  companyId: string | null = null;

  // Font Awesome icons
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;
  faGlobe = faGlobe;
  faSpinner = faSpinner;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      industry: ['', Validators.required],
      location: ['', Validators.required],
      website: ['', [Validators.pattern('https?://.+')]]
    });
  }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== 'employer') {
      this.error = 'You must be logged in as a company to update the profile';
      this.isLoading = false;
      this.router.navigate(['/login']);
      return;
    }

    // Get the company ID from the company service
    this.companyService.getCompanyByUserId(currentUser.id).subscribe({
      next: (company: Company) => {
        this.companyId = company.id;
        this.loadCompanyProfile();
      },
      error: (error: any) => {
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

  loadCompanyProfile() {
    if (!this.companyId) {
      this.error = 'No company found';
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.error = null;

    this.companyService.getCompanyById(this.companyId).subscribe({
      next: (company) => {
        this.updateForm.patchValue({
          name: company.name,
          description: company.description,
          industry: company.industry,
          location: company.location,
          website: company.website
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching company profile:', error);
        this.error = error.error?.message || 'Failed to load company profile';
        this.isLoading = false;
        this.snackBar.open(this.error || 'An error occurred', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    });
  }

  onSubmit() {
    if (this.updateForm.valid && this.companyId) {
      this.isSubmitting = true;
      this.companyService.updateCompany(this.companyId, this.updateForm.value).subscribe({
        next: () => {
          this.snackBar.open('Company profile updated successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          this.router.navigate(['/company', this.companyId]);
        },
        error: (error) => {
          console.error('Error updating company profile:', error);
          this.error = error.error?.message || 'Failed to update company profile';
          this.snackBar.open(this.error || 'An error occurred', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          this.isSubmitting = false;
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/company', this.companyId]);
  }

  retryLoading() {
    this.loadCompanyProfile();
  }
} 