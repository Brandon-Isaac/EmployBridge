import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatToolbarModule, NgClass],
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('0.4s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
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
  ],
  template: `
    <mat-toolbar class="header" @fadeInDown>
      <div class="logo" routerLink="/" [ngClass]="{'pulse': logoPulsing}">
        <div class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
            <path d="M12 17L12 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="8" r="1" fill="currentColor"/>
          </svg>
        </div>
        <h1>SkillsMatch AI</h1>
      </div>
      <div class="nav-links">
        <a routerLink="/features" class="nav-link">Features</a>
        <a routerLink="/pricing" class="nav-link">Pricing</a>
        <a routerLink="/about" class="nav-link">About Us</a>
      </div>
      <div class="nav-buttons">
        <button 
          mat-button 
          class="login-btn" 
          routerLink="/auth/login"
          [@buttonHover]="loginState"
          (mouseenter)="loginState = 'hovered'"
          (mouseleave)="loginState = 'normal'">
          Login
        </button>
        <button 
          mat-raised-button 
          class="signup-btn" 
          routerLink="/auth/signup"
          [@buttonHover]="signupState"
          (mouseenter)="signupState = 'hovered'"
          (mouseleave)="signupState = 'normal'">
          Sign Up
        </button>
      </div>
      <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
        <div class="menu-icon" [ngClass]="{'open': mobileMenuOpen}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="mobile-menu" [ngClass]="{'open': mobileMenuOpen}">
        <a routerLink="/features" class="mobile-nav-link">Features</a>
        <a routerLink="/pricing" class="mobile-nav-link">Pricing</a>
        <a routerLink="/about" class="mobile-nav-link">About Us</a>
        <a routerLink="/auth/login" class="mobile-nav-link">Login</a>
        <a routerLink="/auth/signup" class="mobile-nav-link highlight">Sign Up</a>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      --primary: #4e54c8;
      --primary-light: #8f94fb;
      --primary-dark: #363795;
      --accent: #fc466b;
      --text-light: #ffffff;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      height: 70px;
      background: linear-gradient(90deg, var(--primary-dark), var(--primary));
      color: var(--text-light);
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      
      &:hover {
        transform: scale(1.05);
      }
      
      &.pulse .logo-icon {
        animation: pulse-animation 1s infinite;
      }
    }
    
    @keyframes pulse-animation {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .logo-icon {
      color: var(--text-light);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      background: linear-gradient(90deg, #ffffff, #f0f0f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .nav-links {
      display: flex;
      gap: 1.5rem;
      
      @media (max-width: 768px) {
        display: none;
      }
    }
    
    .nav-link {
      color: var(--text-light);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding: 5px 0;
      opacity: 0.9;
      transition: all 0.3s ease;
      
      &:hover {
        opacity: 1;
      }
      
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--accent);
        transition: width 0.3s ease;
      }
      
      &:hover::after {
        width: 100%;
      }
    }
    
    .nav-buttons {
      display: flex;
      gap: 1rem;
      
      @media (max-width: 768px) {
        display: none;
      }
    }
    
    .login-btn {
      color: var(--text-light);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 0 1.5rem;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
      }
    }
    
    .signup-btn {
      background-color: var(--accent);
      color: white;
      border-radius: 20px;
      padding: 0 1.5rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(252, 70, 107, 0.3);
      
      &:hover {
        background-color: #e83a5f;
        box-shadow: 0 6px 15px rgba(252, 70, 107, 0.4);
      }
    }
    
    /* Mobile Menu */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      z-index: 1100;
      
      @media (max-width: 768px) {
        display: block;
      }
    }
    
    .menu-icon {
      width: 24px;
      height: 18px;
      position: relative;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      
      span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background: white;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        
        &:nth-child(1) {
          top: 0px;
        }
        
        &:nth-child(2) {
          top: 8px;
        }
        
        &:nth-child(3) {
          top: 16px;
        }
      }
      
      &.open span {
        &:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }
        
        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        &:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }
      }
    }
    
    .mobile-menu {
      position: fixed;
      top: 70px;
      right: -100%;
      width: 100%;
      height: calc(100vh - 70px);
      background: linear-gradient(135deg, var(--primary-dark), var(--primary));
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      transition: right 0.3s ease;
      z-index: 1000;
      
      &.open {
        right: 0;
      }
    }
    
    .mobile-nav-link {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      
      &.highlight {
        color: var(--accent);
        font-weight: 600;
      }
      
      &:hover {
        padding-left: 10px;
        opacity: 0.9;
      }
    }
  `]
})
export class HeaderComponent {
  loginState: string = 'normal';
  signupState: string = 'normal';
  logoPulsing: boolean = false;
  mobileMenuOpen: boolean = false;
  
  constructor() {
    // Start the logo pulsing animation after 3 seconds
    setTimeout(() => {
      this.logoPulsing = true;
      // Stop pulsing after 3 pulses
      setTimeout(() => {
        this.logoPulsing = false;
      }, 3000);
    }, 3000);
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}