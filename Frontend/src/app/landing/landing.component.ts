import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NgFor, NgClass } from '@angular/common';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterModule, 
    MatButtonModule, 
    MatCardModule, 
    HeaderComponent, 
    FooterComponent,
    NgFor,
    NgClass
  ],
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.8s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInSequentially', [
      transition('void => *', [
        query('.feature-card', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('spin', [
      transition('* => spin', [
        animate('0.7s ease-in-out', style({ transform: 'rotate(360deg)' }))
      ]),
      transition('spin => *', [
        animate('0s', style({ transform: 'rotate(0deg)' }))
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
    <app-header></app-header>
    
    <main class="landing-content">
      <section class="hero-section" @slideIn>
        <div class="hero-content">
          <h1>Welcome to SkillsMatch AI</h1>
          
          <p class="subtitle typewriter">
            <span [innerHTML]="typewriterText"></span>
            <span class="cursor" [ngClass]="{'blink': cursorBlinking}">|</span>
          </p>
          
          <div class="cta-buttons" @fadeIn>
            <button 
              mat-raised-button 
              class="get-started-btn" 
              routerLink="/auth/signup"
              [@buttonHover]="getStartedState"
              (mouseenter)="getStartedState = 'hovered'"
              (mouseleave)="getStartedState = 'normal'">
              Get Started
            </button>
            <button 
              mat-button 
              class="login-btn" 
              routerLink="/auth/login"
              [@buttonHover]="loginState"
              (mouseenter)="loginState = 'hovered'"
              (mouseleave)="loginState = 'normal'">
              Already have an account?
            </button>
          </div>
        </div>
      </section>

      <section class="features-section" @fadeInSequentially>
        <mat-card 
          class="feature-card" 
          *ngFor="let feature of features; let i = index" 
          (mouseenter)="startSpinFeature(i)"
          [@spin]="featureSpinStates[i]"
          (@spin.done)="spinComplete(i)">
          
          <div class="feature-number-wrapper">
            <div class="feature-number">
              <span>{{i + 1}}</span>
            </div>
          </div>
          
          <h2>{{feature.title}}</h2>
          <p>{{feature.description}}</p>
        </mat-card>
      </section>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    /* Revised color scheme */
    :host {
      --primary: #4e54c8;
      --primary-light: #8f94fb;
      --primary-dark: #363795;
      --accent: #fc466b;
      --accent-transparent: rgba(252, 70, 107, 0.2);
      --text-primary: #333;
      --text-secondary: #666;
      --background-light: #f5f7fa;
      --card-bg: #ffffff;
      --success: #00c853;
      --warning: #ffd600;
    }

    .landing-content {
      min-height: calc(100vh - 128px);
      padding: 2rem;
      background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%);
      overflow-x: hidden;
    }

    .hero-section {
      text-align: center;
      padding: 6rem 2rem 4rem;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }

    .hero-section h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: #fff;
      font-weight: 700;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .subtitle {
      font-size: 1.4rem;
      color: #fff;
      margin-bottom: 2.5rem;
      min-height: 2em;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .cursor {
      display: inline-block;
      width: 2px;
      margin-left: 2px;
      color: #fff;
    }

    .cursor.blink {
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-top: 3rem;
    }

    .get-started-btn {
      background-color: var(--accent);
      color: white;
      padding: 0.75rem 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 30px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 4px 12px rgba(252, 70, 107, 0.4);
      transition: all 0.3s ease;
    }

    .login-btn {
      color: white;
      font-weight: 500;
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 30px;
      padding: 0.75rem 1.5rem;
      transition: all 0.3s ease;
    }

    .features-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
      max-width: 1200px;
      margin: 6rem auto 4rem;
      padding: 0 2rem;
    }

    .feature-card {
      padding: 3rem 2rem 2rem;
      text-align: center;
      border-radius: 16px;
      background-color: var(--card-bg);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
      transition: transform 0.4s ease, box-shadow 0.4s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(90deg, var(--primary-light), var(--accent));
      }

      h2 {
        color: var(--primary-dark);
        margin: 2.5rem 0 1.5rem;
        font-weight: 600;
        font-size: 1.5rem;
      }

      p {
        color: var(--text-secondary);
        line-height: 1.7;
        font-size: 1.05rem;
      }
    }

    .feature-number-wrapper {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
    }

    .feature-number {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--primary-blue);
      color: var(--text-light);
      font-size: 1.5rem;
      font-weight: 700;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      position: relative;
      z-index: 10;
    }

    .feature-number::after {
      content: '';
      position: absolute;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: transparent;
      border: 2px solid var(--primary-blue);
      z-index: 9;
      opacity: 0.3;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.1;
      }
      100% {
        transform: scale(0.95);
        opacity: 0.3;
      }
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .features-section {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 300px;
        margin: 2rem auto 0;
      }

      .get-started-btn, .login-btn {
        width: 100%;
      }
    }
  `]
})
export class LandingComponent implements OnInit {
  typewriterText: string = '';
  cursorBlinking: boolean = true;
  fullText: string = 'Revolutionizing the way job seekers and employers connect';
  typewriterInterval: any;
  typewriterCount: number = 0;
  
  features = [
    {
      title: 'Smart Matching',
      description: 'Our AI-powered platform analyzes skills, experience, and job requirements to create perfect matches between job seekers and employers.'
    },
    {
      title: 'Skill Development',
      description: 'Get personalized recommendations for skill development based on your career goals and market demands.'
    },
    {
      title: 'Career Growth',
      description: 'Access valuable insights and resources to help you advance in your career and achieve your professional goals.'
    }
  ];

  featureSpinStates: string[] = ['initial', 'initial', 'initial'];
  getStartedState: string = 'normal';
  loginState: string = 'normal';

  ngOnInit() {
    // Start the typewriter effect
    this.startTypewriter();
  }

  startTypewriter() {
    let i = 0;
    this.typewriterCount = 0;
    
    const typeNextCharacter = () => {
      if (i < this.fullText.length) {
        this.typewriterText += this.fullText.charAt(i);
        i++;
        setTimeout(typeNextCharacter, 50); // Adjust speed as needed
      } else {
        // When typing is complete, wait and then restart or stop
        setTimeout(() => {
          // If we've done it less than twice, restart
          if (this.typewriterCount < 1) {
            this.typewriterText = '';
            i = 0;
            this.typewriterCount++;
            typeNextCharacter();
          } else {
            // After the second time, just stop and keep the text displayed
            this.cursorBlinking = false;
            setTimeout(() => {
              this.cursorBlinking = true; // Resume blinking
            }, 500);
          }
        }, 2000);
      }
    };
    
    typeNextCharacter();
  }

  startSpinFeature(index: number) {
    this.featureSpinStates[index] = 'spin';
  }

  spinComplete(index: number) {
    if (this.featureSpinStates[index] === 'spin') {
      this.featureSpinStates[index] = 'initial';
    }
  }
}