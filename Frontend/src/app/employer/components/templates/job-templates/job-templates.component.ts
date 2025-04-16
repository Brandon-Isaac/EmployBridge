import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

interface JobTemplate {
  id: number;
  title: string;
  department: string;
  type: string;
  description: string;
  skills: string[];
  lastUsed: string;
}

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
  ],
  template: `
    <div class="templates-container">
      <div class="page-header">
        <div class="header-content">
          <h1 class="header-title">Job Templates</h1>
          <p class="header-subtitle">Create and manage reusable job templates for consistent hiring</p>
        </div>
        <button mat-raised-button class="new-template-btn" (click)="createNewTemplate()">
          <i class="fas fa-plus"></i>
          New Template
        </button>
      </div>

      <div class="template-filters">
        <div class="filter-chips">
          <mat-chip-set>
            <mat-chip class="filter-chip active">All Templates</mat-chip>
            <mat-chip class="filter-chip">Recently Used</mat-chip>
            <mat-chip class="filter-chip">Engineering</mat-chip>
            <mat-chip class="filter-chip">Design</mat-chip>
            <mat-chip class="filter-chip">Marketing</mat-chip>
          </mat-chip-set>
        </div>
        <div class="sort-filter">
          <button mat-button class="sort-button" [matMenuTriggerFor]="sortMenu">
            <i class="fas fa-sort"></i>
            Sort By
          </button>
          <mat-menu #sortMenu="matMenu">
            <button mat-menu-item>Name (A-Z)</button>
            <button mat-menu-item>Name (Z-A)</button>
            <button mat-menu-item>Recent First</button>
            <button mat-menu-item>Oldest First</button>
          </mat-menu>
        </div>
      </div>

      <div class="templates-grid">
        <mat-card class="template-card" *ngFor="let template of jobTemplates">
          <div class="card-header-stripe" [ngClass]="getDepartmentClass(template.department)"></div>
          
          <mat-card-header>
            <div class="template-info">
              <mat-card-title>{{ template.title }}</mat-card-title>
              <mat-card-subtitle>
                <i class="fas fa-users department-icon"></i>
                {{ template.department }}
              </mat-card-subtitle>
            </div>
            <button mat-icon-button [matMenuTriggerFor]="actionMenu" class="more-options-btn" matTooltip="More Options">
              <i class="fas fa-ellipsis-v"></i>
            </button>
            <mat-menu #actionMenu="matMenu" class="template-actions-menu">
              <button mat-menu-item>
                <i class="fas fa-edit"></i>
                <span>Edit</span>
              </button>
              <button mat-menu-item>
                <i class="fas fa-copy"></i>
                <span>Duplicate</span>
              </button>
              <mat-divider></mat-divider>
              <button mat-menu-item class="delete-option">
                <i class="fas fa-trash"></i>
                <span>Delete</span>
              </button>
            </mat-menu>
          </mat-card-header>

          <mat-card-content>
            <div class="job-type-indicator">
              <mat-chip class="job-type-chip" [ngClass]="getJobTypeClass(template.type)">
                <i class="fas" [ngClass]="getJobTypeIcon(template.type)"></i>
                {{ template.type }}
              </mat-chip>
            </div>

            <p class="description">{{ template.description }}</p>

            <div class="skills-section">
              <h4 class="section-title">
                <i class="fas fa-star section-icon"></i>
                Required Skills
              </h4>
              <mat-chip-set class="skills-chips">
                <mat-chip *ngFor="let skill of template.skills" class="skill-chip">
                  {{ skill }}
                </mat-chip>
              </mat-chip-set>
            </div>
          </mat-card-content>

          <mat-divider></mat-divider>

          <mat-card-actions>
            <div class="card-footer">
              <span class="last-used">
                <i class="fas fa-clock timestamp-icon"></i>
                Last used: {{ formatDate(template.lastUsed) }}
              </span>
              <button mat-flat-button class="use-template-btn">
                <i class="fas fa-file-alt"></i>
                Use Template
              </button>
            </div>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        --primary-green: #2e7d32;
        --light-green: #4caf50;
        --pale-green: #e8f5e9;
        --blue-accent: #0288d1;
        --teal-accent: #009688;
        --purple-accent: #7b1fa2;
        --orange-accent: #f57c00;
        --dark-text: #263238;
        --medium-text: #546e7a;
        --light-text: #78909c;
        --card-bg: #ffffff;
        --hover-bg: #f5f9f5;
        --divider: #e0f2f1;
      }

      .templates-container {
        padding: 24px;
        max-width: 1600px;
        margin: 0 auto;
        background-color: #f8f9fa;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
      }

      .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--divider);
      }

      .header-title {
        font-size: 28px;
        font-weight: 500;
        color: var(--dark-text);
        margin: 0 0 8px 0;
      }

      .header-subtitle {
        font-size: 16px;
        color: var(--medium-text);
        margin: 0;
      }

      .new-template-btn {
        background-color: var(--primary-green);
        color: white;
        border-radius: 24px;
        padding: 0 24px;
        height: 48px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
      }

      .new-template-btn:hover {
        background-color: var(--teal-accent);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      .new-template-btn i {
        margin-right: 8px;
        font-size: 18px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .template-filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
      }

      .filter-chips {
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 4px;
      }

      .filter-chip {
        margin-right: 8px;
        background-color: #f1f3f4;
        color: var(--medium-text);
        font-weight: 500;
      }

      .filter-chip.active {
        background-color: var(--pale-green);
        color: var(--primary-green);
        border: 1px solid var(--light-green);
      }

      .sort-button {
        color: var(--medium-text);
      }

      .sort-button i {
        margin-right: 8px;
        font-size: 18px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .templates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        gap: 24px;
      }

      .template-card {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .template-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }

      .card-header-stripe {
        height: 6px;
        width: 100%;
      }

      .card-header-stripe.engineering {
        background: linear-gradient(90deg, var(--teal-accent), var(--blue-accent));
      }

      .card-header-stripe.design {
        background: linear-gradient(90deg, var(--purple-accent), #9c27b0);
      }

      .card-header-stripe.marketing {
        background: linear-gradient(90deg, var(--orange-accent), #ff9800);
      }

      .card-header-stripe.sales {
        background: linear-gradient(90deg, var(--blue-accent), #03a9f4);
      }

      mat-card-header {
        padding: 16px 16px 8px;
        display: flex;
        justify-content: space-between;
      }

      .template-info {
        flex: 1;
      }

      mat-card-title {
        font-size: 20px;
        font-weight: 500;
        color: var(--dark-text);
        margin-bottom: 4px;
      }

      mat-card-subtitle {
        display: flex;
        align-items: center;
        color: var(--medium-text);
        font-size: 14px;
      }

      .department-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        opacity: 0.8;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .more-options-btn {
        color: var(--medium-text);
      }

      .more-options-btn i {
        font-size: 20px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      mat-card-content {
        padding: 0 16px 16px;
        flex: 1;
      }

      .job-type-indicator {
        margin: 8px 0 16px;
      }

      .job-type-chip {
        font-size: 12px;
        height: 24px;
        padding: 0 12px;
      }

      .job-type-chip.full-time {
        background-color: rgba(46, 125, 50, 0.1);
        color: var(--primary-green);
      }

      .job-type-chip.part-time {
        background-color: rgba(2, 136, 209, 0.1);
        color: var(--blue-accent);
      }

      .job-type-chip.contract {
        background-color: rgba(245, 124, 0, 0.1);
        color: var(--orange-accent);
      }

      .job-type-chip i {
        font-size: 14px;
        width: 14px;
        height: 14px;
        margin-right: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .description {
        margin: 16px 0;
        color: var(--dark-text);
        font-size: 14px;
        line-height: 1.5;
        height: 84px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .skills-section {
        margin: 16px 0 8px;
      }

      .section-title {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: var(--dark-text);
        margin-bottom: 12px;
      }

      .section-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        color: var(--teal-accent);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .skills-chips {
        display: flex;
        flex-wrap: wrap;
      }

      .skill-chip {
        margin: 4px;
        background-color: rgba(0, 150, 136, 0.1);
        color: var(--teal-accent);
        font-size: 12px;
        height: 24px;
      }

      mat-divider {
        margin: 8px 0;
      }

      mat-card-actions {
        padding: 8px 16px;
      }

      .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .last-used {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: var(--medium-text);
      }

      .timestamp-icon {
        font-size: 14px;
        width: 14px;
        height: 14px;
        margin-right: 6px;
        color: var(--medium-text);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .use-template-btn {
        background-color: transparent;
        color: var(--teal-accent);
        font-weight: 500;
        border: 1px solid var(--teal-accent);
        transition: all 0.2s ease;
      }

      .use-template-btn:hover {
        background-color: rgba(0, 150, 136, 0.1);
      }

      .use-template-btn i {
        font-size: 16px;
        margin-right: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .delete-option {
        color: #f44336;
      }

      .template-actions-menu button {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .template-actions-menu i {
        font-size: 18px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 768px) {
        .templates-container {
          padding: 16px;
        }

        .page-header {
          flex-direction: column;
          align-items: flex-start;
        }

        .new-template-btn {
          margin-top: 16px;
          width: 100%;
        }

        .template-filters {
          flex-direction: column;
          align-items: flex-start;
        }

        .filter-chips {
          margin-bottom: 16px;
          width: 100%;
        }

        .sort-filter {
          width: 100%;
        }

        .sort-button {
          width: 100%;
          justify-content: flex-start;
        }

        .templates-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class JobTemplatesComponent {
  jobTemplates: JobTemplate[] = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Engineering',
      type: 'Full-time',
      description:
        'We are looking for a software engineer with strong problem-solving skills and experience in modern web technologies.',
      skills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js'],
      lastUsed: '2024-02-15',
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      type: 'Full-time',
      description:
        'Seeking a product designer to create intuitive and beautiful user experiences for our products.',
      skills: ['UI/UX', 'Figma', 'User Research', 'Prototyping'],
      lastUsed: '2024-03-01',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      type: 'Full-time',
      description:
        'Looking for an experienced marketing manager to lead our digital marketing initiatives.',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
      lastUsed: '2024-03-10',
    },
    {
      id: 4,
      title: 'Sales Representative',
      department: 'Sales',
      type: 'Full-time',
      description:
        'Join our sales team to help drive business growth and build strong client relationships.',
      skills: ['B2B Sales', 'Negotiation', 'CRM', 'Lead Generation'],
      lastUsed: '2024-02-28',
    },
  ];

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
}