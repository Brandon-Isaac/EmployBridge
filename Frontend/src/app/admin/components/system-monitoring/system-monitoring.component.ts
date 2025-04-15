import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface SystemMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  icon: string;
  threshold: number;
  lastUpdated: Date;
}

@Component({
  selector: 'app-system-monitoring',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('cardHover', [
      state('normal', style({
        transform: 'translateY(0)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      })),
      state('hovered', style({
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ],
  template: `
    <div class="system-monitoring-container" [@fadeIn]>
      <mat-toolbar class="toolbar">
        <div class="toolbar-left">
          <span class="app-title">System Health Dashboard</span>
        </div>
        <div class="toolbar-right">
          <button mat-stroked-button (click)="refreshMetrics()">
            <i class="fas fa-sync-alt"></i>
            Refresh
          </button>
          <button mat-icon-button [matMenuTriggerFor]="viewMenu">
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <mat-menu #viewMenu="matMenu">
            <button mat-menu-item (click)="changeView('grid')">
              <i class="fas fa-th-large"></i>
              Grid View
            </button>
            <button mat-menu-item (click)="changeView('list')">
              <i class="fas fa-list"></i>
              List View
            </button>
          </mat-menu>
        </div>
      </mat-toolbar>

      <div class="metrics-grid">
        <mat-card 
          *ngFor="let metric of metrics" 
          class="metric-card"
          [@cardHover]="cardState[metric.id]"
          (mouseenter)="cardState[metric.id] = 'hovered'"
          (mouseleave)="cardState[metric.id] = 'normal'"
        >
          <mat-card-header>
            <div class="metric-header">
              <div class="metric-icon" [ngClass]="metric.status">
                <i class="fas" [ngClass]="metric.icon"></i>
              </div>
              <div class="metric-title">
                <h3>{{ metric.name }}</h3>
                <p>Threshold: {{ metric.threshold }}{{ metric.unit }}</p>
              </div>
            </div>
          </mat-card-header>

          <mat-divider></mat-divider>

          <mat-card-content>
            <div class="metric-value">
              <span class="value">{{ metric.value }}{{ metric.unit }}</span>
              <span class="trend" [ngClass]="'trend-' + metric.trend">
                <i class="fas" 
                  [class.fa-arrow-up]="metric.trend === 'up'"
                  [class.fa-arrow-down]="metric.trend === 'down'"
                  [class.fa-minus]="metric.trend === 'stable'"></i>
                {{ getTrendText(metric.trend) }}
              </span>
            </div>

            <mat-progress-bar
              mode="determinate"
              [value]="metric.value"
              [color]="getStatusColor(metric.status)"
              class="metric-progress"
            ></mat-progress-bar>

            <div class="metric-status">
              <span class="status-badge" [ngClass]="metric.status">
                {{ metric.status | titlecase }}
              </span>
              <span class="last-updated">
                <i class="fas fa-clock"></i>
                {{ metric.lastUpdated | date:'shortTime' }}
              </span>
            </div>
          </mat-card-content>

          <mat-divider></mat-divider>

          <mat-card-actions>
            <button mat-button color="primary" (click)="viewDetails(metric)">
              <i class="fas fa-chart-line"></i>
              Details
            </button>
            <button mat-button (click)="configureAlert(metric)">
              <i class="fas fa-bell"></i>
              Alerts
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
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
        --normal: #2196f3;
      }

      .system-monitoring-container {
        padding: 24px;
        background-color: var(--background-light);
        min-height: 100%;
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
        gap: 8px;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      }

      .metric-card {
        background-color: var(--card-bg);
        border-radius: 8px;
        overflow: hidden;
      }

      .metric-header {
        display: flex;
        align-items: center;
        padding: 16px;
      }

      .metric-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        color: white;
      }

      .metric-icon.normal {
        background-color: var(--normal);
      }

      .metric-icon.warning {
        background-color: var(--warning);
      }

      .metric-icon.critical {
        background-color: var(--danger);
      }

      .metric-icon i {
        font-size: 18px;
      }

      .metric-title h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .metric-title p {
        margin: 0;
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .metric-value {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
      }

      .metric-value .value {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .metric-value .trend {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.875rem;
        font-weight: 500;
      }

      .trend-up {
        color: var(--success);
      }

      .trend-down {
        color: var(--danger);
      }

      .trend-stable {
        color: var(--warning);
      }

      .metric-progress {
        height: 8px;
        border-radius: 4px;
        margin: 0 16px;
      }

      .metric-status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
      }

      .status-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      .status-badge.normal {
        background-color: rgba(33, 150, 243, 0.1);
        color: var(--normal);
      }

      .status-badge.warning {
        background-color: rgba(255, 214, 0, 0.1);
        color: var(--warning);
      }

      .status-badge.critical {
        background-color: rgba(244, 67, 54, 0.1);
        color: var(--danger);
      }

      .last-updated {
        font-size: 0.75rem;
        color: var(--text-secondary);
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .last-updated i {
        font-size: 14px;
      }

      mat-card-actions {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
      }

      mat-card-actions button {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.875rem;
      }

      @media (max-width: 768px) {
        .metrics-grid {
          grid-template-columns: 1fr;
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

        .toolbar-right {
          margin-top: 8px;
        }
      }

      @media (max-width: 480px) {
        .system-monitoring-container {
          padding: 16px 8px;
        }

        .metric-card {
          border-radius: 0;
        }
      }
    `,
  ],
})
export class SystemMonitoringComponent implements OnInit {
  metrics: SystemMetric[] = [
    {
      id: '1',
      name: 'CPU Usage',
      value: 75,
      unit: '%',
      status: 'warning',
      trend: 'up',
      icon: 'fa-microchip',
      threshold: 80,
      lastUpdated: new Date()
    },
    {
      id: '2',
      name: 'Memory Usage',
      value: 60,
      unit: '%',
      status: 'normal',
      trend: 'stable',
      icon: 'fa-memory',
      threshold: 85,
      lastUpdated: new Date()
    },
    {
      id: '3',
      name: 'Disk Space',
      value: 85,
      unit: '%',
      status: 'warning',
      trend: 'up',
      icon: 'fa-hdd',
      threshold: 90,
      lastUpdated: new Date()
    },
    {
      id: '4',
      name: 'Network Traffic',
      value: 45,
      unit: 'Mbps',
      status: 'normal',
      trend: 'down',
      icon: 'fa-network-wired',
      threshold: 100,
      lastUpdated: new Date()
    },
    {
      id: '5',
      name: 'Database Connections',
      value: 32,
      unit: '',
      status: 'normal',
      trend: 'stable',
      icon: 'fa-database',
      threshold: 50,
      lastUpdated: new Date()
    },
    {
      id: '6',
      name: 'API Response Time',
      value: 120,
      unit: 'ms',
      status: 'critical',
      trend: 'up',
      icon: 'fa-stopwatch',
      threshold: 100,
      lastUpdated: new Date()
    }
  ];

  cardState: { [key: string]: string } = {};

  constructor() {}

  ngOnInit(): void {
    // Initialize card states
    this.metrics.forEach(metric => {
      this.cardState[metric.id] = 'normal';
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'normal':
        return 'primary';
      case 'warning':
        return 'accent';
      case 'critical':
        return 'warn';
      default:
        return '';
    }
  }

  getTrendText(trend: 'up' | 'down' | 'stable'): string {
    const trendMap: Record<'up' | 'down' | 'stable', string> = {
      up: 'Improving',
      down: 'Declining',
      stable: 'Stable'
    };
    return trendMap[trend];
  }

  refreshMetrics(): void {
    console.log('Refreshing system metrics...');
    // Implement refresh logic
  }

  changeView(viewType: string): void {
    console.log('Changing view to:', viewType);
    // Implement view change logic
  }

  viewDetails(metric: SystemMetric): void {
    console.log('Viewing details for:', metric.name);
    // Implement detail view
  }

  configureAlert(metric: SystemMetric): void {
    console.log('Configuring alerts for:', metric.name);
    // Implement alert configuration
  }
}