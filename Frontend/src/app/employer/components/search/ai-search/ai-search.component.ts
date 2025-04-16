import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

interface SearchResult {
  id: number;
  name: string;
  title: string;
  skills: string[];
  experience: string;
  location: string;
  matchScore: number;
  summary: string;
}

@Component({
  selector: 'app-ai-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatSliderModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  template: `
    <div class="search-container">
      <mat-card class="search-card">
        <div class="card-header-accent"></div>
        <mat-card-header>
          <div class="header-icon">
            <i class="fas fa-user-search"></i>
          </div>
          <mat-card-title>AI-Powered Candidate Search</mat-card-title>
          <mat-card-subtitle>Find the perfect candidates using natural language</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <mat-form-field class="full-width" appearance="outline">
            <mat-label>Job Description or Requirements</mat-label>
            <textarea
              matInput
              [(ngModel)]="searchQuery"
              rows="4"
              placeholder="Describe the ideal candidate you're looking for..."
            ></textarea>
            <i class="fas fa-file-alt" matSuffix></i>
          </mat-form-field>

          <mat-expansion-panel class="custom-expansion-panel">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <i class="fas fa-sliders-h panel-icon"></i>
                Advanced Filters
              </mat-panel-title>
            </mat-expansion-panel-header>

            <div class="filters-grid">
              <mat-form-field appearance="outline">
                <mat-label>Required Skills</mat-label>
                <input
                  matInput
                  placeholder="Add skills and press Enter"
                  #skillInput
                  (keyup.enter)="addSkill(skillInput.value); skillInput.value = ''"
                />
                <i class="fas fa-plus-circle" matSuffix></i>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Location</mat-label>
                <input
                  matInput
                  [(ngModel)]="location"
                  placeholder="City, State or Remote"
                />
                <i class="fas fa-map-marker-alt" matSuffix></i>
              </mat-form-field>

              <div class="experience-filter">
                <label>Minimum Experience (years)</label>
                <mat-slider
                  min="0"
                  max="15"
                  step="1"
                  discrete
                  [displayWith]="formatLabel"
                  class="custom-slider"
                >
                  <input matSliderThumb [(ngModel)]="minExperience" />
                </mat-slider>
              </div>
            </div>

            <mat-chip-set #chipSet class="skills-chip-set">
              <mat-chip
                *ngFor="let skill of requiredSkills"
                (removed)="removeSkill(skill)"
                class="skill-chip"
              >
                {{ skill }}
                <button matChipRemove>
                  <i class="fas fa-times"></i>
                </button>
              </mat-chip>
            </mat-chip-set>
          </mat-expansion-panel>

          <div class="search-actions">
            <button
              mat-raised-button
              color="primary"
              class="search-button"
              (click)="search()"
              [disabled]="!searchQuery"
            >
              <i class="fas fa-search"></i>
              Search Candidates
            </button>
          </div>
        </mat-card-content>
      </mat-card>

      <div class="results-section" *ngIf="searchResults.length > 0">
        <div class="results-header">
          <h2>Search Results</h2>
          <span class="results-count">{{ searchResults.length }} candidates found</span>
        </div>
        
        <div class="results-grid">
          <mat-card
            class="result-card"
            *ngFor="let result of searchResults"
            [class.high-match]="result.matchScore >= 85"
          >
            <div class="match-indicator" [style.height.%]="result.matchScore"></div>
            
            <mat-card-header>
              <div class="avatar-placeholder">{{ result.name.substring(0, 1) }}</div>
              <div class="header-content">
                <mat-card-title>{{ result.name }}</mat-card-title>
                <mat-card-subtitle>{{ result.title }}</mat-card-subtitle>
              </div>
              <div class="match-score" [class.high-score]="result.matchScore >= 85">
                <div class="score-circle">
                  <span class="score-value">{{ result.matchScore }}%</span>
                </div>
                <div class="score-label">Match</div>
              </div>
            </mat-card-header>

            <mat-divider></mat-divider>

            <mat-card-content>
              <p class="summary">{{ result.summary }}</p>

              <div class="details">
                <div class="detail-item" matTooltip="Experience">
                  <i class="fas fa-briefcase"></i>
                  <span>{{ result.experience }}</span>
                </div>
                <div class="detail-item" matTooltip="Location">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ result.location }}</span>
                </div>
              </div>

              <div class="skills-section">
                <mat-chip-set>
                  <mat-chip
                    *ngFor="let skill of result.skills"
                    class="skill-result-chip"
                  >
                    {{ skill }}
                  </mat-chip>
                </mat-chip-set>
              </div>
            </mat-card-content>

            <mat-card-actions>
              <button mat-button class="action-button view-button">
                <i class="fas fa-eye"></i>
                View Profile
              </button>
              <button mat-button class="action-button contact-button">
                <i class="fas fa-envelope"></i>
                Contact
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        --primary-green: #2e7d32; 
        --light-green: #4caf50;
        --pale-green: #e8f5e9;
        --teal-accent: #009688;
        --blue-accent: #0288d1;
        --dark-text: #263238;
        --medium-text: #546e7a;
        --light-text: #78909c;
        --card-bg: #ffffff;
        --hover-bg: #f5f9f5;
      }

      .search-container {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
        background-color: #f8f9fa;
        min-height: 100vh;
      }

      .search-card {
        margin-bottom: 32px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        position: relative;
      }

      .card-header-accent {
        height: 4px;
        background: linear-gradient(90deg, var(--light-green), var(--teal-accent));
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

      mat-card-header {
        padding: 24px 24px 0;
        position: relative;
      }

      .header-icon {
        background-color: var(--primary-green);
        color: white;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }

      .header-icon i {
        font-size: 28px;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      mat-card-title {
        font-size: 22px;
        font-weight: 500;
        color: var(--dark-text);
        margin-bottom: 8px;
      }

      mat-card-subtitle {
        color: var(--medium-text);
        font-size: 14px;
      }

      .full-width {
        width: 100%;
        margin-bottom: 20px;
      }

      .custom-expansion-panel {
        margin-bottom: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: none !important;
      }

      .panel-icon {
        color: var(--primary-green);
        margin-right: 8px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .filters-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin: 8px 0 16px;
      }

      .experience-filter {
        grid-column: 1 / -1;
        padding: 8px 0;
      }

      .experience-filter label {
        display: block;
        margin-bottom: 8px;
        color: var(--medium-text);
      }

      .custom-slider {
        width: 100%;
      }

      .search-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 24px;
      }

      .search-button {
        background-color: var(--primary-green);
        padding: 0 24px;
        height: 48px;
        border-radius: 24px;
        font-weight: 500;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
      }

      .search-button i {
        margin-right: 8px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .search-button:hover:not([disabled]) {
        background-color: var(--teal-accent);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
      }

      .search-button:disabled {
        background-color: #bdbdbd;
      }

      .results-section {
        margin-top: 40px;
      }

      .results-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        padding-bottom: 12px;
        border-bottom: 2px solid var(--pale-green);
      }

      .results-header h2 {
        color: var(--dark-text);
        font-size: 22px;
        font-weight: 500;
        margin: 0;
      }

      .results-count {
        color: var(--medium-text);
        font-size: 14px;
        background-color: var(--pale-green);
        padding: 4px 12px;
        border-radius: 16px;
      }

      .results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        gap: 24px;
      }

      .result-card {
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
      }

      .result-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }

      .match-indicator {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(to top, var(--primary-green), var(--teal-accent));
        opacity: 0.7;
      }

      .result-card.high-match {
        border: none;
        box-shadow: 0 6px 18px rgba(76, 175, 80, 0.25);
      }

      .result-card.high-match::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--light-green), var(--teal-accent));
      }

      .avatar-placeholder {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--teal-accent);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 500;
        margin-right: 16px;
      }

      .header-content {
        flex: 1;
      }

      .match-score {
        text-align: center;
        margin-left: 16px;
      }

      .score-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--pale-green);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        border: 2px solid var(--teal-accent);
      }

      .high-score .score-circle {
        background-color: rgba(76, 175, 80, 0.15);
        border: 2px solid var(--light-green);
      }

      .score-value {
        font-size: 18px;
        font-weight: 700;
        color: var(--teal-accent);
      }

      .high-score .score-value {
        color: var(--primary-green);
      }

      .score-label {
        font-size: 12px;
        color: var(--medium-text);
      }

      mat-card-content {
        padding: 16px;
      }

      .summary {
        margin: 16px 0;
        color: var(--dark-text);
        line-height: 1.5;
      }

      .details {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 16px;
      }

      .detail-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--medium-text);
        padding: 6px 12px;
        background-color: #f5f5f5;
        border-radius: 16px;
      }

      .detail-item i {
        font-size: 18px;
        width: 18px;
        height: 18px;
        color: var(--teal-accent);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .skills-section {
        margin: 20px 0 16px;
      }

      .skill-chip {
        background-color: var(--pale-green);
        color: var(--primary-green);
      }

      .skill-result-chip {
        background-color: rgba(0, 150, 136, 0.1);
        color: var(--teal-accent);
        margin: 4px;
      }

      mat-card-actions {
        padding: 8px 16px 16px;
        display: flex;
        justify-content: space-between;
      }

      .action-button {
        flex: 1;
        margin: 0 8px;
        border-radius: 4px;
        height: 40px;
      }

      .action-button i {
        margin-right: 8px;
        font-size: 18px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .view-button {
        color: var(--teal-accent);
      }

      .contact-button {
        color: var(--blue-accent);
      }

      .view-button:hover {
        background-color: rgba(0, 150, 136, 0.1);
      }

      .contact-button:hover {
        background-color: rgba(2, 136, 209, 0.1);
      }

      mat-divider {
        margin: 8px 0;
      }

      .skills-chip-set {
        margin-top: 16px;
      }

      @media (max-width: 768px) {
        .search-container {
          padding: 16px;
        }

        .filters-grid {
          grid-template-columns: 1fr;
        }

        .results-grid {
          grid-template-columns: 1fr;
        }

        .match-score {
          position: absolute;
          top: 16px;
          right: 16px;
        }

        .score-circle {
          width: 50px;
          height: 50px;
        }

        .score-value {
          font-size: 16px;
        }
      }
    `,
  ],
})
export class AiSearchComponent {
  searchQuery: string = '';
  requiredSkills: string[] = [];
  location: string = '';
  minExperience: number = 0;

  searchResults: SearchResult[] = [];

  formatLabel(value: number): string {
    return `${value}+ years`;
  }

  addSkill(skill: string): void {
    if (skill.trim() && !this.requiredSkills.includes(skill)) {
      this.requiredSkills.push(skill.trim());
    }
  }

  removeSkill(skill: string): void {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }

  search(): void {
    // Simulated search results
    this.searchResults = [
      {
        id: 1,
        name: 'John Smith',
        title: 'Senior Software Engineer',
        skills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js'],
        experience: '8 years',
        location: 'San Francisco, CA',
        matchScore: 92,
        summary:
          'Experienced software engineer with a strong background in full-stack development and team leadership.',
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        title: 'Full Stack Developer',
        skills: ['React', 'Node.js', 'Python', 'AWS'],
        experience: '5 years',
        location: 'Remote',
        matchScore: 85,
        summary:
          'Full stack developer with expertise in modern web technologies and cloud platforms.',
      },
      {
        id: 3,
        name: 'Michael Chen',
        title: 'Frontend Developer',
        skills: ['JavaScript', 'Vue.js', 'CSS', 'UI/UX'],
        experience: '3 years',
        location: 'New York, NY',
        matchScore: 78,
        summary:
          'Frontend specialist focused on creating responsive and accessible web applications.',
      },
    ];
  }
}