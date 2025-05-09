import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileUpload, faFileDownload, faRobot, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CVService, CV } from '../../../services/cv.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-cv-generator',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FontAwesomeModule
  ],
  template: `
    <div class="cv-generator-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading CV data...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="retryLoading()">Retry</button>
      </div>

      <!-- CV Generator Content -->
      <ng-container *ngIf="!isLoading && !error">
        <!-- CV Upload Section -->
        <mat-card class="cv-section">
          <mat-card-header>
            <mat-card-title>Upload CV</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="upload-container">
              <input
                type="file"
                #fileInput
                (change)="onFileSelected($event)"
                accept=".pdf,.doc,.docx,.txt"
                style="display: none"
              />
              <button
                mat-raised-button
                color="primary"
                (click)="fileInput.click()"
                [disabled]="isUploading"
              >
                <fa-icon [icon]="faFileUpload" class="icon"></fa-icon>
                Choose File
              </button>
              <span class="file-name" *ngIf="selectedFile">
                {{selectedFile.name}}
              </span>
              <button
                mat-raised-button
                color="accent"
                (click)="uploadCV()"
                [disabled]="!selectedFile || isUploading"
              >
                Upload
              </button>
            </div>
            <mat-progress-bar
              *ngIf="isUploading"
              mode="determinate"
              [value]="uploadProgress"
            ></mat-progress-bar>
          </mat-card-content>
        </mat-card>

        <!-- AI CV Generation Section -->
        <mat-card class="cv-section">
          <mat-card-header>
            <mat-card-title>Generate CV with AI</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p class="section-description">
              Let our AI analyze your profile and generate a professional CV tailored to your career goals.
            </p>
            <button
              mat-raised-button
              color="primary"
              (click)="generateAICV()"
              [disabled]="isGenerating"
            >
              <fa-icon [icon]="isGenerating ? faSpinner : faRobot" class="icon" [class.spinning]="isGenerating"></fa-icon>
              {{isGenerating ? 'Generating...' : 'Generate CV'}}
            </button>
          </mat-card-content>
        </mat-card>

        <!-- Current CV Section -->
        <mat-card class="cv-section" *ngIf="currentCV">
          <mat-card-header>
            <mat-card-title>Current CV</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="cv-info">
              <p><strong>File Name:</strong> {{currentCV.fileName}}</p>
              <p><strong>Last Updated:</strong> {{currentCV.updatedAt | date}}</p>
              <div class="cv-actions">
                <button
                  mat-raised-button
                  color="primary"
                  (click)="downloadCV()"
                  [disabled]="isDownloading"
                >
                  <fa-icon [icon]="faFileDownload" class="icon"></fa-icon>
                  Download CV
                </button>
                <button
                  mat-raised-button
                  color="warn"
                  (click)="deleteCV()"
                  [disabled]="isDeleting"
                >
                  Delete CV
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </ng-container>
    </div>
  `,
  styles: [`
    .cv-generator-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 24px;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
    }

    .error-message {
      color: #dc3545;
      font-size: 1.1rem;
    }

    .cv-section {
      margin-bottom: 24px;
    }

    .upload-container {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }

    .file-name {
      flex: 1;
      color: #666;
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .section-description {
      color: #666;
      margin-bottom: 16px;
    }

    .cv-info {
      padding: 16px 0;
    }

    .cv-info p {
      margin: 8px 0;
      color: #666;
    }

    .cv-actions {
      display: flex;
      gap: 16px;
      margin-top: 16px;
    }

    .icon {
      margin-right: 8px;
    }

    .spinning {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class CVGeneratorComponent implements OnInit {
  // Font Awesome icons
  faFileUpload = faFileUpload;
  faFileDownload = faFileDownload;
  faRobot = faRobot;
  faSpinner = faSpinner;

  // Component state
  isLoading = false;
  isUploading = false;
  isGenerating = false;
  isDownloading = false;
  isDeleting = false;
  error: string | null = null;
  uploadProgress = 0;
  selectedFile: File | null = null;
  currentCV: CV | null = null;

  constructor(
    private cvService: CVService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCurrentCV();
  }

  private loadCurrentCV(): void {
    this.isLoading = true;
    const user = this.authService.getCurrentUser();
    if (user) {
      this.cvService.getCV(user.id).subscribe({
        next: (cv) => {
          this.currentCV = cv;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading CV:', error);
          this.error = 'Failed to load CV. Please try again.';
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadCV(): void {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.uploadProgress = 0;

    this.cvService.uploadCV(this.selectedFile).subscribe({
      next: (event) => {
        const progress = this.cvService.getUploadProgress(event);
        if (progress) {
          this.uploadProgress = progress;
        }
      },
      error: (error) => {
        console.error('Error uploading CV:', error);
        this.error = 'Failed to upload CV. Please try again.';
        this.isUploading = false;
      },
      complete: () => {
        this.isUploading = false;
        this.selectedFile = null;
        this.loadCurrentCV();
      }
    });
  }

  generateAICV(): void {
    this.isGenerating = true;
    this.error = null;

    this.cvService.generateAICV().subscribe({
      next: (response) => {
        this.currentCV = {
          id: response.cv.id,
          fileName: response.cv.fileName,
          filePath: response.cv.downloadUrl,
          extractedSkills: [],
          userId: this.authService.getCurrentUser()?.id || '',
          content: response.cv.content,
          downloadUrl: response.cv.downloadUrl,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.isGenerating = false;
      },
      error: (error) => {
        console.error('Error generating CV:', error);
        this.error = 'Failed to generate CV. Please try again.';
        this.isGenerating = false;
      }
    });
  }

  downloadCV(): void {
    if (!this.currentCV) return;

    this.isDownloading = true;
    this.cvService.downloadCV(this.currentCV.id).subscribe({
      next: (blob) => {
        this.cvService.saveFile(blob, this.currentCV!.fileName);
        this.isDownloading = false;
      },
      error: (error) => {
        console.error('Error downloading CV:', error);
        this.error = 'Failed to download CV. Please try again.';
        this.isDownloading = false;
      }
    });
  }

  deleteCV(): void {
    if (!this.currentCV) return;

    this.isDeleting = true;
    this.cvService.deleteCV().subscribe({
      next: () => {
        this.currentCV = null;
        this.isDeleting = false;
      },
      error: (error) => {
        console.error('Error deleting CV:', error);
        this.error = 'Failed to delete CV. Please try again.';
        this.isDeleting = false;
      }
    });
  }

  retryLoading(): void {
    this.error = null;
    this.loadCurrentCV();
  }
} 