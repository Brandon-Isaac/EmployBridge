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
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css']
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