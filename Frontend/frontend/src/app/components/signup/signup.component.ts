import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SignupComponent {
  isJobSeeker = true;
  signupForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      role: ['job_seeker'],
      // Job Seeker specific fields
      skills: [''],
      experience: [''],
      education: [''],
      // Employer specific fields
      company: [''],
      position: [''],
      industry: ['']
    }, {
      validators: this.passwordMatchValidator
    });
  }

  toggleForm(): void {
    this.isJobSeeker = !this.isJobSeeker;
    this.signupForm.patchValue({
      role: this.isJobSeeker ? 'job_seeker' : 'employer'
    });
    this.error = null;
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.loading = true;
      this.error = null;

      const formData = {
        ...this.signupForm.value,
        // Remove confirmPassword before sending to server
        confirmPassword: undefined
      };

      this.authService.register(formData).subscribe({
        next: (response) => {
          this.loading = false;
          // Navigate to appropriate dashboard based on role
          if (this.isJobSeeker) {
            this.router.navigate(['/job-seeker/dashboard']);
          } else {
            this.router.navigate(['/employer/dashboard']);
          }
        },
        error: (error) => {
          this.loading = false;
          this.error = error.error.message || 'An error occurred during signup';
        }
      });
    }
  }

  // Helper method to check if a field is invalid
  isFieldInvalid(fieldName: string): boolean {
    const field = this.signupForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  // Helper method to get error message for a field
  getErrorMessage(fieldName: string): string {
    const field = this.signupForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      return 'This field is required';
    }
    if (field.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field.hasError('minlength')) {
      return `Minimum length is ${field.errors?.['minlength'].requiredLength} characters`;
    }
    if (fieldName === 'confirmPassword' && this.signupForm.hasError('passwordMismatch')) {
      return 'Passwords do not match';
    }
    return '';
  }
} 