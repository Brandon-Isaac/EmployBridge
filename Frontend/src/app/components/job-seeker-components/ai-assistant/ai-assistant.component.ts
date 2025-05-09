import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatbotService, ChatMessage, ChatResponse, JobQueryResponse } from '../../../services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AiAssistantComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  
  // Font Awesome icons
  faPaperPlane = faPaperPlane;
  
  messages: ChatMessage[] = [];
  newMessage: string = '';
  isLoading: boolean = false;
  suggestedQueries: string[] = [
    "Find jobs matching my skills",
    "Show me jobs in my location",
    "What are the trending skills in my field?",
    "Help me improve my profile"
  ];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.loadChatHistory();
  }

  private loadChatHistory() {
    this.chatbotService.getChatHistory().subscribe({
      next: (history) => {
        this.messages = history;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error loading chat history:', error);
      }
    });
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: this.newMessage,
      isFromUser: true,
      timestamp: new Date(),
      userId: 'current-user' // This should be replaced with actual user ID
    };

    this.messages.push(userMessage);
    this.isLoading = true;
    const messageToSend = this.newMessage;
    this.newMessage = '';

    this.chatbotService.sendMessage(messageToSend).subscribe({
      next: (response: ChatResponse) => {
        const botMessage: ChatMessage = {
          id: Date.now().toString(),
          content: response.response,
          isFromUser: false,
          timestamp: new Date(),
          userId: 'bot'
        };
        this.messages.push(botMessage);
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.isLoading = false;
        // Add error message to chat
        this.messages.push({
          id: Date.now().toString(),
          content: 'Sorry, I encountered an error. Please try again.',
          isFromUser: false,
          timestamp: new Date(),
          userId: 'bot'
        });
      }
    });
  }

  useSuggestedQuery(query: string) {
    this.newMessage = query;
    this.sendMessage();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }

  formatTimestamp(timestamp: Date): string {
    return this.chatbotService.formatTimestamp(timestamp);
  }
} 