import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employers',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="employers-container">
      <h2>Employer Management</h2>
      <div class="actions">
        <button mat-raised-button color="primary">
          Add New Employer
        </button>
      </div>
      <table mat-table [dataSource]="employers" class="mat-elevation-z8">
        <!-- Company Name Column -->
        <ng-container matColumnDef="companyName">
          <th mat-header-cell *matHeaderCellDef>Company Name</th>
          <td mat-cell *matCellDef="let employer">{{employer.companyName}}</td>
        </ng-container>

        <!-- Contact Person Column -->
        <ng-container matColumnDef="contactPerson">
          <th mat-header-cell *matHeaderCellDef>Contact Person</th>
          <td mat-cell *matCellDef="let employer">{{employer.contactPerson}}</td>
        </ng-container>

        <!-- Email Column -->
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef>Email</th>
          <td mat-cell *matCellDef="let employer">{{employer.email}}</td>
        </ng-container>

        <!-- Status Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let employer">{{employer.status}}</td>
        </ng-container>

        <!-- Actions Column -->
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let employer">
            <button mat-icon-button color="primary" (click)="editEmployer(employer)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteEmployer(employer)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  `,
  styles: [`
    .employers-container {
      padding: 20px;
    }

    .actions {
      margin-bottom: 20px;
    }

    table {
      width: 100%;
    }

    .mat-column-actions {
      width: 120px;
      text-align: center;
    }
  `]
})
export class EmployersComponent {
  displayedColumns: string[] = ['companyName', 'contactPerson', 'email', 'status', 'actions'];
  employers = [
    { 
      companyName: 'Tech Corp', 
      contactPerson: 'John Smith', 
      email: 'john@techcorp.com', 
      status: 'Active' 
    },
    { 
      companyName: 'Digital Solutions', 
      contactPerson: 'Sarah Johnson', 
      email: 'sarah@digitalsolutions.com', 
      status: 'Active' 
    },
    // Add more sample data as needed
  ];

  editEmployer(employer: any): void {
    console.log('Edit employer:', employer);
    // Implement edit functionality
  }

  deleteEmployer(employer: any): void {
    console.log('Delete employer:', employer);
    // Implement delete functionality
  }
} 