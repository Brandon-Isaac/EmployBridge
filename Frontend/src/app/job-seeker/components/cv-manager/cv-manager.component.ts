import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-cv-manager',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl:"cv-manager.component.html",
  styleUrls:["cv-manager.component.css"],
})
export class CvManagerComponent {
  cvs = [
    {
      name: 'Software Engineer CV',
      lastUpdated: new Date('2024-01-15')
    },
    {
      name: 'Full Stack Developer CV',
      lastUpdated: new Date('2024-03-20')
    }
  ];

  editCV(cv: any) {
    console.log('Editing CV:', cv);
  }

  deleteCV(cv: any) {
    console.log('Deleting CV:', cv);
  }

  uploadCV() {
    console.log('Uploading new CV');
  }
}
