import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="about-container">
      <div class="about-content" @slideIn>
        <h1 class="section-title">About Us</h1>
        <div class="about-grid">
          <mat-card class="about-card">
            <h2>Our Mission</h2>
            <p>We're revolutionizing the job search and hiring process by leveraging cutting-edge AI technology to create meaningful connections between talent and opportunity.</p>
          </mat-card>
          <mat-card class="about-card">
            <h2>Our Vision</h2>
            <p>To become the world's most trusted platform for AI-powered career development and talent acquisition, making the job market more efficient and equitable for everyone.</p>
          </mat-card>
        </div>
        <div class="team-section" @fadeIn>
          <h2>Our Team</h2>
          <div class="team-grid">
            <div class="team-member" *ngFor="let member of team">
              <img [src]="member.image" [alt]="member.name">
              <h3>{{member.name}}</h3>
              <p>{{member.role}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 4rem 2rem;
      background-color: #ffffff;
    }
    .about-content {
      max-width: 1200px;
      margin: 0 auto;
    }
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #1e293b;
    }
    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .about-card {
      padding: 2rem;
      h2 {
        color: #2563eb;
        margin-bottom: 1rem;
      }
    }
    .team-section {
      text-align: center;
      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: #1e293b;
      }
    }
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    .team-member {
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
      }
      h3 {
        color: #1e293b;
        margin-bottom: 0.5rem;
      }
      p {
        color: #64748b;
      }
    }
  `],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {
  team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of AI',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Product Lead',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];
} 