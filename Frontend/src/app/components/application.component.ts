import { Component, OnInit } from '@angular/core';
import { ApplicationService, Application, ApplicationStatus } from '../services/application.service';

@Component({
  selector: 'app-applications',
  template: '...'
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];
  loading = false;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.loadUserApplications('user-id');
  }

  // Create a new application
  createApplication(jobId: string) {
    this.loading = true;
    this.applicationService.createApplication({ jobId }).subscribe({
      next: (application) => {
        console.log('Application created:', application);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error creating application:', error);
        this.loading = false;
      }
    });
  }

  // Load user's applications
  loadUserApplications(userId: string) {
    this.loading = true;
    this.applicationService.getUserApplications(userId).subscribe({
      next: (applications) => {
        this.applications = applications;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading applications:', error);
        this.loading = false;
      }
    });
  }

  // Load applications for a job
  loadJobApplications(jobId: string) {
    this.loading = true;
    this.applicationService.getJobApplications(jobId).subscribe({
      next: (applications) => {
        this.applications = applications;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading job applications:', error);
        this.loading = false;
      }
    });
  }

  // Update application status
  updateStatus(applicationId: string, status: ApplicationStatus, interviewDate?: Date) {
    this.loading = true;
    this.applicationService.updateApplicationStatus(applicationId, { status, interviewDate }).subscribe({
      next: (application) => {
        console.log('Status updated:', application);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error updating status:', error);
        this.loading = false;
      }
    });
  }

  // Get match score
  getMatchScore(applicationId: string) {
    this.applicationService.getApplicationMatchScore(applicationId).subscribe({
      next: (result) => {
        console.log('Match score:', this.applicationService.formatMatchScore(result.matchScore));
      },
      error: (error) => {
        console.error('Error getting match score:', error);
      }
    });
  }

  // Helper methods for UI
  getStatusColor(status: ApplicationStatus): string {
    return this.applicationService.getStatusColor(status);
  }

  formatDate(date: Date): string {
    return this.applicationService.formatDate(date);
  }

  isInterviewStage(status: ApplicationStatus): boolean {
    return this.applicationService.isInterviewStage(status);
  }
}