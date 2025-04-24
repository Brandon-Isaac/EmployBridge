import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
import { AuthService } from '../../../core/services/auth.service';
import { RouterOutlet } from '@angular/router';
import { MatDivider, MatNavList } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  jobPostings?: number;
  location?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

@Component({
  imports: [
    RouterOutlet,
    MatNavList,
    MatDivider,
    MatSidenav,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule
  ],
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class AdminDashboardComponent implements OnInit {
  employers: User[] = [];
  jobSeekers: User[] = [];
  stats: any = {};
  isLoading = true;
  errorMessage = '';
  sidenavOpened = true;
  sidenavState = 'in';

  constructor(
    private adminService: AdminService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Load employers
    this.adminService.getEmployers().subscribe({
      next: (response) => {
        if (response.success) {
          this.employers = response.employers;
        }
      },
      error: (error) => {
        console.error('Error loading employers:', error);
        this.errorMessage = error.message || 'Failed to load employers';
      }
    });

    // Load job seekers
    this.adminService.getJobSeekers().subscribe({
      next: (response) => {
        if (response.success) {
          this.jobSeekers = response.jobSeekers;
        }
      },
      error: (error) => {
        console.error('Error loading job seekers:', error);
        this.errorMessage = error.message || 'Failed to load job seekers';
      }
    });

    // Load system stats
    this.adminService.getSystemStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.stats = response.stats;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading stats:', error);
        this.errorMessage = error.message || 'Failed to load system statistics';
        this.isLoading = false;
      }
    });
  }

  toggleUserStatus(user: User, type: 'job-seeker' | 'employer'): void {
    const action = user.isActive ? 'deactivate' : 'activate';
    const serviceCall = user.isActive 
      ? this.adminService.deactivateUser(type, user.id)
      : this.adminService.activateUser(type, user.id);

    serviceCall.subscribe({
      next: (response) => {
        if (response.success) {
          user.isActive = !user.isActive;
        }
      },
      error: (error) => {
        console.error(`Error ${action}ing user:`, error);
        this.errorMessage = error.message || `Failed to ${action} user`;
      }
    });
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavState === 'in' ? 'out' : 'in';
  }

  logout(): void {
    this.authService.logout();
  }
}