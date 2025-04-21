import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="profile-container" [@fadeIn]>
      <mat-card class="profile-card">
        <mat-card-header>
          <div class="header-content">
            <i class="fas fa-building header-icon"></i>
            <div class="header-text">
              <mat-card-title>Company Profile</mat-card-title>
              <mat-card-subtitle>Manage your company information and settings</mat-card-subtitle>
            </div>
          </div>
        </mat-card-header>

        <mat-card-content>
          <div class="profile-section">
            <div class="section-header">
              <h3>Company Information</h3>
              <button mat-button color="primary" class="edit-button">
                <i class="fas fa-edit"></i>
                Edit
              </button>
            </div>
            
            <div class="info-grid">
              <div class="info-item">
                <label>Company Name</label>
                <p>Tech Solutions Inc.</p>
              </div>
              <div class="info-item">
                <label>Industry</label>
                <p>Information Technology</p>
              </div>
              <div class="info-item">
                <label>Company Size</label>
                <p>100-500 employees</p>
              </div>
              <div class="info-item">
                <label>Founded</label>
                <p>2010</p>
              </div>
              <div class="info-item full-width">
                <label>Description</label>
                <p>Tech Solutions Inc. is a leading provider of innovative software solutions and IT services. We specialize in developing cutting-edge technologies that help businesses transform and grow in the digital age.</p>
              </div>
            </div>
          </div>

          <mat-divider></mat-divider>

          <div class="profile-section">
            <div class="section-header">
              <h3>Contact Information</h3>
              <button mat-button color="primary" class="edit-button">
                <i class="fas fa-edit"></i>
                Edit
              </button>
            </div>
            
            <div class="info-grid">
              <div class="info-item">
                <label>Email</label>
                <p>contact&#64;techsolutions.com</p>
              </div>
              <div class="info-item">
                <label>Phone</label>
                <p>+1 (555) 123-4567</p>
              </div>
              <div class="info-item">
                <label>Website</label>
                <p>www.techsolutions.com</p>
              </div>
              <div class="info-item full-width">
                <label>Address</label>
                <p>123 Tech Street, Silicon Valley, CA 94025, United States</p>
              </div>
            </div>
          </div>

          <mat-divider></mat-divider>

          <div class="profile-section">
            <div class="section-header">
              <h3>Social Media</h3>
              <button mat-button color="primary" class="edit-button">
                <i class="fas fa-edit"></i>
                Edit
              </button>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-twitter"></i>
                Twitter
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-facebook"></i>
                Facebook
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
                Instagram
              </a>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .profile-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px 0;
    }

    .header-icon {
      font-size: 32px;
      color: var(--primary);
    }

    .header-text {
      flex: 1;
    }

    .profile-section {
      padding: 24px 0;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .section-header h3 {
      margin: 0;
      color: var(--text-primary);
      font-size: 1.25rem;
      font-weight: 500;
    }

    .edit-button {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .info-item.full-width {
      grid-column: 1 / -1;
    }

    .info-item label {
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .info-item p {
      margin: 0;
      color: var(--text-primary);
      line-height: 1.5;
    }

    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: var(--background-light);
      border-radius: 8px;
      color: var(--text-primary);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--accent-light);
      transform: translateY(-2px);
    }

    .social-link i {
      font-size: 1.25rem;
    }

    mat-divider {
      margin: 24px 0;
    }
  `]
})
export class CompanyProfileComponent {
  // Component logic will go here
} 