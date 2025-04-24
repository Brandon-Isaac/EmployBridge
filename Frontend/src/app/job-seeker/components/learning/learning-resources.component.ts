import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { LearningResourcesService, LearningResource } from '../../services/learning-resources.service';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule
  ],
  template: `
    <div class="learning-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Learning Resources</mat-card-title>
          <mat-card-subtitle>Enhance your skills and knowledge</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <div class="resources-list">
            <mat-card class="resource-card" *ngFor="let resource of resources">
              <div class="resource-content">
                <div class="resource-main">
                  <div class="resource-title">{{ resource.title }}</div>
                  <div class="resource-description">{{ resource.description }}</div>
                </div>
                <div class="resource-details">
                  <div class="resource-type">
                    <i class="fas fa-{{ resource.type === 'course' ? 'book' : resource.type === 'article' ? 'file-alt' : 'video' }}"></i>
                    {{ resource.type }}
                  </div>
                  <div class="resource-duration">
                    <i class="fas fa-clock"></i>
                    {{ resource.duration }}
                  </div>
                  <div class="resource-level">
                    <i class="fas fa-signal"></i>
                    {{ resource.level }}
                  </div>
                </div>
                <button mat-icon-button color="primary" (click)="openResource(resource)">
                  <i class="fas fa-play-circle"></i>
                </button>
              </div>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .learning-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .resources-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .resource-card {
      margin: 8px 0;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .resource-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .resource-content {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 16px;
      padding: 16px;
    }

    .resource-main {
      flex: 1;
    }

    .resource-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .resource-description {
      font-size: 14px;
      color: #666;
    }

    .resource-details {
      display: flex;
      align-items: center;
      gap: 16px;
      min-width: 300px;
    }

    .resource-type,
    .resource-duration,
    .resource-level {
      font-size: 12px;
      color: #666;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    mat-icon-button {
      margin-left: auto;
    }

    i {
      font-size: 14px;
    }
  `]
})
export class LearningResourcesComponent implements OnInit {
  resources: LearningResource[] = [];

  constructor(private learningResourcesService: LearningResourcesService) {}

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    this.learningResourcesService.getResources().subscribe({
      next: (resources) => {
        this.resources = resources;
      },
      error: (error) => {
        console.error('Error loading resources:', error);
        // You might want to show an error message to the user here
      }
    });
  }

  openResource(resource: LearningResource) {
    window.open(resource.url, '_blank');
  }
} 