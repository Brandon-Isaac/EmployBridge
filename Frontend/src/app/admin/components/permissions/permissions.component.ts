import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Permission {
  id: string;
  role: string;
  canManageUsers: boolean;
  canManageJobs: boolean;
  canManageSkills: boolean;
  canViewAnalytics: boolean;
  canManageAI: boolean;
}

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  template: `
    <div class="permissions-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Role Permissions</mat-card-title>
          <mat-card-subtitle>Manage access levels for different roles</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <table mat-table [dataSource]="permissions">
            <ng-container matColumnDef="role">
              <th mat-header-cell *matHeaderCellDef>Role</th>
              <td mat-cell *matCellDef="let permission">{{ permission.role }}</td>
            </ng-container>

            <ng-container matColumnDef="canManageUsers">
              <th mat-header-cell *matHeaderCellDef>Manage Users</th>
              <td mat-cell *matCellDef="let permission">
                <mat-checkbox [(ngModel)]="permission.canManageUsers"></mat-checkbox>
              </td>
            </ng-container>

            <ng-container matColumnDef="canManageJobs">
              <th mat-header-cell *matHeaderCellDef>Manage Jobs</th>
              <td mat-cell *matCellDef="let permission">
                <mat-checkbox [(ngModel)]="permission.canManageJobs"></mat-checkbox>
              </td>
            </ng-container>

            <ng-container matColumnDef="canManageSkills">
              <th mat-header-cell *matHeaderCellDef>Manage Skills</th>
              <td mat-cell *matCellDef="let permission">
                <mat-checkbox [(ngModel)]="permission.canManageSkills"></mat-checkbox>
              </td>
            </ng-container>

            <ng-container matColumnDef="canViewAnalytics">
              <th mat-header-cell *matHeaderCellDef>View Analytics</th>
              <td mat-cell *matCellDef="let permission">
                <mat-checkbox [(ngModel)]="permission.canViewAnalytics"></mat-checkbox>
              </td>
            </ng-container>

            <ng-container matColumnDef="canManageAI">
              <th mat-header-cell *matHeaderCellDef>Manage AI</th>
              <td mat-cell *matCellDef="let permission">
                <mat-checkbox [(ngModel)]="permission.canManageAI"></mat-checkbox>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>

        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="savePermissions()">Save Changes</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .permissions-container {
      padding: 20px;
    }

    mat-card {
      max-width: 1200px;
      margin: 0 auto;
    }

    table {
      width: 100%;
    }

    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      padding: 16px;
    }
  `]
})
export class PermissionsComponent implements OnInit {
  permissions: Permission[] = [
    {
      id: '1',
      role: 'Admin',
      canManageUsers: true,
      canManageJobs: true,
      canManageSkills: true,
      canViewAnalytics: true,
      canManageAI: true
    },
    {
      id: '2',
      role: 'Employer',
      canManageUsers: false,
      canManageJobs: true,
      canManageSkills: true,
      canViewAnalytics: true,
      canManageAI: false
    },
    {
      id: '3',
      role: 'Job Seeker',
      canManageUsers: false,
      canManageJobs: false,
      canManageSkills: true,
      canViewAnalytics: false,
      canManageAI: false
    }
  ];

  displayedColumns: string[] = [
    'role',
    'canManageUsers',
    'canManageJobs',
    'canManageSkills',
    'canViewAnalytics',
    'canManageAI'
  ];

  ngOnInit(): void {
    // TODO: Load permissions from API
  }

  savePermissions(): void {
    // TODO: Save permissions to API
    console.log('Saving permissions:', this.permissions);
  }
} 