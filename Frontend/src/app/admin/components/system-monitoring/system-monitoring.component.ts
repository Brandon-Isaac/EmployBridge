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
  templateUrl: `./system-monitoring.component.html`,
  styleUrl: `./system-monitoring.component.css`,
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