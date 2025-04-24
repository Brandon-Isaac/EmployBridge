import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './core/models/user-role.enum';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { JobSeekerDashboardComponent } from './job-seeker/components/job-seeker-dashboard/job-seeker-dashboard.component';
import { EmployerDashboardComponent } from './employer/components/employer-dashboard/employer-dashboard.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'job-seeker',
    loadChildren: () => import('./job-seeker/job-seeker.routes').then(m => m.JOB_SEEKER_ROUTES)
  },
  {
    path: '',
    redirectTo: '/job-seeker',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
