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
import { AuthService } from '../../../core/services/auth.service';
import { FormValidationComponent } from '../../../shared/components/form-validation/form-validation.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { ToastNotificationComponent } from '../../../shared/components/toast-notification/toast-notification.component';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { UserRole } from '../../../core/models/user-role.enum';
import { LoadingService, LOADING_SERVICE } from '../../../core/services/loading.service';

@Component({
  selector: 'app-login',
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
  providers: [
    { provide: LOADING_SERVICE, useClass: LoadingService }
  ],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('formElements', [
      transition(':enter', [
        query('.animate-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('buttonHover', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
      })),
      transition('normal <=> hovered', animate('0.2s ease-in-out'))
    ])
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;
  loginState: string = 'normal';
  signupState: string = 'normal';
  loginButtonHover: boolean = false;
  showError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userType: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('Login form submitted');
    console.log('Form values:', this.loginForm.value);
    
    // Mark all fields as touched to show validation errors
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });

    if (this.loginForm.valid) {
      console.log('Form is valid, attempting login');
      this.isLoading = true;
      this.showError = false;
      
      const { email, password, userType } = this.loginForm.value;
      
      // Convert userType to match what the service expects
      let formattedUserType = userType.toLowerCase();
      if (formattedUserType === 'job-seeker') {
        formattedUserType = 'jobseeker';
      }
      
      console.log('Attempting login with:', { email, formattedUserType });
      
      this.authService.login(email, password, formattedUserType).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.isLoading = false;
          
          // Get user data based on user type
          const user = formattedUserType === 'employer' ? response.employer : response.user;
          if (!user) {
            this.snackBar.openFromComponent(ToastNotificationComponent, {
              data: {
                message: 'Invalid response format from server.',
                type: 'error',
                duration: 5000,
              },
            });
            return;
          }

          // Add role to user data
          user.role = formattedUserType.toUpperCase();
          
          // Validate user type matches role
          if ((formattedUserType === 'employer' && user.role !== UserRole.EMPLOYER) ||
              (formattedUserType === 'jobseeker' && user.role !== UserRole.JOB_SEEKER) ||
              (formattedUserType === 'admin' && user.role !== UserRole.ADMIN)) {
            console.log('Role mismatch detected');
            this.snackBar.openFromComponent(ToastNotificationComponent, {
              data: {
                message: 'Selected user type does not match account type.',
                type: 'error',
                duration: 5000,
              },
            });
            return;
          }

          console.log('Navigating to dashboard for role:', user.role);
          // Wait for auth state to be updated
          setTimeout(() => {
            const rolePath = user.role.toLowerCase().replace('_', '-');
            console.log('Attempting navigation to:', rolePath);
            this.router.navigate([`/${rolePath}`]).catch((error) => {
              console.error('Navigation failed:', error);
              // If navigation fails, show error and redirect to landing
              this.snackBar.openFromComponent(ToastNotificationComponent, {
                data: {
                  message: 'Failed to navigate to dashboard. Please try again.',
                  type: 'error',
                  duration: 5000,
                },
              });
              this.router.navigate(['/']);
            });
          }, 100);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false;
          this.showError = true;
          this.errorMessage = error.error?.message || 'Login failed. Please check your credentials and try again.';
          this.snackBar.openFromComponent(ToastNotificationComponent, {
            data: {
              message: this.errorMessage,
              type: 'error',
              duration: 5000,
            },
          });
        }
      });
    } else {
      console.log('Form is invalid');
      this.showError = true;
      this.errorMessage = 'Please fill in all required fields correctly.';
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        data: {
          message: this.errorMessage,
          type: 'error',
          duration: 5000,
        },
      });
    }
  }
}