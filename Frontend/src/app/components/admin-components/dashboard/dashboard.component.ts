// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { 
//   faBars, 
//   faUser, 
//   faEdit, 
//   faUsers, 
//   faBuilding,
//   faChartBar,
//   faCog,
//   faShieldAlt,
//   faFileAlt,
//   faSignOutAlt,
//   faUserShield,
//   faUserCog,
//   faDatabase
// } from '@fortawesome/free-solid-svg-icons';
// import { AuthService } from '../../../services/auth.service';

// @Component({
//   selector: 'app-admin-dashboard',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatButtonModule,
//     MatListModule,
//     MatMenuModule,
//     MatIconModule,
//     FontAwesomeModule
//   ],
//   template: `
//     <div class="dashboard-container">
//       <!-- Header -->
//       <mat-toolbar color="primary" class="dashboard-header">
//         <button mat-icon-button (click)="toggleSidenav()">
//           <fa-icon [icon]="faBars"></fa-icon>
//         </button>
//         <span class="brand-name">EmployBridge Admin</span>
//         <span class="spacer"></span>
//         <div class="user-info">
//           <span class="user-name">{{userName}}</span>
//           <span class="user-role">Administrator</span>
//         </div>
//         <button mat-icon-button class="logout-button" (click)="logout()" matTooltip="Logout" title="Logout">
//           <fa-icon [icon]="faSignOutAlt"></fa-icon>
//         </button>
//       </mat-toolbar>

//       <!-- Side Navigation -->
//       <mat-sidenav-container class="sidenav-container">
//         <mat-sidenav #sidenav mode="side" opened class="sidenav">
//           <mat-nav-list>
//             <!-- User Management Section -->
//             <div class="nav-section">
//               <h3 class="nav-section-title">User Management</h3>
//               <a mat-list-item routerLink="users" routerLinkActive="active">
//                 <fa-icon [icon]="faUsers" class="nav-icon"></fa-icon>
//                 <span>All Users</span>
//               </a>
//               <a mat-list-item routerLink="employers" routerLinkActive="active">
//                 <fa-icon [icon]="faBuilding" class="nav-icon"></fa-icon>
//                 <span>Employers</span>
//               </a>
//               <a mat-list-item routerLink="job-seekers" routerLinkActive="active">
//                 <fa-icon [icon]="faUser" class="nav-icon"></fa-icon>
//                 <span>Job Seekers</span>
//               </a>
//             </div>

//             <!-- System Management Section -->
//             <div class="nav-section">
//               <h3 class="nav-section-title">System Management</h3>
//               <a mat-list-item routerLink="analytics" routerLinkActive="active">
//                 <fa-icon [icon]="faChartBar" class="nav-icon"></fa-icon>
//                 <span>Analytics</span>
//               </a>
//               <a mat-list-item routerLink="settings" routerLinkActive="active">
//                 <fa-icon [icon]="faCog" class="nav-icon"></fa-icon>
//                 <span>System Settings</span>
//               </a>
//               <a mat-list-item routerLink="security" routerLinkActive="active">
//                 <fa-icon [icon]="faShieldAlt" class="nav-icon"></fa-icon>
//                 <span>Security</span>
//               </a>
//             </div>

//             <!-- Content Management Section -->
//             <div class="nav-section">
//               <h3 class="nav-section-title">Content Management</h3>
//               <a mat-list-item routerLink="jobs" routerLinkActive="active">
//                 <fa-icon [icon]="faFileAlt" class="nav-icon"></fa-icon>
//                 <span>Manage Jobs</span>
//               </a>
//               <a mat-list-item routerLink="skills" routerLinkActive="active">
//                 <fa-icon [icon]="faDatabase" class="nav-icon"></fa-icon>
//                 <span>Skills Database</span>
//               </a>
//             </div>

//             <!-- Admin Tools Section -->
//             <div class="nav-section">
//               <h3 class="nav-section-title">Admin Tools</h3>
//               <a mat-list-item routerLink="roles" routerLinkActive="active">
//                 <fa-icon [icon]="faUserShield" class="nav-icon"></fa-icon>
//                 <span>Role Management</span>
//               </a>
//               <a mat-list-item routerLink="permissions" routerLinkActive="active">
//                 <fa-icon [icon]="faUserCog" class="nav-icon"></fa-icon>
//                 <span>Permissions</span>
//               </a>
//             </div>
//           </mat-nav-list>
//         </mat-sidenav>

//         <!-- Main Content -->
//         <mat-sidenav-content class="main-content">
//           <router-outlet></router-outlet>
//         </mat-sidenav-content>
//       </mat-sidenav-container>
//     </div>
//   `,
//   styles: [`
//     .dashboard-container {
//       height: 100vh;
//       display: flex;
//       flex-direction: column;
//       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     }

//     .dashboard-header {
//       background: linear-gradient(135deg, #cc2ec4, #ae2727);
//       color:white;
//       padding: 0 16px;
//       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     }

//     .brand-name {
//       font-size: 1.5rem;
//       font-weight: 600;
//       margin-left: 16px;
//       letter-spacing: -0.5px;
//     }

//     .spacer {
//       flex: 1 1 auto;
//     }

//     .user-info {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//       margin-right: 16px;
//     }

//     .user-name {
//       font-weight: 500;
//       letter-spacing: -0.2px;
//     }

//     .user-role {
//       font-size: 0.9rem;
//       opacity: 0.8;
//       font-weight: 400;
//     }

//     .logout-button {
//       color: white;
//       transition: background-color 0.3s ease;
//     }

//     .logout-button:hover {
//       background-color: rgba(255, 255, 255, 0.1);
//     }

//     .sidenav-container {
//       flex: 1;
//       background: #f5f6fa;
//     }

//     .sidenav {
//       width: 280px;
//       background: white;
//       border-right: 1px solid rgba(0, 0, 0, 0.12);
//     }

//     .nav-section {
//       padding: 16px 0;
//     }

//     .nav-section-title {
//       padding: 0 16px;
//       margin: 0;
//       font-size: 0.9rem;
//       font-weight: 600;
//       color: #666;
//       text-transform: uppercase;
//       letter-spacing: 0.5px;
//     }

//     .mat-nav-list {
//       padding-top: 8px;
//     }

//     .mat-list-item {
//       height: 48px;
//       margin: 4px 8px;
//       border-radius: 8px;
//       font-weight: 500;
//     }

//     .mat-list-item.active {
//       background: rgba(52, 152, 219, 0.1);
//       color: #3498db;
//     }

//     .nav-icon {
//       margin-right: 16px;
//       color: #666;
//       width: 20px;
//       text-align: center;
//     }

//     .mat-list-item.active .nav-icon {
//       color: #3498db;
//     }

//     .main-content {
//       padding: 24px;
//       background: #f5f6fa;
//     }
//   `]
// })
// export class DashboardComponent implements OnInit {
//   // Font Awesome icons
//   faBars = faBars;
//   faUser = faUser;
//   faEdit = faEdit;
//   faUsers = faUsers;
//   faBuilding = faBuilding;
//   faChartBar = faChartBar;
//   faCog = faCog;
//   faShieldAlt = faShieldAlt;
//   faFileAlt = faFileAlt;
//   faSignOutAlt = faSignOutAlt;
//   faUserShield = faUserShield;
//   faUserCog = faUserCog;
//   faDatabase = faDatabase;

//   userName: string = '';

//   constructor(private authService: AuthService) {}

//   ngOnInit(): void {
//     const currentUser = this.authService.getCurrentUser();
//     if (currentUser) {
//       this.userName = currentUser.name;
//     }
//   }

//   toggleSidenav(): void {
//     // Implement sidenav toggle logic
//   }

//   logout(): void {
//     this.authService.logout().subscribe({
//       next: () => {
//         // The AuthService will handle navigation to login page
//       },
//       error: (error) => {
//         console.error('Error during logout:', error);
//         // Even if there's an error, we should still clear the session
//         this.authService.handleUnauthorized();
//       }
//     });
//   }
// } 