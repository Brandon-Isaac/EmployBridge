import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faBriefcase, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProfileService, UpdateProfileData } from '../../../services/profile.service';
import { SkillService, Skill } from '../../../services/skill.service';
import { AuthService, User } from '../../../services/auth.service';
import { Observable, map, startWith, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    FontAwesomeModule
  ],
  template: `
    <div class="profile-update-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading profile data...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <p class="error-message">{{error}}</p>
        <button mat-button color="primary" (click)="retryLoading()">Retry</button>
      </div>

      <!-- Profile Update Form -->
      <form *ngIf="!isLoading && !error" [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="profile-form">
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="faUser" class="icon"></fa-icon>
              Update Profile
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <!-- Basic Information -->
            <div class="form-section">
              <h2>Basic Information</h2>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Name</mat-label>
                <input matInput formControlName="name" placeholder="Your full name">
                <mat-error *ngIf="profileForm.get('name')?.hasError('required')">
                  Name is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Position</mat-label>
                <input matInput formControlName="position" placeholder="Your current position">
              </mat-form-field>
            </div>

            <!-- Skills Section -->
            <div class="form-section">
              <h2>Skills</h2>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Add Skills</mat-label>
                <mat-chip-grid #chipGrid>
                  <mat-chip-row *ngFor="let skill of selectedSkills" (removed)="removeSkill(skill)">
                    {{skill.name}}
                    <button matChipRemove>
                      <fa-icon [icon]="faTimes"></fa-icon>
                    </button>
                  </mat-chip-row>
                </mat-chip-grid>
                <input placeholder="Type to search or add new skill..."
                       [matChipInputFor]="chipGrid"
                       [matAutocomplete]="auto"
                       [formControl]="skillInput"
                       (matChipInputTokenEnd)="addSkill($event)">
                <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selectedSkill($event)">
                  <mat-option *ngFor="let skill of filteredSkills | async" [value]="skill">
                    {{skill.name}}
                  </mat-option>
                </mat-autocomplete>
              </mat-form-field>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button type="button" (click)="goBack()">Cancel</button>
            <button mat-raised-button color="primary" type="submit" [disabled]="profileForm.invalid || isSubmitting">
              <mat-spinner diameter="20" *ngIf="isSubmitting"></mat-spinner>
              <span *ngIf="!isSubmitting">Save Changes</span>
            </button>
          </mat-card-actions>
        </mat-card>
      </form>
    </div>
  `,
  styles: [`
    .profile-update-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 24px;
      font-family: 'Poppins', sans-serif;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 16px;
    }

    .error-message {
      color: #dc3545;
      font-size: 1.1rem;
    }

    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-section h2 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.2rem;
    }

    .full-width {
      width: 100%;
    }

    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      padding: 16px;
    }

    .icon {
      margin-right: 8px;
    }

    mat-card-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class ProfileUpdateComponent implements OnInit {
  // Font Awesome icons
  faUser = faUser;
  faBriefcase = faBriefcase;
  faPlus = faPlus;
  faTimes = faTimes;

  profileForm: FormGroup;
  skillInput: FormControl;
  selectedSkills: Skill[] = [];
  availableSkills: Skill[] = [];
  filteredSkills: Observable<Skill[]>;
  isLoading = true;
  isSubmitting = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private skillService: SkillService,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      position: ['']
    });

    this.skillInput = this.fb.control('');
    this.filteredSkills = this.skillInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSkills(value || ''))
    );
  }

  ngOnInit(): void {
    this.loadProfileData();
    this.loadAvailableSkills();
  }

  private loadProfileData(): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      this.error = 'No user is currently logged in';
      this.isLoading = false;
      return;
    }

    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.profileForm.patchValue({
          name: profile.name,
          position: profile.position || ''
        });
        this.loadUserSkills();
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.error = 'Failed to load profile data. Please try again.';
        this.isLoading = false;
      }
    });
  }

  private loadUserSkills(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.skillService.getUserSkills(user.id).subscribe({
        next: (skills) => {
          this.selectedSkills = skills;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading skills:', error);
          this.isLoading = false;
        }
      });
    }
  }

  private loadAvailableSkills(): void {
    this.skillService.getAllSkills().subscribe({
      next: (skills) => {
        this.availableSkills = skills;
      },
      error: (error) => {
        console.error('Error loading available skills:', error);
      }
    });
  }

  private _filterSkills(value: string | Skill): Skill[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
    return this.availableSkills.filter(skill => 
      skill.name.toLowerCase().includes(filterValue) &&
      !this.selectedSkills.some(selected => selected.id === skill.id)
    );
  }

  addSkill(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      // Check if skill already exists
      const existingSkill = this.availableSkills.find(s => s.name.toLowerCase() === value.toLowerCase());
      if (existingSkill) {
        this.selectedSkills.push(existingSkill);
      } else {
        // Create new skill
        this.skillService.createSkill({ name: value }).subscribe({
          next: (newSkill) => {
            this.selectedSkills.push(newSkill);
            this.availableSkills.push(newSkill);
          },
          error: (error) => {
            console.error('Error creating new skill:', error);
          }
        });
      }
    }
    this.skillInput.setValue('');
  }

  selectedSkill(event: any): void {
    const skill = event.option.value;
    if (!this.selectedSkills.some(s => s.id === skill.id)) {
      this.selectedSkills.push(skill);
    }
    this.skillInput.setValue('');
  }

  removeSkill(skill: Skill): void {
    const index = this.selectedSkills.indexOf(skill);
    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.isSubmitting = true;
      const user = this.authService.getCurrentUser();
      if (!user) {
        this.error = 'No user is currently logged in';
        this.isSubmitting = false;
        return;
      }

      const updateData: UpdateProfileData = {
        name: this.profileForm.get('name')?.value
      };

      // Update profile
      this.profileService.updateProfile(updateData).subscribe({
        next: async () => {
          try {
            // Get current user skills
            const currentUserSkills = await firstValueFrom(this.skillService.getUserSkills(user.id));
            const currentSkillIds = this.selectedSkills.map(s => s.id);
            const existingSkillIds = currentUserSkills.map(s => s.id);

            // Find skills to remove (skills that exist in currentUserSkills but not in selectedSkills)
            const skillsToRemove = currentUserSkills.filter(s => !currentSkillIds.includes(s.id));

            // Find skills to add (skills in selectedSkills that don't exist in currentUserSkills)
            const skillsToAdd = this.selectedSkills.filter(s => !existingSkillIds.includes(s.id));

            console.log('Skills to remove:', skillsToRemove);
            console.log('Skills to add:', skillsToAdd);

            // Process removals
            for (const skill of skillsToRemove) {
              await firstValueFrom(this.skillService.removeUserSkill(user.id, skill.id));
            }

            // Process additions
            for (const skill of skillsToAdd) {
              await firstValueFrom(this.skillService.addUserSkill(user.id, skill.id));
            }

            this.isSubmitting = false;
            this.goBack();
          } catch (error) {
            console.error('Error updating skills:', error);
            this.error = 'Failed to update skills. Please try again.';
            this.isSubmitting = false;
          }
        },
        error: (error) => {
          console.error('Error updating profile:', error);
          this.error = 'Failed to update profile. Please try again.';
          this.isSubmitting = false;
        }
      });
    }
  }

  retryLoading(): void {
    this.error = null;
    this.loadProfileData();
  }

  goBack(): void {
    window.history.back();
  }
} 