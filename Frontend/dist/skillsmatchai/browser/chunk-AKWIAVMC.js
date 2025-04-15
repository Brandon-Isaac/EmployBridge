import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CR7B3LEX.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NSIWRWDC.js";
import "./chunk-VLHMKKTI.js";
import {
  MatFormFieldModule
} from "./chunk-R45PVQ3E.js";
import "./chunk-OIZAD6NR.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatFormField,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgModel
} from "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  DatePipe,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIconButton,
  NgForOf,
  NgIf,
  __async,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IAQJIRE2.js";

// src/app/job-seeker/components/chatbot/chatbot.component.ts
function ChatbotComponent_div_9_mat_progress_bar_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 15);
  }
}
function ChatbotComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ChatbotComponent_div_9_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    \u0275\u0275classMap("message " + message_r1.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r1.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, message_r1.timestamp, "shortTime"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", message_r1.loading);
  }
}
function ChatbotComponent_mat_chip_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 16);
    \u0275\u0275listener("click", function ChatbotComponent_mat_chip_12_Template_mat_chip_click_0_listener() {
      const query_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.sendMessage(query_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const query_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", query_r3, " ");
  }
}
var ChatbotComponent = class _ChatbotComponent {
  userInput = "";
  messages = [];
  suggestedQueries = [
    "Show me my skill progress",
    "What are my top skills?",
    "Which skills need improvement?",
    "Compare my skills with job requirements"
  ];
  constructor() {
    this.messages.push({
      type: "bot",
      content: "Hello! I can help you analyze your skills and career data. What would you like to know?",
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  sendMessage(message) {
    return __async(this, null, function* () {
      if (!message.trim())
        return;
      this.messages.push({
        type: "user",
        content: message,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.userInput = "";
      const loadingMessage = {
        type: "bot",
        content: "Thinking...",
        timestamp: /* @__PURE__ */ new Date(),
        loading: true
      };
      this.messages.push(loadingMessage);
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
      this.messages = this.messages.filter((m) => m !== loadingMessage);
      this.messages.push({
        type: "bot",
        content: this.generateResponse(message),
        timestamp: /* @__PURE__ */ new Date()
      });
    });
  }
  generateResponse(query) {
    const responses = {
      "Show me my skill progress": "Your skill progress shows significant improvement in JavaScript (85%) and Angular (80%). Your soft skills are also developing well.",
      "What are my top skills": "Your top skills are: JavaScript (90%), Communication (95%), and Team Leadership (80%).",
      "Which skills need improvement": "Based on your profile, you could improve: AWS (70%), System Design (65%), and Project Management (75%).",
      "Compare my skills with job requirements": "Your skills match 85% of the requirements for Senior Frontend Developer positions. You excel in technical skills but could improve in cloud technologies."
    };
    return responses[query] || "I can help you analyze your skills and career data. Try asking about your skill progress, top skills, or areas for improvement.";
  }
  static \u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], decls: 21, vars: 3, consts: [[1, "chatbot-container"], [1, "chatbot-card"], [1, "chat-content"], [1, "messages-container"], [3, "class", 4, "ngFor", "ngForOf"], [1, "suggested-queries"], [3, "click", 4, "ngFor", "ngForOf"], [1, "input-container"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "e.g., Show me my skill progress", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "message-content"], [1, "message-text"], [1, "message-time"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"], [3, "click"]], template: function ChatbotComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Database Query Assistant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Ask questions about your data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content", 2)(8, "div", 3);
      \u0275\u0275template(9, ChatbotComponent_div_9_Template, 8, 8, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "mat-chip-set");
      \u0275\u0275template(12, ChatbotComponent_mat_chip_12_Template, 2, 1, "mat-chip", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "mat-form-field", 8)(15, "mat-label");
      \u0275\u0275text(16, "Type your question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ChatbotComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.userInput, $event) || (ctx.userInput = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ChatbotComponent_Template_input_keyup_enter_17_listener() {
        return ctx.sendMessage(ctx.userInput);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 10);
      \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_18_listener() {
        return ctx.sendMessage(ctx.userInput);
      });
      \u0275\u0275elementStart(19, "mat-icon");
      \u0275\u0275text(20, "send");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.messages);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.suggestedQueries);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.userInput);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    DatePipe,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatFormFieldModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar
  ], styles: ["\n\n.chatbot-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.chatbot-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.chat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  padding: 16px;\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  margin-bottom: 16px;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n}\n.message[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  max-width: 80%;\n}\n.message.user[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.message.bot[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.message-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.message.user[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n}\n.message-text[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  text-align: right;\n}\n.suggested-queries[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-chip[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmat-chip[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n/*# sourceMappingURL=chatbot.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src/app/job-seeker/components/chatbot/chatbot.component.ts", lineNumber: 177 });
})();
export {
  ChatbotComponent
};
//# sourceMappingURL=chunk-AKWIAVMC.js.map
