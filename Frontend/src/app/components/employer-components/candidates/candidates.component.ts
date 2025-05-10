import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-employer-candidates',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  template: `
    <div class="candidates-container">
      <mat-card class="candidates-card">
        <mat-card-header>
          <mat-card-title>Candidate List</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="candidates-content">
            <!-- Candidates table will go here -->
            <p>List of candidates will be displayed here.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .candidates-container {
      padding: 20px;
    }
    .candidates-card {
      max-width: 1200px;
      margin: 0 auto;
    }
    .candidates-content {
      padding: 20px 0;
    }
  `]
})
export class CandidatesComponent {} 