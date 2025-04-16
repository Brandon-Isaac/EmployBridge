import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { animate, style, transition, trigger } from '@angular/animations';

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  status: string;
  applicants: number;
  posted: string;
}

@Component({
  selector: 'app-active-listings',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: `./active-listings.component.html`,
  styleUrl: 
    `./active-listings.component.css`,
  
})
export class ActiveListingsComponent {
  displayedColumns: string[] = [
    'title',
    'department',
    'location',
    'type',
    'status',
    'applicants',
    'posted',
    'actions',
  ];

  jobListings: JobListing[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      status: 'Active',
      applicants: 12,
      posted: '2024-03-01',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      status: 'Active',
      applicants: 8,
      posted: '2024-03-05',
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Contract',
      status: 'Paused',
      applicants: 5,
      posted: '2024-03-10',
    },
  ];
}