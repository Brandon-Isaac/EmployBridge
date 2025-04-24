import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface Application {
  id: string;
  job: {
    title: string;
    company: {
      name: string;
    };
  };
}

@Component({
  selector: 'app-withdraw-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Withdraw Application</h2>
    <mat-dialog-content>
      <p>Are you sure you want to withdraw your application for:</p>
      <div class="job-info">
        <h3>{{ data.job.title }}</h3>
        <p class="company">{{ data.job.company.name }}</p>
      </div>
      <p class="warning">This action cannot be undone.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="warn" (click)="confirm()">Withdraw</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .job-info {
        margin: 16px 0;
        padding: 16px;
        background-color: #f5f5f5;
        border-radius: 4px;
      }

      .job-info h3 {
        margin: 0;
        color: var(--dark-brown);
      }

      .company {
        color: var(--light-brown);
        margin: 8px 0 0 0;
      }

      .warning {
        color: #d32f2f;
        font-weight: 500;
      }
    `
  ]
})
export class WithdrawDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Application,
    private dialogRef: MatDialogRef<WithdrawDialogComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }
} 