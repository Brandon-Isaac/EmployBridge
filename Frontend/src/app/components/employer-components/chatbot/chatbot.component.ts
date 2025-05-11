import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faPaperPlane, 
  faTrash,
  faUser,
  faRobot
} from '@fortawesome/free-solid-svg-icons';
import { ChatbotService, ChatMessage, ChatResponse } from '../../../services/chatbot.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employer-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FontAwesomeModule
  ],
  template: `
    <div class="chatbot-container">
      <mat-card class="chatbot-card">
        <mat-card-header>
          <mat-card-title>AI Assistant</mat-card-title>
          <button mat-icon-button (click)="clearChat()" class="clear-button">
            <fa-icon [icon]="faTrash"></fa-icon>
          </button>
        </mat-card-header>
        <mat-card-content>
          <div class="chatbot-content">
            <div class="chat-messages" #chatMessages>
              <div *ngFor="let message of messages" 
                   [ngClass]="{'message': true, 'user-message': message.isFromUser, 'bot-message': !message.isFromUser}">
                <div class="message-icon">
                  <fa-icon [icon]="message.isFromUser ? faUser : faRobot"></fa-icon>
                </div>
                <div class="message-content">
                  <div class="message-text">{{message.content}}</div>
                  <div class="message-timestamp">{{chatbotService.formatTimestamp(message.timestamp)}}</div>
                </div>
              </div>
              <div *ngIf="isLoading" class="message bot-message">
                <div class="message-icon">
                  <fa-icon [icon]="faRobot"></fa-icon>
                </div>
                <div class="message-content">
                  <div class="message-text typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <form [formGroup]="chatForm" (ngSubmit)="sendMessage()" class="chat-input">
              <mat-form-field class="message-input">
                <input matInput 
                       formControlName="message" 
                       placeholder="Type your message..."
                       (keyup.enter)="sendMessage()">
              </mat-form-field>
              <button mat-raised-button 
                      color="primary" 
                      type="submit"
                      [disabled]="!chatForm.valid || isLoading">
                <fa-icon [icon]="faPaperPlane"></fa-icon>
              </button>
            </form>
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
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .message {
      display: flex;
      gap: 12px;
      max-width: 80%;
    }
    .user-message {
      align-self: flex-end;
      flex-direction: row-reverse;
    }
    .bot-message {
      align-self: flex-start;
    }
    .message-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e0e0e0;
    }
    .user-message .message-icon {
      background: #1976d2;
      color: white;
    }
    .bot-message .message-icon {
      background: #424242;
      color: white;
    }
    .message-content {
      background: white;
      padding: 12px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .user-message .message-content {
      background: #e3f2fd;
    }
    .message-text {
      margin-bottom: 4px;
    }
    .message-timestamp {
      font-size: 0.75rem;
      color: #666;
    }
    .chat-input {
      display: flex;
      gap: 10px;
      padding: 10px 0;
    }
    .message-input {
      flex: 1;
    }
    .clear-button {
      margin-left: auto;
    }
    .typing-indicator {
      display: flex;
      gap: 4px;
      padding: 8px 0;
    }
    .typing-indicator span {
      width: 8px;
      height: 8px;
      background: #666;
      border-radius: 50%;
      animation: typing 1s infinite ease-in-out;
    }
    .typing-indicator span:nth-child(2) {
      animation-delay: 0.2s;
    }
    .typing-indicator span:nth-child(3) {
      animation-delay: 0.4s;
    }
    @keyframes typing {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
  `]
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  messages: ChatMessage[] = [];
  chatForm: FormGroup;
  isLoading = false;

  // Font Awesome icons
  faPaperPlane = faPaperPlane;
  faTrash = faTrash;
  faUser = faUser;
  faRobot = faRobot;

  @ViewChild('chatMessages') private chatMessages!: ElementRef;

  constructor(
    public chatbotService: ChatbotService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.chatForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() {
    this.loadChatHistory();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  loadChatHistory() {
    this.chatbotService.getChatHistory().subscribe({
      next: (messages) => {
        this.messages = messages;
      },
      error: (error) => {
        console.error('Error loading chat history:', error);
        this.snackBar.open(
          'Failed to load chat history. Please try again.',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      }
    });
  }

  sendMessage() {
    if (this.chatForm.valid && !this.isLoading) {
      const message = this.chatForm.get('message')?.value;
      this.isLoading = true;
      this.chatForm.disable();

      this.chatbotService.sendMessage(message).subscribe({
        next: (response) => {
          // Add user message
          this.messages.push({
            id: Date.now().toString(),
            content: message,
            isFromUser: true,
            timestamp: new Date(),
            userId: 'current-user'
          });

          // Add bot response
          this.messages.push({
            id: (Date.now() + 1).toString(),
            content: response.response,
            isFromUser: false,
            timestamp: new Date(),
            userId: 'bot'
          });

          this.chatForm.reset();
          this.isLoading = false;
          this.chatForm.enable();
        },
        error: (error) => {
          console.error('Error sending message:', error);
          this.snackBar.open(
            'Failed to send message. Please try again.',
            'Close',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom'
            }
          );
          this.isLoading = false;
          this.chatForm.enable();
        }
      });
    }
  }

  clearChat() {
    this.chatbotService.clearHistory().subscribe({
      next: () => {
        this.messages = [];
        this.snackBar.open(
          'Chat history cleared.',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      },
      error: (error) => {
        console.error('Error clearing chat history:', error);
        this.snackBar.open(
          'Failed to clear chat history. Please try again.',
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );
      }
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) {}
  }
} 