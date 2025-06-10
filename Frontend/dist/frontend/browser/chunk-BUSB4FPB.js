import {
  ChatbotService
} from "./chunk-CPMA7HRA.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5QZTZ3GT.js";
import {
  MatIconModule
} from "./chunk-LH77XFOL.js";
import {
  MatFormFieldModule
} from "./chunk-42HARFSR.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FaIconComponent,
  FontAwesomeModule,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatFormField,
  MatIconButton,
  MatSnackBar,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  Validators,
  ViewChild,
  faPaperPlane,
  faRobot,
  faTrash,
  faUser,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/chatbot/chatbot.component.ts
var _c0 = ["chatMessages"];
var _c1 = (a0, a1) => ({ "message": true, "user-message": a0, "bot-message": a1 });
function ChatbotComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "fa-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c1, message_r2.isFromUser, !message_r2.isFromUser));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", message_r2.isFromUser ? ctx_r2.faUser : ctx_r2.faRobot);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r2.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.chatbotService.formatTimestamp(message_r2.timestamp));
  }
}
function ChatbotComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 14);
    \u0275\u0275element(2, "fa-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 19);
    \u0275\u0275element(5, "span")(6, "span")(7, "span");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faRobot);
  }
}
var ChatbotComponent = class _ChatbotComponent {
  chatbotService;
  formBuilder;
  snackBar;
  messages = [];
  chatForm;
  isLoading = false;
  // Font Awesome icons
  faPaperPlane = faPaperPlane;
  faTrash = faTrash;
  faUser = faUser;
  faRobot = faRobot;
  chatMessages;
  constructor(chatbotService, formBuilder, snackBar) {
    this.chatbotService = chatbotService;
    this.formBuilder = formBuilder;
    this.snackBar = snackBar;
    this.chatForm = this.formBuilder.group({
      message: ["", [Validators.required, Validators.minLength(1)]]
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
        console.error("Error loading chat history:", error);
        this.snackBar.open("Failed to load chat history. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  sendMessage() {
    if (this.chatForm.valid && !this.isLoading) {
      const message = this.chatForm.get("message")?.value;
      this.isLoading = true;
      this.chatForm.disable();
      this.chatbotService.sendMessage(message).subscribe({
        next: (response) => {
          this.messages.push({
            id: Date.now().toString(),
            content: message,
            isFromUser: true,
            timestamp: /* @__PURE__ */ new Date(),
            userId: "current-user"
          });
          this.messages.push({
            id: (Date.now() + 1).toString(),
            content: response.response,
            isFromUser: false,
            timestamp: /* @__PURE__ */ new Date(),
            userId: "bot"
          });
          this.chatForm.reset();
          this.isLoading = false;
          this.chatForm.enable();
        },
        error: (error) => {
          console.error("Error sending message:", error);
          this.snackBar.open("Failed to send message. Please try again.", "Close", {
            duration: 5e3,
            horizontalPosition: "center",
            verticalPosition: "bottom"
          });
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
        this.snackBar.open("Chat history cleared.", "Close", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      },
      error: (error) => {
        console.error("Error clearing chat history:", error);
        this.snackBar.open("Failed to clear chat history. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  scrollToBottom() {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
  static \u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotComponent)(\u0275\u0275directiveInject(ChatbotService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-employer-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatMessages = _t.first);
    }
  }, decls: 18, vars: 6, consts: [["chatMessages", ""], [1, "chatbot-container"], [1, "chatbot-card"], ["mat-icon-button", "", 1, "clear-button", 3, "click"], [3, "icon"], [1, "chatbot-content"], [1, "chat-messages"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "message bot-message", 4, "ngIf"], [1, "chat-input", 3, "ngSubmit", "formGroup"], [1, "message-input"], ["matInput", "", "formControlName", "message", "placeholder", "Type your message...", 3, "keyup.enter"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "ngClass"], [1, "message-icon"], [1, "message-content"], [1, "message-text"], [1, "message-timestamp"], [1, "message", "bot-message"], [1, "message-text", "typing-indicator"]], template: function ChatbotComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "AI Assistant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearChat());
      });
      \u0275\u0275element(6, "fa-icon", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 5)(9, "div", 6, 0);
      \u0275\u0275template(11, ChatbotComponent_div_11_Template, 8, 7, "div", 7)(12, ChatbotComponent_div_12_Template, 8, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "form", 9);
      \u0275\u0275listener("ngSubmit", function ChatbotComponent_Template_form_ngSubmit_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275elementStart(14, "mat-form-field", 10)(15, "input", 11);
      \u0275\u0275listener("keyup.enter", function ChatbotComponent_Template_input_keyup_enter_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 12);
      \u0275\u0275element(17, "fa-icon", 4);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("icon", ctx.faTrash);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.messages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.chatForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.chatForm.valid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faPaperPlane);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatIconModule,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.chatbot-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.chatbot-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n}\n.chatbot-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  max-width: 80%;\n}\n.user-message[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.bot-message[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.message-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e0e0e0;\n}\n.user-message[_ngcontent-%COMP%]   .message-icon[_ngcontent-%COMP%] {\n  background: #1976d2;\n  color: white;\n}\n.bot-message[_ngcontent-%COMP%]   .message-icon[_ngcontent-%COMP%] {\n  background: #424242;\n  color: white;\n}\n.message-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.user-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.message-text[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.message-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 0;\n}\n.message-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.clear-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 8px 0;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #666;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_typing 1s infinite ease-in-out;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n/*# sourceMappingURL=chatbot.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotComponent, [{
    type: Component,
    args: [{ selector: "app-employer-chatbot", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatIconModule,
      FontAwesomeModule
    ], template: `
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
  `, styles: ["/* angular:styles/component:css;7ee30fd95c43273c6685ec15496684f7ecebc6e4d3e473d2f6acf583eb872003;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/chatbot/chatbot.component.ts */\n.chatbot-container {\n  padding: 20px;\n}\n.chatbot-card {\n  max-width: 800px;\n  margin: 0 auto;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n}\n.chatbot-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.message {\n  display: flex;\n  gap: 12px;\n  max-width: 80%;\n}\n.user-message {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.bot-message {\n  align-self: flex-start;\n}\n.message-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e0e0e0;\n}\n.user-message .message-icon {\n  background: #1976d2;\n  color: white;\n}\n.bot-message .message-icon {\n  background: #424242;\n  color: white;\n}\n.message-content {\n  background: white;\n  padding: 12px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.user-message .message-content {\n  background: #e3f2fd;\n}\n.message-text {\n  margin-bottom: 4px;\n}\n.message-timestamp {\n  font-size: 0.75rem;\n  color: #666;\n}\n.chat-input {\n  display: flex;\n  gap: 10px;\n  padding: 10px 0;\n}\n.message-input {\n  flex: 1;\n}\n.clear-button {\n  margin-left: auto;\n}\n.typing-indicator {\n  display: flex;\n  gap: 4px;\n  padding: 8px 0;\n}\n.typing-indicator span {\n  width: 8px;\n  height: 8px;\n  background: #666;\n  border-radius: 50%;\n  animation: typing 1s infinite ease-in-out;\n}\n.typing-indicator span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes typing {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n/*# sourceMappingURL=chatbot.component.css.map */\n"] }]
  }], () => [{ type: ChatbotService }, { type: FormBuilder }, { type: MatSnackBar }], { chatMessages: [{
    type: ViewChild,
    args: ["chatMessages"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src/app/components/employer-components/chatbot/chatbot.component.ts", lineNumber: 193 });
})();
export {
  ChatbotComponent
};
//# sourceMappingURL=chunk-BUSB4FPB.js.map
