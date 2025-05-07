import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-job-seeker-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
  template: `
    <div class="dashboard-container">
      <!-- Header -->
      <mat-toolbar color="primary" class="dashboard-header">
        <button mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
        <span class="brand-name">EmployBridge</span>
        <span class="spacer"></span>
        <div class="user-info">
          <span class="user-name">{{userName}}</span>
          <span class="user-role">Job Seeker</span>
        </div>
      </mat-toolbar>

      <!-- Side Navigation -->
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="side" opened class="sidenav">
          <mat-nav-list>
            <!-- Profile Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Profile</h3>
              <a mat-list-item routerLink="profile" routerLinkActive="active">
                <mat-icon>person</mat-icon>
                <span>My Profile</span>
              </a>
              <a mat-list-item routerLink="profile-update" routerLinkActive="active">
                <mat-icon>edit</mat-icon>
                <span>Update Profile</span>
              </a>
            </div>

            <!-- Job Search Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Job Search</h3>
              <a mat-list-item routerLink="job-search" routerLinkActive="active">
                <mat-icon>search</mat-icon>
                <span>Search Jobs</span>
              </a>
              <a mat-list-item routerLink="job-matching" routerLinkActive="active">
                <mat-icon>matching</mat-icon>
                <span>Job Matching</span>
              </a>
              <a mat-list-item routerLink="ai-recommendations" routerLinkActive="active">
                <mat-icon>recommend</mat-icon>
                <span>AI Recommendations</span>
              </a>
            </div>

            <!-- Applications Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Applications</h3>
              <a mat-list-item routerLink="applications" routerLinkActive="active">
                <mat-icon>description</mat-icon>
                <span>My Applications</span>
              </a>
              <a mat-list-item routerLink="interviews" routerLinkActive="active">
                <mat-icon>event</mat-icon>
                <span>Interviews</span>
              </a>
            </div>

            <!-- Tools Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Tools</h3>
              <a mat-list-item routerLink="cv-generator" routerLinkActive="active">
                <mat-icon>description</mat-icon>
                <span>CV Generator</span>
              </a>
              <a mat-list-item routerLink="chatbot" routerLinkActive="active">
                <mat-icon>chat</mat-icon>
                <span>AI Assistant</span>
              </a>
            </div>
          </mat-nav-list>
        </mat-sidenav>

        <!-- Main Content -->
        <mat-sidenav-content class="main-content">
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .dashboard-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .dashboard-header {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      padding: 0 16px;
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 500;
      margin-left: 16px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .user-name {
      font-weight: 500;
    }

    .user-role {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .sidenav-container {
      flex: 1;
      background: #f5f6fa;
    }

    .sidenav {
      width: 280px;
      background: white;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
    }

    .nav-section {
      padding: 16px 0;
    }

    .nav-section-title {
      padding: 0 16px;
      margin: 0;
      font-size: 0.9rem;
      font-weight: 500;
      color: #666;
      text-transform: uppercase;
    }

    .mat-nav-list {
      padding-top: 8px;
    }

    .mat-list-item {
      height: 48px;
      margin: 4px 8px;
      border-radius: 8px;
    }

    .mat-list-item.active {
      background: rgba(52, 152, 219, 0.1);
      color: #3498db;
    }

    .mat-list-item mat-icon {
      margin-right: 16px;
      color: #666;
    }

    .mat-list-item.active mat-icon {
      color: #3498db;
    }

    .main-content {
      padding: 24px;
      background: #f5f6fa;
    }
  `]
})
export class DashboardComponent implements OnInit {
  userName: string = 'John Doe'; // This should come from your auth service

  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    // Implement sidenav toggle logic
  }
} 