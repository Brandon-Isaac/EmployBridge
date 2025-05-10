import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-employer-applications',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule
  ],
  template: `
    <div class="applications-container">
      <mat-card class="applications-card">
        <mat-card-header>
          <mat-card-title>Job Applications</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="applications-content">
            <mat-tab-group>
              <mat-tab label="New Applications">
                <!-- New applications content -->
                <p>New applications will be displayed here.</p>
              </mat-tab>
              <mat-tab label="Under Review">
                <!-- Under review applications content -->
                <p>Applications under review will be displayed here.</p>
              </mat-tab>
              <mat-tab label="Interviewed">
                <!-- Interviewed applications content -->
                <p>Interviewed applications will be displayed here.</p>
              </mat-tab>
            </mat-tab-group>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .applications-container {
      padding: 20px;
    }
    .applications-card {
      max-width: 1200px;
      margin: 0 auto;
    }
    .applications-content {
      padding: 20px 0;
    }
  `]
})
export class ApplicationsComponent {} 