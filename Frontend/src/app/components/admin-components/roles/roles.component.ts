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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
  userCount: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Permission {
  id: number;
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-roles',
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
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule
  ],
  template: `
    <div class="roles-container">
      <div class="header">
        <h2>Roles Management</h2>
        <button mat-raised-button color="primary" (click)="openAddRoleDialog()">
          <mat-icon>add</mat-icon>
          Add New Role
        </button>
      </div>

      <!-- Search and Filter -->
      <mat-card class="filter-card">
        <mat-card-content>
          <div class="filter-row">
            <mat-form-field appearance="outline">
              <mat-label>Search Roles</mat-label>
              <input matInput [(ngModel)]="searchQuery" (keyup)="applyFilter()" placeholder="Search by name or description">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Roles Table -->
      <mat-card class="table-card">
        <mat-card-content>
          <table mat-table [dataSource]="filteredRoles" matSort (matSortChange)="sortData($event)" class="mat-elevation-z2">
            <!-- Name Column -->
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
              <td mat-cell *matCellDef="let role">{{ role.name }}</td>
            </ng-container>

            <!-- Description Column -->
            <ng-container matColumnDef="description">
              <th mat-header-cell *matHeaderCellDef>Description</th>
              <td mat-cell *matCellDef="let role">{{ role.description }}</td>
            </ng-container>

            <!-- Permissions Column -->
            <ng-container matColumnDef="permissions">
              <th mat-header-cell *matHeaderCellDef>Permissions</th>
              <td mat-cell *matCellDef="let role">
                <mat-chip-list>
                  <mat-chip *ngFor="let permission of role.permissions.slice(0, 3)" [matTooltip]="permission.description">
                    {{ permission.name }}
                  </mat-chip>
                  <mat-chip *ngIf="role.permissions.length > 3" color="primary" selected>
                    +{{ role.permissions.length - 3 }} more
                  </mat-chip>
                </mat-chip-list>
              </td>
            </ng-container>

            <!-- User Count Column -->
            <ng-container matColumnDef="userCount">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Users</th>
              <td mat-cell *matCellDef="let role">{{ role.userCount }}</td>
            </ng-container>

            <!-- Updated At Column -->
            <ng-container matColumnDef="updatedAt">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Updated</th>
              <td mat-cell *matCellDef="let role">{{ role.updatedAt | date:'medium' }}</td>
            </ng-container>

            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let role">
                <button mat-icon-button color="primary" (click)="openEditRoleDialog(role)" matTooltip="Edit">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="confirmDelete(role)" matTooltip="Delete">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>

          <mat-paginator
            [length]="totalRoles"
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
    .roles-container {
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

    .filter-card {
      margin-bottom: 20px;
    }

    .filter-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
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

    .mat-column-permissions {
      min-width: 200px;
    }

    mat-form-field {
      width: 100%;
    }

    .mat-chip {
      margin: 2px;
    }
  `]
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  filteredRoles: Role[] = [];
  searchQuery: string = '';
  totalRoles: number = 0;
  pageSize: number = 10;
  displayedColumns: string[] = ['name', 'description', 'permissions', 'userCount', 'updatedAt', 'actions'];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    // TODO: Implement loading roles from backend
    // For now, using mock data
    this.roles = [
      {
        id: 1,
        name: 'Administrator',
        description: 'Full system access with all permissions',
        permissions: [
          { id: 1, name: 'Manage Users', description: 'Can create, edit, and delete users', category: 'User Management' },
          { id: 2, name: 'Manage Roles', description: 'Can create, edit, and delete roles', category: 'Role Management' },
          { id: 3, name: 'View Reports', description: 'Can view system reports', category: 'Reports' },
          { id: 4, name: 'Manage Settings', description: 'Can modify system settings', category: 'System' }
        ],
        userCount: 2,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Manager',
        description: 'Department management access',
        permissions: [
          { id: 1, name: 'Manage Users', description: 'Can create, edit, and delete users', category: 'User Management' },
          { id: 3, name: 'View Reports', description: 'Can view system reports', category: 'Reports' }
        ],
        userCount: 5,
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-16')
      }
    ];

    this.applyFilter();
  }

  applyFilter(): void {
    let filtered = [...this.roles];

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(role =>
        role.name.toLowerCase().includes(query) ||
        role.description.toLowerCase().includes(query)
      );
    }

    this.filteredRoles = filtered;
    this.totalRoles = filtered.length;
  }

  sortData(sort: Sort): void {
    const data = [...this.filteredRoles];
    if (!sort.active || sort.direction === '') {
      this.filteredRoles = data;
      return;
    }

    this.filteredRoles = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'userCount':
          return this.compare(a.userCount, b.userCount, isAsc);
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

  openAddRoleDialog(): void {
    const dialogRef = this.dialog.open(RoleDialogComponent, {
      width: '600px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement adding role to backend
        this.snackBar.open('Role added successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadRoles();
      }
    });
  }

  openEditRoleDialog(role: Role): void {
    const dialogRef = this.dialog.open(RoleDialogComponent, {
      width: '600px',
      data: { mode: 'edit', role }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement updating role in backend
        this.snackBar.open('Role updated successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadRoles();
      }
    });
  }

  confirmDelete(role: Role): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Role',
        message: `Are you sure you want to delete the role "${role.name}"? This will affect ${role.userCount} users.`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Implement deleting role from backend
        this.snackBar.open('Role deleted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.loadRoles();
      }
    });
  }
}

// Role Dialog Component
@Component({
  selector: 'app-role-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.mode === 'add' ? 'Add New Role' : 'Edit Role' }}</h2>
    <form [formGroup]="roleForm" (ngSubmit)="onSubmit()">
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Role Name</mat-label>
          <input matInput formControlName="name" placeholder="Enter role name">
          <mat-error *ngIf="roleForm.get('name')?.hasError('required')">
            Name is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" rows="3" placeholder="Enter description"></textarea>
          <mat-error *ngIf="roleForm.get('description')?.hasError('required')">
            Description is required
          </mat-error>
        </mat-form-field>

        <h3>Permissions</h3>
        <div class="permissions-grid">
          <div *ngFor="let category of permissionCategories" class="permission-category">
            <h4>{{ category }}</h4>
            <div *ngFor="let permission of getPermissionsByCategory(category)" class="permission-item">
              <mat-checkbox
                [formControlName]="'permissions.' + permission.id"
                [matTooltip]="permission.description">
                {{ permission.name }}
              </mat-checkbox>
            </div>
          </div>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button type="button" (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="primary" type="submit" [disabled]="!roleForm.valid">
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

    .permissions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 16px;
    }

    .permission-category {
      background: #f5f5f5;
      padding: 16px;
      border-radius: 4px;
    }

    .permission-category h4 {
      margin: 0 0 12px 0;
      color: #666;
    }

    .permission-item {
      margin-bottom: 8px;
    }

    mat-checkbox {
      display: block;
    }
  `]
})
class RoleDialogComponent implements OnInit {
  roleForm: FormGroup;
  permissions: Permission[] = [];
  permissionCategories: string[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit', role?: Role }
  ) {
    this.roleForm = this.fb.group({
      name: [data.role?.name || '', Validators.required],
      description: [data.role?.description || '', Validators.required],
      permissions: this.fb.group({})
    });
  }

  ngOnInit(): void {
    this.loadPermissions();
  }

  loadPermissions(): void {
    // TODO: Implement loading permissions from backend
    // For now, using mock data
    this.permissions = [
      { id: 1, name: 'Manage Users', description: 'Can create, edit, and delete users', category: 'User Management' },
      { id: 2, name: 'Manage Roles', description: 'Can create, edit, and delete roles', category: 'Role Management' },
      { id: 3, name: 'View Reports', description: 'Can view system reports', category: 'Reports' },
      { id: 4, name: 'Manage Settings', description: 'Can modify system settings', category: 'System' }
    ];

    this.permissionCategories = [...new Set(this.permissions.map(p => p.category))];

    // Initialize permission checkboxes
    const permissionsGroup = this.roleForm.get('permissions') as FormGroup;
    this.permissions.forEach(permission => {
      permissionsGroup.addControl(
        permission.id.toString(),
        this.fb.control(this.data.role?.permissions.some(p => p.id === permission.id) || false)
      );
    });
  }

  getPermissionsByCategory(category: string): Permission[] {
    return this.permissions.filter(p => p.category === category);
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      const formValue = this.roleForm.value;
      const selectedPermissions = this.permissions.filter(p => 
        formValue.permissions[p.id]
      );
      
      this.dialogRef.close({
        ...formValue,
        permissions: selectedPermissions
      });
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