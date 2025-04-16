import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../core/services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
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
    ])
  ],
  template: `
    <div class="dashboard-container">
      <mat-toolbar class="toolbar" [@fadeIn]>
        <div class="toolbar-left">
          <button mat-icon-button (click)="toggleSidenav()" class="menu-button">
            <i class="fas fa-bars"></i>
          </button>
          <span class="app-title">
            <i class="fas fa-briefcase logo-icon"></i>
            <span class="app-name">SkillMatch AI</span>
          </span>
        </div>
        <div class="toolbar-right">
          <button
            mat-button
            [matMenuTriggerFor]="userMenu"
            class="profile-button"
          >
            <i class="fas fa-user-circle profile-icon"></i>
            <span>Company Profile</span>
          </button>
          <mat-menu #userMenu="matMenu" class="custom-menu">
            <button mat-menu-item routerLink="/company/profile">
              <i class="fas fa-building"></i>
              <span>Company Profile</span>
            </button>
            <button mat-menu-item routerLink="/company/settings">
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
        <mat-sidenav
          #sidenav
          class="sidenav"
          [@slideInOut]="sidenavState"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="!(isHandset$ | async) || sidenavOpened"
          fixedInViewport
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        >
          <div class="sidenav-header">
            <div class="logo-container">
              <i class="fas fa-briefcase logo-icon"></i>
              <span class="logo-text">Employer Portal</span>
            </div>
          </div>
          
          <mat-nav-list>
            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>JOB MANAGEMENT</h3>
              <a mat-list-item routerLink="listings" routerLinkActive="active">
                <i class="fas fa-list-alt"></i>
                <span>Active Listings</span>
              </a>
              <a mat-list-item routerLink="post-job" routerLinkActive="active">
                <i class="fas fa-plus-square"></i>
                <span>Post New Job</span>
              </a>
              <a mat-list-item routerLink="templates" routerLinkActive="active">
                <i class="fas fa-file-alt"></i>
                <span>Job Templates</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>TALENT ACQUISITION</h3>
              <a mat-list-item routerLink="candidates" routerLinkActive="active">
                <i class="fas fa-users"></i>
                <span>Candidate Pool</span>
              </a>
              <a mat-list-item routerLink="search" routerLinkActive="active">
                <i class="fas fa-search"></i>
                <span>AI Search</span>
              </a>
              <a mat-list-item routerLink="interviews" routerLinkActive="active">
                <i class="fas fa-calendar-alt"></i>
                <span>Interview Schedule</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>INSIGHTS</h3>
              <a mat-list-item routerLink="analytics" routerLinkActive="active">
                <i class="fas fa-chart-line"></i>
                <span>Hiring Analytics</span>
              </a>
            </div>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content>
          <div class="content" [@fadeIn]>
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      :host {
        --primary-color: rgba(102, 187, 106, 0.95);
        --primary-dark: rgba(56, 142, 60, 0.95);
        --primary-light: rgba(200, 230, 201, 0.7);
        --accent-color: #4caf50;
        --text-primary: #2e7d32;
        --text-secondary: #455a64;
        --background-light: rgba(245, 245, 245, 0.95);
        --card-bg: rgba(255, 255, 255, 0.98);
        --active-bg: rgba(200, 230, 201, 0.5);
        --hover-opacity: 0.08;
      }

      .dashboard-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--background-light);
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        background: var(--primary-color);
        color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        z-index: 2;
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
      }

      .app-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.25rem;
        font-weight: 500;
      }

      .logo-icon {
        font-size: 28px;
        width: 28px;
        height: 28px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .app-name {
        letter-spacing: 0.5px;
      }

      .menu-button {
        color: white;
        transition: transform 0.3s ease;
      }

      .menu-button:hover {
        transform: scale(1.1);
      }

      .profile-button {
        color: white;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 12px;
        transition: background-color 0.3s ease;
        border-radius: 20px;
      }

      .profile-button:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .profile-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .sidenav-container {
        flex: 1;
        background-color: transparent;
      }

      .sidenav {
        width: 280px;
        background-color: var(--card-bg);
        border-right: none;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(5px);
      }

      .sidenav-header {
        padding: 24px 16px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
        color: white;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .logo-text {
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 0.5px;
      }

      .nav-section {
        padding: 8px 0;
      }

      mat-nav-list {
        padding-top: 8px;
      }

      mat-nav-list a {
        height: 48px;
        margin: 4px 12px;
        border-radius: 8px;
        color: var(--text-secondary);
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 0 16px;
        transition: all 0.3s ease;
      }

      mat-nav-list a i {
        color: var(--text-secondary);
        font-size: 24px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }

      mat-nav-list a span {
        white-space: nowrap;
        flex: 1;
        font-size: 0.95rem;
      }

      mat-nav-list a.active {
        background-color: var(--active-bg);
        color: var(--text-primary);
        font-weight: 500;
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
      }

      mat-nav-list a.active i {
        color: var(--text-primary);
        transform: scale(1.1);
      }

      mat-nav-list a:hover:not(.active) {
        background-color: rgba(0, 0, 0, var(--hover-opacity));
      }

      mat-nav-list a:hover i {
        transform: translateX(2px);
      }

      h3[matSubheader] {
        color: var(--text-primary);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 16px 24px 8px;
        margin: 0;
        opacity: 0.8;
      }

      mat-divider {
        margin: 8px 16px;
        border-color: rgba(0, 0, 0, 0.05);
      }

      .content {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
        min-height: calc(100vh - 64px);
      }

      /* Custom menu styles */
      ::ng-deep .custom-menu {
        background-color: var(--card-bg);
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
      }

      ::ng-deep .custom-menu .mat-menu-item {
        height: 48px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 16px;
        transition: all 0.2s ease;
      }

      ::ng-deep .custom-menu .mat-menu-item i {
        color: var(--text-primary);
        font-size: 22px;
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ::ng-deep .custom-menu .mat-menu-item:hover {
        background-color: rgba(0, 0, 0, var(--hover-opacity));
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .sidenav {
          width: 260px;
        }

        .content {
          padding: 16px;
        }

        .app-name {
          display: none;
        }
      }

      /* Animation for active items */
      .active-indicator {
        position: absolute;
        right: 16px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--accent-color);
        box-shadow: 0 0 8px var(--accent-color);
      }
    `,
  ],
})
export class EmployerDashboardComponent {
  isHandset$: Observable<boolean>;
  sidenavOpened = true;
  sidenavState = 'in';

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe('(max-width: 768px)')
      .pipe(map((result: BreakpointState) => result.matches));
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavOpened ? 'in' : 'out';
  }

  logout(): void {
    this.authService.logout();
  }
}