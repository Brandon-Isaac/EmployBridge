import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const JOB_SEEKER_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      // Add other routes as components are created
      // { path: 'profile-update', component: ProfileUpdateComponent },
      // { path: 'job-search', component: JobSearchComponent },
      // { path: 'job-matching', component: JobMatchingComponent },
      // { path: 'ai-recommendations', component: AIRecommendationsComponent },
      // { path: 'applications', component: ApplicationsComponent },
      // { path: 'interviews', component: InterviewsComponent },
      // { path: 'cv-generator', component: CVGeneratorComponent },
      // { path: 'chatbot', component: ChatbotComponent }
    ]
  }
]; 