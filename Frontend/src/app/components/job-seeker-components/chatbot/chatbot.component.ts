import { Component, OnInit } from '@angular/core';
import { ChatbotService, ChatMessage, ChatResponse, CandidateQueryResponse, JobQueryResponse } from '../../../services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-container">
      <div class="chat-header">
        <h2>Chat Assistant</h2>
        <button class="clear-btn" (click)="clearHistory()" [disabled]="loading">
          Clear Chat History
        </button>
      </div>
      <div class="messages-container">
        <div *ngFor="let message of messages" 
             [ngClass]="{'user-message': isUserMessage(message), 'bot-message': !isUserMessage(message)}"
             class="message">
          <div class="message-content">{{ formatMessage(message) }}</div>
          <div class="message-timestamp">{{ formatTimestamp(message.timestamp) }}</div>
        </div>
      </div>
      <div class="input-container">
        <input type="text" 
               [(ngModel)]="newMessage" 
               (keyup.enter)="sendMessage(newMessage)"
               placeholder="Type your message..."
               [disabled]="loading">
        <button (click)="sendMessage(newMessage)" [disabled]="loading || !newMessage">
          Send
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 90%;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .clear-btn {
      padding: 8px 16px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .clear-btn:hover {
      background-color: #c82333;
    }

    .clear-btn:disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }

    .messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .message {
      margin-bottom: 15px;
      padding: 10px;
      border-radius: 8px;
      max-width: 80%;
    }

    .user-message {
      background-color: #007bff;
      color: white;
      margin-left: auto;
    }

    .bot-message {
      background-color: #e9ecef;
      color: #212529;
      margin-right: auto;
    }

    .message-content {
      margin-bottom: 5px;
    }

    .message-timestamp {
      font-size: 0.8em;
      opacity: 0.7;
    }

    .input-container {
      display: flex;
      gap: 10px;
    }

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ced4da;
      border-radius: 4px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    button:disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }
  `]
})
export class ChatbotComponent implements OnInit {
  messages: ChatMessage[] = [];
  loading = false;
  newMessage = '';

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.loadChatHistory();
  }

  // Load chat history
  loadChatHistory() {
    this.chatbotService.getChatHistory().subscribe({
      next: (messages) => {
        this.messages = messages;
      },
      error: (error) => {
        console.error('Error loading chat history:', error);
      }
    });
  }

  // Clear chat history
  clearHistory() {
    if (confirm('Are you sure you want to clear all chat history?')) {
      this.loading = true;
      this.chatbotService.clearHistory().subscribe({
        next: () => {
          this.messages = [];
          this.loading = false;
        },
        error: (error) => {
          console.error('Error clearing chat history:', error);
          this.loading = false;
        }
      });
    }
  }

  // Send message to chatbot
  sendMessage(message: string) {
    if (!message.trim()) return;
    
    this.loading = true;
    this.chatbotService.sendMessage(message).subscribe({
      next: (response: ChatResponse) => {
        this.loadChatHistory(); // Reload messages to get the updated history
        this.newMessage = ''; // Clear input
        this.loading = false;
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.loading = false;
      }
    });
  }

  // Query candidates (for employers)
  searchCandidates(query: string) {
    this.chatbotService.queryCandidates(query).subscribe({
      next: (response: CandidateQueryResponse) => {
        console.log('Search summary:', response.summary);
        console.log('Found candidates:', response.candidates);
        console.log('Applied filters:', response.filters);
      },
      error: (error) => {
        console.error('Error searching candidates:', error);
      }
    });
  }

  // Query jobs (for job seekers)
  searchJobs(query: string) {
    this.chatbotService.queryJobs(query).subscribe({
      next: (response: JobQueryResponse) => {
        console.log('Search summary:', response.summary);
        console.log('Found jobs:', response.jobs);
        console.log('Applied filters:', response.filters);
      },
      error: (error) => {
        console.error('Error searching jobs:', error);
      }
    });
  }

  // Format message for display
  formatMessage(message: ChatMessage): string {
    return this.chatbotService.formatMessage(message);
  }

  // Check if message is from user
  isUserMessage(message: ChatMessage): boolean {
    return this.chatbotService.isUserMessage(message);
  }

  // Format timestamp
  formatTimestamp(timestamp: Date): string {
    return this.chatbotService.formatTimestamp(timestamp);
  }

  // Format match score
  formatMatchScore(score: number): string {
    return this.chatbotService.formatMatchScore(score);
  }
}