import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { JobTemplateService, JobTemplate } from '../../../services/job-template.service';

@Component({
  selector: 'app-job-templates',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './job-templates.component.html',
  styleUrls: ['./job-templates.component.scss']
})
export class JobTemplatesComponent implements OnInit {
  jobTemplates: JobTemplate[] = [];
  isLoading = false;

  constructor(
    private jobTemplateService: JobTemplateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadJobTemplates();
  }

  loadJobTemplates(): void {
    this.isLoading = true;
    this.jobTemplateService.getJobTemplates().subscribe({
      next: (templates) => {
        this.jobTemplates = templates;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading job templates:', error);
        this.snackBar.open('Error loading job templates. Please try again.', 'Close', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.isLoading = false;
      }
    });
  }

  getDepartmentClass(department: string): string {
    return department.toLowerCase();
  }

  getJobTypeClass(type: string): string {
    return type.toLowerCase().replace('-', '');
  }

  getJobTypeIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'fa-briefcase';
      case 'part-time':
        return 'fa-clock';
      case 'contract':
        return 'fa-file-contract';
      default:
        return 'fa-briefcase';
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  createNewTemplate(): void {
    // Implementation would go here
    console.log('Creating new template');
  }

  deleteTemplate(id: number): void {
    if (confirm('Are you sure you want to delete this template?')) {
      this.jobTemplateService.deleteJobTemplate(id).subscribe({
        next: () => {
          this.jobTemplates = this.jobTemplates.filter(template => template.id !== id);
          this.snackBar.open('Template deleted successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        },
        error: (error) => {
          console.error('Error deleting template:', error);
          this.snackBar.open('Error deleting template. Please try again.', 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      });
    }
  }
}