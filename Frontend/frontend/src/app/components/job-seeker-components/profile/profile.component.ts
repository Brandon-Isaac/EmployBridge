import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="profile-container">
      <!-- Profile Header -->
      <mat-card class="profile-header">
        <div class="profile-cover"></div>
        <div class="profile-info">
          <div class="profile-avatar">
            <img [src]="user.avatar" alt="Profile Picture">
          </div>
          <div class="profile-details">
            <h1>{{user.name}}</h1>
            <p class="profile-title">{{user.title}}</p>
            <div class="profile-stats">
              <div class="stat">
                <span class="stat-value">{{user.matchScore}}%</span>
                <span class="stat-label">Match Score</span>
              </div>
              <div class="stat">
                <span class="stat-value">{{user.profileCompletion}}%</span>
                <span class="stat-label">Profile Completion</span>
              </div>
            </div>
          </div>
        </div>
      </mat-card>

      <!-- Profile Content -->
      <div class="profile-content">
        <!-- Skills Section -->
        <mat-card class="profile-section">
          <mat-card-header>
            <mat-card-title>Skills</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="skills-container">
              <div class="skill-tag" *ngFor="let skill of user.skills">
                {{skill}}
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Experience Section -->
        <mat-card class="profile-section">
          <mat-card-header>
            <mat-card-title>Experience</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="experience-item" *ngFor="let exp of user.experience">
              <h3>{{exp.title}}</h3>
              <p class="company">{{exp.company}}</p>
              <p class="duration">{{exp.duration}}</p>
              <p class="description">{{exp.description}}</p>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Education Section -->
        <mat-card class="profile-section">
          <mat-card-header>
            <mat-card-title>Education</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="education-item" *ngFor="let edu of user.education">
              <h3>{{edu.degree}}</h3>
              <p class="institution">{{edu.institution}}</p>
              <p class="duration">{{edu.duration}}</p>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Applications Section -->
        <mat-card class="profile-section">
          <mat-card-header>
            <mat-card-title>Recent Applications</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="application-item" *ngFor="let app of user.applications">
              <div class="application-info">
                <h3>{{app.position}}</h3>
                <p class="company">{{app.company}}</p>
                <p class="status" [class]="app.status.toLowerCase()">{{app.status}}</p>
              </div>
              <div class="application-date">
                {{app.date}}
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    .profile-header {
      position: relative;
      margin-bottom: 24px;
      overflow: hidden;
    }

    .profile-cover {
      height: 200px;
      background: linear-gradient(135deg, #3498db, #2980b9);
    }

    .profile-info {
      padding: 24px;
      display: flex;
      align-items: flex-end;
      margin-top: -60px;
    }

    .profile-avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid white;
      overflow: hidden;
      margin-right: 24px;
    }

    .profile-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-details {
      flex: 1;
    }

    .profile-details h1 {
      margin: 0;
      color: #2c3e50;
    }

    .profile-title {
      color: #666;
      margin: 8px 0;
    }

    .profile-stats {
      display: flex;
      gap: 24px;
      margin-top: 16px;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 500;
      color: #3498db;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
    }

    .profile-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .profile-section {
      height: 100%;
    }

    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      background: rgba(52, 152, 219, 0.1);
      color: #3498db;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.9rem;
    }

    .experience-item, .education-item, .application-item {
      padding: 16px 0;
      border-bottom: 1px solid #eee;
    }

    .experience-item:last-child, .education-item:last-child, .application-item:last-child {
      border-bottom: none;
    }

    .company, .institution {
      color: #666;
      margin: 4px 0;
    }

    .duration {
      color: #999;
      font-size: 0.9rem;
    }

    .description {
      margin-top: 8px;
      color: #666;
    }

    .application-info {
      flex: 1;
    }

    .application-date {
      color: #999;
      font-size: 0.9rem;
    }

    .status {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
      margin-top: 4px;
    }

    .status.pending {
      background: #fff3cd;
      color: #856404;
    }

    .status.accepted {
      background: #d4edda;
      color: #155724;
    }

    .status.rejected {
      background: #f8d7da;
      color: #721c24;
    }
  `]
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'John Doe',
    title: 'Software Developer',
    avatar: 'assets/default-avatar.png',
    matchScore: 85,
    profileCompletion: 75,
    skills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'Python', 'React'],
    experience: [
      {
        title: 'Senior Software Developer',
        company: 'Tech Corp',
        duration: '2020 - Present',
        description: 'Leading development of enterprise applications using Angular and Node.js'
      },
      {
        title: 'Software Developer',
        company: 'Web Solutions Inc',
        duration: '2018 - 2020',
        description: 'Developed and maintained web applications using React and Python'
      }
    ],
    education: [
      {
        degree: 'Master of Computer Science',
        institution: 'University of Technology',
        duration: '2016 - 2018'
      },
      {
        degree: 'Bachelor of Computer Science',
        institution: 'State University',
        duration: '2012 - 2016'
      }
    ],
    applications: [
      {
        position: 'Senior Frontend Developer',
        company: 'Tech Solutions',
        status: 'Pending',
        date: '2024-03-15'
      },
      {
        position: 'Full Stack Developer',
        company: 'Digital Innovations',
        status: 'Accepted',
        date: '2024-03-10'
      },
      {
        position: 'Software Engineer',
        company: 'Global Tech',
        status: 'Rejected',
        date: '2024-03-05'
      }
    ]
  };

  constructor() {}

  ngOnInit(): void {}
} 