import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-profile-update',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="profile-update-container">
      <mat-card class="profile-update-card">
        <mat-card-header>
          <mat-card-title>Update Company Profile</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="profile-update-content">
            <!-- Profile update form will go here -->
            <p>Company profile update form will be displayed here.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-update-container {
      padding: 20px;
    }
    .profile-update-card {
      max-width: 800px;
      margin: 0 auto;
    }
    .profile-update-content {
      padding: 20px 0;
    }
  `]
})
export class ProfileUpdateComponent {} 