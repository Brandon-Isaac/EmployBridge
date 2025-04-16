import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-skill-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  template: `skill-management.component.html`,
})
export class SkillManagementComponent implements OnInit {
  skills: Skill[] = [
    {
      id: '1',
      name: 'Angular',
      category: 'Frontend Development',
      description: 'Modern web framework',
      status: 'active',
    },
    {
      id: '2',
      name: 'Node.js',
      category: 'Backend Development',
      description: 'JavaScript runtime',
      status: 'active',
    },
  ];

  ngOnInit(): void {
    // Load skills from localStorage if available
    const savedSkills = localStorage.getItem('adminSkills');
    if (savedSkills) {
      this.skills = JSON.parse(savedSkills);
    }
  }
}
