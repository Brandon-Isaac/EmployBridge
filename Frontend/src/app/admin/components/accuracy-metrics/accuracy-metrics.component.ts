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
  templateUrl: `./accuracy-metrics.component.html`,
  styleUrl: `./accuracy-metrics.component.css`
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