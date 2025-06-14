// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// // import { NgChartjsModule } from 'ng2-charts';
// import { Chart, ChartConfiguration, ChartType } from 'chart.js';
// import { AnalyticsService } from '../../../services/analytics.service';

// interface AnalyticsData {
//   totalUsers: number;
//   userTypes: {
//     jobSeekers: number;
//     employers: number;
//     admins: number;
//   };
//   totalGenerations: number;
//   generationsByType: {
//     cv: number;
//     coverLetter: number;
//     resume: number;
//   };
//   totalCVs: number;
//   cvsByStatus: {
//     draft: number;
//     published: number;
//     archived: number;
//   };
// }

// @Component({
//   selector: 'app-analytics',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatCardModule,
//     MatIconModule,
//     MatProgressSpinnerModule,
//     // NgChartjsModule
//   ],
//   template: `
//     <div class="analytics-container">
//       <div class="header">
//         <h2>System Analytics</h2>
//         <button mat-raised-button color="primary" (click)="refreshData()">
//           <mat-icon>refresh</mat-icon>
//           Refresh
//         </button>
//       </div>

//       <!-- Loading State -->
//       <div *ngIf="loading" class="loading-container">
//         <mat-spinner></mat-spinner>
//         <p>Loading analytics data...</p>
//       </div>

//       <!-- Error State -->
//       <div *ngIf="error" class="error-container">
//         <mat-icon color="warn">error</mat-icon>
//         <p>{{ error }}</p>
//         <button mat-raised-button color="primary" (click)="refreshData()">
//           Try Again
//         </button>
//       </div>

//       <!-- Analytics Content -->
//       <div *ngIf="!loading && !error" class="analytics-content">
//         <!-- Summary Cards -->
//         <div class="summary-cards">
//           <mat-card class="summary-card">
//             <mat-card-content>
//               <div class="card-icon">
//                 <mat-icon>people</mat-icon>
//               </div>
//               <div class="card-info">
//                 <h3>Total Users</h3>
//                 <p class="number">{{ analyticsData?.totalUsers || 0 }}</p>
//               </div>
//             </mat-card-content>
//           </mat-card>

//           <mat-card class="summary-card">
//             <mat-card-content>
//               <div class="card-icon">
//                 <mat-icon>description</mat-icon>
//               </div>
//               <div class="card-info">
//                 <h3>Total Generations</h3>
//                 <p class="number">{{ analyticsData?.totalGenerations || 0 }}</p>
//               </div>
//             </mat-card-content>
//           </mat-card>

//           <mat-card class="summary-card">
//             <mat-card-content>
//               <div class="card-icon">
//                 <mat-icon>article</mat-icon>
//               </div>
//               <div class="card-info">
//                 <h3>Total CVs</h3>
//                 <p class="number">{{ analyticsData?.totalCVs || 0 }}</p>
//               </div>
//             </mat-card-content>
//           </mat-card>
//         </div>

//         <!-- Charts Section -->
//         <div class="charts-grid">
//           <!-- User Types Chart -->
//           <mat-card class="chart-card">
//             <mat-card-header>
//               <mat-card-title>User Distribution</mat-card-title>
//             </mat-card-header>
//             <mat-card-content>
//               <canvas baseChart
//                 [data]="userTypesChartData"
//                 [options]="pieChartOptions"
//                 [type]="pieChartType">
//               </canvas>
//             </mat-card-content>
//           </mat-card>

//           <!-- Generation Types Chart -->
//           <mat-card class="chart-card">
//             <mat-card-header>
//               <mat-card-title>Generation Types</mat-card-title>
//             </mat-card-header>
//             <mat-card-content>
//               <canvas baseChart
//                 [data]="generationTypesChartData"
//                 [options]="pieChartOptions"
//                 [type]="pieChartType">
//               </canvas>
//             </mat-card-content>
//           </mat-card>

//           <!-- CV Status Chart -->
//           <mat-card class="chart-card">
//             <mat-card-header>
//               <mat-card-title>CV Status Distribution</mat-card-title>
//             </mat-card-header>
//             <mat-card-content>
//               <canvas baseChart
//                 [data]="cvStatusChartData"
//                 [options]="pieChartOptions"
//                 [type]="pieChartType">
//               </canvas>
//             </mat-card-content>
//           </mat-card>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .analytics-container {
//       padding: 20px;
//       max-width: 1200px;
//       margin: 0 auto;
//     }

//     .header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 20px;
//     }

//     .loading-container, .error-container {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       min-height: 400px;
//       gap: 16px;
//     }

//     .error-container {
//       color: #f44336;
//     }

//     .summary-cards {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//       gap: 20px;
//       margin-bottom: 20px;
//     }

//     .summary-card {
//       height: 100%;
//     }

//     .summary-card mat-card-content {
//       display: flex;
//       align-items: center;
//       gap: 16px;
//       padding: 16px;
//     }

//     .card-icon {
//       background: #f5f5f5;
//       border-radius: 50%;
//       width: 48px;
//       height: 48px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }

//     .card-icon mat-icon {
//       font-size: 24px;
//       width: 24px;
//       height: 24px;
//     }

//     .card-info h3 {
//       margin: 0;
//       font-size: 16px;
//       color: #666;
//     }

//     .card-info .number {
//       margin: 4px 0 0;
//       font-size: 24px;
//       font-weight: 500;
//     }

//     .charts-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//       gap: 20px;
//     }

//     .chart-card {
//       height: 100%;
//     }

//     .chart-card mat-card-content {
//       padding: 16px;
//       height: 300px;
//     }
//   `]
// })
// export class AnalyticsComponent implements OnInit {
//   loading: boolean = true;
//   error: string | null = null;
//   analyticsData: AnalyticsData | null = null;

//   // Chart.js configuration
//   pieChartType: ChartType = 'pie';
//   pieChartOptions: ChartConfiguration['options'] = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom'
//       }
//     }
//   };

//   userTypesChartData = {
//     labels: ['Job Seekers', 'Employers', 'Admins'],
//     datasets: [{
//       data: [0, 0, 0],
//       backgroundColor: ['#4CAF50', '#2196F3', '#FFC107']
//     }]
//   };

//   generationTypesChartData = {
//     labels: ['CV', 'Cover Letter', 'Resume'],
//     datasets: [{
//       data: [0, 0, 0],
//       backgroundColor: ['#E91E63', '#9C27B0', '#3F51B5']
//     }]
//   };

//   cvStatusChartData = {
//     labels: ['Draft', 'Published', 'Archived'],
//     datasets: [{
//       data: [0, 0, 0],
//       backgroundColor: ['#FF9800', '#4CAF50', '#9E9E9E']
//     }]
//   };

//   constructor(private analyticsService: AnalyticsService) {
//     // Register Chart.js components
//     Chart.register();
//   }

//   ngOnInit(): void {
//     this.loadData();
//   }

//   loadData(): void {
//     this.loading = true;
//     this.error = null;

//     this.analyticsService.getAnalytics().subscribe({
//       next: (data) => {
//         this.analyticsData = data;
//         this.updateCharts();
//         this.loading = false;
//       },
//       error: (err) => {
//         this.error = 'Failed to load analytics data. Please try again.';
//         this.loading = false;
//         console.error('Analytics loading error:', err);
//       }
//     });
//   }

//   updateCharts(): void {
//     if (!this.analyticsData) return;

//     // Update User Types Chart
//     this.userTypesChartData.datasets[0].data = [
//       this.analyticsData.userTypes.jobSeekers,
//       this.analyticsData.userTypes.employers,
//       this.analyticsData.userTypes.admins
//     ];

//     // Update Generation Types Chart
//     this.generationTypesChartData.datasets[0].data = [
//       this.analyticsData.generationsByType.cv,
//       this.analyticsData.generationsByType.coverLetter,
//       this.analyticsData.generationsByType.resume
//     ];

//     // Update CV Status Chart
//     this.cvStatusChartData.datasets[0].data = [
//       this.analyticsData.cvsByStatus.draft,
//       this.analyticsData.cvsByStatus.published,
//       this.analyticsData.cvsByStatus.archived
//     ];
//   }

//   refreshData(): void {
//     this.loadData();
//   }
// } 