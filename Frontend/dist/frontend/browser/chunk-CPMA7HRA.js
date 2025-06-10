import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IDO4PSKF.js";

// src/app/services/chatbot.service.ts
var ChatbotService = class _ChatbotService {
  http;
  apiUrl = "http://localhost:3000/api/chatbot";
  constructor(http) {
    this.http = http;
  }
  // Send message to chatbot
  sendMessage(message) {
    return this.http.post(`${this.apiUrl}/chat`, { message });
  }
  // Get chat history
  getChatHistory(limit = 20) {
    return this.http.get(`${this.apiUrl}/history`, {
      params: { limit: limit.toString() }
    });
  }
  // Query candidates (for employers)
  queryCandidates(query) {
    return this.http.post(`${this.apiUrl}/query/candidates`, { query });
  }
  // Query jobs (for job seekers)
  queryJobs(query) {
    return this.http.post(`${this.apiUrl}/query/jobs`, { query });
  }
  // Helper method to format chat messages for display
  formatMessage(message) {
    return message.content;
  }
  // Helper method to check if message is from user
  isUserMessage(message) {
    return message.isFromUser;
  }
  // Helper method to format timestamp
  formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  // Helper method to calculate match score percentage
  formatMatchScore(score) {
    return `${score}%`;
  }
  // Clear chat history
  clearHistory() {
    return this.http.delete(`${this.apiUrl}/history`);
  }
  static \u0275fac = function ChatbotService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatbotService, factory: _ChatbotService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ChatbotService
};
//# sourceMappingURL=chunk-CPMA7HRA.js.map
