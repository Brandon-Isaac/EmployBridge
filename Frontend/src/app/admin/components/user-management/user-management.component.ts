import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface User {
  id: string;
  email: string;
  role: 'JOB_SEEKER' | 'EMPLOYER' | 'ADMIN';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  lastLogin: Date;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule
  ],
  animations: [
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
    ])
  ],
  template: `
    <div class="user-management-container" [@fadeIn]>
      <mat-toolbar class="toolbar">
        <div class="toolbar-left">
          <span class="app-title">User Management</span>
        </div>
        <div class="toolbar-right">
          <button mat-raised-button color="primary" (click)="addUser()">
            <i class="fas fa-plus"></i>
            <span>Add User</span>
          </button>
        </div>
      </mat-toolbar>

      <mat-card class="content-card" [@slideInFromRight]>
        <mat-card-content>
          <div class="table-container">
            <table mat-table [dataSource]="users" class="users-table mat-elevation-z4">
              <!-- Email Column -->
              <ng-container matColumnDef="email">
                <th mat-header-cell *matHeaderCellDef>Email</th>
                <td mat-cell *matCellDef="let user" class="email-cell">
                  <i class="fas fa-envelope"></i>
                  {{ user.email }}
                </td>
              </ng-container>

              <!-- Role Column -->
              <ng-container matColumnDef="role">
                <th mat-header-cell *matHeaderCellDef>Role</th>
                <td mat-cell *matCellDef="let user">
                  <mat-chip [color]="getRoleColor(user.role)" [class]="'role-chip ' + user.role.toLowerCase()">
                    <i class="fas" [class.fa-user]="user.role === 'JOB_SEEKER'" 
                                  [class.fa-briefcase]="user.role === 'EMPLOYER'"
                                  [class.fa-shield-alt]="user.role === 'ADMIN'"></i>
                    {{ user.role | titlecase }}
                  </mat-chip>
                </td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Status</th>
                <td mat-cell *matCellDef="let user">
                  <mat-chip [color]="getStatusColor(user.status)" [class]="'status-chip ' + user.status">
                    <i class="fas" [class.fa-check-circle]="user.status === 'active'" 
                                  [class.fa-times-circle]="user.status === 'inactive'"
                                  [class.fa-ban]="user.status === 'suspended'"></i>
                    {{ user.status | titlecase }}
                  </mat-chip>
                </td>
              </ng-container>

              <!-- Created At Column -->
              <ng-container matColumnDef="createdAt">
                <th mat-header-cell *matHeaderCellDef>Created At</th>
                <td mat-cell *matCellDef="let user">
                  <i class="fas fa-calendar-alt"></i>
                  {{ user.createdAt | date: 'mediumDate' }}
                </td>
              </ng-container>

              <!-- Last Login Column -->
              <ng-container matColumnDef="lastLogin">
                <th mat-header-cell *matHeaderCellDef>Last Login</th>
                <td mat-cell *matCellDef="let user">
                  <i class="fas fa-clock"></i>
                  {{ user.lastLogin | date: 'medium' }}
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef class="actions-header">Actions</th>
                <td mat-cell *matCellDef="let user">
                  <button mat-icon-button [matMenuTriggerFor]="menu" class="action-button">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <mat-menu #menu="matMenu" class="user-menu">
                    <button mat-menu-item (click)="editUser(user)">
                      <i class="fas fa-edit"></i>
                      <span>Edit</span>
                    </button>
                    <button mat-menu-item (click)="suspendUser(user)" *ngIf="user.status !== 'suspended'">
                      <i class="fas fa-ban"></i>
                      <span>Suspend</span>
                    </button>
                    <button mat-menu-item (click)="activateUser(user)" *ngIf="user.status !== 'active'">
                      <i class="fas fa-check-circle"></i>
                      <span>Activate</span>
                    </button>
                    <mat-divider></mat-divider>
                    <button mat-menu-item (click)="deleteUser(user)" class="delete-action">
                      <i class="fas fa-trash"></i>
                      <span>Delete</span>
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns" class="header-row"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns" 
                  [class.active-row]="row.status === 'active'"
                  [class.inactive-row]="row.status === 'inactive'"
                  [class.suspended-row]="row.status === 'suspended'"></tr>
            </table>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      :host {
        --primary: #4e54c8;
        --primary-light: #8f94fb;
        --primary-dark: #363795;
        --accent: #4caf50;
        --accent-light: #81c784;
        --text-primary: #333;
        --text-secondary: #666;
        --background-light: #f5f7fa;
        --card-bg: #ffffff;
        --success: #00c853;
        --warning: #ffd600;
        --danger: #f44336;
      }

      .user-management-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 24px;
        background-color: var(--background-light);
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        margin-bottom: 24px;
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .content-card {
        background-color: var(--card-bg);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }

      .table-container {
        overflow-x: auto;
      }

      .users-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
      }

      .header-row {
        background-color: var(--primary);
        height: 56px;
      }

      .header-row th {
        color: white;
        font-weight: 500;
        font-size: 0.875rem;
      }

      .users-table mat-row {
        transition: all 0.3s ease;
        height: 60px;
      }

      .users-table mat-row:hover {
        background-color: rgba(79, 84, 200, 0.05);
        transform: translateX(2px);
      }

      .active-row {
        border-left: 4px solid var(--accent);
      }

      .inactive-row {
        border-left: 4px solid var(--warning);
      }

      .suspended-row {
        border-left: 4px solid var(--danger);
      }

      .users-table mat-cell {
        padding: 12px 16px;
        color: var(--text-primary);
        font-size: 0.875rem;
      }

      .users-table mat-cell i {
        margin-right: 8px;
        color: var(--primary-light);
      }

      .email-cell {
        font-weight: 500;
      }

      .role-chip, .status-chip {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.75rem;
        padding: 4px 12px;
        border-radius: 16px;
      }

      .role-chip.job_seeker {
        background-color: #e3f2fd;
        color: #1976d2;
      }

      .role-chip.employer {
        background-color: #e8f5e9;
        color: #2e7d32;
      }

      .role-chip.admin {
        background-color: #f3e5f5;
        color: #7b1fa2;
      }

      .status-chip.active {
        background-color: #e8f5e9;
        color: #2e7d32;
      }

      .status-chip.inactive {
        background-color: #fff8e1;
        color: #ff8f00;
      }

      .status-chip.suspended {
        background-color: #ffebee;
        color: #c62828;
      }

      .action-button {
        color: var(--text-secondary);
        transition: all 0.3s ease;
      }

      .action-button:hover {
        color: var(--primary);
        transform: scale(1.1);
      }

      .user-menu {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .user-menu .mat-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
      }

      .user-menu .mat-menu-item i {
        width: 20px;
        text-align: center;
      }

      .delete-action {
        color: var(--danger);
      }

      @media (max-width: 768px) {
        .user-management-container {
          padding: 16px;
        }

        .users-table {
          min-width: 600px;
        }

        .toolbar {
          flex-direction: column;
          height: auto;
          padding: 12px;
        }

        .toolbar-left, .toolbar-right {
          width: 100%;
          justify-content: center;
          margin: 4px 0;
        }
      }

      @media (max-width: 480px) {
        .user-management-container {
          padding: 8px;
        }

        .content-card {
          border-radius: 0;
        }

        .users-table mat-cell {
          padding: 8px 12px;
          font-size: 0.75rem;
        }

        .users-table mat-cell i {
          margin-right: 4px;
        }

        .role-chip, .status-chip {
          font-size: 0.65rem;
          padding: 2px 8px;
        }
      }
    `,
  ],
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'email',
    'role',
    'status',
    'createdAt',
    'lastLogin',
    'actions',
  ];
  users: User[] = [
    {
      id: '1',
      email: 'jobseeker@example.com',
      role: 'JOB_SEEKER',
      status: 'active',
      createdAt: new Date('2024-01-01'),
      lastLogin: new Date('2024-03-20'),
    },
    {
      id: '2',
      email: 'employer@example.com',
      role: 'EMPLOYER',
      status: 'active',
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date('2024-03-19'),
    },
    {
      id: '3',
      email: 'admin@example.com',
      role: 'ADMIN',
      status: 'suspended',
      createdAt: new Date('2024-02-10'),
      lastLogin: new Date('2024-03-18'),
    },
    {
      id: '4',
      email: 'inactive@example.com',
      role: 'JOB_SEEKER',
      status: 'inactive',
      createdAt: new Date('2024-02-20'),
      lastLogin: new Date('2024-02-25'),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Load users from backend
  }

  getRoleColor(role: string): string {
    switch (role) {
      case 'ADMIN':
        return 'primary';
      case 'EMPLOYER':
        return 'accent';
      default:
        return '';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'primary';
      case 'suspended':
        return 'warn';
      default:
        return '';
    }
  }

  addUser(): void {
    console.log('Add new user');
    // Implement add functionality
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
    // Implement edit functionality
  }

  suspendUser(user: User): void {
    console.log('Suspend user:', user);
    // Implement suspend functionality
  }

  activateUser(user: User): void {
    console.log('Activate user:', user);
    // Implement activate functionality
  }

  deleteUser(user: User): void {
    console.log('Delete user:', user);
    // Implement delete functionality
  }
}