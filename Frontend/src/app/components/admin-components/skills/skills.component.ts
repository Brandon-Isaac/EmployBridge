// import { Component, OnInit, Inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
// import { MatSortModule, Sort } from '@angular/material/sort';
// import { MatDialogContent } from '@angular/material/dialog';
// import { MatDialogActions } from '@angular/material/dialog';
// import { MatError } from '@angular/material/form-field';
// import { MatLabel } from '@angular/material/form-field';

// interface Skill {
//   id: number;
//   name: string;
//   category: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// @Component({
//   selector: 'app-skills',
//   standalone: true,
//   imports: [
//     MatError,
//     MatLabel,
//     MatDialogContent,
//     MatDialogActions,
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatCardModule,
//     MatTableModule,
//     MatButtonModule,
//     MatIconModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatDialogModule,
//     MatPaginatorModule,
//     MatSortModule
//   ],
//   template: `
//     <div class="skills-container">
//       <div class="header">
//         <h2>Skills Management</h2>
//         <button mat-raised-button color="primary" (click)="openAddSkillDialog()">
//           <mat-icon>add</mat-icon>
//           Add New Skill
//         </button>
//       </div>

//       <!-- Search and Filter -->
//       <mat-card class="filter-card">
//         <mat-card-content>
//           <div class="filter-row">
//             <mat-form-field appearance="outline">
//               <mat-label>Search Skills</mat-label>
//               <input matInput [(ngModel)]="searchQuery" (keyup)="applyFilter()" placeholder="Search by name or category">
//               <mat-icon matSuffix>search</mat-icon>
//             </mat-form-field>

//             <mat-form-field appearance="outline">
//               <mat-label>Category</mat-label>
//               <mat-select [(ngModel)]="selectedCategory" (selectionChange)="applyFilter()">
//                 <mat-option value="">All Categories</mat-option>
//                 <mat-option *ngFor="let category of categories" [value]="category">
//                   {{ category }}
//                 </mat-option>
//               </mat-select>
//             </mat-form-field>
//           </div>
//         </mat-card-content>
//       </mat-card>

//       <!-- Skills Table -->
//       <mat-card class="table-card">
//         <mat-card-content>
//           <table mat-table [dataSource]="filteredSkills" matSort (matSortChange)="sortData($event)" class="mat-elevation-z2">
//             <!-- Name Column -->
//             <ng-container matColumnDef="name">
//               <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
//               <td mat-cell *matCellDef="let skill">{{ skill.name }}</td>
//             </ng-container>

//             <!-- Category Column -->
//             <ng-container matColumnDef="category">
//               <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>
//               <td mat-cell *matCellDef="let skill">{{ skill.category }}</td>
//             </ng-container>

//             <!-- Description Column -->
//             <ng-container matColumnDef="description">
//               <th mat-header-cell *matHeaderCellDef>Description</th>
//               <td mat-cell *matCellDef="let skill">{{ skill.description }}</td>
//             </ng-container>

//             <!-- Updated At Column -->
//             <ng-container matColumnDef="updatedAt">
//               <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Updated</th>
//               <td mat-cell *matCellDef="let skill">{{ skill.updatedAt | date:'medium' }}</td>
//             </ng-container>

//             <!-- Actions Column -->
//             <ng-container matColumnDef="actions">
//               <th mat-header-cell *matHeaderCellDef>Actions</th>
//               <td mat-cell *matCellDef="let skill">
//                 <button mat-icon-button color="primary" (click)="openEditSkillDialog(skill)" matTooltip="Edit">
//                   <mat-icon>edit</mat-icon>
//                 </button>
//                 <button mat-icon-button color="warn" (click)="confirmDelete(skill)" matTooltip="Delete">
//                   <mat-icon>delete</mat-icon>
//                 </button>
//               </td>
//             </ng-container>

//             <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
//             <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
//           </table>

//           <mat-paginator
//             [length]="totalSkills"
//             [pageSize]="pageSize"
//             [pageSizeOptions]="[5, 10, 25, 100]"
//             (page)="onPageChange($event)"
//             aria-label="Select page">
//           </mat-paginator>
//         </mat-card-content>
//       </mat-card>
//     </div>
//   `,
//   styles: [`
//     .skills-container {
//       padding: 20px;
//       max-width: 1200px;
//       margin: 0 auto;
//     }

//     .header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 20px;
//     }

//     .filter-card {
//       margin-bottom: 20px;
//     }

//     .filter-row {
//       display: grid;
//       grid-template-columns: 2fr 1fr;
//       gap: 20px;
//     }

//     .table-card {
//       margin-bottom: 20px;
//     }

//     table {
//       width: 100%;
//     }

//     .mat-column-actions {
//       width: 100px;
//       text-align: center;
//     }

//     .mat-column-description {
//       max-width: 300px;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }

//     mat-form-field {
//       width: 100%;
//     }
//   `]
// })
// export class SkillsComponent implements OnInit {
//   skills: Skill[] = [];
//   filteredSkills: Skill[] = [];
//   categories: string[] = [];
//   searchQuery: string = '';
//   selectedCategory: string = '';
//   totalSkills: number = 0;
//   pageSize: number = 10;
//   displayedColumns: string[] = ['name', 'category', 'description', 'updatedAt', 'actions'];

//   constructor(
//     private dialog: MatDialog,
//     private snackBar: MatSnackBar,
//     private fb: FormBuilder
//   ) {}

//   ngOnInit(): void {
//     this.loadSkills();
//   }

//   loadSkills(): void {
//     // TODO: Implement loading skills from backend
//     // For now, using mock data
//     this.skills = [
//       {
//         id: 1,
//         name: 'JavaScript',
//         category: 'Programming',
//         description: 'A programming language that enables interactive web pages',
//         createdAt: new Date('2024-01-01'),
//         updatedAt: new Date('2024-01-15')
//       },
//       {
//         id: 2,
//         name: 'Project Management',
//         category: 'Management',
//         description: 'The practice of initiating, planning, executing, and closing projects',
//         createdAt: new Date('2024-01-02'),
//         updatedAt: new Date('2024-01-16')
//       }
//     ];

//     this.categories = [...new Set(this.skills.map(skill => skill.category))];
//     this.applyFilter();
//   }

//   applyFilter(): void {
//     let filtered = [...this.skills];

//     // Apply search filter
//     if (this.searchQuery) {
//       const query = this.searchQuery.toLowerCase();
//       filtered = filtered.filter(skill =>
//         skill.name.toLowerCase().includes(query) ||
//         skill.category.toLowerCase().includes(query) ||
//         skill.description.toLowerCase().includes(query)
//       );
//     }

//     // Apply category filter
//     if (this.selectedCategory) {
//       filtered = filtered.filter(skill => skill.category === this.selectedCategory);
//     }

//     this.filteredSkills = filtered;
//     this.totalSkills = filtered.length;
//   }

//   sortData(sort: Sort): void {
//     const data = [...this.filteredSkills];
//     if (!sort.active || sort.direction === '') {
//       this.filteredSkills = data;
//       return;
//     }

//     this.filteredSkills = data.sort((a, b) => {
//       const isAsc = sort.direction === 'asc';
//       switch (sort.active) {
//         case 'name':
//           return this.compare(a.name, b.name, isAsc);
//         case 'category':
//           return this.compare(a.category, b.category, isAsc);
//         case 'updatedAt':
//           return this.compare(a.updatedAt, b.updatedAt, isAsc);
//         default:
//           return 0;
//       }
//     });
//   }

//   compare(a: any, b: any, isAsc: boolean): number {
//     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
//   }

//   onPageChange(event: PageEvent): void {
//     // TODO: Implement pagination
//     console.log('Page changed:', event);
//   }

//   openAddSkillDialog(): void {
//     const dialogRef = this.dialog.open(SkillDialogComponent, {
//       width: '500px',
//       data: { mode: 'add' }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         // TODO: Implement adding skill to backend
//         this.snackBar.open('Skill added successfully', 'Close', {
//           duration: 3000,
//           horizontalPosition: 'end',
//           verticalPosition: 'top'
//         });
//         this.loadSkills();
//       }
//     });
//   }

//   openEditSkillDialog(skill: Skill): void {
//     const dialogRef = this.dialog.open(SkillDialogComponent, {
//       width: '500px',
//       data: { mode: 'edit', skill }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         // TODO: Implement updating skill in backend
//         this.snackBar.open('Skill updated successfully', 'Close', {
//           duration: 3000,
//           horizontalPosition: 'end',
//           verticalPosition: 'top'
//         });
//         this.loadSkills();
//       }
//     });
//   }

//   confirmDelete(skill: Skill): void {
//     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
//       width: '400px',
//       data: {
//         title: 'Delete Skill',
//         message: `Are you sure you want to delete the skill "${skill.name}"?`
//       }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         // TODO: Implement deleting skill from backend
//         this.snackBar.open('Skill deleted successfully', 'Close', {
//           duration: 3000,
//           horizontalPosition: 'end',
//           verticalPosition: 'top'
//         });
//         this.loadSkills();
//       }
//     });
//   }
// }

// // Skill Dialog Component
// @Component({
//   selector: 'app-skill-dialog',
//   template: `
//     <h2 mat-dialog-title>{{ data.mode === 'add' ? 'Add New Skill' : 'Edit Skill' }}</h2>
//     <form [formGroup]="skillForm" (ngSubmit)="onSubmit()">
//       <mat-dialog-content>
//         <mat-form-field appearance="outline" class="full-width">
//           <mat-label>Skill Name</mat-label>
//           <input matInput formControlName="name" placeholder="Enter skill name">
//           <mat-error *ngIf="skillForm.get('name')?.hasError('required')">
//             Name is required
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="full-width">
//           <mat-label>Category</mat-label>
//           <input matInput formControlName="category" placeholder="Enter category">
//           <mat-error *ngIf="skillForm.get('category')?.hasError('required')">
//             Category is required
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="full-width">
//           <mat-label>Description</mat-label>
//           <textarea matInput formControlName="description" rows="4" placeholder="Enter description"></textarea>
//           <mat-error *ngIf="skillForm.get('description')?.hasError('required')">
//             Description is required
//           </mat-error>
//         </mat-form-field>
//       </mat-dialog-content>

//       <mat-dialog-actions align="end">
//         <button mat-button type="button" (click)="onCancel()">Cancel</button>
//         <button mat-raised-button color="primary" type="submit" [disabled]="!skillForm.valid">
//           {{ data.mode === 'add' ? 'Add' : 'Update' }}
//         </button>
//       </mat-dialog-actions>
//     </form>
//   `,
//   styles: [`
//     .full-width {
//       width: 100%;
//       margin-bottom: 16px;
//     }
//   `]
// })
// class SkillDialogComponent {
//   skillForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     public dialogRef: MatDialogRef<SkillDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit', skill?: Skill }
//   ) {
//     this.skillForm = this.fb.group({
//       name: [data.skill?.name || '', Validators.required],
//       category: [data.skill?.category || '', Validators.required],
//       description: [data.skill?.description || '', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.skillForm.valid) {
//       this.dialogRef.close(this.skillForm.value);
//     }
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }
// }

// // Confirm Dialog Component
// @Component({
//   selector: 'app-confirm-dialog',
//   template: `
//     <h2 mat-dialog-title>{{ data.title }}</h2>
//     <mat-dialog-content>
//       <p>{{ data.message }}</p>
//     </mat-dialog-content>
//     <mat-dialog-actions align="end">
//       <button mat-button (click)="onNoClick()">Cancel</button>
//       <button mat-raised-button color="warn" (click)="onYesClick()">Delete</button>
//     </mat-dialog-actions>
//   `
// })
// class ConfirmDialogComponent {
//   constructor(
//     public dialogRef: MatDialogRef<ConfirmDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close(false);
//   }

//   onYesClick(): void {
//     this.dialogRef.close(true);
//   }
// } 