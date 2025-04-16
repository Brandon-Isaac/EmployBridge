import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

interface JobTemplate {
  id: number;
  title: string;
  department: string;
  type: string;
  description: string;
  skills: string[];
  lastUsed: string;
}

@Component({
  selector: 'app-job-templates',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  templateUrl: `./job-templates.component.html`,
  styleUrl: 
    `./job-templates.component.css`,
})
export class JobTemplatesComponent {
  jobTemplates: JobTemplate[] = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Engineering',
      type: 'Full-time',
      description:
        'We are looking for a software engineer with strong problem-solving skills and experience in modern web technologies.',
      skills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js'],
      lastUsed: '2024-02-15',
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      type: 'Full-time',
      description:
        'Seeking a product designer to create intuitive and beautiful user experiences for our products.',
      skills: ['UI/UX', 'Figma', 'User Research', 'Prototyping'],
      lastUsed: '2024-03-01',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      type: 'Full-time',
      description:
        'Looking for an experienced marketing manager to lead our digital marketing initiatives.',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
      lastUsed: '2024-03-10',
    },
    {
      id: 4,
      title: 'Sales Representative',
      department: 'Sales',
      type: 'Full-time',
      description:
        'Join our sales team to help drive business growth and build strong client relationships.',
      skills: ['B2B Sales', 'Negotiation', 'CRM', 'Lead Generation'],
      lastUsed: '2024-02-28',
    },
  ];

  getDepartmentClass(department: string): string {
    return department.toLowerCase();
  }

  getJobTypeClass(type: string): string {
    return type.toLowerCase().replace('-', '');
  }

  getJobTypeIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'fa-briefcase';
      case 'part-time':
        return 'fa-clock';
      case 'contract':
        return 'fa-file-contract';
      default:
        return 'fa-briefcase';
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  createNewTemplate(): void {
    // Implementation would go here
    console.log('Creating new template');
  }
}