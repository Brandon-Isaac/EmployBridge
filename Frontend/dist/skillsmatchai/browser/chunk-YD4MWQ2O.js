import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5WW65WYF.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-PKQHLY76.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import "./chunk-EEGQKQWR.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIconButton,
  NgClass,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAQJIRE2.js";

// src/app/employer/components/analytics/hiring-analytics/hiring-analytics.component.ts
var _c0 = (a0, a1) => ({ fa: true, "fa-arrow-up": a0, "fa-arrow-down": a1 });
function HiringAnalyticsComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 21)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275element(9, "i", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", metric_r1.change > 0)("negative", metric_r1.change < 0);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c0, metric_r1.change > 0, metric_r1.change < 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.value);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", metric_r1.change > 0)("negative", metric_r1.change < 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c0, metric_r1.change > 0, metric_r1.change < 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r1.change, "% ");
  }
}
function HiringAnalyticsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Position");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r2.position, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r2.department);
  }
}
function HiringAnalyticsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Applicants");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r3.applicants);
  }
}
function HiringAnalyticsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Interviews");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r4.interviews);
  }
}
function HiringAnalyticsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Offers");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r5.offers);
  }
}
function HiringAnalyticsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Hires");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r6.hires);
  }
}
function HiringAnalyticsComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Time to Hire");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r7.timeToHire, " days ");
  }
}
function HiringAnalyticsComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function HiringAnalyticsComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
var HiringAnalyticsComponent = class _HiringAnalyticsComponent {
  metrics = [
    {
      title: "Total Applications",
      value: "1,284",
      change: 12.5,
      icon: "people"
    },
    {
      title: "Interviews Scheduled",
      value: "156",
      change: 8.3,
      icon: "event"
    },
    {
      title: "Offers Extended",
      value: "32",
      change: -5.2,
      icon: "description"
    },
    {
      title: "Time to Hire",
      value: "28 days",
      change: -15.4,
      icon: "schedule"
    }
  ];
  displayedColumns = [
    "position",
    "applicants",
    "interviews",
    "offers",
    "hires",
    "timeToHire"
  ];
  jobMetrics = [
    {
      position: "Software Engineer",
      department: "Engineering",
      applicants: 245,
      interviews: 45,
      offers: 8,
      hires: 6,
      timeToHire: 32
    },
    {
      position: "Product Manager",
      department: "Product",
      applicants: 180,
      interviews: 28,
      offers: 5,
      hires: 4,
      timeToHire: 28
    },
    {
      position: "UX Designer",
      department: "Design",
      applicants: 156,
      interviews: 22,
      offers: 4,
      hires: 3,
      timeToHire: 25
    },
    {
      position: "Sales Representative",
      department: "Sales",
      applicants: 198,
      interviews: 35,
      offers: 7,
      hires: 5,
      timeToHire: 21
    }
  ];
  ngOnInit() {
  }
  static \u0275fac = function HiringAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HiringAnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HiringAnalyticsComponent, selectors: [["app-hiring-analytics"]], decls: 72, vars: 6, consts: [["timeMenu", "matMenu"], ["sourceMenu", "matMenu"], [1, "analytics-container"], [1, "metrics-grid"], ["class", "metric-card", 4, "ngFor", "ngForOf"], [1, "charts-grid"], [1, "chart-card"], ["mat-table", "", 1, "funnel-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "applicants"], ["matColumnDef", "interviews"], ["matColumnDef", "offers"], ["matColumnDef", "hires"], ["matColumnDef", "timeToHire"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", 1, "more-button", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "chart-placeholder"], [1, "metric-card"], [1, "metric-icon"], [3, "ngClass"], [1, "metric-content"], [1, "metric-title"], [1, "metric-value"], [1, "metric-change"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "department"], ["mat-header-row", ""], ["mat-row", ""]], template: function HiringAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, HiringAnalyticsComponent_mat_card_2_Template, 11, 19, "mat-card", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 5)(4, "mat-card", 6)(5, "mat-card-header")(6, "mat-card-title");
      \u0275\u0275text(7, "Hiring Funnel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-card-subtitle");
      \u0275\u0275text(9, "Last 30 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-card-content")(11, "table", 7);
      \u0275\u0275elementContainerStart(12, 8);
      \u0275\u0275template(13, HiringAnalyticsComponent_th_13_Template, 2, 0, "th", 9)(14, HiringAnalyticsComponent_td_14_Template, 4, 2, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(15, 11);
      \u0275\u0275template(16, HiringAnalyticsComponent_th_16_Template, 2, 0, "th", 9)(17, HiringAnalyticsComponent_td_17_Template, 2, 1, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(18, 12);
      \u0275\u0275template(19, HiringAnalyticsComponent_th_19_Template, 2, 0, "th", 9)(20, HiringAnalyticsComponent_td_20_Template, 2, 1, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(21, 13);
      \u0275\u0275template(22, HiringAnalyticsComponent_th_22_Template, 2, 0, "th", 9)(23, HiringAnalyticsComponent_td_23_Template, 2, 1, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(24, 14);
      \u0275\u0275template(25, HiringAnalyticsComponent_th_25_Template, 2, 0, "th", 9)(26, HiringAnalyticsComponent_td_26_Template, 2, 1, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(27, 15);
      \u0275\u0275template(28, HiringAnalyticsComponent_th_28_Template, 2, 0, "th", 9)(29, HiringAnalyticsComponent_td_29_Template, 2, 1, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(30, HiringAnalyticsComponent_tr_30_Template, 1, 0, "tr", 16)(31, HiringAnalyticsComponent_tr_31_Template, 1, 0, "tr", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "mat-card", 6)(33, "mat-card-header")(34, "mat-card-title");
      \u0275\u0275text(35, "Time to Hire Trend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-card-subtitle");
      \u0275\u0275text(37, "Average days by department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 18)(39, "mat-icon");
      \u0275\u0275text(40, "more_vert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "mat-menu", null, 0)(43, "button", 19);
      \u0275\u0275text(44, "Last 30 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 19);
      \u0275\u0275text(46, "Last 90 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 19);
      \u0275\u0275text(48, "Last 12 months");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "mat-card-content")(50, "div", 20);
      \u0275\u0275text(51, " [Time to Hire Chart Placeholder] ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "mat-card", 6)(53, "mat-card-header")(54, "mat-card-title");
      \u0275\u0275text(55, "Source Quality");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-card-subtitle");
      \u0275\u0275text(57, "Conversion rate by source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 18)(59, "mat-icon");
      \u0275\u0275text(60, "more_vert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "mat-menu", null, 1)(63, "button", 19);
      \u0275\u0275text(64, "All Sources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 19);
      \u0275\u0275text(66, "Job Boards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 19);
      \u0275\u0275text(68, "Referrals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "mat-card-content")(70, "div", 20);
      \u0275\u0275text(71, " [Source Quality Chart Placeholder] ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const timeMenu_r8 = \u0275\u0275reference(42);
      const sourceMenu_r9 = \u0275\u0275reference(62);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.metrics);
      \u0275\u0275advance(9);
      \u0275\u0275property("dataSource", ctx.jobMetrics);
      \u0275\u0275advance(19);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance(7);
      \u0275\u0275property("matMenuTriggerFor", timeMenu_r8);
      \u0275\u0275advance(20);
      \u0275\u0275property("matMenuTriggerFor", sourceMenu_r9);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
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
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatChipsModule,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ], styles: ["\n\n.analytics-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-radius: 8px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.metric-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #1976d2;\n}\n.metric-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.metric-title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 4px;\n}\n.metric-change[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n}\n.metric-change[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 20px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.funnel-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.department[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 4px;\n}\n.chart-placeholder[_ngcontent-%COMP%] {\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.6);\n  font-style: italic;\n}\n@media (max-width: 768px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=hiring-analytics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HiringAnalyticsComponent, { className: "HiringAnalyticsComponent", filePath: "src/app/employer/components/analytics/hiring-analytics/hiring-analytics.component.ts", lineNumber: 303 });
})();
export {
  HiringAnalyticsComponent
};
//# sourceMappingURL=chunk-YD4MWQ2O.js.map
