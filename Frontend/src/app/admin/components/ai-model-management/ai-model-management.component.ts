import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface AIModel {
  id: string;
  name: string;
  type: string;
  status: 'Active' | 'Training' | 'Inactive' | 'Error';
  trainingProgress: number;
  accuracy: number;
  precision: number;
  recall: number;
  features: string[];
  lastUpdated: Date;
}

@Component({
  selector: 'app-ai-model-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('cardHover', [
      state('normal', style({
        transform: 'translateY(0)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      })),
      state('hovered', style({
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ],
  template: `
    <div class="ai-model-management-container" [@fadeIn]>
      <mat-toolbar class="toolbar">
        <div class="toolbar-left">
          <span class="app-title">AI Model Management</span>
        </div>
        <div class="toolbar-right">
          <button mat-raised-button color="primary" (click)="createModel()">
            <i class="fas fa-plus"></i>
            <span>New Model</span>
          </button>
        </div>
      </mat-toolbar>

      <div class="model-list">
        <mat-card 
          *ngFor="let model of models" 
          class="model-card mat-elevation-z4"
          [@slideInFromRight]
          [@cardHover]="cardState[model.id]"
          (mouseenter)="cardState[model.id] = 'hovered'"
          (mouseleave)="cardState[model.id] = 'normal'"
        >
          <mat-card-header>
            <div class="model-header">
              <div class="model-title">
                <mat-card-title>
                  <i class="fas" 
                    [class.fa-robot]="model.type === 'Recommendation'"
                    [class.fa-brain]="model.type === 'NLP'"
                    [class.fa-chart-line]="model.type === 'Analytics'"></i>
                  {{ model.name }}
                </mat-card-title>
                <mat-card-subtitle>
                  <mat-chip class="type-chip" [ngClass]="model.type.toLowerCase()">
                    {{ model.type }}
                  </mat-chip>
                </mat-card-subtitle>
              </div>
              <div class="model-status-badge">
                <mat-chip class="status-chip" [ngClass]="model.status.toLowerCase()">
                  <i class="fas" 
                    [class.fa-check-circle]="model.status === 'Active'"
                    [class.fa-spinner]="model.status === 'Training'"
                    [class.fa-pause-circle]="model.status === 'Inactive'"
                    [class.fa-exclamation-circle]="model.status === 'Error'"></i>
                  {{ model.status }}
                </mat-chip>
              </div>
            </div>
          </mat-card-header>

          <mat-divider></mat-divider>

          <mat-card-content>
            <div class="model-progress">
              <div class="progress-info">
                <span>Training Progress</span>
                <span>{{ model.trainingProgress }}%</span>
              </div>
              <mat-progress-bar
                mode="determinate"
                [value]="model.trainingProgress"
                [color]="getProgressColor(model)"
              ></mat-progress-bar>
            </div>

            <div class="model-metrics">
              <div class="metric">
                <div class="metric-icon">
                  <i class="fas fa-bullseye"></i>
                </div>
                <div class="metric-value">
                  <span class="metric-label">Accuracy</span>
                  <span class="metric-number">{{ model.accuracy }}%</span>
                </div>
              </div>
              <div class="metric">
                <div class="metric-icon">
                  <i class="fas fa-crosshairs"></i>
                </div>
                <div class="metric-value">
                  <span class="metric-label">Precision</span>
                  <span class="metric-number">{{ model.precision }}%</span>
                </div>
              </div>
              <div class="metric">
                <div class="metric-icon">
                  <i class="fas fa-undo"></i>
                </div>
                <div class="metric-value">
                  <span class="metric-label">Recall</span>
                  <span class="metric-number">{{ model.recall }}%</span>
                </div>
              </div>
            </div>

            <div class="model-features">
              <h4>Features</h4>
              <mat-chip-set>
                <mat-chip *ngFor="let feature of model.features" class="feature-chip">
                  <i class="fas fa-tag"></i>
                  {{ feature }}
                </mat-chip>
              </mat-chip-set>
            </div>

            <div class="last-updated">
              <i class="fas fa-clock"></i>
              Last updated: {{ model.lastUpdated | date: 'medium' }}
            </div>
          </mat-card-content>

          <mat-divider></mat-divider>

          <mat-card-actions>
            <button mat-button color="primary" (click)="retrainModel(model)">
              <i class="fas fa-sync-alt"></i>
              <span>Retrain</span>
            </button>
            <button mat-button color="accent" (click)="deployModel(model)" [disabled]="model.status !== 'Active'">
              <i class="fas fa-rocket"></i>
              <span>Deploy</span>
            </button>
            <button mat-button color="warn" (click)="deleteModel(model)">
              <i class="fas fa-trash"></i>
              <span>Delete</span>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        --primary: #4e54c8;
        --primary-light: #8f94fb;
        --primary-dark: #363795;
        --accent: #4caf50;
        --accent-light: #81c784;
        --text-primary: #333;
        --text-secondary: #666;
        --background-light: #f5f7fa;
        --card-bg: #ffffff;
        --success: #00c853;
        --warning: #ffd600;
        --danger: #f44336;
        --info: #2196f3;
      }

      .ai-model-management-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 24px;
        background-color: var(--background-light);
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        margin-bottom: 24px;
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .model-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 24px;
      }

      .model-card {
        background-color: var(--card-bg);
        border-radius: 8px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .model-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
      }

      .model-title {
        flex: 1;
      }

      .model-title i {
        color: var(--primary);
        margin-right: 8px;
      }

      .model-status-badge {
        margin-left: 16px;
      }

      .type-chip {
        font-size: 0.75rem;
        padding: 2px 8px;
        margin-top: 4px;
      }

      .type-chip.recommendation {
        background-color: #e3f2fd;
        color: #1976d2;
      }

      .type-chip.nlp {
        background-color: #e8f5e9;
        color: #2e7d32;
      }

      .type-chip.analytics {
        background-color: #fff8e1;
        color: #ff8f00;
      }

      .status-chip {
        font-size: 0.75rem;
        padding: 4px 8px;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .status-chip i {
        font-size: 14px;
      }

      .status-chip.active {
        background-color: #e8f5e9;
        color: #2e7d32;
      }

      .status-chip.training {
        background-color: #fff8e1;
        color: #ff8f00;
      }

      .status-chip.inactive {
        background-color: #e0e0e0;
        color: #616161;
      }

      .status-chip.error {
        background-color: #ffebee;
        color: #c62828;
      }

      .model-progress {
        margin: 16px 0;
      }

      .progress-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        font-size: 0.875rem;
        color: var(--text-secondary);
      }

      .model-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin: 16px 0;
      }

      .metric {
        background-color: var(--background-light);
        border-radius: 8px;
        padding: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .metric-icon {
        background-color: var(--primary-light);
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .metric-icon i {
        font-size: 14px;
      }

      .metric-value {
        display: flex;
        flex-direction: column;
      }

      .metric-label {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .metric-number {
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--primary);
      }

      .model-features {
        margin: 16px 0;
      }

      .model-features h4 {
        margin-bottom: 8px;
        font-size: 0.875rem;
        color: var(--text-secondary);
      }

      .feature-chip {
        margin: 4px;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .feature-chip i {
        font-size: 12px;
        color: var(--primary-light);
      }

      .last-updated {
        font-size: 0.75rem;
        color: var(--text-secondary);
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 8px;
      }

      .last-updated i {
        font-size: 14px;
      }

      mat-card-actions {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        margin-top: auto;
      }

      mat-card-actions button {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.875rem;
      }

      @media (max-width: 768px) {
        .model-list {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .toolbar {
          flex-direction: column;
          height: auto;
          padding: 12px;
        }

        .toolbar-left, .toolbar-right {
          width: 100%;
          justify-content: center;
          margin: 4px 0;
        }
      }

      @media (max-width: 480px) {
        .ai-model-management-container {
          padding: 16px 8px;
        }

        .model-list {
          grid-template-columns: 1fr;
        }

        .model-metrics {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AIModelManagementComponent implements OnInit {
  models: AIModel[] = [
    {
      id: '1',
      name: 'Job Matching Model',
      type: 'Recommendation',
      status: 'Active',
      trainingProgress: 100,
      accuracy: 92.5,
      precision: 89.3,
      recall: 91.8,
      features: ['Skills', 'Experience', 'Education', 'Location'],
      lastUpdated: new Date('2024-03-15'),
    },
    {
      id: '2',
      name: 'Resume Analysis Model',
      type: 'NLP',
      status: 'Training',
      trainingProgress: 75,
      accuracy: 88.3,
      precision: 85.7,
      recall: 87.2,
      features: ['Text Analysis', 'Keyword Extraction', 'Format Detection'],
      lastUpdated: new Date('2024-03-10'),
    },
    {
      id: '3',
      name: 'Salary Prediction Model',
      type: 'Analytics',
      status: 'Inactive',
      trainingProgress: 100,
      accuracy: 85.2,
      precision: 83.1,
      recall: 84.7,
      features: ['Experience', 'Location', 'Industry', 'Education'],
      lastUpdated: new Date('2024-02-28'),
    },
    {
      id: '4',
      name: 'Candidate Ranking Model',
      type: 'Recommendation',
      status: 'Error',
      trainingProgress: 42,
      accuracy: 65.8,
      precision: 62.3,
      recall: 67.1,
      features: ['Skills Match', 'Experience Level', 'Education Score'],
      lastUpdated: new Date('2024-03-18'),
    },
  ];

  cardState: { [key: string]: string } = {};

  constructor() {}

  ngOnInit(): void {
    // Initialize card states
    this.models.forEach(model => {
      this.cardState[model.id] = 'normal';
    });
  }

  getProgressColor(model: AIModel): string {
    if (model.status === 'Error') return 'warn';
    if (model.status === 'Training') return 'accent';
    if (model.status === 'Active') return 'primary';
    return '';
  }

  createModel(): void {
    console.log('Create new model');
    // Implement create functionality
  }

  retrainModel(model: AIModel): void {
    console.log('Retraining model:', model);
    // Implement retrain functionality
  }

  deployModel(model: AIModel): void {
    console.log('Deploying model:', model);
    // Implement deploy functionality
  }

  deleteModel(model: AIModel): void {
    console.log('Deleting model:', model);
    // Implement delete functionality
  }
}