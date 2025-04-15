import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

interface Metric {
  id: string;
  name: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: Date;
  icon: string;
  color: string;
  category: 'matching' | 'assessment' | 'recommendation' | 'satisfaction';
}

@Component({
  selector: 'app-accuracy-metrics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ],
  template: `
    <div class="dashboard-container" [@fadeIn]>
      <header class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Accuracy Metrics</h1>
          <p class="dashboard-subtitle">Track and analyze system performance metrics</p>
        </div>
        
        <div class="header-controls">
          <mat-form-field appearance="outline" class="period-selector">
            <mat-label>Time Period</mat-label>
            <mat-select [(ngModel)]="selectedPeriod">
              <mat-option *ngFor="let period of timePeriods" [value]="period.value">
                {{ period.label }}
              </mat-option>
            </mat-select>
          </mat-form-field>
          
          <button mat-stroked-button (click)="refreshMetrics()" class="refresh-button">
            <mat-icon>refresh</mat-icon>
            Refresh
          </button>
        </div>
      </header>

      <section class="metrics-summary">
        <mat-card *ngFor="let metric of overviewMetrics" [@cardAnimation] class="summary-card">
          <div class="card-header">
            <div class="metric-icon-container" [style.background-color]="metric.color + '20'">
              <mat-icon [style.color]="metric.color">{{ metric.icon }}</mat-icon>
            </div>
            <div class="metric-title">
              <h3>{{ metric.name }}</h3>
              <p>{{ metric.description }}</p>
            </div>
          </div>
          
          <div class="metric-value-container">
            <span class="current-value" [style.color]="metric.color">
              {{ metric.value }}%
            </span>
            <span class="target-value">Target: {{ metric.target }}%</span>
          </div>
          
          <mat-progress-bar
            mode="determinate"
            [value]="metric.value"
            [color]="metric.value >= metric.target ? 'primary' : 'warn'">
          </mat-progress-bar>
          
          <div class="metric-trend-container">
            <span class="trend-indicator" [class]="'trend-' + metric.trend">
              <mat-icon>
                {{ metric.trend === 'up' ? 'arrow_upward' : 
                   metric.trend === 'down' ? 'arrow_downward' : 'remove' }}
              </mat-icon>
              {{ metric.change }}% from last period
            </span>
            <span class="last-updated">
              Updated: {{ metric.lastUpdated | date:'MMM d, h:mm a' }}
            </span>
          </div>
        </mat-card>
      </section>

      <section class="detailed-metrics">
        <mat-card class="metrics-table-card">
          <mat-card-header>
            <mat-card-title>Detailed Metrics</mat-card-title>
            <mat-card-subtitle>Performance across all measured metrics</mat-card-subtitle>
          </mat-card-header>
          
          <mat-divider></mat-divider>
          
          <mat-card-content>
            <div class="table-controls">
              <mat-form-field appearance="outline" class="metric-filter">
                <mat-label>Filter Metrics</mat-label>
                <mat-select [(ngModel)]="selectedMetric">
                  <mat-option value="all">All Metrics</mat-option>
                  <mat-option *ngFor="let category of metricCategories" [value]="category.value">
                    {{ category.label }}
                  </mat-option>
                </mat-select>
              </mat-form-field>
              
              <button mat-stroked-button (click)="exportMetrics()" class="export-button">
                <mat-icon>download</mat-icon>
                Export
              </button>
            </div>
            
            <div class="table-wrapper">
              <table mat-table [dataSource]="filteredMetrics" class="metrics-table">
                <!-- Metric Name Column -->
                <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef>Metric</th>
                  <td mat-cell *matCellDef="let metric">
                    <div class="metric-cell">
                      <div class="metric-icon" [style.background-color]="metric.color + '20'">
                        <mat-icon [style.color]="metric.color">{{ getIcon(metric.icon) }}</mat-icon>
                      </div>
                      <div class="metric-info">
                        <div class="metric-name">{{ metric.name }}</div>
                        <div class="metric-category">{{ getCategoryName(metric.category) }}</div>
                      </div>
                    </div>
                  </td>
                </ng-container>
                
                <!-- Value Column -->
                <ng-container matColumnDef="value">
                  <th mat-header-cell *matHeaderCellDef>Value</th>
                  <td mat-cell *matCellDef="let metric">
                    <div class="value-display">
                      <span class="value-percent" [style.color]="metric.value >= metric.target ? 'var(--success)' : 'var(--warn)'">
                        {{ metric.value }}%
                      </span>
                      <div class="progress-wrapper">
                        <mat-progress-bar
                          mode="determinate"
                          [value]="metric.value"
                          [color]="metric.value >= metric.target ? 'primary' : 'warn'"
                          class="compact-progress">
                        </mat-progress-bar>
                        <span class="target-label">{{ metric.target }}% target</span>
                      </div>
                    </div>
                  </td>
                </ng-container>
                
                <!-- Trend Column -->
                <ng-container matColumnDef="trend">
                  <th mat-header-cell *matHeaderCellDef>Trend</th>
                  <td mat-cell *matCellDef="let metric">
                    <div class="trend-badge" [class]="'trend-' + metric.trend">
                      <mat-icon>
                        {{ metric.trend === 'up' ? 'arrow_upward' : 
                           metric.trend === 'down' ? 'arrow_downward' : 'remove' }}
                      </mat-icon>
                      <span>{{ getTrendLabel(metric.trend) }}</span>
                    </div>
                  </td>
                </ng-container>
                
                <!-- Actions Column -->
                <ng-container matColumnDef="actions">
                  <th mat-header-cell *matHeaderCellDef></th>
                  <td mat-cell *matCellDef="let metric">
                    <button mat-icon-button [matMenuTriggerFor]="metricMenu">
                      <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #metricMenu="matMenu">
                      <button mat-menu-item (click)="viewDetails(metric)">
                        <mat-icon>insights</mat-icon>
                        View Details
                      </button>
                      <button mat-menu-item (click)="adjustTarget(metric)">
                        <mat-icon>adjust</mat-icon>
                        Adjust Target
                      </button>
                      <button mat-menu-item (click)="viewHistory(metric)">
                        <mat-icon>history</mat-icon>
                        View History
                      </button>
                    </mat-menu>
                  </td>
                </ng-container>
                
                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
              </table>
              
              <mat-paginator 
                [pageSizeOptions]="[5, 10, 20]"
                showFirstLastButtons
                aria-label="Select page of metrics">
              </mat-paginator>
            </div>
          </mat-card-content>
        </mat-card>
      </section>
    </div>
  `,
  styles: [`
    :host {
      --primary: #3f51b5;
      --primary-light: #7986cb;
      --primary-dark: #303f9f;
      --accent: #4caf50;
      --warn: #f44336;
      --success: #4caf50;
      --warning: #ff9800;
      --text-primary: #212121;
      --text-secondary: #757575;
      --divider: #e0e0e0;
      --background: #f5f5f5;
      --card-bg: #ffffff;
    }

    .dashboard-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 24px;
      background-color: var(--background);
      min-height: 100vh;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    .header-content {
      flex: 1;
    }

    .dashboard-title {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .dashboard-subtitle {
      margin: 4px 0 0;
      font-size: 1rem;
      color: var(--text-secondary);
    }

    .header-controls {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .period-selector {
      width: 180px;
    }

    .refresh-button {
      border-radius: 20px;
    }

    .metrics-summary {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }

    .summary-card {
      border-radius: 8px;
      padding: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .summary-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    .metric-icon-container {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
    }

    .metric-title h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .metric-title p {
      margin: 4px 0 0;
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    .metric-value-container {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .current-value {
      font-size: 2rem;
      font-weight: 600;
      line-height: 1;
    }

    .target-value {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    mat-progress-bar {
      height: 6px;
      border-radius: 3px;
      margin-bottom: 12px;
    }

    .metric-trend-container {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
    }

    .trend-indicator {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .trend-up {
      color: var(--success);
    }

    .trend-down {
      color: var(--warn);
    }

    .trend-stable {
      color: var(--warning);
    }

    .last-updated {
      color: var(--text-secondary);
    }

    .detailed-metrics {
      margin-top: 16px;
    }

    .metrics-table-card {
      border-radius: 8px;
      overflow: hidden;
    }

    .table-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px 0;
    }

    .metric-filter {
      width: 200px;
    }

    .export-button {
      border-radius: 20px;
    }

    .table-wrapper {
      overflow-x: auto;
      margin-bottom: 16px;
    }

    .metrics-table {
      width: 100%;
    }

    .metrics-table mat-header-row {
      background-color: var(--primary);
    }

    .metrics-table mat-header-cell {
      color: white;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .metrics-table mat-row {
      transition: background-color 0.2s ease;
    }

    .metrics-table mat-row:hover {
      background-color: rgba(63, 81, 181, 0.04);
    }

    .metric-cell {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .metric-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .metric-info {
      display: flex;
      flex-direction: column;
    }

    .metric-name {
      font-weight: 500;
      color: var(--text-primary);
    }

    .metric-category {
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    .value-display {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .value-percent {
      font-weight: 500;
    }

    .progress-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .compact-progress {
      height: 4px;
      flex-grow: 1;
    }

    .target-label {
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    .trend-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .trend-badge.trend-up {
      background-color: rgba(76, 175, 80, 0.1);
    }

    .trend-badge.trend-down {
      background-color: rgba(244, 67, 54, 0.1);
    }

    .trend-badge.trend-stable {
      background-color: rgba(255, 152, 0, 0.1);
    }

    mat-paginator {
      margin-top: 16px;
      border-top: 1px solid var(--divider);
    }

    @media (max-width: 768px) {
      .dashboard-container {
        padding: 16px;
      }

      .dashboard-header {
        flex-direction: column;
        gap: 16px;
      }

      .header-controls {
        width: 100%;
        flex-direction: column;
        align-items: stretch;
      }

      .period-selector {
        width: 100%;
      }

      .refresh-button {
        width: 100%;
      }

      .metrics-summary {
        grid-template-columns: 1fr;
      }

      .table-controls {
        flex-direction: column;
        gap: 12px;
        align-items: stretch;
      }

      .metric-filter {
        width: 100%;
      }
    }
  `]
})
export class AccuracyMetricsComponent implements OnInit {
  // Configuration
  timePeriods = [
    { value: '7', label: 'Last 7 days' },
    { value: '14', label: 'Last 14 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '90', label: 'Last 90 days' }
  ];

  metricCategories = [
    { value: 'matching', label: 'Job Matching' },
    { value: 'assessment', label: 'Skill Assessment' },
    { value: 'recommendation', label: 'Recommendations' },
    { value: 'satisfaction', label: 'Satisfaction' }
  ];

  displayedColumns: string[] = ['name', 'value', 'trend', 'actions'];
  
  // State
  selectedPeriod = '30';
  selectedMetric = 'all';
  isLoading = false;

  // Sample data - in a real app this would come from a service
  overviewMetrics = [
    {
      id: '1',
      name: 'Job Matching Accuracy',
      description: 'How well jobs match candidate skills',
      value: 85,
      target: 80,
      trend: 'up',
      change: 2.5,
      lastUpdated: new Date(),
      icon: 'handshake',
      color: '#3f51b5'
    },
    {
      id: '2',
      name: 'Skill Assessment Accuracy',
      description: 'Accuracy of skill level assessments',
      value: 92,
      target: 90,
      trend: 'up',
      change: 1.2,
      lastUpdated: new Date(),
      icon: 'star',
      color: '#4caf50'
    },
    {
      id: '3',
      name: 'Recommendation Accuracy',
      description: 'Quality of learning recommendations',
      value: 78,
      target: 85,
      trend: 'down',
      change: -3.1,
      lastUpdated: new Date(),
      icon: 'lightbulb_outline',
      color: '#ff9800'
    }
  ];

  metrics: Metric[] = [
    {
      id: '1',
      name: 'Job Matching Accuracy',
      value: 85,
      target: 80,
      trend: 'up',
      lastUpdated: new Date(),
      icon: 'handshake',
      color: '#3f51b5',
      category: 'matching'
    },
    {
      id: '2',
      name: 'Skill Assessment Accuracy',
      value: 92,
      target: 90,
      trend: 'up',
      lastUpdated: new Date(),
      icon: 'star',
      color: '#4caf50',
      category: 'assessment'
    },
    {
      id: '3',
      name: 'Recommendation Accuracy',
      value: 78,
      target: 85,
      trend: 'down',
      lastUpdated: new Date(),
      icon: 'lightbulb_outline',
      color: '#ff9800',
      category: 'recommendation'
    },
    {
      id: '4',
      name: 'Candidate Satisfaction',
      value: 88,
      target: 85,
      trend: 'stable',
      lastUpdated: new Date(),
      icon: 'mood',
      color: '#9c27b0',
      category: 'satisfaction'
    },
    {
      id: '5',
      name: 'Employer Satisfaction',
      value: 82,
      target: 85,
      trend: 'up',
      lastUpdated: new Date(),
      icon: 'business',
      color: '#2196f3',
      category: 'satisfaction'
    },
    {
      id: '6',
      name: 'Skill Gap Identification',
      value: 91,
      target: 90,
      trend: 'up',
      lastUpdated: new Date(),
      icon: 'search',
      color: '#009688',
      category: 'assessment'
    },
    {
      id: '7',
      name: 'Job Recommendation Relevance',
      value: 84,
      target: 85,
      trend: 'stable',
      lastUpdated: new Date(),
      icon: 'work_outline',
      color: '#ff5722',
      category: 'recommendation'
    }
  ];

  ngOnInit(): void {
    this.loadMetrics();
  }


  get filteredMetrics() {
    if (this.selectedMetric === 'all') return this.metrics;
    return this.metrics.filter(metric => metric.category === this.selectedMetric);
  }

  loadMetrics(): void {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  refreshMetrics(): void {
    this.isLoading = true;
    // Simulate refresh
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  exportMetrics(): void {
    console.log('Exporting metrics data...');
    // Implement export functionality
  }

  viewDetails(metric: Metric): void {
    console.log('Viewing details for:', metric.name);
    // Navigate to detail view
  }

  adjustTarget(metric: Metric): void {
    console.log('Adjusting target for:', metric.name);
    // Open target adjustment dialog
  }

  viewHistory(metric: Metric): void {
    console.log('Viewing history for:', metric.name);
    // Navigate to history view
  }

  getTrendLabel(trend: Metric['trend']): string {
    const trends = {
      up: 'Improving',
      down: 'Declining',
      stable: 'Stable'
    };
    return trends[trend];
  }

  getCategoryName(category: Metric['category']): string {
    const found = this.metricCategories.find(c => c.value === category);
    return found ? found.label : '';
  }

  getIcon(iconName: string): string {
    // Map FontAwesome icons to Material icons
    const iconMap: Record<string, string> = {
      'fa-handshake': 'handshake',
      'fa-star': 'star',
      'fa-lightbulb': 'lightbulb_outline',
      'fa-smile': 'mood',
      'fa-briefcase': 'business',
      'fa-search': 'search',
      'fa-work': 'work_outline'
    };
    return iconMap[iconName] || iconName;
  }
}