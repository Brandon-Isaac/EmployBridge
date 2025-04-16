import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  status: 'active' | 'inactive';
  postedDate: Date;
  applicants?: number;
  salary?: string;
  jobType?: string;
}

@Component({
  selector: 'app-job-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule
  ],
  template: `./job-management.component.html`,
  styleUrl: `./job-management.component.css `
})
export class JobDialogComponent {
  jobForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: any,
    public data: {job?: Job, isEdit: boolean}
  ) {
    this.jobForm = this.fb.group({
      id: [data.job?.id || this.generateId()],
      title: [data.job?.title || '', Validators.required],
      company: [data.job?.company || '', Validators.required],
      location: [data.job?.location || '', Validators.required],
      status: [data.job?.status || 'active'],
      postedDate: [data.job?.postedDate || new Date()],
      salary: [data.job?.salary || ''],
      jobType: [data.job?.jobType || 'Full-time'],
      applicants: [data.job?.applicants || 0]
    });
  }
  
  generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
  
  onSubmit(): void {
    if (this.jobForm.valid) {
      this.dialogRef.close(this.jobForm.value);
    }
  }
  }
  
  @Component({
  selector: 'app-job-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule
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
    ]),
    trigger('tableRowAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ],
  template: `
    <div class="job-management-container" [@fadeIn]>
      <div class="page-header" [@slideInFromRight]>
        <h1 class="page-title">Job Management</h1>
        <p class="page-subtitle">Create, edit and manage job listings</p>
      </div>
      
      <div class="dashboard-grid">
        <mat-card class="dashboard-card" [@fadeIn]>
          <div class="card-content">
            <div class="stat-icon active-jobs">
              <i class="fas fa-briefcase"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">Active Jobs</span>
              <span class="stat-value">{{ getActiveJobsCount() }}</span>
            </div>
          </div>
        </mat-card>
        
        <mat-card class="dashboard-card" [@fadeIn]>
          <div class="card-content">
            <div class="stat-icon inactive-jobs">
              <i class="fas fa-pause-circle"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">Inactive Jobs</span>
              <span class="stat-value">{{ getInactiveJobsCount() }}</span>
            </div>
          </div>
        </mat-card>
        
        <mat-card class="dashboard-card" [@fadeIn]>
          <div class="card-content">
            <div class="stat-icon total-applicants">
              <i class="fas fa-users"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">Total Applicants</span>
              <span class="stat-value">{{ getTotalApplicants() }}</span>
            </div>
          </div>
        </mat-card>
      </div>
      
      <mat-card class="main-card" [@slideInFromRight]>
        <div class="card-header">
          <div class="card-title-section">
            <h2 class="card-title">Job Listings</h2>
            <p class="card-subtitle">Manage all job postings from here</p>
          </div>
          
          <div class="card-actions">
            <mat-form-field appearance="outline" class="search-field">
              <mat-label>Search</mat-label>
              <input matInput (keyup)="applyFilter($event)" placeholder="Search jobs..." #input>
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            
            <button mat-raised-button color="primary" class="add-button" (click)="openJobDialog()">
              <mat-icon>add</mat-icon>
              Add Job
            </button>
          </div>
        </div>
        
        <mat-divider></mat-divider>
        
        <div class="table-container">
          <table mat-table [dataSource]="dataSource" matSort class="job-table">
            <!-- Title Column -->
            <ng-container matColumnDef="title">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Job Title</th>
              <td mat-cell *matCellDef="let job">
                <div class="job-title">{{ job.title }}</div>
                <div class="job-type" *ngIf="job.jobType">{{ job.jobType }}</div>
              </td>
            </ng-container>
  
            <!-- Company Column -->
            <ng-container matColumnDef="company">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Company</th>
              <td mat-cell *matCellDef="let job">{{ job.company }}</td>
            </ng-container>
  
            <!-- Location Column -->
            <ng-container matColumnDef="location">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>
              <td mat-cell *matCellDef="let job">
                <div class="location">
                  <i class="fas fa-map-marker-alt location-icon"></i>
                  {{ job.location }}
                </div>
              </td>
            </ng-container>
            
            <!-- Salary Column -->
            <ng-container matColumnDef="salary">
              <th mat-header-cell *matHeaderCellDef>Salary</th>
              <td mat-cell *matCellDef="let job">{{ job.salary || 'Not specified' }}</td>
            </ng-container>
            
            <!-- Posted Date Column -->
            <ng-container matColumnDef="postedDate">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Posted Date</th>
              <td mat-cell *matCellDef="let job">{{ job.postedDate | date:'mediumDate' }}</td>
            </ng-container>
            
            <!-- Applicants Column -->
            <ng-container matColumnDef="applicants">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Applicants</th>
              <td mat-cell *matCellDef="let job">
                <span class="applicants-count">
                  <i class="fas fa-user-friends"></i>
                  {{ job.applicants || 0 }}
                </span>
              </td>
            </ng-container>
  
            <!-- Status Column -->
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
              <td mat-cell *matCellDef="let job">
                <span class="status-chip" [ngClass]="job.status">
                  <i class="fas" [ngClass]="job.status === 'active' ? 'fa-check-circle' : 'fa-times-circle'"></i>
                  {{ job.status }}
                </span>
              </td>
            </ng-container>
  
            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let job">
                <div class="action-buttons">
                  <button mat-icon-button color="primary" matTooltip="Edit Job" (click)="editJob(job)">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button mat-icon-button color="accent" matTooltip="Toggle Status" (click)="toggleJobStatus(job)">
                    <mat-icon>{{ job.status === 'active' ? 'pause' : 'play_arrow' }}</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" matTooltip="Delete Job" (click)="deleteJob(job)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </td>
            </ng-container>
  
            <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
            <tr 
              mat-row 
              *matRowDef="let job; columns: displayedColumns;"
              [@tableRowAnimation]
              [ngClass]="{'inactive-row': job.status === 'inactive'}"
            ></tr>
            
            <!-- Row shown when no matching data -->
            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell no-data" colspan="8">
                <div class="no-data-message">
                  <mat-icon>search_off</mat-icon>
                  <span>No jobs matching the filter "{{input.value}}"</span>
                </div>
              </td>
            </tr>
          </table>
          
          <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" showFirstLastButtons></mat-paginator>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    :host {
      --primary: #4e54c8;
      --primary-light: #8f94fb;
      --primary-dark: #363795;
      --accent: #4caf50;
      --accent-light: #81c784;
      --text-primary: #333;
      --text-secondary: #666;
      --background-light: #f5f7fa;
      --card-bg: #ffffff;
      --success: #00c853;
      --warning: #ffd600;
      --danger: #f44336;
    }
    
    .job-management-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .page-header {
      margin-bottom: 24px;
    }
    
    .page-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin: 0;
      color: var(--primary-dark);
    }
    
    .page-subtitle {
      color: var(--text-secondary);
      margin-top: 4px;
    }
    
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 24px;
    }
    
    @media (max-width: 992px) {
      .dashboard-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .dashboard-card {
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .dashboard-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .card-content {
      padding: 16px;
      display: flex;
      align-items: center;
    }
    
    .stat-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
    }
    
    .stat-icon i {
      font-size: 24px;
      color: white;
    }
    
    .active-jobs {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    }
    
    .inactive-jobs {
      background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
    }
    
    .total-applicants {
      background: linear-gradient(135deg, #56ab2f 0%, #a8e063 100%);
    }
    
    .stat-info {
      display: flex;
      flex-direction: column;
    }
    
    .stat-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
    
    .stat-value {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    
    .main-card {
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }
    
    .card-header {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .card-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin: 0;
      color: var(--primary-dark);
    }
    
    .card-subtitle {
      color: var(--text-secondary);
      margin: 4px 0 0 0;
    }
    
    .card-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    
    @media (max-width: 768px) {
      .card-actions {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
      }
    }
    
    .search-field {
      width: 250px;
    }
    
    @media (max-width: 768px) {
      .search-field {
        width: 100%;
      }
    }
    
    .add-button {
      height: 42px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .add-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    .table-container {
      overflow-x: auto;
      padding: 0 24px 24px;
    }
    
    .job-table {
      width: 100%;
    }
    
    .mat-header-cell {
      font-weight: 600;
      color: var(--text-secondary);
      background-color: var(--background-light);
    }
    
    .mat-column-title {
      min-width: 200px;
    }
    
    .job-title {
      font-weight: 500;
      color: var(--primary);
    }
    
    .job-type {
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin-top: 4px;
    }
    
    .location {
      display: flex;
      align-items: center;
    }
    
    .location-icon {
      color: var(--text-secondary);
      margin-right: 6px;
      font-size: 0.9rem;
    }
    
    .status-chip {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 16px;
      font-size: 0.85rem;
      font-weight: 500;
      text-transform: capitalize;
    }
    
    .status-chip i {
      margin-right: 6px;
      font-size: 0.9rem;
    }
    
    .status-chip.active {
      background-color: rgba(0, 200, 83, 0.1);
      color: var(--success);
    }
    
    .status-chip.inactive {
      background-color: rgba(244, 67, 54, 0.1);
      color: var(--danger);
    }
    
    .applicants-count {
      display: flex;
      align-items: center;
    }
    
    .applicants-count i {
      margin-right: 6px;
      color: var(--text-secondary);
    }
    
    .action-buttons {
      display: flex;
      gap: 8px;
    }
    
    .inactive-row {
      background-color: rgba(0, 0, 0, 0.02);
    }
    
    .inactive-row .job-title {
      color: var(--text-secondary);
    }
    
    .no-data {
      padding: 32px 0;
    }
    
    .no-data-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--text-secondary);
    }
    
    .no-data-message mat-icon {
      font-size: 48px;
      height: 48px;
      width: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }
    
    mat-paginator {
      margin-top: 16px;
      border-radius: 0 0 12px 12px;
      overflow: hidden;
      background-color: var(--background-light);
    }`]
})
export class JobManagementComponent implements OnInit {
  displayedColumns: string[] = ['title', 'company', 'location', 'salary', 'postedDate', 'applicants', 'status', 'actions'];
  dataSource: MatTableDataSource<Job>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      status: 'active',
      postedDate: new Date(2025, 3, 5),
      applicants: 12,
      salary: '$120,000 - $150,000',
      jobType: 'Full-time'
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'Innovate Inc',
      location: 'New York',
      status: 'active',
      postedDate: new Date(2025, 3, 10),
      applicants: 8,
      salary: '$110,000 - $130,000',
      jobType: 'Full-time'
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'San Francisco',
      status: 'inactive',
      postedDate: new Date(2025, 2, 20),
      applicants: 15,
      salary: '$90,000 - $110,000',
      jobType: 'Full-time'
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'AI Solutions',
      location: 'Remote',
      status: 'active',
      postedDate: new Date(2025, 3, 8),
      applicants: 6,
      salary: '$130,000 - $160,000',
      jobType: 'Full-time'
    },
    {
      id: '5',
      title: 'Marketing Specialist',
      company: 'Growth Hackers',
      location: 'Chicago',
      status: 'active',
      postedDate: new Date(2025, 3, 12),
      applicants: 9,
      jobType: 'Part-time'
    }
  ];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource(this.jobs);
  }

  ngOnInit(): void {
    // Load jobs from localStorage if available
    const savedJobs = localStorage.getItem('adminJobs');
    if (savedJobs) {
      try {
        const parsedJobs = JSON.parse(savedJobs);
        // Convert string dates back to Date objects
        this.jobs = parsedJobs.map((job: any) => ({
          ...job,
          postedDate: new Date(job.postedDate)
        }));
        this.dataSource.data = this.jobs;
      } catch (e) {
        console.error('Error parsing saved jobs', e);
      }
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  openJobDialog(job?: Job): void {
    const dialogRef = this.dialog.open(JobDialogComponent, {
      width: '600px',
      data: { job: job, isEdit: !!job }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (job) {
          // Edit existing job
          const index = this.jobs.findIndex(j => j.id === result.id);
          if (index !== -1) {
            this.jobs[index] = result;
            this.showNotification('Job updated successfully');
          }
        } else {
          // Add new job
          this.jobs.unshift(result);
          this.showNotification('New job added successfully');
        }
        
        this.updateDataSource();
        this.saveToLocalStorage();
      }
    });
  }
  
  editJob(job: Job): void {
    this.openJobDialog(job);
  }
  
  deleteJob(job: Job): void {
    const index = this.jobs.findIndex(j => j.id === job.id);
    if (index !== -1) {
      this.jobs.splice(index, 1);
      this.updateDataSource();
      this.saveToLocalStorage();
      this.showNotification('Job deleted successfully');
    }
  }
  
  toggleJobStatus(job: Job): void {
    const index = this.jobs.findIndex(j => j.id === job.id);
    if (index !== -1) {
      this.jobs[index].status = job.status === 'active' ? 'inactive' : 'active';
      this.updateDataSource();
      this.saveToLocalStorage();
      this.showNotification(`Job ${this.jobs[index].status === 'active' ? 'activated' : 'deactivated'} successfully`);
    }
  }
  
  updateDataSource(): void {
    this.dataSource.data = [...this.jobs];
  }
  
  saveToLocalStorage(): void {
    localStorage.setItem('adminJobs', JSON.stringify(this.jobs));
  }
  
  showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }
  
    getActiveJobsCount(): number {
      return this.jobs.filter(job => job.status === 'active').length;
    }
    
    getInactiveJobsCount(): number {
      return this.jobs.filter(job => job.status === 'inactive').length;
    }
    
    getTotalApplicants(): number {
      return this.jobs.reduce((total, job) => total + (job.applicants || 0), 0);
    }
  }
  
  // Add this to your global styles or component styles
  // Styles for the notification
  /*
  .success-snackbar {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
  }
  
  .mat-simple-snackbar-action {
    color: white;
  }
  */