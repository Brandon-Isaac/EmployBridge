import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in'))
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ],
  template: `
    <div class="dashboard-container">
      <mat-toolbar class="toolbar" [@fadeIn]>
        <div class="toolbar-left">
          <button mat-icon-button (click)="toggleSidenav()">
            <i class="fas fa-bars"></i>
          </button>
          <span class="app-title typewriter">SkillMatch AI</span>
        </div>
        <div class="toolbar-right">
          <button mat-icon-button [matBadge]="'5'" matBadgeColor="accent">
            <i class="fas fa-bell"></i>
          </button>
          <button mat-icon-button [matMenuTriggerFor]="userMenu">
            <i class="fas fa-cog"></i>
          </button>
          <mat-menu #userMenu="matMenu" class="custom-menu">
            <button mat-menu-item routerLink="profile">
              <i class="fas fa-user"></i>
              <span>Admin Profile</span>
            </button>
            <button mat-menu-item routerLink="settings">
              <i class="fas fa-cog"></i>
              <span>Settings</span>
            </button>
            <mat-divider></mat-divider>
            <button mat-menu-item (click)="logout()">
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </mat-menu>
        </div>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="side" [opened]="sidenavOpened" class="sidenav" [@slideInOut]="sidenavState">
          <div class="sidenav-header">
            <div class="logo-container">
              <i class="fas fa-robot logo-icon"></i>
              <span class="logo-text">SkillMatch</span>
            </div>
          </div>
          
          <mat-nav-list>
            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>User Management</h3>
              <a mat-list-item routerLink="users" routerLinkActive="active" class="nav-item">
                <i class="fas fa-users"></i>
                <span>User Accounts</span>
              </a>

              <a
                mat-list-item
                routerLink="permissions"
                routerLinkActive="active"
                class="nav-item"
              >
                <i class="fas fa-shield-alt"></i>
                <span>Permissions</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>AI Management</h3>
              <a mat-list-item routerLink="ai-models" routerLinkActive="active" class="nav-item">
                <i class="fas fa-robot"></i>
                <span>AI Models</span>
              </a>

              <a
                mat-list-item
                routerLink="accuracy-metrics"
                routerLinkActive="active"
                class="nav-item"
              >
                <i class="fas fa-chart-line"></i>
                <span>Accuracy Metrics</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>System</h3>
              <a
                mat-list-item
                routerLink="monitoring"
                routerLinkActive="active"
                class="nav-item"
              >
                <i class="fas fa-heartbeat"></i>
                <span>System Health</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>Analytics</h3>
              <a mat-list-item routerLink="analytics" routerLinkActive="active" class="nav-item">
                <i class="fas fa-chart-bar"></i>
                <span>Platform Analytics</span>
              </a>
            </div>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="content">
          <div class="content-wrapper" [@slideInFromRight]>
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      :host {
        --primary: #4e54c8;
        --primary-light: #8f94fb;
        --primary-dark: #363795;
        --accent: #4caf50;
        --accent-light: #81c784;
        --text-primary: #333;
        --text-secondary: #666;
        --background-light: #f5f7fa;
        --card-bg: #ffffff;
        --success: #00c853;
        --warning: #ffd600;
      }

      .dashboard-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      /* Typewriter animation */
      .typewriter {
        overflow: hidden;
        border-right: 3px solid rgba(255,255,255,0.75);
        white-space: nowrap;
        margin: 0;
        animation: 
          typing 3.5s steps(30, end),
          blink-caret 0.75s step-end infinite;
      }

      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: rgba(255,255,255,0.75) }
      }

      .sidenav-container {
        flex: 1;
        background-color: var(--background-light);
      }

      .sidenav {
        width: 260px;
        background-color: var(--card-bg);
        border-right: 1px solid var(--background-light);
      }

      .sidenav-header {
        padding: 24px 16px;
        background-color: var(--primary-dark);
        color: white;
      }

      .logo-container {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .logo-icon {
        font-size: 28px;
        height: 28px;
        width: 28px;
      }

      .logo-text {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .content {
        background-color: var(--background-light);
      }

      .content-wrapper {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
      }

      mat-nav-list {
        padding-top: 16px;
      }

      mat-nav-list a {
        height: 48px;
        margin: 8px 12px;
        border-radius: 8px;
        color: var(--text-secondary);
        font-weight: 500;
        transition: all 0.3s ease;
      }

      mat-nav-list a.active {
        background-color: var(--primary-light);
        color: var(--primary);
        transform: translateX(5px);
        position: relative;
      }

      mat-nav-list a.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: var(--accent);
        border-radius: 0 4px 4px 0;
      }

      mat-nav-list a:hover {
        background-color: var(--background-light);
        transform: translateX(5px);
      }

      .nav-item {
        display: flex;
        align-items: center;
      }

      .nav-item i {
        margin-right: 12px;
        color: var(--text-secondary);
        transition: transform 0.3s ease, color 0.3s ease;
        font-size: 20px;
        width: 20px;
        text-align: center;
      }

      .nav-item.active i {
        color: var(--primary);
      }

      .nav-item:hover i {
        transform: scale(1.1);
        color: var(--primary-light);
      }

      .toolbar-right i {
        font-size: 20px;
        color: white;
      }

      @media (max-width: 768px) {
        .sidenav {
          width: 240px;
        }

        .content-wrapper {
          padding: 16px;
        }
      }

      .nav-section {
        padding: 8px 0;
        transition: opacity 0.5s ease;
      }

      h3[matSubheader] {
        color: var(--text-secondary);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 16px 24px 8px;
        margin: 0;
      }

      mat-divider {
        margin: 8px 0;
        background-color: var(--background-light);
      }

      .mat-badge-content {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        background-color: var(--accent) !important;
      }

      /* Custom menu styles */
      ::ng-deep .custom-menu {
        background-color: white;
      }

      ::ng-deep .custom-menu .mat-menu-item:hover {
        background-color: var(--background-light);
      }

      ::ng-deep .custom-menu .mat-menu-item i {
        color: var(--primary);
        margin-right: 8px;
      }

      /* Animation for active items */
      .nav-item.active::after {
        content: '';
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--accent);
        box-shadow: 0 0 8px var(--accent);
        animation: pulse 1.5s infinite;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
        }
      }
    `,
  ],
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  sidenavOpened = true;
  sidenavState = 'in';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Add delay for initial animations
    setTimeout(() => {
      this.sidenavState = 'in';
    }, 100);
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavOpened ? 'in' : 'out';
  }

  logout(): void {
    this.authService.logout();
  }
}