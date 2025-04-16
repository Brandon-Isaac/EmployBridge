import { Component } from '@angular/core';
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
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-system-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="settings-container">
      <mat-card class="settings-card">
        <mat-card-header class="settings-header">
          <mat-card-title class="settings-title">
            <mat-icon class="settings-icon">settings</mat-icon>
            System Configuration
          </mat-card-title>
          <mat-card-subtitle class="settings-subtitle">
            Manage your platform settings and preferences
          </mat-card-subtitle>
        </mat-card-header>

        <mat-divider></mat-divider>

        <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()" class="settings-form">
          <!-- General Settings Section -->
          <div class="settings-section">
            <h3 class="section-title">
              <mat-icon>tune</mat-icon>
              General Settings
            </h3>
            
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>System Name</mat-label>
              <input 
                matInput 
                formControlName="systemName" 
                placeholder="Enter your system name"
                required
              >
              <mat-icon matSuffix>badge</mat-icon>
              <mat-error *ngIf="settingsForm.get('systemName')?.hasError('required')">
                System name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Default Language</mat-label>
              <mat-select formControlName="defaultLanguage" required>
                <mat-option *ngFor="let lang of languages" [value]lang.value">
                  <span class="language-option">
                    <span class="flag-icon">{{ lang.flag }}</span>
                    {{ lang.name }} ({{ lang.nativeName }})
                  </span>
                </mat-option>
              </mat-select>
              <mat-icon matSuffix>language</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Timezone</mat-label>
              <mat-select formControlName="timezone">
                <mat-option *ngFor="let tz of timezones" [value]tz.value">
                  {{ tz.label }}
                </mat-option>
              </mat-select>
              <mat-icon matSuffix>schedule</mat-icon>
            </mat-form-field>
          </div>

          <mat-divider></mat-divider>

          <!-- Notification Settings Section -->
          <div class="settings-section">
            <h3 class="section-title">
              <mat-icon>notifications</mat-icon>
              Notification Settings
            </h3>

            <div class="toggle-row">
              <mat-slide-toggle 
                formControlName="enableEmailNotifications"
                color="primary"
              >
                Email Notifications
              </mat-slide-toggle>
              <mat-icon 
                matTooltip="Receive important system notifications via email"
                class="info-icon"
              >
                info_outline
              </mat-icon>
            </div>

            <div class="toggle-row">
              <mat-slide-toggle 
                formControlName="enablePushNotifications"
                color="primary"
              >
                Push Notifications
              </mat-slide-toggle>
              <mat-icon 
                matTooltip="Get real-time updates on your mobile device"
                class="info-icon"
              >
                info_outline
              </mat-icon>
            </div>

            <div class="toggle-row">
              <mat-slide-toggle 
                formControlName="enableSystemAlerts"
                color="primary"
              >
                System Alerts
              </mat-slide-toggle>
              <mat-icon 
                matTooltip="Critical system notifications and maintenance alerts"
                class="info-icon"
              >
                info_outline
              </mat-icon>
            </div>
          </div>

          <mat-divider></mat-divider>

          <!-- Analytics & Privacy Section -->
          <div class="settings-section">
            <h3 class="section-title">
              <mat-icon>analytics</mat-icon>
              Analytics & Privacy
            </h3>

            <div class="toggle-row">
              <mat-slide-toggle 
                formControlName="enableUsageAnalytics"
                color="primary"
              >
                Usage Analytics
              </mat-slide-toggle>
              <mat-icon 
                matTooltip="Help us improve by sharing anonymous usage data"
                class="info-icon"
              >
                info_outline
              </mat-icon>
            </div>

            <div class="toggle-row">
              <mat-slide-toggle 
                formControlName="enableErrorReporting"
                color="primary"
              >
                Error Reporting
              </mat-slide-toggle>
              <mat-icon 
                matTooltip="Automatically report system errors for faster resolution"
                class="info-icon"
              >
                info_outline
              </mat-icon>
            </div>

            <div class="toggle-row">
              <mat-slide-toggle 
                formControlName="enableDataCollection"
                color="primary"
              >
                Data Collection
              </mat-slide-toggle>
              <mat-icon 
                matTooltip="Allow collection of data for research and improvement purposes"
                class="info-icon"
              >
                info_outline
              </mat-icon>
            </div>
          </div>

          <mat-divider></mat-divider>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button 
              mat-stroked-button 
              type="button"
              (click)="resetToDefaults()"
              class="reset-button"
            >
              <mat-icon>restart_alt</mat-icon>
              Reset to Defaults
            </button>

            <button 
              mat-raised-button 
              color="primary"
              type="submit"
              [disabled]="!settingsForm.valid || !settingsForm.dirty"
              class="save-button"
            >
              <mat-icon>save</mat-icon>
              Save Changes
            </button>
          </div>
        </form>
      </mat-card>
    </div>
  `,
  styles: [`
    .settings-container {
      max-width: 800px;
      margin: 24px auto;
      padding: 0 16px;
    }

    .settings-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .settings-header {
      padding: 24px 24px 16px;
    }

    .settings-title {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: #3f51b5;
    }

    .settings-icon {
      margin-right: 12px;
      color: #3f51b5;
    }

    .settings-subtitle {
      color: #757575;
      font-size: 0.875rem;
    }

    .settings-form {
      padding: 16px 24px 24px;
    }

    .settings-section {
      margin: 20px 0;
    }

    .section-title {
      display: flex;
      align-items: center;
      margin: 0 0 16px 0;
      font-size: 1.1rem;
      font-weight: 500;
      color: #424242;
    }

    .section-title mat-icon {
      margin-right: 8px;
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
      color: #3f51b5;
    }

    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      margin: 12px 0;
    }

    .info-icon {
      margin-left: 8px;
      font-size: 18px;
      color: #757575;
      cursor: help;
    }

    .language-option {
      display: flex;
      align-items: center;
    }

    .flag-icon {
      margin-right: 8px;
      font-size: 1.2rem;
    }

    .action-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
    }

    .reset-button {
      border-radius: 20px;
    }

    .save-button {
      border-radius: 20px;
    }

    @media (max-width: 600px) {
      .settings-container {
        padding: 0 8px;
      }

      .settings-header {
        padding: 16px 16px 8px;
      }

      .settings-form {
        padding: 8px 16px 16px;
      }

      .action-buttons {
        flex-direction: column-reverse;
        gap: 8px;
      }

      .reset-button,
      .save-button {
        width: 100%;
      }
    }
  `]
})
export class SystemSettingsComponent {
  settingsForm: FormGroup;

  languages = [
    { value: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { value: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { value: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { value: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { value: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { value: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' }
  ];

  timezones = [
    { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
    { value: 'EST', label: 'EST (Eastern Standard Time)' },
    { value: 'PST', label: 'PST (Pacific Standard Time)' },
    { value: 'CET', label: 'CET (Central European Time)' },
    { value: 'IST', label: 'IST (Indian Standard Time)' },
    { value: 'JST', label: 'JST (Japan Standard Time)' }
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.settingsForm = this.fb.group({
      systemName: ['SkillsMatch AI', [Validators.required, Validators.maxLength(50)]],
      defaultLanguage: ['en', Validators.required],
      timezone: ['UTC'],
      enableEmailNotifications: [true],
      enablePushNotifications: [true],
      enableSystemAlerts: [true],
      enableUsageAnalytics: [true],
      enableErrorReporting: [true],
      enableDataCollection: [false]
    });

    this.loadSettings();
  }

  loadSettings(): void {
    const savedSettings = localStorage.getItem('systemSettings');
    if (savedSettings) {
      try {
        this.settingsForm.patchValue(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Error loading settings:', e);
      }
    }
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      localStorage.setItem(
        'systemSettings',
        JSON.stringify(this.settingsForm.value)
      );
      this.settingsForm.markAsPristine();
      this.showSuccess('Settings saved successfully!');
    }
  }

  resetToDefaults(): void {
    this.settingsForm.reset({
      systemName: 'SkillsMatch AI',
      defaultLanguage: 'en',
      timezone: 'UTC',
      enableEmailNotifications: true,
      enablePushNotifications: true,
      enableSystemAlerts: true,
      enableUsageAnalytics: true,
      enableErrorReporting: true,
      enableDataCollection: false
    });
    this.showInfo('Settings reset to defaults');
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  private showInfo(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }
}