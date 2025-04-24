import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="features-container">
      <h1 class="section-title">Our Features</h1>
      <div class="features-grid" @featureAnimation>
        <mat-card class="feature-card" *ngFor="let feature of features">
          <mat-card-header>
            <div class="feature-icon">{{feature.icon}}</div>
            <mat-card-title>{{feature.title}}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>{{feature.description}}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .features-container {
      padding: 4rem 2rem;
      background-color: #f8fafc;
    }
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #1e293b;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .feature-card {
      padding: 2rem;
      height: 100%;
      transition: transform 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
    }
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #2563eb;
    }
    .feature-card mat-card-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  `],
  animations: [
    trigger('featureAnimation', [
      transition('* => *', [
        query('.feature-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class FeaturesComponent {
  features = [
    {
      icon: '🤖',
      title: 'AI-Powered Matching',
      description: 'Our advanced AI algorithms match job seekers with the perfect opportunities based on skills, experience, and preferences.'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Get detailed insights into your job search or hiring process with our comprehensive analytics dashboard.'
    },
    {
      icon: '🎯',
      title: 'Skill Development',
      description: 'Access personalized learning paths and resources to enhance your skills and stay competitive in the job market.'
    },
    {
      icon: '💼',
      title: 'Career Management',
      description: 'Manage your professional profile, track applications, and organize your job search all in one place.'
    }
  ];
} 