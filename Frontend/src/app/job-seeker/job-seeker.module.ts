import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';
import { ApplicationsComponent } from './components/applications/applications.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    JobSeekerComponent,
    JobApplicationFormComponent,
    ApplicationsComponent,
  ]
})
export class JobSeekerModule { } 