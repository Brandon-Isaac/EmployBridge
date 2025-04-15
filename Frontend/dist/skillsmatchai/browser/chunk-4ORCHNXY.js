import {
  MatSortModule
} from "./chunk-Z22D7VWX.js";
import {
  MatPaginatorModule
} from "./chunk-2IAWOW2A.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5WW65WYF.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-2VSBSU4O.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CR7B3LEX.js";
import {
  MatTableModule
} from "./chunk-PKQHLY76.js";
import {
  MatTooltipModule
} from "./chunk-2XNMZTMP.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NSIWRWDC.js";
import "./chunk-VLHMKKTI.js";
import {
  MatFormFieldModule
} from "./chunk-R45PVQ3E.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-EEGQKQWR.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import {
  FormsModule,
  MatFormField,
  MatLabel
} from "./chunk-ZTFMCIUB.js";
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
  MatIconButton,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAQJIRE2.js";

// src/app/employer/components/view-candidates/view-candidates.component.ts
function ViewCandidatesComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275property("value", skill_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r1, " ");
  }
}
function ViewCandidatesComponent_mat_card_24_mat_chip_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function ViewCandidatesComponent_mat_card_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 13)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "mat-chip-set");
    \u0275\u0275template(14, ViewCandidatesComponent_mat_card_24_mat_chip_14_Template, 2, 1, "mat-chip", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 16)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "mat-progress-bar", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-card-actions")(20, "button", 18);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_24_Template_button_click_20_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewProfile(candidate_r4));
    });
    \u0275\u0275text(21, " View Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 19);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_24_Template_button_click_22_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.scheduleInterview(candidate_r4));
    });
    \u0275\u0275text(23, " Schedule Interview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 20);
    \u0275\u0275element(25, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-menu", null, 0)(28, "button", 22);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_24_Template_button_click_28_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadResume(candidate_r4));
    });
    \u0275\u0275text(29, " Download Resume ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 22);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_24_Template_button_click_30_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.sendMessage(candidate_r4));
    });
    \u0275\u0275text(31, " Send Message ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 22);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_24_Template_button_click_32_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.rejectCandidate(candidate_r4));
    });
    \u0275\u0275text(33, " Reject ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    const menu_r6 = \u0275\u0275reference(27);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(candidate_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(candidate_r4.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", candidate_r4.experience, " years of experience");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", candidate_r4.skills);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Match Score: ", candidate_r4.matchScore, "%");
    \u0275\u0275advance();
    \u0275\u0275property("mode", "determinate")("value", candidate_r4.matchScore);
    \u0275\u0275advance(6);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
  }
}
var ViewCandidatesComponent = class _ViewCandidatesComponent {
  availableSkills = [
    "Angular",
    "React",
    "Vue",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "SQL",
    "AWS",
    "Azure"
  ];
  candidates = [
    {
      id: "1",
      name: "John Doe",
      title: "Senior Frontend Developer",
      location: "New York, NY",
      experience: 5,
      matchScore: 95,
      skills: ["Angular", "TypeScript", "RxJS", "NgRx"],
      status: "New"
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      experience: 3,
      matchScore: 88,
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      status: "Reviewed"
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  viewProfile(candidate) {
    console.log("Viewing profile:", candidate);
  }
  scheduleInterview(candidate) {
    console.log("Scheduling interview for:", candidate);
  }
  downloadResume(candidate) {
    console.log("Downloading resume for:", candidate);
  }
  sendMessage(candidate) {
    console.log("Sending message to:", candidate);
  }
  rejectCandidate(candidate) {
    console.log("Rejecting candidate:", candidate);
  }
  static \u0275fac = function ViewCandidatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCandidatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCandidatesComponent, selectors: [["app-view-candidates"]], decls: 25, vars: 2, consts: [["menu", "matMenu"], [1, "view-candidates-container"], [1, "filters"], ["matInput", "", "placeholder", "Search candidates..."], ["multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "entry"], ["value", "mid"], ["value", "senior"], [1, "candidates-list"], ["class", "candidate-card", 4, "ngFor", "ngForOf"], [3, "value"], [1, "candidate-card"], [1, "candidate-info"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "match-score"], [3, "mode", "value"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click"]], template: function ViewCandidatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h2");
      \u0275\u0275text(2, "View Candidates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "mat-form-field")(5, "mat-label");
      \u0275\u0275text(6, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-form-field")(9, "mat-label");
      \u0275\u0275text(10, "Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-select", 4);
      \u0275\u0275template(12, ViewCandidatesComponent_mat_option_12_Template, 2, 2, "mat-option", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "mat-form-field")(14, "mat-label");
      \u0275\u0275text(15, "Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-select")(17, "mat-option", 6);
      \u0275\u0275text(18, "Entry Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-option", 7);
      \u0275\u0275text(20, "Mid Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-option", 8);
      \u0275\u0275text(22, "Senior Level");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 9);
      \u0275\u0275template(24, ViewCandidatesComponent_mat_card_24_Template, 34, 9, "mat-card", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.availableSkills);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.candidates);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    FormsModule,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule
  ], styles: ["\n\n.view-candidates-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.candidates-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.candidate-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.skills[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.match-score[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=view-candidates.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCandidatesComponent, { className: "ViewCandidatesComponent", filePath: "src/app/employer/components/view-candidates/view-candidates.component.ts", lineNumber: 166 });
})();
export {
  ViewCandidatesComponent
};
//# sourceMappingURL=chunk-4ORCHNXY.js.map
