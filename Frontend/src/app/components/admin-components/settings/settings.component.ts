// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-settings',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatIconModule,
//     MatSelectModule,
//     MatSlideToggleModule,
//     MatDividerModule
//   ],
//   template: `
//     <div class="settings-container">
//       <h2>System Settings</h2>

//       <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()">
//         <!-- General Settings -->
//         <mat-card class="settings-card">
//           <mat-card-header>
//             <mat-card-title>General Settings</mat-card-title>
//           </mat-card-header>
//           <mat-card-content>
//             <div class="form-row">
//               <mat-form-field appearance="outline">
//                 <mat-label>Site Name</mat-label>
//                 <input matInput formControlName="siteName" placeholder="Enter site name">
//               </mat-form-field>

//               <mat-form-field appearance="outline">
//                 <mat-label>Contact Email</mat-label>
//                 <input matInput formControlName="contactEmail" placeholder="Enter contact email">
//                 <mat-icon matSuffix>email</mat-icon>
//               </mat-form-field>
//             </div>

//             <div class="form-row">
//               <mat-form-field appearance="outline">
//                 <mat-label>Default Language</mat-label>
//                 <mat-select formControlName="defaultLanguage">
//                   <mat-option value="en">English</mat-option>
//                   <mat-option value="es">Spanish</mat-option>
//                   <mat-option value="fr">French</mat-option>
//                 </mat-select>
//               </mat-form-field>

//               <mat-form-field appearance="outline">
//                 <mat-label>Time Zone</mat-label>
//                 <mat-select formControlName="timeZone">
//                   <mat-option value="UTC">UTC</mat-option>
//                   <mat-option value="EST">Eastern Time</mat-option>
//                   <mat-option value="PST">Pacific Time</mat-option>
//                 </mat-select>
//               </mat-form-field>
//             </div>
//           </mat-card-content>
//         </mat-card>

//         <!-- Job Settings -->
//         <mat-card class="settings-card">
//           <mat-card-header>
//             <mat-card-title>Job Settings</mat-card-title>
//           </mat-card-header>
//           <mat-card-content>
//             <div class="form-row">
//               <mat-form-field appearance="outline">
//                 <mat-label>Default Job Duration (days)</mat-label>
//                 <input matInput type="number" formControlName="defaultJobDuration">
//               </mat-form-field>

//               <mat-form-field appearance="outline">
//                 <mat-label>Maximum Applications per Job</mat-label>
//                 <input matInput type="number" formControlName="maxApplicationsPerJob">
//               </mat-form-field>
//             </div>

//             <div class="form-row">
//               <mat-slide-toggle formControlName="autoCloseJobs">
//                 Automatically close jobs after deadline
//               </mat-slide-toggle>

//               <mat-slide-toggle formControlName="requireApproval">
//                 Require approval for new job postings
//               </mat-slide-toggle>
//             </div>
//           </mat-card-content>
//         </mat-card>

//         <!-- Notification Settings -->
//         <mat-card class="settings-card">
//           <mat-card-header>
//             <mat-card-title>Notification Settings</mat-card-title>
//           </mat-card-header>
//           <mat-card-content>
//             <div class="form-row">
//               <mat-slide-toggle formControlName="emailNotifications">
//                 Enable Email Notifications
//               </mat-slide-toggle>

//               <mat-slide-toggle formControlName="applicationAlerts">
//                 Enable Application Alerts
//               </mat-slide-toggle>
//             </div>

//             <div class="form-row">
//               <mat-slide-toggle formControlName="expiryReminders">
//                 Send Job Expiry Reminders
//               </mat-slide-toggle>

//               <mat-slide-toggle formControlName="weeklyReports">
//                 Enable Weekly Reports
//               </mat-slide-toggle>
//             </div>
//           </mat-card-content>
//         </mat-card>

//         <!-- Security Settings -->
//         <mat-card class="settings-card">
//           <mat-card-header>
//             <mat-card-title>Security Settings</mat-card-title>
//           </mat-card-header>
//           <mat-card-content>
//             <div class="form-row">
//               <mat-form-field appearance="outline">
//                 <mat-label>Session Timeout (minutes)</mat-label>
//                 <input matInput type="number" formControlName="sessionTimeout">
//               </mat-form-field>

//               <mat-form-field appearance="outline">
//                 <mat-label>Password Expiry (days)</mat-label>
//                 <input matInput type="number" formControlName="passwordExpiry">
//               </mat-form-field>
//             </div>

//             <div class="form-row">
//               <mat-slide-toggle formControlName="twoFactorAuth">
//                 Enable Two-Factor Authentication
//               </mat-slide-toggle>

//               <mat-slide-toggle formControlName="ipRestriction">
//                 Enable IP Restriction
//               </mat-slide-toggle>
//             </div>
//           </mat-card-content>
//         </mat-card>

//         <!-- Save Button -->
//         <div class="actions">
//           <button mat-raised-button color="primary" type="submit" [disabled]="!settingsForm.valid">
//             <mat-icon>save</mat-icon>
//             Save Settings
//           </button>
//           <button mat-stroked-button type="button" (click)="resetForm()">
//             <mat-icon>restore</mat-icon>
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   `,
//   styles: [`
//     .settings-container {
//       padding: 20px;
//       max-width: 1200px;
//       margin: 0 auto;
//     }

//     .settings-card {
//       margin-bottom: 20px;
//     }

//     .form-row {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//       gap: 20px;
//       margin-bottom: 20px;
//     }

//     mat-form-field {
//       width: 100%;
//     }

//     .actions {
//       display: flex;
//       gap: 10px;
//       justify-content: flex-end;
//       margin-top: 20px;
//     }

//     mat-card-header {
//       margin-bottom: 20px;
//     }

//     mat-card-title {
//       font-size: 1.2rem;
//       color: #333;
//     }

//     .mat-slide-toggle {
//       margin: 10px 0;
//     }
//   `]
// })
// export class SettingsComponent implements OnInit {
//   settingsForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private snackBar: MatSnackBar
//   ) {
//     this.settingsForm = this.fb.group({
//       // General Settings
//       siteName: ['EmployBridge', Validators.required],
//       contactEmail: ['', [Validators.required, Validators.email]],
//       defaultLanguage: ['en', Validators.required],
//       timeZone: ['UTC', Validators.required],

//       // Job Settings
//       defaultJobDuration: [30, [Validators.required, Validators.min(1)]],
//       maxApplicationsPerJob: [100, [Validators.required, Validators.min(1)]],
//       autoCloseJobs: [true],
//       requireApproval: [false],

//       // Notification Settings
//       emailNotifications: [true],
//       applicationAlerts: [true],
//       expiryReminders: [true],
//       weeklyReports: [false],

//       // Security Settings
//       sessionTimeout: [30, [Validators.required, Validators.min(5)]],
//       passwordExpiry: [90, [Validators.required, Validators.min(30)]],
//       twoFactorAuth: [false],
//       ipRestriction: [false]
//     });
//   }

//   ngOnInit(): void {
//     // Load settings from service
//     this.loadSettings();
//   }

//   loadSettings(): void {
//     // TODO: Implement loading settings from backend
//     // For now, using default values from form initialization
//   }

//   onSubmit(): void {
//     if (this.settingsForm.valid) {
//       // TODO: Implement saving settings to backend
//       console.log('Settings to save:', this.settingsForm.value);
      
//       this.snackBar.open('Settings saved successfully', 'Close', {
//         duration: 3000,
//         horizontalPosition: 'end',
//         verticalPosition: 'top'
//       });
//     }
//   }

//   resetForm(): void {
//     this.settingsForm.reset();
//     this.loadSettings();
    
//     this.snackBar.open('Settings reset to default values', 'Close', {
//       duration: 3000,
//       horizontalPosition: 'end',
//       verticalPosition: 'top'
//     });
//   }
// } 