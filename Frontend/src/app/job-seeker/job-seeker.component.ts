import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-seeker',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
          [mode]="'side'"
          [opened]="true">
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/jobs" routerLinkActive="active">
            <mat-icon matListItemIcon>work</mat-icon>
            <span matListItemTitle>Jobs</span>
          </a>
          <a mat-list-item routerLink="/applications" routerLinkActive="active">
            <mat-icon matListItemIcon>description</mat-icon>
            <span matListItemTitle>Applications</span>
          </a>
          <a mat-list-item routerLink="/profile" routerLinkActive="active">
            <mat-icon matListItemIcon>person</mat-icon>
            <span matListItemTitle>Profile</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            mat-icon-button
            (click)="drawer.toggle()"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <span>EmployBridge</span>
        </mat-toolbar>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: 100vh;
      }

      .sidenav {
        width: 250px;
      }

      .content {
        padding: 20px;
      }

      .active {
        background-color: rgba(0, 0, 0, 0.04);
      }

      mat-toolbar {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      mat-nav-list {
        padding-top: 0;
      }

      mat-nav-list a {
        display: flex;
        align-items: center;
        gap: 16px;
        height: 48px;
      }

      mat-nav-list mat-icon {
        margin-right: 16px;
      }
    `,
  ],
})
export class JobSeekerComponent {} 