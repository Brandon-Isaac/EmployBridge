import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const EMPLOYER_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'profile-update',
        loadComponent: () => import('./profile-update/profile-update.component').then(m => m.ProfileUpdateComponent)
      },
      {
        path: 'job-posting',
        loadComponent: () => import('./job-posting/job-posting.component').then(m => m.JobPostingComponent)
      },
      {
        path: 'job-generation',
        loadComponent: () => import('./job-generation/job-generation.component').then(m => m.JobGenerationComponent)
      },
      {
        path: 'candidates',
        loadComponent: () => import('./candidates/candidates.component').then(m => m.CandidatesComponent)
      },
      {
        path: 'applications',
        loadComponent: () => import('./applications/applications.component').then(m => m.ApplicationsComponent)
      },
      {
        path: 'chatbot',
        loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent)
      }
    ]
  }
]; 