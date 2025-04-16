import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface LearningResource {
  title: string;
  description: string;
  type: 'course' | 'article' | 'video';
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  template: `
    <div class="learning-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Learning Resources</mat-card-title>
          <mat-card-subtitle>Enhance your skills and knowledge</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <mat-list>
            <mat-list-item *ngFor="let resource of resources">
              <div matListItemTitle>{{ resource.title }}</div>
              <div matListItemLine>{{ resource.description }}</div>
              <div matListItemMeta>
                <span class="resource-type">{{ resource.type }}</span>
                <span class="resource-duration">{{ resource.duration }}</span>
                <span class="resource-level">{{ resource.level }}</span>
              </div>
              <button mat-icon-button color="primary">
                <mat-icon>play_circle</mat-icon>
              </button>
            </mat-list-item>
          </mat-list>
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

    mat-list-item {
      height: auto !important;
      padding: 16px 0;
    }

    .resource-type,
    .resource-duration,
    .resource-level {
      margin-right: 16px;
      font-size: 12px;
      color: #666;
    }

    mat-icon-button {
      margin-left: auto;
    }
  `]
})
export class LearningResourcesComponent {
  resources: LearningResource[] = [
    {
      title: 'Angular Fundamentals',
      description: 'Learn the basics of Angular framework',
      type: 'course',
      duration: '4 hours',
      level: 'beginner'
    },
    {
      title: 'Advanced TypeScript',
      description: 'Deep dive into TypeScript features',
      type: 'course',
      duration: '6 hours',
      level: 'advanced'
    },
    {
      title: 'Best Practices in Web Development',
      description: 'Industry standards and best practices',
      type: 'article',
      duration: '30 min',
      level: 'intermediate'
    }
  ];
} 