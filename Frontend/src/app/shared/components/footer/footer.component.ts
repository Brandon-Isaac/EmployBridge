import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ],
  template: `
    <footer class="footer" @fadeInUp>
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="footer-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 17L12 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="8" r="1" fill="currentColor"/>
              </svg>
              <span>SkillsMatch AI</span>
            </div>
            <p class="footer-tagline">Connecting talent with opportunity through AI</p>
          </div>
          
          <div class="footer-nav-groups">
            <div class="footer-nav-group">
              <h4>Company</h4>
              <a routerLink="/about">About Us</a>
              <a routerLink="/careers">Careers</a>
              <a routerLink="/blog">Blog</a>
            </div>
            
            <div class="footer-nav-group">
              <h4>Product</h4>
              <a routerLink="/features">Features</a>
              <a routerLink="/pricing">Pricing</a>
              <a routerLink="/testimonials">Testimonials</a>
            </div>
            
            <div class="footer-nav-group">
              <h4>Resources</h4>
              <a routerLink="/help">Help Center</a>
              <a routerLink="/api">API Docs</a>
              <a routerLink="/community">Community</a>
            </div>
            
            <div class="footer-nav-group">
              <h4>Legal</h4>
              <a routerLink="/privacy">Privacy Policy</a>
              <a routerLink="/terms">Terms of Service</a>
              <a routerLink="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="social-links">
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          
          <div class="copyright">
            © 2024 SkillsMatch AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      --primary: #4e54c8;
      --primary-light: #8f94fb;
      --primary-dark: #363795;
      --accent: #fc466b;
      --text-dark: #333;
      --text-medium: #666;
      --text-light: #999;
      --footer-bg: #f8f9fa;
      --footer-border: #eaeaea;
      --footer-link: #666;
      --footer-link-hover: #4e54c8;
    }

    .footer {
      background-color: var(--footer-bg);
      color: var(--text-medium);
      border-top: 1px solid var(--footer-border);
      padding: 3rem 2rem 1.5rem;
      width: 100%;
      position: relative;
      z-index: 10;
    }
    
    .footer-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footer-main {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-bottom: 3rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary);
      
      span {
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
    }
    
    .footer-tagline {
      font-size: 0.95rem;
      color: var(--text-light);
      max-width: 250px;
      line-height: 1.5;
      margin: 0;
    }
    
    .footer-nav-groups {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
    
    .footer-nav-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      
      h4 {
        color: var(--text-dark);
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
      }
      
      a {
        color: var(--footer-link);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s ease;
        position: relative;
        padding-left: 0;
        
        &:hover {
          color: var(--footer-link-hover);
          padding-left: 5px;
        }
        
        &::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%) scale(0);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--accent);
          opacity: 0;
          transition: all 0.2s ease;
        }
        
        &:hover::before {
          transform: translateY(-50%) scale(1);
          opacity: 1;
          left: -5px;
        }
      }
    }
    
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.5rem;
      border-top: 1px solid var(--footer-border);
      
      @media (max-width: 576px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgba(78, 84, 200, 0.1);
        color: var(--primary);
        transition: all 0.3s ease;
        
        &:hover {
          background-color: var(--primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(78, 84, 200, 0.2);
        }
      }
    }
    
    .copyright {
      font-size: 0.85rem;
      color: var(--text-light);
    }
  `]
})
export class FooterComponent {}