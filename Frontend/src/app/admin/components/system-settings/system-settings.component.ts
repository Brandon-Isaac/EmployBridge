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
  template: `./system-settings.component.html`,
  styleUrl:`./system-settings.component.html` 
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