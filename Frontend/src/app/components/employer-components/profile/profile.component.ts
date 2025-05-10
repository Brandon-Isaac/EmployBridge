import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="profile-container">
      <mat-card class="profile-card">
        <mat-card-header>
          <mat-card-title>Company Profile</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="profile-content">
            <!-- Profile content will go here -->
            <p>Company profile information will be displayed here.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 20px;
    }
    .profile-card {
      max-width: 800px;
      margin: 0 auto;
    }
    .profile-content {
      padding: 20px 0;
    }
  `]
})
export class ProfileComponent {} 