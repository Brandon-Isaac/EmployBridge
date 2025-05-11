import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBars, 
  faUser, 
  faEdit, 
  faBriefcase, 
  faRobot, 
  faUsers, 
  faFileAlt, 
  faComments,
  faFileContract,
  faSignOutAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule
  ],
  template: `
    <div class="dashboard-container">
      <!-- Header -->
      <mat-toolbar color="primary" class="dashboard-header">
        <button mat-icon-button (click)="toggleSidenav()">
          <fa-icon [icon]="faBars"></fa-icon>
        </button>
        <span class="brand-name">EmployBridge</span>
        <span class="spacer"></span>
        <div class="user-info">
          <span class="user-name">{{userName}}</span>
          <span class="user-role">Employer</span>
        </div>
        <button mat-icon-button class="logout-button" (click)="logout()" matTooltip="Logout" title="Logout">
          <fa-icon [icon]="faSignOutAlt"></fa-icon>
        </button>
      </mat-toolbar>

      <!-- Side Navigation -->
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="side" opened class="sidenav">
          <mat-nav-list>
            <!-- Profile Section -->
            <!-- Commented out profile section
            <div class="nav-section">
              <h3 class="nav-section-title">Profile</h3>
              <a mat-list-item routerLink="profile" routerLinkActive="active">
                <fa-icon [icon]="faUser" class="nav-icon"></fa-icon>
                <span>Company Profile</span>
              </a>
              <a mat-list-item routerLink="profile-update" routerLinkActive="active">
                <fa-icon [icon]="faEdit" class="nav-icon"></fa-icon>
                <span>Update Profile</span>
              </a>
            </div>
            -->

            <!-- Job Management Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Job Management</h3>
              <a mat-list-item routerLink="jobs-posted" routerLinkActive="active">
                <fa-icon [icon]="faBriefcase" class="nav-icon"></fa-icon>
                <span>Jobs Posted</span>
              </a>
            
              <a mat-list-item routerLink="job-posting" [queryParams]="{mode: 'edit'}" routerLinkActive="active">
                <fa-icon [icon]="faEdit" class="nav-icon"></fa-icon>
                <span>Update Jobs</span>
              </a>
              <a mat-list-item routerLink="job-generation" routerLinkActive="active">
                <fa-icon [icon]="faFileContract" class="nav-icon"></fa-icon>
                <span>Job Generation</span>
              </a>
            </div>

            <!-- Candidates Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Candidates</h3>
              <a mat-list-item routerLink="candidates" routerLinkActive="active">
                <fa-icon [icon]="faUsers" class="nav-icon"></fa-icon>
                <span>View Candidates</span>
              </a>
              <a mat-list-item routerLink="applications" routerLinkActive="active">
                <fa-icon [icon]="faFileAlt" class="nav-icon"></fa-icon>
                <span>Applications</span>
              </a>
            </div>

            <!-- Tools Section -->
            <div class="nav-section">
              <h3 class="nav-section-title">Tools</h3>
              <a mat-list-item routerLink="chatbot" routerLinkActive="active">
                <fa-icon [icon]="faComments" class="nav-icon"></fa-icon>
                <span>AI Assistant</span>
              </a>
              <a mat-list-item routerLink="ai-recommendations" routerLinkActive="active">
                <fa-icon [icon]="faRobot" class="nav-icon"></fa-icon>
                <span>AI Candidate Recommendations</span>
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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .dashboard-header {
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      color: white;
      padding: 0 16px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: 16px;
      letter-spacing: -0.5px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 16px;
    }

    .user-name {
      font-weight: 500;
      letter-spacing: -0.2px;
    }

    .user-role {
      font-size: 0.9rem;
      opacity: 0.8;
      font-weight: 400;
    }

    .logout-button {
      color: white;
      transition: background-color 0.3s ease;
    }

    .logout-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
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
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .mat-nav-list {
      padding-top: 8px;
    }

    .mat-list-item {
      height: 48px;
      margin: 4px 8px;
      border-radius: 8px;
      font-weight: 500;
    }

    .mat-list-item.active {
      background: rgba(46, 204, 113, 0.1);
      color: #2ecc71;
    }

    .nav-icon {
      margin-right: 16px;
      color: #666;
      width: 20px;
      text-align: center;
    }

    .mat-list-item.active .nav-icon {
      color: #2ecc71;
    }

    .main-content {
      padding: 24px;
      background: #f5f6fa;
    }
  `]
})
export class DashboardComponent implements OnInit {
  // Font Awesome icons
  faBars = faBars;
  faUser = faUser;
  faEdit = faEdit;
  faBriefcase = faBriefcase;
  faRobot = faRobot;
  faUsers = faUsers;
  faFileAlt = faFileAlt;
  faComments = faComments;
  faFileContract = faFileContract;
  faSignOutAlt = faSignOutAlt;
  faBuilding = faBuilding;

  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.userName = currentUser.name;
    }
  }

  toggleSidenav(): void {
    // Implement sidenav toggle logic
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        // The AuthService will handle navigation to login page
      },
      error: (error) => {
        console.error('Error during logout:', error);
        // Even if there's an error, we should still clear the session
        this.authService.handleUnauthorized();
      }
    });
  }
} 