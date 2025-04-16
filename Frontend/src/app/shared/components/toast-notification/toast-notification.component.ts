import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

export interface ToastData {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: string;
}

@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatButtonModule],
  template: `
    <div class="toast-container" [ngClass]="data.type">
      <i class="fas toast-icon" [ngClass]="getIcon()"></i>
      <span class="toast-message">{{ data.message }}</span>
      <button
        *ngIf="data.action"
        mat-button
        (click)="snackBarRef.dismissWithAction()"
      >
        {{ data.action }}
      </button>
      <button mat-icon-button (click)="snackBarRef.dismiss()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `,
  styles: [
    `
      .toast-container {
        display: flex;
        align-items: center;
        padding: 14px 16px;
        border-radius: 4px;
        color: white;
        min-width: 288px;
        max-width: 568px;
      }

      .toast-icon {
        margin-right: 8px;
        font-size: 20px;
      }

      .toast-message {
        flex: 1;
        margin-right: 8px;
      }

      .success {
        background-color: #4caf50;
      }

      .error {
        background-color: #f44336;
      }

      .warning {
        background-color: #ff9800;
      }

      .info {
        background-color: #2196f3;
      }

      button {
        color: white;
      }

      button:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `,
  ],
})
export class ToastNotificationComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: ToastData,
    public snackBarRef: MatSnackBarRef<ToastNotificationComponent>
  ) {}

  getIcon(): string {
    switch (this.data.type) {
      case 'success':
        return 'fa-check-circle';
      case 'error':
        return 'fa-exclamation-circle';
      case 'warning':
        return 'fa-exclamation-triangle';
      case 'info':
        return 'fa-info-circle';
      default:
        return 'fa-info-circle';
    }
  }
}
