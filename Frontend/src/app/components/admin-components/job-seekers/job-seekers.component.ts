// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

// @Component({
//   selector: 'app-job-seekers',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatTableModule,
//     MatButtonModule,
//     MatIconModule
//   ],
//   template: `
//     <div class="job-seekers-container">
//       <h2>Job Seeker Management</h2>
//       <div class="actions">
//         <button mat-raised-button color="primary">
//           Add New Job Seeker
//         </button>
//       </div>
//       <table mat-table [dataSource]="jobSeekers" class="mat-elevation-z8">
//         <!-- Name Column -->
//         <ng-container matColumnDef="name">
//           <th mat-header-cell *matHeaderCellDef>Name</th>
//           <td mat-cell *matCellDef="let seeker">{{seeker.name}}</td>
//         </ng-container>

//         <!-- Email Column -->
//         <ng-container matColumnDef="email">
//           <th mat-header-cell *matHeaderCellDef>Email</th>
//           <td mat-cell *matCellDef="let seeker">{{seeker.email}}</td>
//         </ng-container>

//         <!-- Skills Column -->
//         <ng-container matColumnDef="skills">
//           <th mat-header-cell *matHeaderCellDef>Skills</th>
//           <td mat-cell *matCellDef="let seeker">{{seeker.skills.join(', ')}}</td>
//         </ng-container>

//         <!-- Applications Column -->
//         <ng-container matColumnDef="applications">
//           <th mat-header-cell *matHeaderCellDef>Applications</th>
//           <td mat-cell *matCellDef="let seeker">{{seeker.applications}}</td>
//         </ng-container>

//         <!-- Status Column -->
//         <ng-container matColumnDef="status">
//           <th mat-header-cell *matHeaderCellDef>Status</th>
//           <td mat-cell *matCellDef="let seeker">{{seeker.status}}</td>
//         </ng-container>

//         <!-- Actions Column -->
//         <ng-container matColumnDef="actions">
//           <th mat-header-cell *matHeaderCellDef>Actions</th>
//           <td mat-cell *matCellDef="let seeker">
//             <button mat-icon-button color="primary" (click)="editJobSeeker(seeker)">
//               <mat-icon>edit</mat-icon>
//             </button>
//             <button mat-icon-button color="warn" (click)="deleteJobSeeker(seeker)">
//               <mat-icon>delete</mat-icon>
//             </button>
//           </td>
//         </ng-container>

//         <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
//         <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
//       </table>
//     </div>
//   `,
//   styles: [`
//     .job-seekers-container {
//       padding: 20px;
//     }

//     .actions {
//       margin-bottom: 20px;
//     }

//     table {
//       width: 100%;
//     }

//     .mat-column-actions {
//       width: 120px;
//       text-align: center;
//     }

//     .mat-column-skills {
//       max-width: 200px;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//   `]
// })
// export class JobSeekersComponent {
//   displayedColumns: string[] = ['name', 'email', 'skills', 'applications', 'status', 'actions'];
//   jobSeekers = [
//     { 
//       name: 'Alice Johnson', 
//       email: 'alice@example.com', 
//       skills: ['JavaScript', 'Angular', 'TypeScript'],
//       applications: 5,
//       status: 'Active'
//     },
//     { 
//       name: 'Bob Wilson', 
//       email: 'bob@example.com', 
//       skills: ['Python', 'Django', 'SQL'],
//       applications: 3,
//       status: 'Active'
//     },
//     // Add more sample data as needed
//   ];

//   editJobSeeker(seeker: any): void {
//     console.log('Edit job seeker:', seeker);
//     // Implement edit functionality
//   }

//   deleteJobSeeker(seeker: any): void {
//     console.log('Delete job seeker:', seeker);
//     // Implement delete functionality
//   }
// } 