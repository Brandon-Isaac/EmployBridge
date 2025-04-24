import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { animate, style, transition, trigger } from '@angular/animations';
import { JobListingService, JobListing } from '../../../services/job-listing.service';
import { ToastNotificationComponent } from '../../../../shared/components/toast-notification/toast-notification.component';

@Component({
  selector: 'app-active-listings',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './active-listings.component.html',
  styleUrls: ['./active-listings.component.css']
})
export class ActiveListingsComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'department',
    'location',
    'type',
    'status',
    'applicants',
    'posted',
    'actions',
  ];

  jobListings: JobListing[] = [];
  isLoading = true;

  constructor(
    private jobListingService: JobListingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadJobListings();
  }

  loadJobListings(): void {
    this.isLoading = true;
    this.jobListingService.getActiveListings().subscribe({
      next: (listings) => {
        this.jobListings = listings;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading job listings:', error);
        this.isLoading = false;
        this.snackBar.openFromComponent(ToastNotificationComponent, {
          data: {
            message: 'Failed to load job listings. Please try again.',
            type: 'error',
            duration: 5000,
          },
        });
      }
    });
  }

  deleteListing(id: string): void {
    if (confirm('Are you sure you want to delete this job listing?')) {
      this.jobListingService.deleteListing(id).subscribe({
        next: () => {
          this.jobListings = this.jobListings.filter(listing => listing.id !== id);
          this.snackBar.openFromComponent(ToastNotificationComponent, {
            data: {
              message: 'Job listing deleted successfully',
              type: 'success',
              duration: 3000,
            },
          });
        },
        error: (error) => {
          console.error('Error deleting job listing:', error);
          this.snackBar.openFromComponent(ToastNotificationComponent, {
            data: {
              message: 'Failed to delete job listing. Please try again.',
              type: 'error',
              duration: 5000,
            },
          });
        }
      });
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'primary';
      case 'paused':
        return 'warn';
      case 'closed':
        return 'accent';
      default:
        return '';
    }
  }
}