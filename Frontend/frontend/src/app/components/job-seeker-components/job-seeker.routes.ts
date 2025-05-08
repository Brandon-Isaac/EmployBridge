import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { JobMatchingComponent } from './job-matching/job-matching.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { CareerPathComponent } from './career-path/career-path.component';

export const JOB_SEEKER_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile-update', component: ProfileUpdateComponent },
      { path: 'job-matching', component: JobMatchingComponent },
      { path: 'job-search', component: JobSearchComponent },
      { path: 'career-path', component: CareerPathComponent },
      // Add other routes as components are created
      // { path: 'ai-recommendations', component: AIRecommendationsComponent },
      // { path: 'applications', component: ApplicationsComponent },
      // { path: 'interviews', component: InterviewsComponent },
      // { path: 'cv-generator', component: CVGeneratorComponent },
      // { path: 'chatbot', component: ChatbotComponent }
    ]
  }
]; 