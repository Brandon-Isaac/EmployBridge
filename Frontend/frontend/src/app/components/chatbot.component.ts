import { Component, OnInit } from '@angular/core';
import { ChatbotService, ChatMessage, ChatResponse, CandidateQueryResponse, JobQueryResponse } from '../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  template: '...'
})
export class ChatbotComponent implements OnInit {
  messages: ChatMessage[] = [];
  loading = false;

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

  // Send message to chatbot
  sendMessage(message: string) {
    this.loading = true;
    this.chatbotService.sendMessage(message).subscribe({
      next: (response: ChatResponse) => {
        // Handle response
        console.log('Bot response:', response.response);
        console.log('Context:', response.context);
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