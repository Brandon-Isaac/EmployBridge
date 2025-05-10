import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="chatbot-container">
      <mat-card class="chatbot-card">
        <mat-card-header>
          <mat-card-title>AI Assistant</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="chatbot-content">
            <!-- Chat interface will go here -->
            <div class="chat-messages">
              <p>Chat messages will be displayed here.</p>
            </div>
            <div class="chat-input">
              <mat-form-field class="message-input">
                <input matInput placeholder="Type your message...">
              </mat-form-field>
              <button mat-raised-button color="primary">Send</button>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .chatbot-container {
      padding: 20px;
    }
    .chatbot-card {
      max-width: 800px;
      margin: 0 auto;
      height: 600px;
      display: flex;
      flex-direction: column;
    }
    .chatbot-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .chat-input {
      display: flex;
      gap: 10px;
      padding: 10px 0;
    }
    .message-input {
      flex: 1;
    }
  `]
})
export class ChatbotComponent {} 