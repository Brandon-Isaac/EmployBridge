import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

// Shared Components
import { FormValidationComponent } from '../../../shared/components/form-validation/form-validation.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { ToastNotificationComponent } from '../../../shared/components/toast-notification/toast-notification.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    RouterModule,
    FormValidationComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: `./signup.component.html`,
  styleUrl:`./signup.component.css`,      
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.signupForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        accountType: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.snackBar.openFromComponent(ToastNotificationComponent, {
          data: {
            message: 'Account created successfully!',
            type: 'success',
            duration: 5000,
          },
        });
        this.router.navigate(['../login']);
      }, 2000);
    }
  }
}
