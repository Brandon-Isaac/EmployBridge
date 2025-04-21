import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  appliedDate: Date;
  status: 'Pending' | 'Reviewed' | 'Interview' | 'Rejected' | 'Accepted';
  lastUpdated: Date;
}

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule,
  ],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('typewriter', [
      state('start', style({ width: '0' })),
      state('end', style({ width: '100%' })),
      transition('start => end', [
        animate('2000ms steps(40, end)')
      ])
    ]),
    trigger('rowHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.02)' })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ],
  template: `
    <div class="applications-container" [@slideIn]>
      <mat-card class="elevated-card">
        <mat-card-header>
          <mat-card-title class="typewriter" [@typewriter]="typewriterState">
            Your Applications
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <table
            mat-table
            [dataSource]="applications"
            class="mat-elevation-z2 applications-table"
          >
            <!-- Job Title -->
            <ng-container matColumnDef="jobTitle">
              <th mat-header-cell *matHeaderCellDef>Job Title</th>
              <td mat-cell *matCellDef="let application" [@rowHover]="rowState"
                  (mouseenter)="rowState = 'hovered'"
                  (mouseleave)="rowState = 'normal'">
                <strong class="job-title">{{ application.jobTitle }}</strong>
                <div class="company-mobile">{{ application.company }}</div>
              </td>
            </ng-container>

            <!-- Company -->
            <ng-container matColumnDef="company">
              <th mat-header-cell *matHeaderCellDef>Company</th>
              <td mat-cell *matCellDef="let application">
                <span class="company-desktop">{{ application.company }}</span>
              </td>
            </ng-container>

            <!-- Applied Date -->
            <ng-container matColumnDef="appliedDate">
              <th mat-header-cell *matHeaderCellDef>Applied</th>
              <td mat-cell *matCellDef="let application">
                <div class="date-container">
                  <i class="fas fa-calendar-alt date-icon"></i>
                  <span>{{ application.appliedDate | date : 'mediumDate' }}</span>
                </div>
              </td>
            </ng-container>

            <!-- Status -->
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let application">
                <mat-chip
                  [class]="getStatusClass(application.status)"
                  selected
                  class="status-chip"
                >
                  {{ application.status }}
                </mat-chip>
              </td>
            </ng-container>

            <!-- Actions -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let application">
                <div class="actions-container">
                  <button
                    mat-icon-button
                    class="view-button"
                    matTooltip="View Details"
                    (click)="viewDetails(application)"
                  >
                    <i class="fas fa-eye"></i>
                  </button>

                  <button
                    mat-icon-button
                    class="withdraw-button"
                    matTooltip="Withdraw"
                    (click)="withdrawApplication(application)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr 
              mat-row 
              *matRowDef="let row; columns: displayedColumns"
              [@slideIn]
              [@rowHover]="rowState"
              (mouseenter)="rowState = 'hovered'"
              (mouseleave)="rowState = 'normal'"
            ></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      :host {
        --primary-brown: #6D4C41;
        --light-brown: #8D6E63;
        --dark-brown: #4E342E;
        --accent-brown: #A1887F;
        --background-brown: #EFEBE9;
        --text-brown: #3E2723;
        --pending: #BCAAA4;
        --reviewed: #FFB74D;
        --interview: #64B5F6;
        --rejected: #E57373;
        --accepted: #81C784;
      }

      .applications-container {
        padding: 24px;
        width: 100%;
        overflow-x: auto;
        background-color: var(--background-brown);
        min-height: 100vh;
      }

      .elevated-card {
        border-radius: 12px;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
        background-color: white;
        border: 1px solid var(--accent-brown);
      }

      .applications-table {
        width: 100%;
        min-width: 600px;
        border-collapse: separate;
        border-spacing: 0 8px;
      }

      .typewriter {
        font-family: 'Courier New', monospace;
        color: var(--primary-brown);
        font-size: 1.8rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        border-right: 3px solid var(--primary-brown);
        animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
      }

      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: var(--primary-brown) }
      }

      .mat-header-cell {
        font-weight: 600;
        color: var(--dark-brown);
        font-size: 0.9rem;
        padding: 12px 16px;
        background-color: var(--background-brown);
      }

      .mat-cell {
        padding: 16px;
        color: var(--text-brown);
        border-top: 1px solid var(--accent-brown);
        border-bottom: 1px solid var(--accent-brown);
        background-color: white;
      }

      .mat-cell:first-child {
        border-left: 1px solid var(--accent-brown);
        border-radius: 8px 0 0 8px;
      }

      .mat-cell:last-child {
        border-right: 1px solid var(--accent-brown);
        border-radius: 0 8px 8px 0;
      }

      .job-title {
        color: var(--dark-brown);
        font-size: 1rem;
      }

      .company-desktop {
        color: var(--light-brown);
        font-size: 0.9rem;
      }

      .company-mobile {
        display: none;
        color: var(--light-brown);
        font-size: 0.8rem;
        margin-top: 4px;
      }

      .date-container {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .date-icon {
        color: var(--light-brown);
        font-size: 18px;
        width: 18px;
        height: 18px;
      }

      .status-chip {
        font-weight: 500;
        font-size: 0.8rem;
        padding: 4px 8px;
        min-height: 24px;
      }

      .pending-chip {
        background-color: var(--pending);
        color: var(--text-brown);
      }

      .reviewed-chip {
        background-color: var(--reviewed);
        color: var(--text-brown);
      }

      .interview-chip {
        background-color: var(--interview);
        color: white;
      }

      .rejected-chip {
        background-color: var(--rejected);
        color: white;
      }

      .accepted-chip {
        background-color: var(--accepted);
        color: white;
      }

      .actions-container {
        display: flex;
        gap: 8px;
      }

      .view-button {
        color: var(--primary-brown);
        background-color: rgba(109, 76, 65, 0.1);
      }

      .withdraw-button {
        color: var(--rejected);
        background-color: rgba(229, 115, 115, 0.1);
      }

      .mat-row:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 768px) {
        .applications-container {
          padding: 12px;
        }

        .typewriter {
          font-size: 1.4rem;
        }

        .company-desktop {
          display: none;
        }

        .company-mobile {
          display: block;
        }

        .mat-header-cell,
        .mat-cell {
          padding: 12px 8px;
          font-size: 14px;
        }

        .status-chip {
          font-size: 12px;
        }
      }

      @media (max-width: 480px) {
        .applications-container {
          padding: 8px;
        }

        .typewriter {
          font-size: 1.2rem;
        }

        .mat-cell {
          padding: 8px 4px;
        }

        .actions-container {
          flex-direction: column;
          gap: 4px;
        }
      }
    `,
  ],
})
export class ApplicationsComponent implements OnInit {
  displayedColumns: string[] = [
    'jobTitle',
    'company',
    'appliedDate',
    'status',
    'actions',
  ];
  applications: Application[] = [
    {
      id: '1',
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp',
      appliedDate: new Date('2024-03-15'),
      status: 'Interview',
      lastUpdated: new Date('2024-03-20'),
    },
    {
      id: '2',
      jobTitle: 'Full Stack Developer',
      company: 'InnovateSoft',
      appliedDate: new Date('2024-03-10'),
      status: 'Pending',
      lastUpdated: new Date('2024-03-10'),
    },
    {
      id: '3',
      jobTitle: 'UX Designer',
      company: 'DesignHub',
      appliedDate: new Date('2024-03-05'),
      status: 'Reviewed',
      lastUpdated: new Date('2024-03-08'),
    },
    {
      id: '4',
      jobTitle: 'Product Manager',
      company: 'ProductLabs',
      appliedDate: new Date('2024-02-28'),
      status: 'Rejected',
      lastUpdated: new Date('2024-03-15'),
    },
    {
      id: '5',
      jobTitle: 'DevOps Engineer',
      company: 'CloudSystems',
      appliedDate: new Date('2024-03-01'),
      status: 'Accepted',
      lastUpdated: new Date('2024-03-18'),
    },
  ];

  typewriterState = 'start';
  rowState = 'normal';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.typewriterState = 'end';
    }, 100);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Accepted':
        return 'accepted-chip';
      case 'Interview':
        return 'interview-chip';
      case 'Rejected':
        return 'rejected-chip';
      case 'Reviewed':
        return 'reviewed-chip';
      case 'Pending':
      default:
        return 'pending-chip';
    }
  }

  viewDetails(application: Application): void {
    console.log('View details for application:', application);
    // Navigate to application details
  }

  withdrawApplication(application: Application): void {
    console.log('Withdraw application:', application);
    // Implement withdrawal logic
  }
}