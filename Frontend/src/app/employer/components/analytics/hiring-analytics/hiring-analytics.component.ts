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
  templateUrl: `./hiring-analytics.component.html`,
  styleUrl: 
    `./hiring-analytics.component.css`,
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