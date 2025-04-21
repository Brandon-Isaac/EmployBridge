import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-job-seeker-dashboard',
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
    ]),
    trigger('slideInFromBottom', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
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
          <span class="app-title typewriter">Employbridge AI</span>
        </div>
        <div class="toolbar-right">
          <button
            mat-icon-button
            [matBadge]="notificationCount"
            matBadgeColor="accent"
            class="notification-button"
            aria-label="Show notifications"
          >
            <i class="fas fa-bell"></i>
          </button>
          <button mat-icon-button [matMenuTriggerFor]="userMenu" aria-label="User menu">
            <i class="fas fa-user-circle"></i>
          </button>
          <mat-menu #userMenu="matMenu" class="custom-menu">
            <button mat-menu-item routerLink="profile">
              <i class="fas fa-user"></i>
              <span>My Profile</span>
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
        <mat-sidenav
          #sidenav
          [mode]="sidenavMode"
          [opened]="sidenavOpened"
          class="sidenav"
          [fixedInViewport]="mobileView"
          [@slideInOut]="sidenavState"
        >
          <mat-nav-list>
            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>Profile & Portfolio</h3>
              <a
                mat-list-item
                routerLink="profile"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-id-card"></i>
                <span>Profile Overview</span>
              </a>
              <a
                mat-list-item
                routerLink="skills"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-brain"></i>
                <span>Skill Management</span>
              </a>
              <a
                mat-list-item
                routerLink="portfolio"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-folder-open"></i>
                <span>Portfolio</span>
              </a>
              <a
                mat-list-item
                routerLink="cv"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-file-alt"></i>
                <span>CV Manager</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>Job Search</h3>
              <a
                mat-list-item
                routerLink="job-search"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-search"></i>
                <span>Job Search</span>
              </a>
              <a
                mat-list-item
                routerLink="matches"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-handshake"></i>
                <span>Job Matches</span>
              </a>
              <a
                mat-list-item
                routerLink="applications"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-paper-plane"></i>
                <span>Applications</span>
              </a>
              <a
                mat-list-item
                routerLink="interviews"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-comments"></i>
                <span>Interviews</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>Career Development</h3>
              <a
                mat-list-item
                routerLink="career-paths"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-road"></i>
                <span>Career Paths</span>
              </a>
              <a
                mat-list-item
                routerLink="learning"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-graduation-cap"></i>
                <span>Learning Resources</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section" [@fadeIn]>
              <h3 matSubheader>AI Tools</h3>
              <a
                mat-list-item
                routerLink="chatbot"
                routerLinkActive="active"
                class="nav-item"
                (click)="onNavItemClick()"
              >
                <i class="fas fa-robot"></i>
                <span>Career Assistant</span>
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
        --primary: #8B5A2B;
        --primary-light: #A67C52;
        --primary-dark: #6B4423;
        --accent: #D2B48C;
        --accent-light: #E6D2B8;
        --accent-dark: #9F8A6E;
        --text-primary: #3E2723;
        --text-secondary: #5D4037;
        --background-light: #F5F0E6;
        --card-bg: #FFFFFF;
        --success: #4CAF50;
        --warning: #FFC107;
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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
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
        margin-top: 64px; /* Height of toolbar */
      }

      .sidenav {
        width: 260px;
        background-color: var(--card-bg);
        border-right: 1px solid var(--accent-light);
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
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
        transition: margin-left 0.3s ease;
      }

      .content-wrapper {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
        transition: max-width 0.3s ease;
      }

      /* When sidenav is closed */
      .sidenav-container:not(.mat-drawer-opened) .content {
        margin-left: 0;
      }

      .sidenav-container:not(.mat-drawer-opened) .content-wrapper {
        max-width: 1400px;
      }

      /* When sidenav is open */
      .sidenav-container.mat-drawer-opened .content {
        margin-left: 260px;
      }

      .sidenav-container.mat-drawer-opened .content-wrapper {
        max-width: 1200px;
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
        background-color: var(--accent-light);
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
        background: var(--primary);
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
        background-color: var(--accent-light);
      }

      .toolbar-right i {
        font-size: 20px;
        color: white;
      }

      .mat-badge-content {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        background-color: var(--accent-dark) !important;
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
        background-color: var(--primary);
        box-shadow: 0 0 8px var(--primary-light);
        animation: pulse 1.5s infinite;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(139, 90, 43, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(139, 90, 43, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(139, 90, 43, 0);
        }
      }

      /* Mobile Styles */
      @media (max-width: 768px) {
        .toolbar {
          padding: 0 8px;
        }

        .app-title {
          font-size: 1.1rem;
        }

        .sidenav {
          width: 85%;
          max-width: 300px;
        }

        .content-wrapper {
          padding: 16px;
        }

        .sidenav-container {
          margin-top: 56px; /* Smaller toolbar height on mobile */
        }

        mat-nav-list a {
          margin: 4px 8px;
          height: 44px;
        }

        h3[matSubheader] {
          padding: 12px 16px 6px;
        }
      }

      /* Animation for sidenav */
      .sidenav {
        transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
      }

      /* Hide menu button on larger screens */
      @media (min-width: 1025px) {
        .menu-button {
          display: none;
        }
      }

      .menu-button {
        margin-right: 8px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .menu-button i {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    `,
  ],
})
export class JobSeekerDashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  mobileView = false;
  sidenavMode: 'side' | 'over' = 'side';
  sidenavOpened = true;
  sidenavState = 'in';
  notificationCount = 3;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.mobileView = result.matches;
        this.sidenavMode = result.matches ? 'over' : 'side';
        this.sidenavOpened = !result.matches;
        this.sidenavState = this.sidenavOpened ? 'in' : 'out';
        this.cdr.detectChanges();
      });

    // Add delay for initial animations
    setTimeout(() => {
      this.sidenavState = 'in';
    }, 100);
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavOpened ? 'in' : 'out';
    if (this.sidenavMode === 'side') {
      // Do nothing, state handles it
    } else {
      this.sidenav.toggle();
    }
  }

  onNavItemClick() {
    if (this.mobileView) {
      this.sidenav.close();
      this.sidenavState = 'out';
      this.sidenavOpened = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}