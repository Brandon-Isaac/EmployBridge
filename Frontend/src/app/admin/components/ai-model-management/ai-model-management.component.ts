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
  templateUrl: `./ai-model-management.component.html`,
  styleUrl:`./ai-model-management.component.css`,
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