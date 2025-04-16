import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="settings-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Settings</mat-card-title>
          <mat-card-subtitle>Manage your account settings</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="settingsForm" class="settings-form">
            <mat-form-field appearance="outline">
              <mat-label>Email Notifications</mat-label>
              <mat-select formControlName="emailNotifications">
                <mat-option value="all">All Notifications</mat-option>
                <mat-option value="important">Important Only</mat-option>
                <mat-option value="none">None</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Job Alerts</mat-label>
              <mat-select formControlName="jobAlerts" multiple>
                <mat-option value="daily">Daily</mat-option>
                <mat-option value="weekly">Weekly</mat-option>
                <mat-option value="monthly">Monthly</mat-option>
              </mat-select>
            </mat-form-field>

            <div class="form-actions">
              <button mat-raised-button color="primary" (click)="saveSettings()">
                <mat-icon>save</mat-icon>
                Save Settings
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .settings-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .form-actions button mat-icon {
      margin-right: 8px;
    }
  `]
})
export class SettingsComponent {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      emailNotifications: ['all'],
      jobAlerts: [['daily']]
    });
  }

  saveSettings(): void {
    if (this.settingsForm.valid) {
      console.log('Saving settings:', this.settingsForm.value);
      // Implement settings save logic here
    }
  }
} 