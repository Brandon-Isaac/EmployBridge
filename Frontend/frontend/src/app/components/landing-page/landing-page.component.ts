import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    imports: [CommonModule],
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  features = [
    {
      icon: 'fa-solid fa-robot',
      title: 'AI-Powered Matching',
      description: 'Our advanced AI algorithm matches candidates with the perfect job opportunities based on skills and experience.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Smart Analytics',
      description: 'Get detailed insights into your application status, match scores, and career growth opportunities.'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'Real-time Chatbot',
      description: 'Chat with our AI chatbot to get help with your job search.'
    },
    {
      icon: 'fa-solid fa-file-circle-check',
      title: 'Automated CV Analysis',
      description: 'Upload your CV and let our AI extract skills and experience automatically.'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      rating: 5,
      comment: 'EmployBridge helped me find my dream job! The AI matching system is incredibly accurate.',
      image: 'assets/images/testimonial1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'HR Manager',
      rating: 5,
      comment: 'As an employer, the platform has streamlined our hiring process significantly.',
      image: 'assets/images/testimonial2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Specialist',
      rating: 5,
      comment: 'The AI chatbot was a game-changer for me. It answered all my questions and helped me find the perfect job.',
      image: 'assets/images/testimonial3.jpg'
    }
  ];

  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }
} 