import {
  MatSortModule
} from "./chunk-2ZHORGRM.js";
import {
  MatPaginatorModule
} from "./chunk-RU77PWH7.js";
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
} from "./chunk-WO2JAH5L.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BYBXKYVJ.js";
import {
  MatSelectModule
} from "./chunk-3JPVUUIX.js";
import {
  MatInputModule
} from "./chunk-3DCVMGSB.js";
import "./chunk-VAADXG4L.js";
import {
  MatFormFieldModule
} from "./chunk-GPGOCT2X.js";
import "./chunk-56ZLA7LI.js";
import "./chunk-YKUVITQE.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-DCF6DFJ3.js";
import {
  MatBadgeModule
} from "./chunk-6X7YSIAV.js";
import {
  MatTooltipModule
} from "./chunk-WFY74L52.js";
import {
  MatTabsModule
} from "./chunk-J7OZMAM5.js";
import "./chunk-F5FUW2P7.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-BZ6GK7LR.js";
import "./chunk-JCHFAW36.js";
import {
  MatDividerModule
} from "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-OJ6TRDLY.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-2YKV2DJK.js";
import "./chunk-2LWENGE2.js";
import "./chunk-LSJFNPXS.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UOKCMW7L.js";

// src/app/employer/components/analytics/hiring-analytics/hiring-analytics.component.ts
function HiringAnalyticsComponent_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 33);
    \u0275\u0275listener("mouseenter", function HiringAnalyticsComponent_mat_card_6_Template_mat_card_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cardState = "hovered");
    })("mouseleave", function HiringAnalyticsComponent_mat_card_6_Template_mat_card_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cardState = "normal");
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 38);
    \u0275\u0275element(9, "i");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "absolute");
    \u0275\u0275elementStart(12, "span", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--card-color", metric_r3.color);
    \u0275\u0275property("@fadeIn", void 0)("@cardHover", ctx_r1.cardState);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", metric_r3.color + "20");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getMetricIcon(metric_r3.icon));
    \u0275\u0275styleProp("color", metric_r3.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r3.value);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", metric_r3.change > 0)("negative", metric_r3.change < 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(metric_r3.change > 0 ? "fas fa-arrow-trend-up" : "fas fa-arrow-trend-down");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, metric_r3.change), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r3.change > 0 ? "Increase" : "Decrease");
  }
}
function HiringAnalyticsComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Position");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r4.department);
  }
}
function HiringAnalyticsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Applicants");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r5.applicants);
  }
}
function HiringAnalyticsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Interviews");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r6.interviews);
  }
}
function HiringAnalyticsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Offers");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r7.offers);
  }
}
function HiringAnalyticsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Hires");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r8.hires);
  }
}
function HiringAnalyticsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Time to Hire");
    \u0275\u0275elementEnd();
  }
}
function HiringAnalyticsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "mat-chip-set")(4, "mat-chip", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const job_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", job_r9.timeToHire, " days ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getTimeChipClass(job_r9.timeToHire));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTimeChipLabel(job_r9.timeToHire), " ");
  }
}
function HiringAnalyticsComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function HiringAnalyticsComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275classProp("highlight-row", row_r10.hires > 0);
  }
}
function HiringAnalyticsComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", dept_r11.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", dept_r11.name, " (", dept_r11.avgDays, " days) ");
  }
}
function HiringAnalyticsComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-progress-bar", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(source_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", source_r12.rate, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getRateClass(source_r12.rate));
    \u0275\u0275property("value", source_r12.rate);
  }
}
var AbsolutePipe = class _AbsolutePipe {
  transform(value) {
    return Math.abs(value);
  }
  static \u0275fac = function AbsolutePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbsolutePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "absolute", type: _AbsolutePipe, pure: true });
};
var HiringAnalyticsComponent = class _HiringAnalyticsComponent {
  cardState = "normal";
  metrics = [
    {
      title: "Total Applications",
      value: "1,284",
      change: 12.5,
      icon: "people",
      color: "#4e54c8"
    },
    {
      title: "Interviews Scheduled",
      value: "156",
      change: 8.3,
      icon: "event",
      color: "#2196f3"
    },
    {
      title: "Offers Extended",
      value: "32",
      change: -5.2,
      icon: "description",
      color: "#ff9800"
    },
    {
      title: "Time to Hire",
      value: "28 days",
      change: -15.4,
      icon: "schedule",
      color: "#4caf50"
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
      timeToHire: 32,
      status: "active"
    },
    {
      position: "Product Manager",
      department: "Product",
      applicants: 180,
      interviews: 28,
      offers: 5,
      hires: 4,
      timeToHire: 28,
      status: "active"
    },
    {
      position: "UX Designer",
      department: "Design",
      applicants: 156,
      interviews: 22,
      offers: 4,
      hires: 3,
      timeToHire: 25,
      status: "active"
    },
    {
      position: "Sales Representative",
      department: "Sales",
      applicants: 198,
      interviews: 35,
      offers: 7,
      hires: 5,
      timeToHire: 21,
      status: "active"
    }
  ];
  departments = [
    { name: "Engineering", avgDays: 32, color: "#4e54c8" },
    { name: "Product", avgDays: 28, color: "#2196f3" },
    { name: "Design", avgDays: 25, color: "#4caf50" },
    { name: "Sales", avgDays: 21, color: "#ff9800" }
  ];
  sources = [
    { name: "Job Boards", rate: 35 },
    { name: "Referrals", rate: 62 },
    { name: "Career Site", rate: 28 },
    { name: "Social Media", rate: 18 }
  ];
  ngOnInit() {
  }
  getTimeChipClass(days) {
    if (days < 25)
      return "fast-chip";
    if (days < 30)
      return "average-chip";
    return "slow-chip";
  }
  getTimeChipLabel(days) {
    if (days < 25)
      return "Fast";
    if (days < 30)
      return "Average";
    return "Slow";
  }
  getRateClass(rate) {
    if (rate > 50)
      return "high-rate";
    if (rate > 30)
      return "medium-rate";
    return "low-rate";
  }
  getMetricIcon(icon) {
    const iconMap = {
      "people": "fas fa-users",
      "event": "fas fa-calendar-check",
      "description": "fas fa-file-alt",
      "schedule": "fas fa-clock"
    };
    return iconMap[icon] || "fas fa-question-circle";
  }
  static \u0275fac = function HiringAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HiringAnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HiringAnalyticsComponent, selectors: [["app-hiring-analytics"]], decls: 84, vars: 11, consts: [["timeMenu", "matMenu"], ["sourceMenu", "matMenu"], [1, "analytics-container"], [1, "page-title"], [1, "page-subtitle"], [1, "metrics-grid"], ["class", "metric-card", 3, "--card-color", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "charts-grid"], [1, "chart-card"], [1, "card-header-content"], ["mat-stroked-button", "", 1, "time-filter"], [1, "fas", "fa-calendar"], ["mat-table", "", 1, "funnel-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "applicants"], ["matColumnDef", "interviews"], ["matColumnDef", "offers"], ["matColumnDef", "hires"], ["matColumnDef", "timeToHire"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "highlight-row", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", 1, "more-button", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-vertical"], ["mat-menu-item", ""], [1, "chart-placeholder"], ["src", "assets/images/time-to-hire-chart.svg", "alt", "Time to Hire Chart"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], ["src", "assets/images/source-quality-chart.svg", "alt", "Source Quality Chart"], [1, "conversion-rate"], ["class", "rate-item", 4, "ngFor", "ngForOf"], [1, "metric-card", 3, "mouseenter", "mouseleave"], [1, "metric-icon"], [1, "metric-content"], [1, "metric-title"], [1, "metric-value"], [1, "metric-change"], [1, "change-label"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "position-cell"], [1, "position-title"], [1, "department"], [1, "metric-cell"], [1, "time-cell"], ["selected", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "legend-item"], [1, "legend-color"], [1, "rate-item"], [1, "source-name"], [1, "rate-value"], ["mode", "determinate", 3, "value"]], template: function HiringAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
      \u0275\u0275text(2, "Hiring Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 4);
      \u0275\u0275text(4, "Track and optimize your recruitment funnel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, HiringAnalyticsComponent_mat_card_6_Template, 14, 22, "mat-card", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "mat-card", 8)(9, "mat-card-header")(10, "div", 9)(11, "mat-card-title");
      \u0275\u0275text(12, "Hiring Funnel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-card-subtitle");
      \u0275\u0275text(14, "Last 30 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275text(17, " This Month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-card-content")(19, "table", 12);
      \u0275\u0275elementContainerStart(20, 13);
      \u0275\u0275template(21, HiringAnalyticsComponent_th_21_Template, 2, 0, "th", 14)(22, HiringAnalyticsComponent_td_22_Template, 6, 2, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(23, 16);
      \u0275\u0275template(24, HiringAnalyticsComponent_th_24_Template, 2, 0, "th", 14)(25, HiringAnalyticsComponent_td_25_Template, 3, 1, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(26, 17);
      \u0275\u0275template(27, HiringAnalyticsComponent_th_27_Template, 2, 0, "th", 14)(28, HiringAnalyticsComponent_td_28_Template, 3, 1, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(29, 18);
      \u0275\u0275template(30, HiringAnalyticsComponent_th_30_Template, 2, 0, "th", 14)(31, HiringAnalyticsComponent_td_31_Template, 3, 1, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(32, 19);
      \u0275\u0275template(33, HiringAnalyticsComponent_th_33_Template, 2, 0, "th", 14)(34, HiringAnalyticsComponent_td_34_Template, 3, 1, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(35, 20);
      \u0275\u0275template(36, HiringAnalyticsComponent_th_36_Template, 2, 0, "th", 14)(37, HiringAnalyticsComponent_td_37_Template, 6, 4, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(38, HiringAnalyticsComponent_tr_38_Template, 1, 0, "tr", 21)(39, HiringAnalyticsComponent_tr_39_Template, 1, 2, "tr", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "mat-card", 8)(41, "mat-card-header")(42, "div", 9)(43, "mat-card-title");
      \u0275\u0275text(44, "Time to Hire Trend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-card-subtitle");
      \u0275\u0275text(46, "Average days by department");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "button", 23);
      \u0275\u0275element(48, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-menu", null, 0)(51, "button", 25);
      \u0275\u0275text(52, "Last 30 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 25);
      \u0275\u0275text(54, "Last 90 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 25);
      \u0275\u0275text(56, "Last 12 months");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "mat-card-content")(58, "div", 26);
      \u0275\u0275element(59, "img", 27);
      \u0275\u0275elementStart(60, "div", 28);
      \u0275\u0275template(61, HiringAnalyticsComponent_div_61_Template, 3, 4, "div", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "mat-card", 8)(63, "mat-card-header")(64, "div", 9)(65, "mat-card-title");
      \u0275\u0275text(66, "Source Quality");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-card-subtitle");
      \u0275\u0275text(68, "Conversion rate by source");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "button", 23);
      \u0275\u0275element(70, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-menu", null, 1)(73, "button", 25);
      \u0275\u0275text(74, "All Sources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 25);
      \u0275\u0275text(76, "Job Boards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "button", 25);
      \u0275\u0275text(78, "Referrals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "mat-card-content")(80, "div", 26);
      \u0275\u0275element(81, "img", 30);
      \u0275\u0275elementStart(82, "div", 31);
      \u0275\u0275template(83, HiringAnalyticsComponent_div_83_Template, 6, 5, "div", 32);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const timeMenu_r13 = \u0275\u0275reference(50);
      const sourceMenu_r14 = \u0275\u0275reference(72);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.metrics);
      \u0275\u0275advance(2);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(11);
      \u0275\u0275property("dataSource", ctx.jobMetrics);
      \u0275\u0275advance(19);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("matMenuTriggerFor", timeMenu_r13);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance();
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("matMenuTriggerFor", sourceMenu_r14);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.sources);
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
    MatChip,
    MatChipSet,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatProgressBarModule,
    MatProgressBar,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule,
    MatDividerModule,
    AbsolutePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --accent: #4caf50;\n  --accent-light: #81c784;\n  --warn: #ff9800;\n  --danger: #f44336;\n  --text-primary: #2d3748;\n  --text-secondary: #718096;\n  --bg-light: #f7fafc;\n  --border-color: #e2e8f0;\n}\n.analytics-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background-color: var(--bg-light);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background-color: white;\n  border-left: 4px solid var(--card-color);\n  transition: all 0.3s ease;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.metric-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.metric-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.metric-title[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n.metric-change[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.metric-change[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.positive[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.negative[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.change-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 400;\n  margin-left: 4px;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n  gap: 24px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background-color: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.chart-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\nmat-card-header[_ngcontent-%COMP%] {\n  padding: 20px 20px 0;\n  margin-bottom: 16px;\n}\n.card-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n}\n.time-filter[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.time-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.more-button[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.more-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.funnel-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n.funnel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-secondary);\n  padding: 12px 16px;\n}\n.funnel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid var(--border-color);\n  border-bottom: 1px solid var(--border-color);\n  background-color: white;\n}\n.funnel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid var(--border-color);\n  border-radius: 8px 0 0 8px;\n}\n.funnel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid var(--border-color);\n  border-radius: 0 8px 8px 0;\n}\n.position-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.position-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.department[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.metric-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.time-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nmat-chip[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 600;\n  height: 20px;\n  padding: 0 8px;\n}\n.fast-chip[_ngcontent-%COMP%] {\n  background-color: var(--accent-light);\n  color: var(--accent);\n}\n.average-chip[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #ff9800;\n}\n.slow-chip[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: var(--danger);\n}\n.highlight-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.05);\n}\n.chart-placeholder[_ngcontent-%COMP%] {\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--bg-light);\n  border-radius: 8px;\n  padding: 20px;\n}\n.chart-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 20px;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.conversion-rate[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n.rate-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.source-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 120px;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n.rate-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  text-align: right;\n  margin-right: 12px;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  display: inline-block;\n  width: calc(100% - 182px);\n}\n.high-rate[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.medium-rate[_ngcontent-%COMP%] {\n  color: #ff9800 !important;\n}\n.low-rate[_ngcontent-%COMP%] {\n  color: var(--danger) !important;\n}\n@media (max-width: 768px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .analytics-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=hiring-analytics.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("300ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ]),
    trigger("cardHover", [
      state("normal", style({
        transform: "scale(1)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
      })),
      state("hovered", style({
        transform: "scale(1.02)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
      })),
      transition("normal <=> hovered", animate("200ms ease-in-out"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HiringAnalyticsComponent, { className: "HiringAnalyticsComponent", filePath: "src/app/employer/components/analytics/hiring-analytics/hiring-analytics.component.ts", lineNumber: 94 });
})();
export {
  AbsolutePipe,
  HiringAnalyticsComponent
};
//# sourceMappingURL=chunk-JH3IAZXF.js.map
