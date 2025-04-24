import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  template: `
    <div class="blog-container">
      <div class="blog-content">
        <h1 class="section-title">Latest Insights</h1>
        <div class="blog-grid" @staggerAnimation>
          <mat-card class="blog-card" *ngFor="let post of blogPosts" @fadeIn>
            <img [src]="post.image" [alt]="post.title">
            <div class="card-content">
              <div class="post-meta">
                <span class="category">{{post.category}}</span>
                <span class="date">{{post.date}}</span>
              </div>
              <h2>{{post.title}}</h2>
              <p>{{post.excerpt}}</p>
              <a [routerLink]="['/blog', post.id]" class="read-more">Read More →</a>
            </div>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .blog-container {
      padding: 4rem 2rem;
      background-color: #f8fafc;
    }
    .blog-content {
      max-width: 1200px;
      margin: 0 auto;
    }
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #1e293b;
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .blog-card {
      overflow: hidden;
      transition: transform 0.3s ease;
      &:hover {
        transform: translateY(-5px);
      }
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .card-content {
        padding: 1.5rem;
      }
      .post-meta {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #64748b;
      }
      .category {
        text-transform: uppercase;
        font-weight: 600;
        color: #2563eb;
      }
      h2 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: #1e293b;
      }
      p {
        color: #64748b;
        margin-bottom: 1.5rem;
      }
      .read-more {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BlogComponent {
  blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Recruitment',
      excerpt: 'Exploring how artificial intelligence is transforming the hiring process and creating better matches between candidates and companies.',
      category: 'Technology',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Building a Strong Employer Brand',
      excerpt: 'Learn how to create an authentic employer brand that attracts top talent and builds lasting relationships with candidates.',
      category: 'HR',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'The Rise of Remote Work',
      excerpt: 'How companies are adapting to the new normal of remote work and what it means for the future of employment.',
      category: 'Trends',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];
} 