import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { JOB_SEEKER_ROUTES } from './components/job-seeker-components/job-seeker.routes';
import { authGuard } from './guards/auth.guard';
import { EMPLOYER_ROUTES } from './components/employer-components/employer.routes';
// import { ADMIN_ROUTES } from './components/admin-components/admin.routes';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { 
    path: 'job-seeker', 
    children: JOB_SEEKER_ROUTES,
    canActivate: [authGuard],
    data: { role: 'job_seeker' }
  },
  {
    path: 'employer',
    children: EMPLOYER_ROUTES,
    canActivate: [authGuard],
    data: { role: 'employer' }
  },
  // {
  //   path: 'admin',
  //   children:ADMIN_ROUTES,
  //   canActivate: [authGuard],
  //   data: { role: 'admin' }
  // },
  { path: '**', redirectTo: '' }
]; 