import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { JobListingService } from '../../services/job-listing.service';
// import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [
    // MatSpinner,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  jobForm: FormGroup;
  requiredSkills: string[] = [];
  isLoading = false;

  jobTypes = [
    { value: 'full-time', viewValue: 'Full Time' },
    { value: 'part-time', viewValue: 'Part Time' },
    { value: 'contract', viewValue: 'Contract' },
    { value: 'internship', viewValue: 'Internship' }
  ];

  experienceLevels = [
    { value: 'entry', viewValue: 'Entry Level' },
    { value: 'mid', viewValue: 'Mid Level' },
    { value: 'senior', viewValue: 'Senior Level' },
    { value: 'lead', viewValue: 'Lead' }
  ];

  constructor(
    private fb: FormBuilder,
    private jobListingService: JobListingService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      location: ['', Validators.required],
      jobType: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      salaryRange: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.jobForm.valid) {
      this.isLoading = true;
      const jobData = {
        ...this.jobForm.value,
        requiredSkills: this.requiredSkills,
        status: 'active',
        applicants: 0,
        posted: new Date().toISOString()
      };

      this.jobListingService.createListing(jobData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.snackBar.open('Job posted successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
          this.router.navigate(['/employer/listings']);
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open('Error posting job. Please try again.', 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
          console.error('Error posting job:', error);
        }
      });
    }
  }

  addSkill(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.requiredSkills.push(value);
      event.chipInput!.clear();
    }
  }

  removeSkill(skill: string): void {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }

  get title() { return this.jobForm.get('title'); }
  get description() { return this.jobForm.get('description'); }
  get location() { return this.jobForm.get('location'); }
  get jobType() { return this.jobForm.get('jobType'); }
  get experienceLevel() { return this.jobForm.get('experienceLevel'); }
  get salaryRange() { return this.jobForm.get('salaryRange'); }
  get department() { return this.jobForm.get('department'); }
}