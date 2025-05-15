import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

interface SecurityLog {
  id: number;
  timestamp: Date;
  event: string;
  user: string;
  ipAddress: string;
  status: 'success' | 'warning' | 'error';
  details: string;
}

interface ActiveSession {
  id: number;
  user: string;
  startTime: Date;
  lastActivity: Date;
  ipAddress: string;
  device: string;
  status: 'active' | 'idle' | 'suspicious';
}

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule
  ],
  template: `
    <div class="security-container">
      <h2>Security Dashboard</h2>

      <mat-tab-group>
        <!-- Security Overview Tab -->
        <mat-tab label="Overview">
          <div class="overview-grid">
            <mat-card class="stat-card">
              <mat-card-content>
                <div class="stat-header">
                  <mat-icon>security</mat-icon>
                  <span>Security Status</span>
                </div>
                <div class="stat-value" [ngClass]="{'status-good': true}">
                  All Systems Secure
                </div>
                <div class="stat-footer">
                  Last checked: {{ lastSecurityCheck | date:'medium' }}
                </div>
              </mat-card-content>
            </mat-card>

            <mat-card class="stat-card">
              <mat-card-content>
                <div class="stat-header">
                  <mat-icon>warning</mat-icon>
                  <span>Active Threats</span>
                </div>
                <div class="stat-value" [ngClass]="{'status-good': true}">
                  0 Detected
                </div>
                <div class="stat-footer">
                  No suspicious activity
                </div>
              </mat-card-content>
            </mat-card>

            <mat-card class="stat-card">
              <mat-card-content>
                <div class="stat-header">
                  <mat-icon>people</mat-icon>
                  <span>Active Sessions</span>
                </div>
                <div class="stat-value">
                  {{ activeSessions.length }}
                </div>
                <div class="stat-footer">
                  {{ suspiciousSessions }} suspicious
                </div>
              </mat-card-content>
            </mat-card>

            <mat-card class="stat-card">
              <mat-card-content>
                <div class="stat-header">
                  <mat-icon>history</mat-icon>
                  <span>Failed Logins (24h)</span>
                </div>
                <div class="stat-value" [ngClass]="{'status-warning': failedLogins > 0}">
                  {{ failedLogins }}
                </div>
                <div class="stat-footer">
                  {{ failedLogins > 0 ? 'Action required' : 'No issues' }}
                </div>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab>

        <!-- Active Sessions Tab -->
        <mat-tab label="Active Sessions">
          <div class="table-container">
            <table mat-table [dataSource]="activeSessions" class="mat-elevation-z2">
              <ng-container matColumnDef="user">
                <th mat-header-cell *matHeaderCellDef>User</th>
                <td mat-cell *matCellDef="let session">{{ session.user }}</td>
              </ng-container>

              <ng-container matColumnDef="startTime">
                <th mat-header-cell *matHeaderCellDef>Start Time</th>
                <td mat-cell *matCellDef="let session">{{ session.startTime | date:'medium' }}</td>
              </ng-container>

              <ng-container matColumnDef="lastActivity">
                <th mat-header-cell *matHeaderCellDef>Last Activity</th>
                <td mat-cell *matCellDef="let session">{{ session.lastActivity | date:'medium' }}</td>
              </ng-container>

              <ng-container matColumnDef="ipAddress">
                <th mat-header-cell *matHeaderCellDef>IP Address</th>
                <td mat-cell *matCellDef="let session">{{ session.ipAddress }}</td>
              </ng-container>

              <ng-container matColumnDef="device">
                <th mat-header-cell *matHeaderCellDef>Device</th>
                <td mat-cell *matCellDef="let session">{{ session.device }}</td>
              </ng-container>

              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Status</th>
                <td mat-cell *matCellDef="let session">
                  <mat-chip [color]="getStatusColor(session.status)" selected>
                    {{ session.status }}
                  </mat-chip>
                </td>
              </ng-container>

              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let session">
                  <button mat-icon-button [matTooltip]="'Terminate Session'" (click)="terminateSession(session)">
                    <mat-icon>close</mat-icon>
                  </button>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
          </div>
        </mat-tab>

        <!-- Security Logs Tab -->
        <mat-tab label="Security Logs">
          <div class="table-container">
            <table mat-table [dataSource]="securityLogs" class="mat-elevation-z2">
              <ng-container matColumnDef="timestamp">
                <th mat-header-cell *matHeaderCellDef>Timestamp</th>
                <td mat-cell *matCellDef="let log">{{ log.timestamp | date:'medium' }}</td>
              </ng-container>

              <ng-container matColumnDef="event">
                <th mat-header-cell *matHeaderCellDef>Event</th>
                <td mat-cell *matCellDef="let log">{{ log.event }}</td>
              </ng-container>

              <ng-container matColumnDef="user">
                <th mat-header-cell *matHeaderCellDef>User</th>
                <td mat-cell *matCellDef="let log">{{ log.user }}</td>
              </ng-container>

              <ng-container matColumnDef="ipAddress">
                <th mat-header-cell *matHeaderCellDef>IP Address</th>
                <td mat-cell *matCellDef="let log">{{ log.ipAddress }}</td>
              </ng-container>

              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Status</th>
                <td mat-cell *matCellDef="let log">
                  <mat-chip [color]="getStatusColor(log.status)" selected>
                    {{ log.status }}
                  </mat-chip>
                </td>
              </ng-container>

              <ng-container matColumnDef="details">
                <th mat-header-cell *matHeaderCellDef>Details</th>
                <td mat-cell *matCellDef="let log">
                  <button mat-icon-button [matTooltip]="log.details">
                    <mat-icon>info</mat-icon>
                  </button>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="logColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: logColumns;"></tr>
            </table>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .security-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }

    .stat-card {
      height: 100%;
    }

    .stat-header {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
      margin-bottom: 16px;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .stat-footer {
      font-size: 14px;
      color: #666;
    }

    .status-good {
      color: #4caf50;
    }

    .status-warning {
      color: #ff9800;
    }

    .status-error {
      color: #f44336;
    }

    .table-container {
      margin: 20px 0;
      overflow-x: auto;
    }

    table {
      width: 100%;
    }

    .mat-column-actions {
      width: 80px;
      text-align: center;
    }

    .mat-column-details {
      width: 80px;
      text-align: center;
    }
  `]
})
export class SecurityComponent implements OnInit {
  lastSecurityCheck = new Date();
  failedLogins = 0;
  suspiciousSessions = 0;
  activeSessions: ActiveSession[] = [];
  securityLogs: SecurityLog[] = [];
  
  displayedColumns: string[] = ['user', 'startTime', 'lastActivity', 'ipAddress', 'device', 'status', 'actions'];
  logColumns: string[] = ['timestamp', 'event', 'user', 'ipAddress', 'status', 'details'];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadSecurityData();
  }

  loadSecurityData(): void {
    // TODO: Implement loading security data from backend
    // For now, using mock data
    this.activeSessions = [
      {
        id: 1,
        user: 'admin@example.com',
        startTime: new Date(Date.now() - 3600000),
        lastActivity: new Date(),
        ipAddress: '192.168.1.1',
        device: 'Chrome on Windows',
        status: 'active'
      },
      {
        id: 2,
        user: 'user@example.com',
        startTime: new Date(Date.now() - 7200000),
        lastActivity: new Date(Date.now() - 300000),
        ipAddress: '192.168.1.2',
        device: 'Firefox on Mac',
        status: 'idle'
      }
    ];

    this.securityLogs = [
      {
        id: 1,
        timestamp: new Date(Date.now() - 1800000),
        event: 'Login Success',
        user: 'admin@example.com',
        ipAddress: '192.168.1.1',
        status: 'success',
        details: 'Successful login from trusted IP'
      },
      {
        id: 2,
        timestamp: new Date(Date.now() - 3600000),
        event: 'Failed Login Attempt',
        user: 'unknown',
        ipAddress: '192.168.1.3',
        status: 'warning',
        details: 'Multiple failed login attempts'
      }
    ];

    this.suspiciousSessions = this.activeSessions.filter(s => s.status === 'suspicious').length;
    this.failedLogins = this.securityLogs.filter(l => l.status === 'warning').length;
  }

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    switch (status) {
      case 'success':
      case 'active':
        return 'primary';
      case 'warning':
      case 'idle':
        return 'accent';
      case 'error':
      case 'suspicious':
        return 'warn';
      default:
        return 'primary';
    }
  }

  terminateSession(session: ActiveSession): void {
    // TODO: Implement session termination
    this.snackBar.open(`Session terminated for ${session.user}`, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
} 