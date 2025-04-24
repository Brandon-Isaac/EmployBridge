import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-cv-manager',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  template: `
    <div class="cv-manager-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>CV Manager</mat-card-title>
          <mat-card-subtitle>Manage your CVs and resumes</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="cv-list">
            <mat-list>
              <mat-list-item *ngFor="let cv of cvs">
                <div class="cv-item">
                  <div class="cv-info">
                    <div class="cv-name">{{ cv.name }}</div>
                    <div class="cv-date">Last updated: {{ cv.lastUpdated | date }}</div>
                  </div>
                  <div class="cv-actions">
                    <button mat-icon-button color="primary" (click)="editCV(cv)">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button mat-icon-button color="warn" (click)="deleteCV(cv)">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </mat-list-item>
            </mat-list>
          </div>

          <div class="cv-upload">
            <button mat-raised-button color="primary" (click)="uploadCV()">
              <i class="fas fa-upload"></i>
              Upload New CV
            </button>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .cv-manager-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .cv-list {
      margin-bottom: 20px;
    }

    .cv-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 8px 0;
    }

    .cv-info {
      flex: 1;
    }

    .cv-name {
      font-weight: 500;
      margin-bottom: 4px;
    }

    .cv-date {
      font-size: 12px;
      color: #666;
    }

    .cv-actions {
      display: flex;
      gap: 8px;
    }

    .cv-upload {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    i {
      margin-right: 8px;
    }
  `]
})
export class CvManagerComponent {
  cvs = [
    {
      name: 'Software Engineer CV',
      lastUpdated: new Date('2024-01-15')
    },
    {
      name: 'Full Stack Developer CV',
      lastUpdated: new Date('2024-03-20')
    }
  ];

  editCV(cv: any) {
    console.log('Editing CV:', cv);
  }

  deleteCV(cv: any) {
    console.log('Deleting CV:', cv);
  }

  uploadCV() {
    console.log('Uploading new CV');
  }
}
