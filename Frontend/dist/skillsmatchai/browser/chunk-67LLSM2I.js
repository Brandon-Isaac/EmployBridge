import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-OJ6TRDLY.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-2YKV2DJK.js";
import {
  MatIconModule
} from "./chunk-MI43YKTU.js";
import "./chunk-2LWENGE2.js";
import "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  CommonModule,
  DatePipe,
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UOKCMW7L.js";

// src/app/job-seeker/components/job-matches/job-matches.component.ts
function JobMatchesComponent_mat_card_4_mat_chip_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r2, " ");
  }
}
function JobMatchesComponent_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-progress-bar", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "mat-chip-set");
    \u0275\u0275template(13, JobMatchesComponent_mat_card_4_mat_chip_13_Template, 2, 1, "mat-chip", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-card-actions")(18, "button", 9);
    \u0275\u0275listener("click", function JobMatchesComponent_mat_card_4_Template_button_click_18_listener() {
      const job_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewJobDetails(job_r3));
    });
    \u0275\u0275text(19, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 10);
    \u0275\u0275listener("click", function JobMatchesComponent_mat_card_4_Template_button_click_20_listener() {
      const job_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyForJob(job_r3));
    });
    \u0275\u0275text(21, " Apply Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", job_r3.company, " - ", job_r3.location, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Match Score: ", job_r3.matchScore, "%");
    \u0275\u0275advance();
    \u0275\u0275property("mode", "determinate")("value", job_r3.matchScore);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", job_r3.skills);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Posted: ", \u0275\u0275pipeBind1(16, 8, job_r3.postedDate), "");
  }
}
var JobMatchesComponent = class _JobMatchesComponent {
  jobMatches = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "New York, NY",
      matchScore: 95,
      skills: ["Angular", "TypeScript", "RxJS", "NgRx"],
      postedDate: /* @__PURE__ */ new Date("2024-03-15")
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "InnovateTech",
      location: "San Francisco, CA",
      matchScore: 88,
      skills: ["Angular", "Node.js", "MongoDB", "AWS"],
      postedDate: /* @__PURE__ */ new Date("2024-03-10")
    },
    {
      id: "3",
      title: "UI/UX Developer",
      company: "DesignHub",
      location: "Chicago, IL",
      matchScore: 82,
      skills: ["Angular", "SCSS", "Figma", "UI/UX"],
      postedDate: /* @__PURE__ */ new Date("2024-03-05")
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  viewJobDetails(job) {
    console.log("Viewing job details:", job);
  }
  applyForJob(job) {
    console.log("Applying for job:", job);
  }
  static \u0275fac = function JobMatchesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobMatchesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobMatchesComponent, selectors: [["app-job-matches"]], decls: 5, vars: 1, consts: [[1, "job-matches-container"], [1, "job-list"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "match-score"], [3, "mode", "value"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "posted-date"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"]], template: function JobMatchesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Your Job Matches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275template(4, JobMatchesComponent_mat_card_4_Template, 22, 10, "mat-card", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.jobMatches);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    DatePipe,
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
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar
  ], styles: ["\n\n.job-matches-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.job-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.job-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.match-score[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.skills[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.posted-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9em;\n  margin-top: 10px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n/*# sourceMappingURL=job-matches.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobMatchesComponent, { className: "JobMatchesComponent", filePath: "src/app/job-seeker/components/job-matches/job-matches.component.ts", lineNumber: 107 });
})();
export {
  JobMatchesComponent
};
//# sourceMappingURL=chunk-67LLSM2I.js.map
