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
    // Mark all fields as touched to show validation errors
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isLoading = true;
      
      this.authService.login(email, password).subscribe({
        next: (user) => {
          this.isLoading = false;
          
          // Validate user type matches role
          if ((this.loginForm.get('userType')?.value === 'employer' && user.role !== UserRole.EMPLOYER) ||
              (this.loginForm.get('userType')?.value === 'job-seeker' && user.role !== UserRole.JOB_SEEKER)) {
            this.snackBar.openFromComponent(ToastNotificationComponent, {
              data: {
                message: 'Selected user type does not match account type.',
                type: 'error',
                duration: 5000,
              },
            });
            return;
          }

          switch (user.role) {
            case 'JOB_SEEKER':
              this.router.navigate(['/job-seeker']);
              break;
            case 'EMPLOYER':
              this.router.navigate(['/employer']);
              break;
            case 'ADMIN':
              this.router.navigate(['/admin']);
              break;
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.openFromComponent(ToastNotificationComponent, {
            data: {
              message: error.message || 'Login failed. Please check your credentials and try again.',
              type: 'error',
              duration: 5000,
            },
          });
        }
      });
    } else {
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        data: {
          message: 'Please fill in all required fields correctly.',
          type: 'error',
          duration: 5000,
        },
      });
    }
  }
}