import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Permission {
  id: number;
  name: string;
  description: string;
  category: string;
  rolesCount: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Category {
  id: number;
  name: string;
  description: string;
  permissionsCount: number;
}

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatTooltipModule
  ],
  template: `
    <div class="permissions-container">
      <div class="header">
        <h2>Permissions Management</h2>
        <div class="header-actions">
          <button mat-raised-button color="accent" (click)="openAddCategoryDialog()">
            <mat-icon>category</mat-icon>
            Add Category
          </button>
          <button mat-raised-button color="primary" (click)="openAddPermissionDialog()">
            <mat-icon>add</mat-icon>
            Add Permission
          </button>
        </div>
      </div>

      <!-- Search and Filter -->
      <mat-card class="filter-card">
        <mat-card-content>
          <div class="filter-row">
            <mat-form-field appearance="outline">
              <mat-label>Search Permissions</mat-label>
              <input matInput [(ngModel)]="searchQuery" (keyup)="applyFilter()" placeholder="Search by name or description">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Category</mat-label>
              <mat-select [(ngModel)]="selectedCategory" (selectionChange)="applyFilter()">
                <mat-option value="">All Categories</mat-option>
                <mat-option *ngFor="let category of categories" [value]="category.name">
                  {{ category.name }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Categories Section -->
      <mat-card class="categories-card">
        <mat-card-header>
          <mat-card-title>Categories</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="categories-grid">
            <mat-card *ngFor="let category of categories" class="category-card">
              <mat-card-header>
                <mat-card-title>{{ category.name }}</mat-card-title>
                <mat-card-subtitle>{{ category.permissionsCount }} permissions</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>{{ category.description }}</p>
              </mat-card-content>
              <mat-card-actions>
                <button mat-icon-button color="primary" (click)="openEditCategoryDialog(category)" matTooltip="Edit">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="confirmDeleteCategory(category)" matTooltip="Delete">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-card-actions>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Permissions Table -->
      <mat-card class="table-card">
        <mat-card-content>
          <table mat-table [dataSource]="filteredPermissions" matSort (matSortChange)="sortData($event)" class="mat-elevation-z2">
            <!-- Name Column -->
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
              <td mat-cell *matCellDef="let permission">{{ permission.name }}</td>
            </ng-container>

            <!-- Description Column -->
            <ng-container matColumnDef="description">
              <th mat-header-cell *matHeaderCellDef>Description</th>
              <td mat-cell *matCellDef="let permission">{{ permission.description }}</td>
            </ng-container>

            <!-- Category Column -->
            <ng-container matColumnDef="category">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>
              <td mat-cell *matCellDef="let permission">{{ permission.category }}</td>
            </ng-container>

            <!-- Roles Count Column -->
            <ng-container matColumnDef="rolesCount">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Roles</th>
              <td mat-cell *matCellDef="let permission">{{ permission.rolesCount }}</td>
            </ng-container>

            <!-- Updated At Column -->
            <ng-container matColumnDef="updatedAt">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Updated</th>
              <td mat-cell *matCellDef="let permission">{{ permission.updatedAt | date:'medium' }}</td>
            </ng-container>

            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let permission">
                <button mat-icon-button color="primary" (click)="openEditPermissionDialog(permission)" matTooltip="Edit">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="confirmDeletePermission(permission)" matTooltip="Delete">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>

          <mat-paginator
            [length]="totalPermissions"
            [pageSize]="pageSize"
            [pageSizeOptions]="[5, 10, 25, 100]"
            (page)="onPageChange($event)"
            aria-label="Select page">
          </mat-paginator>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .permissions-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .header-actions {
      display: flex;
      gap: 10px;
    }

    .filter-card {
      margin-bottom: 20px;
    }

    .filter-row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }

    .categories-card {
      margin-bottom: 20px;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 16px;
    }

    .category-card {
      height: 100%;
    }

    .category-card mat-card-content {
      min-height: 60px;
    }

    .table-card {
      margin-bottom: 20px;
    }

    table {
      width: 100%;
    }

    .mat-column-actions {
      width: 100px;
      text-align: center;
    }

    .mat-column-description {
      max-width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    mat-form-field {
      width: 100%;
    }
  `]
})
export class PermissionsComponent implements OnInit {
  permissions: Permission[] = [];
  filteredPermissions: Permission[] = [];
  categories: Category[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  totalPermissions: number = 0;
  pageSize: number = 10;
  displayedColumns: string[] = ['name', 'description', 'category', 'rolesCount', 'updatedAt', 'actions'];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // TODO: Implement loading data from backend
    // For now, using mock data
    this.categories = [
      {
        id: 1,
        name: 'User Management',
        description: 'Permissions related to user management',
        permissionsCount: 2
      },
      {
        id: 2,
        name: 'Role Management',
        description: 'Permissions related to role management',
        permissionsCount: 1
      }
    ];

    this.permissions = [
      {
        id: 1,
        name: 'Manage Users',
        description: 'Can create, edit, and delete users',
        category: 'User Management',
        rolesCount: 2,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Manage Roles',
        description: 'Can create, edit, and delete roles',
        category: 'Role Management',
        rolesCount: 1,
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-16')
      }
    ];

    this.applyFilter();
  }

  applyFilter(): void {
    let filtered = [...this.permissions];

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(permission =>
        permission.name.toLowerCase().includes(query) ||
        permission.description.toLowerCase().includes(query)
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(permission => permission.category === this.selectedCategory);
    }

    this.filteredPermissions = filtered;
    this.totalPermissions = filtered.length;
  }

  sortData(sort: Sort): void {
    const data = [...this.filteredPermissions];
    if (!sort.active || sort.direction === '') {
      this.filteredPermissions = data;
      return;
    }

    this.filteredPermissions = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'category':
          return this.compare(a.category, b.category, isAsc);
        case 'rolesCount':
          return this.compare(a.rolesCount, b.rolesCount, isAsc);
        case 'updatedAt':
          return this.compare(a.updatedAt, b.updatedAt, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: any, b: any, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onPageChange(event: PageEvent): void {
    // TODO: Implement pagination
    console.log('Page changed:', event);
  }

  openAddPermissionDialog(): void {
    const dialogRef = this.dialog.open(PermissionDialogComponent, {
      width: '500px',
      data: { mode: 'add', categories: this.categories }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement adding permission to backend
        this.snackBar.open('Permission added successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadData();
      }
    });
  }

  openEditPermissionDialog(permission: Permission): void {
    const dialogRef = this.dialog.open(PermissionDialogComponent, {
      width: '500px',
      data: { mode: 'edit', permission, categories: this.categories }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement updating permission in backend
        this.snackBar.open('Permission updated successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadData();
      }
    });
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement adding category to backend
        this.snackBar.open('Category added successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadData();
      }
    });
  }

  openEditCategoryDialog(category: Category): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px',
      data: { mode: 'edit', category }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement updating category in backend
        this.snackBar.open('Category updated successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadData();
      }
    });
  }

  confirmDeletePermission(permission: Permission): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Permission',
        message: `Are you sure you want to delete the permission "${permission.name}"? This will affect ${permission.rolesCount} roles.`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement deleting permission from backend
        this.snackBar.open('Permission deleted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadData();
      }
    });
  }

  confirmDeleteCategory(category: Category): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Category',
        message: `Are you sure you want to delete the category "${category.name}"? This will affect ${category.permissionsCount} permissions.`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement deleting category from backend
        this.snackBar.open('Category deleted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadData();
      }
    });
  }
}

// Permission Dialog Component
@Component({
  selector: 'app-permission-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.mode === 'add' ? 'Add New Permission' : 'Edit Permission' }}</h2>
    <form [formGroup]="permissionForm" (ngSubmit)="onSubmit()">
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Permission Name</mat-label>
          <input matInput formControlName="name" placeholder="Enter permission name">
          <mat-error *ngIf="permissionForm.get('name')?.hasError('required')">
            Name is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" rows="3" placeholder="Enter description"></textarea>
          <mat-error *ngIf="permissionForm.get('description')?.hasError('required')">
            Description is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Category</mat-label>
          <mat-select formControlName="category">
            <mat-option *ngFor="let category of data.categories" [value]="category.name">
              {{ category.name }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="permissionForm.get('category')?.hasError('required')">
            Category is required
          </mat-error>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button type="button" (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="primary" type="submit" [disabled]="!permissionForm.valid">
          {{ data.mode === 'add' ? 'Add' : 'Update' }}
        </button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [`
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
  `]
})
class PermissionDialogComponent {
  permissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PermissionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit', permission?: Permission, categories: Category[] }
  ) {
    this.permissionForm = this.fb.group({
      name: [data.permission?.name || '', Validators.required],
      description: [data.permission?.description || '', Validators.required],
      category: [data.permission?.category || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.permissionForm.valid) {
      this.dialogRef.close(this.permissionForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

// Category Dialog Component
@Component({
  selector: 'app-category-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.mode === 'add' ? 'Add New Category' : 'Edit Category' }}</h2>
    <form [formGroup]="categoryForm" (ngSubmit)="onSubmit()">
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Category Name</mat-label>
          <input matInput formControlName="name" placeholder="Enter category name">
          <mat-error *ngIf="categoryForm.get('name')?.hasError('required')">
            Name is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" rows="3" placeholder="Enter description"></textarea>
          <mat-error *ngIf="categoryForm.get('description')?.hasError('required')">
            Description is required
          </mat-error>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button type="button" (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="primary" type="submit" [disabled]="!categoryForm.valid">
          {{ data.mode === 'add' ? 'Add' : 'Update' }}
        </button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [`
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
  `]
})
class CategoryDialogComponent {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit', category?: Category }
  ) {
    this.categoryForm = this.fb.group({
      name: [data.category?.name || '', Validators.required],
      description: [data.category?.description || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.dialogRef.close(this.categoryForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

// Confirm Dialog Component
@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-raised-button color="warn" (click)="onYesClick()">Delete</button>
    </mat-dialog-actions>
  `
})
class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
} 