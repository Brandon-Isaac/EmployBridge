import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
import { AuthService } from '../../../core/services/auth.service';

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
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  employers: User[] = [];
  jobSeekers: User[] = [];
  stats: any = {};
  isLoading = true;
  errorMessage = '';

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
}