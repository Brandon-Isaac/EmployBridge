import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { Pipe, PipeTransform } from '@angular/core';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

interface JobMetrics {
  position: string;
  department: string;
  applicants: number;
  interviews: number;
  offers: number;
  hires: number;
  timeToHire: number;
  status: string;
}

@Pipe({
  name: 'absolute'
})
export class AbsolutePipe implements PipeTransform {
  transform(value: number): number {
    return Math.abs(value);
  }
}

@Component({
  selector: 'app-hiring-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule,
    MatDividerModule,
    AbsolutePipe
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardHover', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      })),
      state('hovered', style({
        transform: 'scale(1.02)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ],
  template: `
    <div class="analytics-container">
      <h1 class="page-title">Hiring Analytics</h1>
      <p class="page-subtitle">Track and optimize your recruitment funnel</p>
      
      <div class="metrics-grid">
        <mat-card 
          *ngFor="let metric of metrics" 
          class="metric-card"
          [@fadeIn]
          [@cardHover]="cardState"
          (mouseenter)="cardState = 'hovered'"
          (mouseleave)="cardState = 'normal'"
          [style.--card-color]="metric.color"
        >
          <div class="metric-icon" [style.background]="metric.color + '20'">
            <i [class]="getMetricIcon(metric.icon)" [style.color]="metric.color"></i>
          </div>
          <div class="metric-content">
            <div class="metric-title">{{ metric.title }}</div>
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-change" [class.positive]="metric.change > 0" [class.negative]="metric.change < 0">
              <i [class]="metric.change > 0 ? 'fas fa-arrow-trend-up' : 'fas fa-arrow-trend-down'"></i>
              {{ metric.change | absolute }}%
              <span class="change-label">{{ metric.change > 0 ? 'Increase' : 'Decrease' }}</span>
            </div>
          </div>
        </mat-card>
      </div>

      <div class="charts-grid">
        <mat-card class="chart-card" [@fadeIn]>
          <mat-card-header>
            <div class="card-header-content">
              <mat-card-title>Hiring Funnel</mat-card-title>
              <mat-card-subtitle>Last 30 days</mat-card-subtitle>
            </div>
            <button mat-stroked-button class="time-filter">
              <i class="fas fa-calendar"></i>
              This Month
            </button>
          </mat-card-header>
          <mat-card-content>
            <table mat-table [dataSource]="jobMetrics" class="funnel-table">
              <ng-container matColumnDef="position">
                <th mat-header-cell *matHeaderCellDef>Position</th>
                <td mat-cell *matCellDef="let job">
                  <div class="position-cell">
                    <span class="position-title">{{ job.position }}</span>
                    <span class="department">{{ job.department }}</span>
                  </div>
                </td>
              </ng-container>

              <ng-container matColumnDef="applicants">
                <th mat-header-cell *matHeaderCellDef>Applicants</th>
                <td mat-cell *matCellDef="let job">
                  <div class="metric-cell">{{ job.applicants }}</div>
                </td>
              </ng-container>

              <ng-container matColumnDef="interviews">
                <th mat-header-cell *matHeaderCellDef>Interviews</th>
                <td mat-cell *matCellDef="let job">
                  <div class="metric-cell">{{ job.interviews }}</div>
                </td>
              </ng-container>

              <ng-container matColumnDef="offers">
                <th mat-header-cell *matHeaderCellDef>Offers</th>
                <td mat-cell *matCellDef="let job">
                  <div class="metric-cell">{{ job.offers }}</div>
                </td>
              </ng-container>

              <ng-container matColumnDef="hires">
                <th mat-header-cell *matHeaderCellDef>Hires</th>
                <td mat-cell *matCellDef="let job">
                  <div class="metric-cell">{{ job.hires }}</div>
                </td>
              </ng-container>

              <ng-container matColumnDef="timeToHire">
                <th mat-header-cell *matHeaderCellDef>Time to Hire</th>
                <td mat-cell *matCellDef="let job">
                  <div class="time-cell">
                    {{ job.timeToHire }} days
                    <mat-chip-set>
                      <mat-chip [class]="getTimeChipClass(job.timeToHire)" selected>
                        {{ getTimeChipLabel(job.timeToHire) }}
                      </mat-chip>
                    </mat-chip-set>
                  </div>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr 
                mat-row 
                *matRowDef="let row; columns: displayedColumns"
                [class.highlight-row]="row.hires > 0"
              ></tr>
            </table>
          </mat-card-content>
        </mat-card>

        <mat-card class="chart-card" [@fadeIn]>
          <mat-card-header>
            <div class="card-header-content">
              <mat-card-title>Time to Hire Trend</mat-card-title>
              <mat-card-subtitle>Average days by department</mat-card-subtitle>
            </div>
            <button mat-icon-button [matMenuTriggerFor]="timeMenu" class="more-button">
              <i class="fas fa-ellipsis-vertical"></i>
            </button>
            <mat-menu #timeMenu="matMenu">
              <button mat-menu-item>Last 30 days</button>
              <button mat-menu-item>Last 90 days</button>
              <button mat-menu-item>Last 12 months</button>
            </mat-menu>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-placeholder">
              <img src="assets/images/time-to-hire-chart.svg" alt="Time to Hire Chart">
              <div class="chart-legend">
                <div class="legend-item" *ngFor="let dept of departments">
                  <span class="legend-color" [style.background]="dept.color"></span>
                  {{ dept.name }} ({{ dept.avgDays }} days)
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="chart-card" [@fadeIn]>
          <mat-card-header>
            <div class="card-header-content">
              <mat-card-title>Source Quality</mat-card-title>
              <mat-card-subtitle>Conversion rate by source</mat-card-subtitle>
            </div>
            <button mat-icon-button [matMenuTriggerFor]="sourceMenu" class="more-button">
              <i class="fas fa-ellipsis-vertical"></i>
            </button>
            <mat-menu #sourceMenu="matMenu">
              <button mat-menu-item>All Sources</button>
              <button mat-menu-item>Job Boards</button>
              <button mat-menu-item>Referrals</button>
            </mat-menu>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-placeholder">
              <img src="assets/images/source-quality-chart.svg" alt="Source Quality Chart">
              <div class="conversion-rate">
                <div class="rate-item" *ngFor="let source of sources">
                  <span class="source-name">{{ source.name }}</span>
                  <span class="rate-value">{{ source.rate }}%</span>
                  <mat-progress-bar 
                    mode="determinate" 
                    [value]="source.rate"
                    [class]="getRateClass(source.rate)"
                  ></mat-progress-bar>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        --primary: #4e54c8;
        --primary-light: #8f94fb;
        --accent: #4caf50;
        --accent-light: #81c784;
        --warn: #ff9800;
        --danger: #f44336;
        --text-primary: #2d3748;
        --text-secondary: #718096;
        --bg-light: #f7fafc;
        --border-color: #e2e8f0;
      }

      .analytics-container {
        padding: 24px;
        background-color: var(--bg-light);
      }

      .page-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 8px;
      }

      .page-subtitle {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 24px;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
      }

      .metric-card {
        padding: 20px;
        border-radius: 12px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        background-color: white;
        border-left: 4px solid var(--card-color);
        transition: all 0.3s ease;
      }

      .metric-icon {
        border-radius: 10px;
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .metric-icon i {
        font-size: 24px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .metric-content {
        flex: 1;
      }

      .metric-title {
        color: var(--text-secondary);
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .metric-value {
        font-size: 28px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 8px;
        line-height: 1.2;
      }

      .metric-change {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        font-weight: 500;
      }

      .metric-change i {
        font-size: 18px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .positive {
        color: var(--accent);
      }

      .negative {
        color: var(--danger);
      }

      .change-label {
        color: var(--text-secondary);
        font-weight: 400;
        margin-left: 4px;
      }

      .charts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 24px;
      }

      .chart-card {
        border-radius: 12px;
        overflow: hidden;
        background-color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
      }

      .chart-card:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }

      mat-card-header {
        padding: 20px 20px 0;
        margin-bottom: 16px;
      }

      .card-header-content {
        flex: 1;
      }

      mat-card-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 4px;
      }

      mat-card-subtitle {
        font-size: 0.875rem;
        color: var(--text-secondary);
      }

      mat-card-content {
        padding: 0 20px 20px;
      }

      .time-filter {
        border-radius: 20px;
        padding: 4px 12px;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .time-filter i {
        font-size: 18px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .more-button {
        color: var(--text-secondary);
      }

      .more-button i {
        font-size: 24px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .funnel-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 8px;
      }

      .funnel-table th {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-secondary);
        padding: 12px 16px;
      }

      .funnel-table td {
        padding: 12px 16px;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        background-color: white;
      }

      .funnel-table td:first-child {
        border-left: 1px solid var(--border-color);
        border-radius: 8px 0 0 8px;
      }

      .funnel-table td:last-child {
        border-right: 1px solid var(--border-color);
        border-radius: 0 8px 8px 0;
      }

      .position-cell {
        display: flex;
        flex-direction: column;
      }

      .position-title {
        font-weight: 500;
        color: var(--text-primary);
      }

      .department {
        font-size: 0.75rem;
        color: var(--text-secondary);
        margin-top: 4px;
      }

      .metric-cell {
        font-weight: 500;
        color: var(--text-primary);
      }

      .time-cell {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      mat-chip {
        font-size: 0.625rem;
        font-weight: 600;
        height: 20px;
        padding: 0 8px;
      }

      .fast-chip {
        background-color: var(--accent-light);
        color: var(--accent);
      }

      .average-chip {
        background-color: #fff3e0;
        color: #ff9800;
      }

      .slow-chip {
        background-color: #ffebee;
        color: var(--danger);
      }

      .highlight-row td {
        background-color: rgba(76, 175, 80, 0.05);
      }

      .chart-placeholder {
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-light);
        border-radius: 8px;
        padding: 20px;
      }

      .chart-placeholder img {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
      }

      .chart-legend {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .legend-color {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      .conversion-rate {
        width: 100%;
        max-width: 400px;
      }

      .rate-item {
        margin-bottom: 12px;
      }

      .source-name {
        display: inline-block;
        width: 120px;
        font-size: 0.875rem;
        color: var(--text-primary);
      }

      .rate-value {
        display: inline-block;
        width: 50px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-primary);
        text-align: right;
        margin-right: 12px;
      }

      mat-progress-bar {
        height: 8px;
        border-radius: 4px;
        display: inline-block;
        width: calc(100% - 182px);
      }

      .high-rate {
        color: var(--accent) !important;
      }

      .medium-rate {
        color: #ff9800 !important;
      }

      .low-rate {
        color: var(--danger) !important;
      }

      @media (max-width: 768px) {
        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .charts-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 480px) {
        .metrics-grid {
          grid-template-columns: 1fr;
        }

        .analytics-container {
          padding: 16px;
        }

        .metric-value {
          font-size: 24px;
        }
      }
    `,
  ],
})
export class HiringAnalyticsComponent implements OnInit {
  cardState = 'normal';
  metrics: MetricCard[] = [
    {
      title: 'Total Applications',
      value: '1,284',
      change: 12.5,
      icon: 'people',
      color: '#4e54c8'
    },
    {
      title: 'Interviews Scheduled',
      value: '156',
      change: 8.3,
      icon: 'event',
      color: '#2196f3'
    },
    {
      title: 'Offers Extended',
      value: '32',
      change: -5.2,
      icon: 'description',
      color: '#ff9800'
    },
    {
      title: 'Time to Hire',
      value: '28 days',
      change: -15.4,
      icon: 'schedule',
      color: '#4caf50'
    },
  ];

  displayedColumns: string[] = [
    'position',
    'applicants',
    'interviews',
    'offers',
    'hires',
    'timeToHire',
  ];

  jobMetrics: JobMetrics[] = [
    {
      position: 'Software Engineer',
      department: 'Engineering',
      applicants: 245,
      interviews: 45,
      offers: 8,
      hires: 6,
      timeToHire: 32,
      status: 'active'
    },
    {
      position: 'Product Manager',
      department: 'Product',
      applicants: 180,
      interviews: 28,
      offers: 5,
      hires: 4,
      timeToHire: 28,
      status: 'active'
    },
    {
      position: 'UX Designer',
      department: 'Design',
      applicants: 156,
      interviews: 22,
      offers: 4,
      hires: 3,
      timeToHire: 25,
      status: 'active'
    },
    {
      position: 'Sales Representative',
      department: 'Sales',
      applicants: 198,
      interviews: 35,
      offers: 7,
      hires: 5,
      timeToHire: 21,
      status: 'active'
    },
  ];

  departments = [
    { name: 'Engineering', avgDays: 32, color: '#4e54c8' },
    { name: 'Product', avgDays: 28, color: '#2196f3' },
    { name: 'Design', avgDays: 25, color: '#4caf50' },
    { name: 'Sales', avgDays: 21, color: '#ff9800' }
  ];

  sources = [
    { name: 'Job Boards', rate: 35 },
    { name: 'Referrals', rate: 62 },
    { name: 'Career Site', rate: 28 },
    { name: 'Social Media', rate: 18 }
  ];

  ngOnInit(): void {}

  getTimeChipClass(days: number): string {
    if (days < 25) return 'fast-chip';
    if (days < 30) return 'average-chip';
    return 'slow-chip';
  }

  getTimeChipLabel(days: number): string {
    if (days < 25) return 'Fast';
    if (days < 30) return 'Average';
    return 'Slow';
  }

  getRateClass(rate: number): string {
    if (rate > 50) return 'high-rate';
    if (rate > 30) return 'medium-rate';
    return 'low-rate';
  }

  getMetricIcon(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'people': 'fas fa-users',
      'event': 'fas fa-calendar-check',
      'description': 'fas fa-file-alt',
      'schedule': 'fas fa-clock'
    };
    return iconMap[icon] || 'fas fa-question-circle';
  }
}