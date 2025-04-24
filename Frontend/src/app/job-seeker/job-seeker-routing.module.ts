import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSeekerComponent } from './job-seeker.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: JobSeekerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'jobs/:id/apply',
        component: JobApplicationFormComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { } 