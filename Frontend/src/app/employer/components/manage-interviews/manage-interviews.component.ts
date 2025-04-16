import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

interface Interview {
  id: string;
  candidateName: string;
  position: string;
  date: Date;
  time: string;
  type: string;
  status: string;
  interviewer: string;
  notes?: string;
}

@Component({
  selector: 'app-manage-interviews',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatTooltipModule,
    DatePipe,
  ],
  template: `
    <div class="interviews-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Interview Management</mat-card-title>
          <button mat-raised-button color="primary" (click)="scheduleInterview()">
            Schedule Interview
          </button>
        </mat-card-header>

        <mat-card-content>
          <table mat-table [dataSource]="interviews">
            <!-- Candidate Name Column -->
            <ng-container matColumnDef="candidateName">
              <th mat-header-cell *matHeaderCellDef>Candidate</th>
              <td mat-cell *matCellDef="let interview">{{ interview.candidateName }}</td>
            </ng-container>

            <!-- Position Column -->
            <ng-container matColumnDef="position">
              <th mat-header-cell *matHeaderCellDef>Position</th>
              <td mat-cell *matCellDef="let interview">{{ interview.position }}</td>
            </ng-container>

            <!-- Date Column -->
            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let interview">{{ interview.date | date }}</td>
            </ng-container>

            <!-- Time Column -->
            <ng-container matColumnDef="time">
              <th mat-header-cell *matHeaderCellDef>Time</th>
              <td mat-cell *matCellDef="let interview">{{ interview.time }}</td>
            </ng-container>

            <!-- Type Column -->
            <ng-container matColumnDef="type">
              <th mat-header-cell *matHeaderCellDef>Type</th>
              <td mat-cell *matCellDef="let interview">
                <mat-chip [color]="getTypeColor(interview.type)">
                  {{ interview.type }}
                </mat-chip>
              </td>
            </ng-container>

            <!-- Status Column -->
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let interview">
                <mat-chip [color]="getStatusColor(interview.status)">
                  {{ interview.status }}
                </mat-chip>
              </td>
            </ng-container>

            <!-- Interviewer Column -->
            <ng-container matColumnDef="interviewer">
              <th mat-header-cell *matHeaderCellDef>Interviewer</th>
              <td mat-cell *matCellDef="let interview">{{ interview.interviewer }}</td>
            </ng-container>

            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let interview">
                <button mat-icon-button [matMenuTriggerFor]="menu">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <mat-menu #menu="matMenu">
                  <button mat-menu-item (click)="viewDetails(interview)">
                    <i class="fas fa-eye"></i>
                    <span>View Details</span>
                  </button>
                  <button mat-menu-item (click)="editInterview(interview)">
                    <i class="fas fa-edit"></i>
                    <span>Edit</span>
                  </button>
                  <button mat-menu-item *ngIf="interview.status === 'scheduled'" (click)="cancelInterview(interview)">
                    <i class="fas fa-times"></i>
                    <span>Cancel</span>
                  </button>
                  <button mat-menu-item *ngIf="interview.status === 'scheduled'" (click)="completeInterview(interview)">
                    <i class="fas fa-check"></i>
                    <span>Complete</span>
                  </button>
                </mat-menu>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      :host {
  --primary-color: #2E7D32;       /* Deep Green */
  --primary-light: #66BB6A;       /* Light Green */
  --primary-dark: #1B5E20;        /* Darker Green */
  --accent-color: #AED581;        /* Leaf Green */
  --warn-color: #EF5350;          /* Slightly softened red */
  --text-primary: #1B5E20;
  --text-secondary: #33691E;
  --background-light: #E8F5E9;    /* Soft green background */
  --card-bg: #FFFFFF;
}

.interviews-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--background-light);
}

mat-card {
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 100, 0, 0.08); /* Green tint shadow */
  background-color: var(--card-bg);
  border: 1px solid var(--primary-light);
}

mat-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

mat-card-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

button[mat-raised-button] {
  background-color: var(--primary-color);
  color: white;
  border-radius: 20px;
}

button[mat-raised-button]:hover {
  background-color: var(--primary-dark);
}

table {
  width: 100%;
}

th.mat-header-cell {
  font-weight: 600;
  color: var(--text-primary);
}

td.mat-cell {
  padding: 12px 16px;
  color: var(--text-secondary);
}

mat-chip[color="primary"] {
  background-color: var(--primary-color);
  color: white;
}

mat-chip[color="accent"] {
  background-color: var(--accent-color);
  color: #2E7D32;
}

mat-chip[color="warn"] {
  background-color: var(--warn-color);
  color: white;
}

mat-chip {
  font-size: 12px;
  padding: 4px 10px;
  font-weight: 500;
  border-radius: 16px;
}

button[mat-icon-button] {
  color: var(--text-secondary);
}

button[mat-icon-button]:hover {
  color: var(--primary-color);
}

mat-menu button {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}

mat-menu i {
  font-size: 18px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

mat-menu button:hover {
  background-color: var(--primary-light);
  color: white;
}

@media (max-width: 768px) {
  .interviews-container {
    padding: 16px;
  }

  mat-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  button[mat-raised-button] {
    width: 100%;
  }
}

    `,
  ],
})
export class ManageInterviewsComponent {
  displayedColumns = [
    'candidateName',
    'position',
    'date',
    'time',
    'type',
    'status',
    'interviewer',
    'actions',
  ];

  interviews: Interview[] = [
    {
      id: '1',
      candidateName: 'John Doe',
      position: 'Senior Frontend Developer',
      date: new Date('2024-03-25'),
      time: '10:00 AM',
      type: 'video',
      status: 'scheduled',
      interviewer: 'Sarah Johnson',
      notes: 'Technical interview focusing on Angular and TypeScript',
    },
    {
      id: '2',
      candidateName: 'Jane Smith',
      position: 'Full Stack Developer',
      date: new Date('2024-03-26'),
      time: '2:00 PM',
      type: 'in-person',
      status: 'scheduled',
      interviewer: 'Mike Brown',
      notes: 'System design and problem-solving interview',
    },
    {
      id: '3',
      candidateName: 'Alex Johnson',
      position: 'UX Designer',
      date: new Date('2024-03-20'),
      time: '11:30 AM',
      type: 'phone',
      status: 'completed',
      interviewer: 'Emily Davis',
      notes: 'Excellent design skills and problem-solving approach',
    },
  ];

  getTypeColor(type: string): string {
    switch (type.toLowerCase()) {
      case 'video':
        return 'primary';
      case 'in-person':
        return 'accent';
      case 'phone':
        return 'warn';
      default:
        return '';
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'scheduled':
        return 'primary';
      case 'completed':
        return 'accent';
      case 'cancelled':
        return 'warn';
      default:
        return '';
    }
  }

  scheduleInterview(): void {
    console.log('Schedule new interview');
  }

  viewDetails(interview: Interview): void {
    console.log('View details:', interview);
  }

  editInterview(interview: Interview): void {
    console.log('Edit interview:', interview);
  }

  cancelInterview(interview: Interview): void {
    console.log('Cancel interview:', interview);
    interview.status = 'cancelled';
  }

  completeInterview(interview: Interview): void {
    console.log('Complete interview:', interview);
    interview.status = 'completed';
  }
}