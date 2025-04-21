import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass,NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatToolbarModule, NgClass, NgIf],
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('0.4s cubic-bezier(0.16, 1, 0.3, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('buttonHover', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
      })),
      transition('normal <=> hovered', animate('0.2s cubic-bezier(0.4, 0, 0.2, 1)'))
    ]),
    trigger('underline', [
      state('void', style({ width: 0 })),
      state('*', style({ width: '100%' })),
      transition('* <=> *', animate('0.3s ease'))
    ])
  ],
  template: `
    <mat-toolbar class="header" @fadeInDown>
      <div class="logo-container">
        <div class="logo" routerLink="/" [ngClass]="{'pulse': logoPulsing}">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 16V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12 8H12.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="logo-text">
            <h1>Employbridge AI</h1>
            <div class="logo-subtitle">by TechSolutions</div>
          </div>
        </div>
      </div>

      <div class="nav-links">
        <a routerLink="/features" class="nav-link" (mouseenter)="activeLink = 'features'" (mouseleave)="activeLink = ''">
          <span>Features</span>
          <div class="underline" *ngIf="activeLink === 'features'" @underline></div>
        </a>
        <a routerLink="/pricing" class="nav-link" (mouseenter)="activeLink = 'pricing'" (mouseleave)="activeLink = ''">
          <span>Pricing</span>
          <div class="underline" *ngIf="activeLink === 'pricing'" @underline></div>
        </a>
        <a routerLink="/about" class="nav-link" (mouseenter)="activeLink = 'about'" (mouseleave)="activeLink = ''">
          <span>About Us</span>
          <div class="underline" *ngIf="activeLink === 'about'" @underline></div>
        </a>
        <a routerLink="/blog" class="nav-link" (mouseenter)="activeLink = 'blog'" (mouseleave)="activeLink = ''">
          <span>Blog</span>
          <div class="underline" *ngIf="activeLink === 'blog'" @underline></div>
        </a>
      </div>

      <div class="nav-buttons">
        <button 
          mat-button 
          class="login-btn" 
          routerLink="/auth/login"
          [@buttonHover]="loginState"
          (mouseenter)="loginState = 'hovered'; activeLink = ''"
          (mouseleave)="loginState = 'normal'">
          Login
        </button>
        <button 
          mat-raised-button 
          class="signup-btn" 
          routerLink="/auth/signup"
          [@buttonHover]="signupState"
          (mouseenter)="signupState = 'hovered'; activeLink = ''"
          (mouseleave)="signupState = 'normal'">
          Get Started
        </button>
      </div>

      <button class="mobile-menu-btn" (click)="toggleMobileMenu()" aria-label="Menu">
        <div class="menu-icon" [ngClass]="{'open': mobileMenuOpen}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div class="mobile-menu" [ngClass]="{'open': mobileMenuOpen}" @fadeInDown *ngIf="mobileMenuOpen">
        <div class="mobile-menu-content">
          <a routerLink="/features" class="mobile-nav-link" (click)="toggleMobileMenu()">Features</a>
          <a routerLink="/pricing" class="mobile-nav-link" (click)="toggleMobileMenu()">Pricing</a>
          <a routerLink="/about" class="mobile-nav-link" (click)="toggleMobileMenu()">About Us</a>
          <a routerLink="/blog" class="mobile-nav-link" (click)="toggleMobileMenu()">Blog</a>
          <div class="mobile-menu-buttons">
            <button mat-button class="mobile-login-btn" routerLink="/auth/login" (click)="toggleMobileMenu()">Login</button>
            <button mat-raised-button class="mobile-signup-btn" routerLink="/auth/signup" (click)="toggleMobileMenu()">Get Started</button>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      --primary: #2563eb;
      --primary-light: #3b82f6;
      --primary-dark: #1d4ed8;
      --accent: #ec4899;
      --accent-light: #f472b6;
      --text-light: #ffffff;
      --text-dark: #1f2937;
      --gray-light: #f3f4f6;
      --gray-dark: #6b7280;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --shadow-accent: 0 0 0 3px rgba(236, 72, 153, 0.3);
      --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      height: 80px;
      background-color: rgba(255, 255, 255, 0.95);
      color: var(--text-dark);
      box-shadow: var(--shadow-sm);
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .logo-container {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: var(--transition);
      height: 100%;
      padding: 0 8px;
      border-radius: 8px;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
      
      &.pulse .logo-icon {
        animation: pulse-animation 1.5s infinite;
      }
    }
    
    @keyframes pulse-animation {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .logo-icon {
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(37, 99, 235, 0.1);
      border-radius: 50%;
      padding: 8px;
      transition: var(--transition);
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }
    
    .logo h1 {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-dark);
      letter-spacing: -0.5px;
    }
    
    .logo-subtitle {
      font-size: 0.7rem;
      color: var(--gray-dark);
      font-weight: 500;
      letter-spacing: 0.2px;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      margin-left: 2rem;
      
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .nav-link {
      color: var(--text-dark);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding: 8px 0;
      opacity: 0.9;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      align-items: center;
      
      &:hover {
        color: var(--primary);
        opacity: 1;
      }
      
      span {
        position: relative;
        z-index: 1;
      }
    }
    
    .underline {
      height: 2px;
      background-color: var(--accent);
      margin-top: 2px;
      border-radius: 2px;
    }
    
    .nav-buttons {
      display: flex;
      gap: 1rem;
      align-items: center;
      
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .login-btn {
      color: var(--text-dark);
      border-radius: 8px;
      padding: 0 1.25rem;
      height: 40px;
      font-weight: 500;
      transition: var(--transition);
      
      &:hover {
        color: var(--primary);
        background-color: rgba(0, 0, 0, 0.02);
      }
    }
    
    .signup-btn {
      background-color: var(--primary);
      color: white;
      border-radius: 8px;
      padding: 0 1.5rem;
      height: 40px;
      font-weight: 500;
      transition: var(--transition);
      letter-spacing: 0.2px;
      
      &:hover {
        background-color: var(--primary-dark);
        color: white;
      }
    }
    
    /* Mobile Menu */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      z-index: 60;
      color: var(--text-dark);
      
      @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
    .menu-icon {
      width: 24px;
      height: 18px;
      position: relative;
      transform: rotate(0deg);
      transition: 0.3s ease-in-out;
      
      span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background: currentColor;
        border-radius: 2px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.2s ease-in-out;
        
        &:nth-child(1) {
          top: 0px;
          width: 100%;
        }
        
        &:nth-child(2) {
          top: 8px;
          width: 80%;
        }
        
        &:nth-child(3) {
          top: 16px;
          width: 60%;
        }
      }
      
      &.open span {
        &:nth-child(1) {
          top: 8px;
          transform: rotate(45deg);
          width: 100%;
        }
        
        &:nth-child(2) {
          opacity: 0;
        }
        
        &:nth-child(3) {
          top: 8px;
          transform: rotate(-45deg);
          width: 100%;
        }
      }
    }
    
    .mobile-menu {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 40;
      overflow-y: auto;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      padding: 1rem 5% 2rem;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      
      &.open {
        transform: translateX(0);
      }
    }
    
    .mobile-menu-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-top: 1rem;
    }
    
    .mobile-nav-link {
      color: var(--text-dark);
      text-decoration: none;
      font-size: 1.1rem;
      padding: 1rem 0.75rem;
      border-radius: 8px;
      transition: var(--transition);
      font-weight: 500;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        color: var(--primary);
      }
    }
    
    .mobile-menu-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .mobile-login-btn {
      flex: 1;
      color: var(--text-dark);
      font-weight: 500;
      height: 48px;
    }
    
    .mobile-signup-btn {
      flex: 1;
      background-color: var(--primary);
      color: white;
      font-weight: 500;
      height: 48px;
      
      &:hover {
        background-color: var(--primary-dark);
      }
    }
  `]
})
export class HeaderComponent {
  loginState: string = 'normal';
  signupState: string = 'normal';
  logoPulsing: boolean = false;
  mobileMenuOpen: boolean = false;
  activeLink: string = '';
  
  constructor() {
    // Start the logo pulsing animation after 3 seconds
    setTimeout(() => {
      this.logoPulsing = true;
      // Stop pulsing after 3 pulses
      setTimeout(() => {
        this.logoPulsing = false;
      }, 4500);
    }, 3000);
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}