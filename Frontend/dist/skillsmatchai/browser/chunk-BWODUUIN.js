import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-YZ6GIE3H.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-3QCHWOEP.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import {
  MatIconModule
} from "./chunk-E6YAXSQU.js";
import "./chunk-255VWD3Z.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJVFXHEQ.js";

// src/app/job-seeker/components/interviews/interviews.component.ts
function InterviewsComponent_mat_card_10_div_21_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const material_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", material_r1, " ");
  }
}
function InterviewsComponent_mat_card_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h4");
    \u0275\u0275text(2, "Preparation Materials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, InterviewsComponent_mat_card_10_div_21_li_4_Template, 2, 1, "li", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", interview_r2.preparationMaterials);
  }
}
function InterviewsComponent_mat_card_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h4");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r2.notes);
  }
}
function InterviewsComponent_mat_card_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 6)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-chip-set")(7, "mat-chip", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 8)(11, "div", 9)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(20, "mat-divider");
    \u0275\u0275template(21, InterviewsComponent_mat_card_10_div_21_Template, 5, 1, "div", 10)(22, InterviewsComponent_mat_card_10_div_22_Template, 5, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-card-actions")(24, "button", 12);
    \u0275\u0275text(25, "Join Meeting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 12);
    \u0275\u0275text(27, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 13);
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const interview_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r2.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r2.company);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r2.getStatusColor(interview_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r2.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(interview_r2.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r2.time);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", interview_r2.preparationMaterials);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r2.notes);
  }
}
function InterviewsComponent_mat_card_13_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h4");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(interview_r4.notes);
  }
}
function InterviewsComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 6)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-chip-set")(7, "mat-chip", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 8)(11, "div", 9)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "mat-divider");
    \u0275\u0275template(18, InterviewsComponent_mat_card_13_div_18_Template, 5, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-card-actions")(20, "button", 12);
    \u0275\u0275text(21, "View Feedback");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const interview_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interview_r4.company);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r2.getStatusColor(interview_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r4.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(interview_r4.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interview_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", interview_r4.notes);
  }
}
var InterviewsComponent = class _InterviewsComponent {
  upcomingInterviews = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Senior Frontend Developer",
      date: "2024-03-20",
      time: "10:00 AM",
      type: "Technical",
      status: "Scheduled",
      preparationMaterials: [
        "Review Angular fundamentals",
        "Practice system design questions",
        "Prepare questions about team structure"
      ],
      notes: "Focus on recent projects and team leadership experience"
    },
    {
      id: 2,
      company: "Innovation Labs",
      position: "Full Stack Engineer",
      date: "2024-03-22",
      time: "2:00 PM",
      type: "Culture Fit",
      status: "Scheduled",
      preparationMaterials: [
        "Research company values",
        "Prepare collaboration examples"
      ]
    }
  ];
  pastInterviews = [
    {
      id: 3,
      company: "Digital Solutions Inc",
      position: "Frontend Developer",
      date: "2024-03-15",
      time: "11:00 AM",
      type: "Technical",
      status: "Completed",
      notes: "Positive feedback on technical skills, follow-up expected"
    },
    {
      id: 4,
      company: "StartUp Co",
      position: "UI Developer",
      date: "2024-03-10",
      time: "3:00 PM",
      type: "HR",
      status: "Completed",
      notes: "Discussion about remote work policies and team structure"
    }
  ];
  getStatusColor(status) {
    switch (status) {
      case "Scheduled":
        return "primary";
      case "Completed":
        return "accent";
      case "Cancelled":
        return "warn";
      default:
        return "";
    }
  }
  static \u0275fac = function InterviewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterviewsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InterviewsComponent, selectors: [["app-interviews"]], decls: 14, vars: 2, consts: [[1, "interviews-container"], [1, "header-card"], ["label", "Upcoming Interviews"], [1, "interview-list"], ["class", "interview-card", 4, "ngFor", "ngForOf"], ["label", "Past Interviews"], [1, "interview-card"], ["selected", "", 3, "color"], [1, "interview-details"], [1, "detail-item"], ["class", "preparation-section", 4, "ngIf"], ["class", "notes-section", 4, "ngIf"], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "warn"], [1, "preparation-section"], [4, "ngFor", "ngForOf"], [1, "notes-section"]], template: function InterviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Interviews");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Manage your interviews and preparation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "mat-tab-group")(8, "mat-tab", 2)(9, "div", 3);
      \u0275\u0275template(10, InterviewsComponent_mat_card_10_Template, 30, 9, "mat-card", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "mat-tab", 5)(12, "div", 3);
      \u0275\u0275template(13, InterviewsComponent_mat_card_13_Template, 22, 7, "mat-card", 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.upcomingInterviews);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.pastInterviews);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatTabsModule,
    MatTab,
    MatTabGroup,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatDividerModule,
    MatDivider
  ], styles: ["\n\n.interviews-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.interview-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.interview-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.interview-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin: 16px 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.preparation-section[_ngcontent-%COMP%], \n.notes-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.preparation-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.notes-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n.preparation-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0;\n}\n.preparation-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.notes-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  line-height: 1.5;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: flex;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .interview-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=interviews.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InterviewsComponent, { className: "InterviewsComponent", filePath: "src/app/job-seeker/components/interviews/interviews.component.ts", lineNumber: 233 });
})();
export {
  InterviewsComponent
};
//# sourceMappingURL=chunk-BWODUUIN.js.map
