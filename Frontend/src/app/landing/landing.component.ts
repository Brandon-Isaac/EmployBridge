import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NgFor, NgIf,NgClass } from '@angular/common';
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
  templateUrl: `./landing.component.html`,
 styleUrl:'./landing.component.css'
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