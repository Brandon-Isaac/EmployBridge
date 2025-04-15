import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TimeRangeToTextPipe } from '../../../shared/pipes/time-range-to-text.pipe';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface AnalyticsMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  icon: string;
  color: string;
  target?: number;
  lastUpdated: Date;
}

interface TimeRange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-platform-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressBarModule,
    TimeRangeToTextPipe
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
    <div class="platform-analytics-container" [@fadeIn]>
      <mat-toolbar class="toolbar">
        <div class="toolbar-left">
          <span class="app-title">
            <i class="fas fa-chart-line"></i>
            Platform Analytics Dashboard
          </span>
        </div>
        <div class="toolbar-right">
          <mat-form-field class="time-range-selector">
            <mat-label>Time Range</mat-label>
            <mat-select [(value)]="selectedTimeRange">
              <mat-option *ngFor="let range of timeRanges" [value]="range.value">
                <i class="fas fa-calendar-alt"></i>
                {{ range.viewValue }}
              </mat-option>
            </mat-select>
          </mat-form-field>
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
              <div class="metric-icon" [ngStyle]="{ 'background-color': metric.color + '20' }">
                <i class="fas" [ngClass]="metric.icon" [style.color]="metric.color"></i>
              </div>
              <div class="metric-info">
                <h3>{{ metric.name }}</h3>
                <p>
                  <i class="fas fa-clock"></i>
                  Last {{ selectedTimeRange | timeRangeToText }}
                </p>
              </div>
            </div>
          </mat-card-header>

          <mat-divider></mat-divider>

          <mat-card-content>
            <div class="metric-value-container">
              <div class="metric-value">
                {{ metric.value | number }} <span class="unit">{{ metric.unit }}</span>
              </div>
              <div class="metric-change" [ngClass]="'trend-' + metric.trend">
                <i class="fas" 
                  [class.fa-arrow-up]="metric.trend === 'up'"
                  [class.fa-arrow-down]="metric.trend === 'down'"
                  [class.fa-minus]="metric.trend === 'stable'"></i>
                {{ metric.change }}% change
              </div>
            </div>

            <div *ngIf="metric.target" class="metric-progress">
              <mat-progress-bar
                mode="determinate"
                [value]="(metric.value / metric.target) * 100"
                [color]="metric.value >= metric.target ? 'primary' : 'accent'"
              ></mat-progress-bar>
              <div class="progress-label" *ngIf="metric.target">
                <i class="fas fa-bullseye"></i>
                Target: {{ metric.target | number }} {{ metric.unit }}
              </div>
            </div>
          </mat-card-content>

          <mat-divider></mat-divider>

          <mat-card-actions>
            <button mat-button color="primary" (click)="viewDetails(metric)">
              <i class="fas fa-chart-line"></i>
              Details
            </button>
            <button mat-button (click)="comparePeriods(metric)">
              <i class="fas fa-not-equal"></i>
              Compare
            </button>
          </mat-card-actions>
        </mat-card>
      </div>

      <div class="actions-footer">
        <button mat-stroked-button (click)="exportData()">
          <i class="fas fa-file-export"></i>
          Export Data
        </button>
        <button mat-raised-button color="primary" (click)="refreshData()">
          <i class="fas fa-sync-alt"></i>
          Refresh Data
        </button>
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
      }

      .platform-analytics-container {
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
        gap: 16px;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .time-range-selector {
        width: 160px;
      }

      .time-range-selector .mat-form-field-wrapper {
        padding-bottom: 0;
      }

      .time-range-selector .mat-form-field-underline {
        background-color: rgba(255, 255, 255, 0.5);
      }

      .time-range-selector .mat-select-value {
        color: white;
      }

      .time-range-selector .mat-select-arrow {
        color: white;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
        margin-bottom: 24px;
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
      }

      .metric-icon i {
        font-size: 18px;
      }

      .metric-info h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .metric-info p {
        margin: 0;
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .metric-value-container {
        padding: 16px;
        text-align: center;
      }

      .metric-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1;
      }

      .metric-value .unit {
        font-size: 1rem;
        color: var(--text-secondary);
        font-weight: normal;
      }

      .metric-change {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        font-size: 0.875rem;
        margin-top: 8px;
      }

      .metric-change i {
        font-size: 14px;
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
        padding: 0 16px 16px;
      }

      mat-progress-bar {
        height: 8px;
        border-radius: 4px;
      }

      .progress-label {
        font-size: 0.75rem;
        color: var(--text-secondary);
        text-align: center;
        margin-top: 4px;
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

      .actions-footer {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        padding: 16px 0;
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

        .actions-footer {
          flex-direction: column;
          gap: 8px;
        }
      }

      @media (max-width: 480px) {
        .platform-analytics-container {
          padding: 16px 8px;
        }

        .metric-card {
          border-radius: 0;
        }
      }
    `,
  ],
})
export class PlatformAnalyticsComponent implements OnInit {
  selectedTimeRange = '7';
  timeRanges: TimeRange[] = [
    { value: '7', viewValue: 'Last 7 Days' },
    { value: '30', viewValue: 'Last 30 Days' },
    { value: '90', viewValue: 'Last 90 Days' },
    { value: '180', viewValue: 'Last 6 Months' },
    { value: '365', viewValue: 'Last Year' }
  ];

  metrics: AnalyticsMetric[] = [
    {
      id: '1',
      name: 'Active Users',
      value: 1250,
      change: 12.5,
      unit: 'users',
      trend: 'up',
      icon: 'fa-users',
      color: '#4e54c8',
      target: 1500,
      lastUpdated: new Date()
    },
    {
      id: '2',
      name: 'Job Postings',
      value: 342,
      change: -3.2,
      unit: 'jobs',
      trend: 'down',
      icon: 'fa-briefcase',
      color: '#4caf50',
      target: 400,
      lastUpdated: new Date()
    },
    {
      id: '3',
      name: 'Applications',
      value: 1256,
      change: 8.7,
      unit: 'applications',
      trend: 'up',
      icon: 'fa-file-alt',
      color: '#ff9800',
      target: 1500,
      lastUpdated: new Date()
    },
    {
      id: '4',
      name: 'Matches Made',
      value: 89,
      change: 0,
      unit: 'matches',
      trend: 'stable',
      icon: 'fa-handshake',
      color: '#9c27b0',
      target: 100,
      lastUpdated: new Date()
    },
    {
      id: '5',
      name: 'New Signups',
      value: 215,
      change: 15.3,
      unit: 'users',
      trend: 'up',
      icon: 'fa-user-plus',
      color: '#2196f3',
      target: 250,
      lastUpdated: new Date()
    },
    {
      id: '6',
      name: 'Messages Sent',
      value: 876,
      change: 5.2,
      unit: 'messages',
      trend: 'up',
      icon: 'fa-comments',
      color: '#f44336',
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

  changeView(viewType: string): void {
    console.log('Changing view to:', viewType);
    // Implement view change logic
  }

  exportData(): void {
    console.log('Exporting analytics data...');
    // Implement export functionality
  }

  refreshData(): void {
    console.log('Refreshing analytics data...');
    // Implement refresh functionality
  }

  viewDetails(metric: AnalyticsMetric): void {
    console.log('Viewing details for:', metric.name);
    // Implement detail view
  }

  comparePeriods(metric: AnalyticsMetric): void {
    console.log('Comparing periods for:', metric.name);
    // Implement comparison functionality
  }
}