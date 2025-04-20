import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Job {
  id?: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  jobType: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-job-dialog',
  templateUrl: './job-dialog.component.html',
  styleUrls: ['./job-dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class JobDialogComponent implements OnInit {
  jobForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<JobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { job?: Job }
  ) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      salary: [null, Validators.required],
      jobType: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data?.job) {
      this.jobForm.patchValue(this.data.job);
    }
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      const jobData = this.jobForm.value;
      if (this.data?.job?.id) {
        jobData.id = this.data.job.id;
      }
      this.dialogRef.close(jobData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
} 