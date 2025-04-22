import { Component, OnInit } from '@angular/core';
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
import { trigger, state, style, animate, transition } from '@angular/animations';

// Shared Components
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
    LoadingSpinnerComponent,
  ],
  templateUrl: `./signup.component.html`,
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('formElements', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s 0.2s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('buttonHover', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.05)'
      })),
      transition('normal <=> hovered', animate('0.2s ease-in-out'))
    ])
  ]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;
  loginState = 'normal';
  signupState = 'normal';
  signupButtonHover = false;
  showError = false;
  errorMessage = '';

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

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    // Mark all fields as touched to show validation errors
    Object.keys(this.signupForm.controls).forEach(key => {
      this.signupForm.get(key)?.markAsTouched();
    });

    if (this.signupForm.valid) {
      this.isLoading = true;
      this.showError = false;
      
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showError = true;
        this.errorMessage = 'Invalid credentials. Please check your details and try again.';
        this.snackBar.openFromComponent(ToastNotificationComponent, {
          data: {
            message: this.errorMessage,
            type: 'error',
            duration: 5000,
          },
        });
        
        // Hide error after 5 seconds
        setTimeout(() => {
          this.showError = false;
        }, 5000);
      }, 2000);
    } else {
      this.isLoading = false;
      this.showError = true;
      this.errorMessage = 'Please fill in all required fields correctly.';
      
      // Hide error after 5 seconds
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    }
  }
}
