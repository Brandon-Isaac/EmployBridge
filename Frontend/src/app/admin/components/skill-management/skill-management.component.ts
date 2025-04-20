import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  popularity: number;
}

@Component({
  selector: 'app-skill-management',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  template: `
    <div class="skill-management-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Skills Management</mat-card-title>
          <mat-card-subtitle>Manage and categorize skills</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="skillForm" (ngSubmit)="onSubmit()" class="skill-form">
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Skill Name</mat-label>
                <input matInput formControlName="name" placeholder="Enter skill name">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Category</mat-label>
                <input matInput formControlName="category" placeholder="Enter category">
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" rows="3" placeholder="Enter skill description"></textarea>
            </mat-form-field>

            <div class="button-row">
              <button mat-raised-button color="primary" type="submit">Add Skill</button>
            </div>
          </form>

          <div class="skills-table">
            <table mat-table [dataSource]="skills">
              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let skill">{{ skill.name }}</td>
              </ng-container>

              <ng-container matColumnDef="category">
                <th mat-header-cell *matHeaderCellDef>Category</th>
                <td mat-cell *matCellDef="let skill">{{ skill.category }}</td>
              </ng-container>

              <ng-container matColumnDef="description">
                <th mat-header-cell *matHeaderCellDef>Description</th>
                <td mat-cell *matCellDef="let skill">{{ skill.description }}</td>
              </ng-container>

              <ng-container matColumnDef="popularity">
                <th mat-header-cell *matHeaderCellDef>Popularity</th>
                <td mat-cell *matCellDef="let skill">
                  <mat-progress-bar mode="determinate" [value]="skill.popularity"></mat-progress-bar>
                </td>
              </ng-container>

              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let skill">
                  <button mat-icon-button color="primary" (click)="editSkill(skill)">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" (click)="deleteSkill(skill)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .skill-management-container {
      padding: 20px;
    }

    .skill-form {
      margin-bottom: 20px;
    }

    .form-row {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }

    .full-width {
      width: 100%;
    }

    .button-row {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .skills-table {
      margin-top: 20px;
    }

    table {
      width: 100%;
    }

    mat-progress-bar {
      width: 100px;
    }
  `]
})
export class SkillManagementComponent implements OnInit {
  skillForm: FormGroup;
  skills: Skill[] = [];
  displayedColumns: string[] = ['name', 'category', 'description', 'popularity', 'actions'];

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // TODO: Load skills from API
    this.loadSkills();
  }

  loadSkills(): void {
    // Mock data for demonstration
    this.skills = [
      {
        id: '1',
        name: 'Angular',
        category: 'Frontend',
        description: 'JavaScript framework for building web applications',
        popularity: 85
      },
      {
        id: '2',
        name: 'Node.js',
        category: 'Backend',
        description: 'JavaScript runtime for server-side applications',
        popularity: 90
      }
    ];
  }

  onSubmit(): void {
    if (this.skillForm.valid) {
      const newSkill: Skill = {
        id: Date.now().toString(),
        ...this.skillForm.value,
        popularity: 0
      };
      this.skills.push(newSkill);
      this.skillForm.reset();
    }
  }

  editSkill(skill: Skill): void {
    // TODO: Implement edit functionality
    console.log('Editing skill:', skill);
  }

  deleteSkill(skill: Skill): void {
    // TODO: Implement delete functionality
    const index = this.skills.findIndex(s => s.id === skill.id);
    if (index !== -1) {
      this.skills.splice(index, 1);
    }
  }
}
