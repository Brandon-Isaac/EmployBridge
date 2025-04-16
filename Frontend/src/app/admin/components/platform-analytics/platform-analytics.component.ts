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
  templateUrl: `./platform-analytics.component.html`,
  styleUrl: `platform-analytics.component.css`,
  
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