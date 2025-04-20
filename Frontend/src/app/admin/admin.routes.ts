import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { JobManagementComponent } from './components/job-management/job-management.component';
import { SkillManagementComponent } from './components/skill-management/skill-management.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { AccuracyMetricsComponent } from './components/accuracy-metrics/accuracy-metrics.component';

//import { KeyMetricsComponent } from './components/key-metrics/key-metrics.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'users', component: UserManagementComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'jobs', component: JobManagementComponent },
      { path: 'skills', component: SkillManagementComponent },
      { path: 'ai-models', component: AccuracyMetricsComponent },
      { path: 'accuracy-metrics', component: AccuracyMetricsComponent },
      { path: 'monitoring', component: AccuracyMetricsComponent },
      { path: 'analytics', component: AccuracyMetricsComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
];
