import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-3JPVUUIX.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-3DCVMGSB.js";
import "./chunk-VAADXG4L.js";
import {
  MatFormFieldModule
} from "./chunk-GPGOCT2X.js";
import "./chunk-56ZLA7LI.js";
import "./chunk-YKUVITQE.js";
import "./chunk-F5FUW2P7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-BZ6GK7LR.js";
import "./chunk-JCHFAW36.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import {
  MatIconModule
} from "./chunk-MI43YKTU.js";
import {
  MatFormField,
  MatLabel,
  MatSuffix
} from "./chunk-2LWENGE2.js";
import {
  FormsModule
} from "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UOKCMW7L.js";

// src/app/job-seeker/components/job-search/job-search.component.ts
function JobSearchComponent_mat_card_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "div", 22);
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275element(11, "i", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275element(14, "i", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 27);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 28)(19, "button", 29);
    \u0275\u0275element(20, "i", 30);
    \u0275\u0275text(21, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 31);
    \u0275\u0275element(23, "i", 32);
    \u0275\u0275text(24, " Apply Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.company);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r1.location, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r1.type, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r1.salary, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r1.description);
  }
}
var JobSearchComponent = class _JobSearchComponent {
  sampleJobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full Time",
      salary: "$120,000 - $150,000",
      description: "We are looking for an experienced Frontend Developer to join our team..."
    },
    {
      title: "Backend Engineer",
      company: "DataSystems Ltd.",
      location: "New York, NY",
      type: "Full Time",
      salary: "$130,000 - $160,000",
      description: "Join our backend team to build scalable and efficient systems..."
    },
    {
      title: "UI/UX Designer",
      company: "CreativeMinds",
      location: "San Francisco, CA",
      type: "Contract",
      salary: "$90,000 - $110,000",
      description: "Looking for a creative UI/UX designer to enhance our product experience..."
    }
  ];
  static \u0275fac = function JobSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobSearchComponent, selectors: [["app-job-search"]], decls: 37, vars: 1, consts: [[1, "job-search-container"], [1, "search-filters"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Job title, keywords, or company"], ["mat-icon-button", "", "matSuffix", ""], [1, "fas", "fa-search"], ["appearance", "outline", 1, "location-field"], ["matInput", "", "placeholder", "City, state, or remote"], [1, "fas", "fa-map-marker-alt"], ["appearance", "outline", 1, "job-type-field"], ["value", "full-time"], ["value", "part-time"], ["value", "contract"], ["value", "internship"], ["value", "remote"], [1, "search-results"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title"], [1, "job-company"], [1, "job-details"], [1, "job-location"], [1, "job-type"], [1, "fas", "fa-briefcase"], [1, "job-salary"], [1, "fas", "fa-dollar-sign"], [1, "job-description"], [1, "job-actions"], ["mat-button", "", "color", "primary"], [1, "fas", "fa-eye"], ["mat-button", "", "color", "accent"], [1, "fas", "fa-paper-plane"]], template: function JobSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Job Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Find your next career opportunity");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 1)(9, "mat-form-field", 2)(10, "mat-label");
      \u0275\u0275text(11, "Search Jobs");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 3);
      \u0275\u0275elementStart(13, "button", 4);
      \u0275\u0275element(14, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "mat-form-field", 6)(16, "mat-label");
      \u0275\u0275text(17, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 7);
      \u0275\u0275elementStart(19, "button", 4);
      \u0275\u0275element(20, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "mat-form-field", 9)(22, "mat-label");
      \u0275\u0275text(23, "Job Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-select")(25, "mat-option", 10);
      \u0275\u0275text(26, "Full Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-option", 11);
      \u0275\u0275text(28, "Part Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-option", 12);
      \u0275\u0275text(30, "Contract");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-option", 13);
      \u0275\u0275text(32, "Internship");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-option", 14);
      \u0275\u0275text(34, "Remote");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 15);
      \u0275\u0275template(36, JobSearchComponent_mat_card_36_Template, 25, 6, "mat-card", 16);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(36);
      \u0275\u0275property("ngForOf", ctx.sampleJobs);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatFormFieldModule,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatIconModule,
    FormsModule
  ], styles: ["\n\n.job-search-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.search-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 300px;\n}\n.location-field[_ngcontent-%COMP%], \n.job-type-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.search-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.job-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.job-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.job-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.job-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #1976d2;\n}\n.job-company[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.job-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.job-location[_ngcontent-%COMP%], \n.job-type[_ngcontent-%COMP%], \n.job-salary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n  color: #666;\n}\n.job-description[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #333;\n}\n.job-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=job-search.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobSearchComponent, { className: "JobSearchComponent", filePath: "src/app/job-seeker/components/job-search/job-search.component.ts", lineNumber: 189 });
})();
export {
  JobSearchComponent
};
//# sourceMappingURL=chunk-NGKN5OKA.js.map
