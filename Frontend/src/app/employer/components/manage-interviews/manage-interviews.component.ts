import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

interface Interview {
  id: string;
  candidateName: string;
  position: string;
  date: Date;
  time: string;
  type: string;
  status: string;
  interviewer: string;
  notes?: string;
}

@Component({
  selector: 'app-manage-interviews',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatTooltipModule,
    DatePipe,
  ],
  templateUrl: `./manage-interviews.component.html`,
  styleUrl: 
    `./manage-interviews.component.css`,
})
export class ManageInterviewsComponent {
  displayedColumns = [
    'candidateName',
    'position',
    'date',
    'time',
    'type',
    'status',
    'interviewer',
    'actions',
  ];

  interviews: Interview[] = [
    {
      id: '1',
      candidateName: 'John Doe',
      position: 'Senior Frontend Developer',
      date: new Date('2024-03-25'),
      time: '10:00 AM',
      type: 'video',
      status: 'scheduled',
      interviewer: 'Sarah Johnson',
      notes: 'Technical interview focusing on Angular and TypeScript',
    },
    {
      id: '2',
      candidateName: 'Jane Smith',
      position: 'Full Stack Developer',
      date: new Date('2024-03-26'),
      time: '2:00 PM',
      type: 'in-person',
      status: 'scheduled',
      interviewer: 'Mike Brown',
      notes: 'System design and problem-solving interview',
    },
    {
      id: '3',
      candidateName: 'Alex Johnson',
      position: 'UX Designer',
      date: new Date('2024-03-20'),
      time: '11:30 AM',
      type: 'phone',
      status: 'completed',
      interviewer: 'Emily Davis',
      notes: 'Excellent design skills and problem-solving approach',
    },
  ];

  getTypeColor(type: string): string {
    switch (type.toLowerCase()) {
      case 'video':
        return 'primary';
      case 'in-person':
        return 'accent';
      case 'phone':
        return 'warn';
      default:
        return '';
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'scheduled':
        return 'primary';
      case 'completed':
        return 'accent';
      case 'cancelled':
        return 'warn';
      default:
        return '';
    }
  }

  scheduleInterview(): void {
    console.log('Schedule new interview');
  }

  viewDetails(interview: Interview): void {
    console.log('View details:', interview);
  }

  editInterview(interview: Interview): void {
    console.log('Edit interview:', interview);
  }

  cancelInterview(interview: Interview): void {
    console.log('Cancel interview:', interview);
    interview.status = 'cancelled';
  }

  completeInterview(interview: Interview): void {
    console.log('Complete interview:', interview);
    interview.status = 'completed';
  }
}