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
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';
import { FormValidationComponent } from '../../../shared/components/form-validation/form-validation.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { ToastNotificationComponent } from '../../../shared/components/toast-notification/toast-notification.component';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

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
  template: `
    <div class="auth-container">
      <div class="auth-background">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
      </div>
      
      <mat-card class="auth-card" @cardAnimation>
        <div class="card-content-wrapper">
          <mat-card-header>
            <div class="header-content">
              <div class="app-title-container animate-item">
                <div class="logo-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 17L12 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="12" cy="8" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <h1 class="app-title">SkillsMatch AI</h1>
              </div>
              <mat-card-title class="animate-item">Welcome Back</mat-card-title>
              <mat-card-subtitle class="animate-item">Sign in to your account</mat-card-subtitle>
            </div>
          </mat-card-header>

          <mat-card-content @formElements>
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
              <mat-form-field appearance="outline" class="full-width animate-item">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" type="email" required placeholder="Enter your email" />
                <i class="fas fa-envelope form-icon" matPrefix></i>
                <mat-hint>Try: admin&#64;example.com, jobseeker&#64;example.com, employer&#64;example.com</mat-hint>
                <app-form-validation
                  [control]="loginForm.get('email')"
                  fieldName="Email"
                ></app-form-validation>
              </mat-form-field><br/>

              <mat-form-field appearance="outline" class="full-width animate-item">
                <mat-label>Password</mat-label>
                <input
                  matInput
                  formControlName="password"
                  [type]="hidePassword ? 'password' : 'text'"
                  required
                  placeholder="Enter your password"
                />
                <i class="fas fa-lock form-icon" matPrefix></i>
                <i class="fas fa-eye form-icon clickable" matSuffix (click)="hidePassword = !hidePassword"></i>
                <mat-hint>Any password will work</mat-hint>
                <app-form-validation
                  [control]="loginForm.get('password')"
                  fieldName="Password"
                ></app-form-validation>
              </mat-form-field>

              <div class="form-links animate-item">
                <a class="forgot-password" routerLink="/auth/forgot-password">Forgot password?</a>
              </div>

              <div class="form-actions animate-item">
                <button
                  mat-button
                  type="button"
                  routerLink="../signup"
                  class="signup-link"
                  [@buttonHover]="signupState"
                  (mouseenter)="signupState = 'hovered'"
                  (mouseleave)="signupState = 'normal'"
                >
                  Don't have an account? <span class="highlight">Sign Up</span>
                </button>
                <div
                  class="login-text"
                  [@buttonHover]="loginState"
                  (mouseenter)="loginState = 'hovered'; loginButtonHover = true"
                  (mouseleave)="loginState = 'normal'; loginButtonHover = false"
                  (click)="onSubmit()"
                >
                  <div class="button-content">
                    <app-loading-spinner
                      *ngIf="isLoading"
                      [size]="24"
                    ></app-loading-spinner>
                    <span *ngIf="!isLoading" class="clickable-text">Login</span>
                    <i *ngIf="!isLoading" class="fas fa-arrow-right login-icon" [class.animate]="loginButtonHover"></i>
                  </div>
                </div>
              </div>
            </form>
          </mat-card-content>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    :host {
      --primary: #4e54c8;
      --primary-light: #8f94fb;
      --primary-dark: #363795;
      --accent: #fc466b;
      --accent-light: #ff9a9e;
      --text-primary: #333;
      --text-secondary: #666;
      --background-light: #f5f7fa;
      --card-bg: #ffffff;
      --success: #00c853;
      --warning: #ffd600;
    }

    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%);
      position: relative;
      overflow: hidden;
    }
    
    .auth-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      animation: float 15s infinite;
      backdrop-filter: blur(5px);
    }
    
    .shape1 {
      width: 500px;
      height: 500px;
      top: -250px;
      right: -100px;
      animation-delay: 0s;
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.03), rgba(142, 148, 251, 0.08));
    }
    
    .shape2 {
      width: 400px;
      height: 400px;
      bottom: -150px;
      left: -100px;
      animation-delay: 3s;
      animation-duration: 18s;
      background: linear-gradient(45deg, rgba(142, 148, 251, 0.06), rgba(255, 255, 255, 0.04));
    }
    
    .shape3 {
      width: 300px;
      height: 300px;
      bottom: 30%;
      right: 20%;
      animation-delay: 5s;
      animation-duration: 20s;
      background: linear-gradient(45deg, rgba(252, 70, 107, 0.04), rgba(255, 255, 255, 0.03));
    }
    
    @keyframes float {
      0% {
        transform: translate(0%, 0%) rotate(0deg);
      }
      25% {
        transform: translate(5%, 5%) rotate(5deg);
      }
      50% {
        transform: translate(0%, 8%) rotate(0deg);
      }
      75% {
        transform: translate(-5%, 3%) rotate(-5deg);
      }
      100% {
        transform: translate(0%, 0%) rotate(0deg);
      }
    }

    .auth-card {
      width: 100%;
      max-width: 450px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      position: relative;
      z-index: 10;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .card-content-wrapper {
      padding: 40px;
    }
    
    .auth-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, var(--primary-light), var(--accent));
      z-index: 5;
    }

    .header-content {
      text-align: center;
      margin-bottom: 24px;
      width: 100%;
    }
    
    .app-title-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 24px;
    }
    
    .logo-icon {
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .app-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary);
      margin: 0;
      letter-spacing: -0.5px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    mat-card-title {
      font-size: 1.7rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    mat-card-subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: 16px;
    }

    .full-width {
      width: 100%;
      margin-bottom: 20px;
    }

    .form-icon {
      color: rgba(0, 0, 0, 0.4);
      margin-right: 8px;
      transition: all 0.3s ease;
    }

    .clickable {
      cursor: pointer;
      &:hover {
        color: var(--primary);
        transform: scale(1.1);
      }
    }
    
    .form-links {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 24px;
    }
    
    .forgot-password {
      color: var(--primary);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--accent);
        text-decoration: underline;
      }
    }

    .form-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;
    }

    .signup-link {
      color: var(--text-secondary);
      font-weight: 400;
      transition: all 0.3s ease;
      
      .highlight {
        color: var(--primary);
        font-weight: 500;
        transition: all 0.3s ease;
      }
      
      &:hover {
        .highlight {
          color: var(--accent);
          text-decoration: underline;
        }
      }
    }

    .submit-button {
      min-width: 120px;
      padding: 8px 24px;
      font-weight: 500;
      background: linear-gradient(45deg, var(--primary), var(--primary-dark));
      border-radius: 30px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(78, 84, 200, 0.3);

      &:not([disabled]):hover {
        background: linear-gradient(45deg, var(--primary-light), var(--primary));
        box-shadow: 0 6px 16px rgba(78, 84, 200, 0.4);
      }

      &[disabled] {
        background: #ccc;
      }
    }
    
    .login-text {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 120px;
      padding: 8px 24px;
      font-weight: 500;
      color: white;
      background: linear-gradient(45deg, var(--primary), var(--primary-dark));
      border-radius: 30px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(78, 84, 200, 0.3);
      cursor: pointer;

      &:hover {
        background: linear-gradient(45deg, var(--primary-light), var(--primary));
        box-shadow: 0 6px 16px rgba(78, 84, 200, 0.4);
      }

      .clickable-text {
        cursor: pointer;
      }
    }
    
    .button-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .login-icon {
      transition: all 0.3s ease;
      
      &.animate {
        transform: translateX(3px);
      }
    }

    ::ng-deep {
      .mat-form-field-outline {
        color: #e0e0e0 !important;
      }

      .mat-form-field-outline-thick {
        color: var(--primary) !important;
      }

      .mat-form-field-label {
        color: var(--text-secondary) !important;
        opacity: 1 !important;
      }

      .mat-form-field.mat-focused .mat-form-field-label {
        color: var(--primary) !important;
      }

      .mat-form-field-suffix {
        top: 0 !important;
      }

      .mat-form-field-prefix {
        top: 0.25em !important;
        margin-right: 8px !important;
      }

      .form-icon {
        color: rgba(0, 0, 0, 0.6);
        font-size: 20px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }

      .mat-form-field:hover {
        .mat-form-field-outline {
          opacity: 1;
        }
        .form-icon {
          color: rgba(0, 0, 0, 0.6);
        }
      }

      .mat-form-field.mat-focused {
        .form-icon {
          color: var(--primary);
        }
      }
    }

    @media (max-width: 600px) {
      .card-content-wrapper {
        padding: 30px 20px;
      }

      .form-actions {
        flex-direction: column;
        gap: 16px;
      }

      .submit-button {
        width: 100%;
      }

      .app-title {
        font-size: 1.75rem;
      }
      
      mat-card-title {
        font-size: 1.4rem;
      }
      
      mat-card-subtitle {
        font-size: 1rem;
      }
    }
  `],
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
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isLoading = true;
      this.authService.login(email, password).subscribe({
        next: (user) => {
          this.isLoading = false;
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
          console.error('Login failed:', error);
          this.snackBar.openFromComponent(ToastNotificationComponent, {
            data: {
              message: 'Login failed. Please try again later.',
              type: 'error',
              duration: 5000,
            },
          });
        },
      });
    }
  }
}