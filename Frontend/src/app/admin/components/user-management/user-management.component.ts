import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface User {
  id: string;
  email: string;
  role: 'JOB_SEEKER' | 'EMPLOYER' | 'ADMIN';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  lastLogin: Date;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ],
  templateUrl: `./user-management.component.html`,
  styleUrl: `./user-management.component.css`,
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'email',
    'role',
    'status',
    'createdAt',
    'lastLogin',
    'actions',
  ];
  users: User[] = [
    {
      id: '1',
      email: 'jobseeker@example.com',
      role: 'JOB_SEEKER',
      status: 'active',
      createdAt: new Date('2024-01-01'),
      lastLogin: new Date('2024-03-20'),
    },
    {
      id: '2',
      email: 'employer@example.com',
      role: 'EMPLOYER',
      status: 'active',
      createdAt: new Date('2024-01-15'),
      lastLogin: new Date('2024-03-19'),
    },
    {
      id: '3',
      email: 'admin@example.com',
      role: 'ADMIN',
      status: 'suspended',
      createdAt: new Date('2024-02-10'),
      lastLogin: new Date('2024-03-18'),
    },
    {
      id: '4',
      email: 'inactive@example.com',
      role: 'JOB_SEEKER',
      status: 'inactive',
      createdAt: new Date('2024-02-20'),
      lastLogin: new Date('2024-02-25'),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Load users from backend
  }

  getRoleColor(role: string): string {
    switch (role) {
      case 'ADMIN':
        return 'primary';
      case 'EMPLOYER':
        return 'accent';
      default:
        return '';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'primary';
      case 'suspended':
        return 'warn';
      default:
        return '';
    }
  }

  addUser(): void {
    console.log('Add new user');
    // Implement add functionality
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
    // Implement edit functionality
  }

  suspendUser(user: User): void {
    console.log('Suspend user:', user);
    // Implement suspend functionality
  }

  activateUser(user: User): void {
    console.log('Activate user:', user);
    // Implement activate functionality
  }

  deleteUser(user: User): void {
    console.log('Delete user:', user);
    // Implement delete functionality
  }
}