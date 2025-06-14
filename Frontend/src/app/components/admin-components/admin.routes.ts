// import { Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';

// export const ADMIN_ROUTES: Routes = [
//   {
//     path: '',
//     component: DashboardComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'users',
//         pathMatch: 'full'
//       },
//       // User Management Routes
//       {
//         path: 'users',
//         loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
//       },
//       {
//         path: 'employers',
//         loadComponent: () => import('./employers/employers.component').then(m => m.EmployersComponent)
//       },
//       {
//         path: 'job-seekers',
//         loadComponent: () => import('./job-seekers/job-seekers.component').then(m => m.JobSeekersComponent)
//       },
//       // System Management Routes
//       {
//         path: 'analytics',
//         loadComponent: () => import('./analytics/analytics.component').then(m => m.AnalyticsComponent)
//       },
//       {
//         path: 'settings',
//         loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
//       },
//       {
//         path: 'security',
//         loadComponent: () => import('./security/security.component').then(m => m.SecurityComponent)
//       },
//       // Content Management Routes
//       {
//         path: 'jobs',
//         loadComponent: () => import('./jobs/jobs.component').then(m => m.JobsComponent)
//       },
//       {
//         path: 'skills',
//         loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent)
//       },
//       // Admin Tools Routes
//       {
//         path: 'roles',
//         loadComponent: () => import('./roles/roles.component').then(m => m.RolesComponent)
//       },
//       {
//         path: 'permissions',
//         loadComponent: () => import('./permissions/permissions.component').then(m => m.PermissionsComponent)
//       }
//     ]
//   }
// ]; 