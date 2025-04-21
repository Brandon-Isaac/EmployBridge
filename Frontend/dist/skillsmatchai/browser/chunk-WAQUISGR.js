import {
  MatGridListModule
} from "./chunk-7QJ3ACHX.js";
import "./chunk-D4ADZFLX.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-EYAAGD6F.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BYBXKYVJ.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-3JPVUUIX.js";
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
import "./chunk-F5FUW2P7.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-BZ6GK7LR.js";
import "./chunk-JCHFAW36.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-OJ6TRDLY.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-2LWENGE2.js";
import "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  CommonModule,
  DecimalPipe,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatIconButton,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UOKCMW7L.js";

// src/app/shared/pipes/time-range-to-text.pipe.ts
var TimeRangeToTextPipe = class _TimeRangeToTextPipe {
  transform(value) {
    switch (value) {
      case "7":
        return "7 days";
      case "30":
        return "30 days";
      case "90":
        return "90 days";
      case "180":
        return "6 months";
      case "365":
        return "1 year";
      default:
        return value;
    }
  }
  static \u0275fac = function TimeRangeToTextPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeRangeToTextPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "timeRangeToText", type: _TimeRangeToTextPipe, pure: true });
};

// src/app/admin/components/platform-analytics/platform-analytics.component.ts
var _c0 = (a0) => ({ "background-color": a0 });
function PlatformAnalyticsComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r2 = ctx.$implicit;
    \u0275\u0275property("value", range_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", range_r2.viewValue, " ");
  }
}
function PlatformAnalyticsComponent_mat_card_23_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const metric_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Target: ", \u0275\u0275pipeBind1(3, 2, metric_r4.target), " ", metric_r4.unit, " ");
  }
}
function PlatformAnalyticsComponent_mat_card_23_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "mat-progress-bar", 40);
    \u0275\u0275template(2, PlatformAnalyticsComponent_mat_card_23_div_23_div_2_Template, 4, 4, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const metric_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", metric_r4.value / metric_r4.target * 100)("color", metric_r4.value >= metric_r4.target ? "primary" : "accent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", metric_r4.target);
  }
}
function PlatformAnalyticsComponent_mat_card_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 24);
    \u0275\u0275listener("mouseenter", function PlatformAnalyticsComponent_mat_card_23_Template_mat_card_mouseenter_0_listener() {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.cardState[metric_r4.id] = "hovered");
    })("mouseleave", function PlatformAnalyticsComponent_mat_card_23_Template_mat_card_mouseleave_0_listener() {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.cardState[metric_r4.id] = "normal");
    });
    \u0275\u0275elementStart(1, "mat-card-header")(2, "div", 25)(3, "div", 26);
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275element(9, "i", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "timeRangeToText");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(12, "mat-divider");
    \u0275\u0275elementStart(13, "mat-card-content")(14, "div", 30)(15, "div", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 33);
    \u0275\u0275element(21, "i", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PlatformAnalyticsComponent_mat_card_23_div_23_Template, 3, 3, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "mat-divider");
    \u0275\u0275elementStart(25, "mat-card-actions")(26, "button", 36);
    \u0275\u0275listener("click", function PlatformAnalyticsComponent_mat_card_23_Template_button_click_26_listener() {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewDetails(metric_r4));
    });
    \u0275\u0275element(27, "i", 5);
    \u0275\u0275text(28, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 37);
    \u0275\u0275listener("click", function PlatformAnalyticsComponent_mat_card_23_Template_button_click_29_listener() {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.comparePeriods(metric_r4));
    });
    \u0275\u0275element(30, "i", 38);
    \u0275\u0275text(31, " Compare ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("@cardHover", ctx_r4.cardState[metric_r4.id]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(22, _c0, metric_r4.color + "20"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", metric_r4.color);
    \u0275\u0275property("ngClass", metric_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Last ", \u0275\u0275pipeBind1(11, 18, ctx_r4.selectedTimeRange), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 20, metric_r4.value), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r4.unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "trend-" + metric_r4.trend);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-arrow-up", metric_r4.trend === "up")("fa-arrow-down", metric_r4.trend === "down")("fa-minus", metric_r4.trend === "stable");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r4.change, "% change ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", metric_r4.target);
  }
}
var PlatformAnalyticsComponent = class _PlatformAnalyticsComponent {
  selectedTimeRange = "7";
  timeRanges = [
    { value: "7", viewValue: "Last 7 Days" },
    { value: "30", viewValue: "Last 30 Days" },
    { value: "90", viewValue: "Last 90 Days" },
    { value: "180", viewValue: "Last 6 Months" },
    { value: "365", viewValue: "Last Year" }
  ];
  metrics = [
    {
      id: "1",
      name: "Active Users",
      value: 1250,
      change: 12.5,
      unit: "users",
      trend: "up",
      icon: "fa-users",
      color: "#4e54c8",
      target: 1500,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "2",
      name: "Job Postings",
      value: 342,
      change: -3.2,
      unit: "jobs",
      trend: "down",
      icon: "fa-briefcase",
      color: "#4caf50",
      target: 400,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "3",
      name: "Applications",
      value: 1256,
      change: 8.7,
      unit: "applications",
      trend: "up",
      icon: "fa-file-alt",
      color: "#ff9800",
      target: 1500,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "4",
      name: "Matches Made",
      value: 89,
      change: 0,
      unit: "matches",
      trend: "stable",
      icon: "fa-handshake",
      color: "#9c27b0",
      target: 100,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "5",
      name: "New Signups",
      value: 215,
      change: 15.3,
      unit: "users",
      trend: "up",
      icon: "fa-user-plus",
      color: "#2196f3",
      target: 250,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "6",
      name: "Messages Sent",
      value: 876,
      change: 5.2,
      unit: "messages",
      trend: "up",
      icon: "fa-comments",
      color: "#f44336",
      lastUpdated: /* @__PURE__ */ new Date()
    }
  ];
  cardState = {};
  constructor() {
  }
  ngOnInit() {
    this.metrics.forEach((metric) => {
      this.cardState[metric.id] = "normal";
    });
  }
  changeView(viewType) {
    console.log("Changing view to:", viewType);
  }
  exportData() {
    console.log("Exporting analytics data...");
  }
  refreshData() {
    console.log("Refreshing analytics data...");
  }
  viewDetails(metric) {
    console.log("Viewing details for:", metric.name);
  }
  comparePeriods(metric) {
    console.log("Comparing periods for:", metric.name);
  }
  static \u0275fac = function PlatformAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformAnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformAnalyticsComponent, selectors: [["app-platform-analytics"]], decls: 31, vars: 5, consts: [["viewMenu", "matMenu"], [1, "platform-analytics-container"], [1, "toolbar"], [1, "toolbar-left"], [1, "app-title"], [1, "fas", "fa-chart-line"], [1, "toolbar-right"], [1, "time-range-selector"], [3, "valueChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-th-large"], [1, "fas", "fa-list"], [1, "metrics-grid"], ["class", "metric-card", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "actions-footer"], ["mat-stroked-button", "", 3, "click"], [1, "fas", "fa-file-export"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-sync-alt"], [3, "value"], [1, "fas", "fa-calendar-alt"], [1, "metric-card", 3, "mouseenter", "mouseleave"], [1, "metric-header"], [1, "metric-icon", 3, "ngStyle"], [1, "fas", 3, "ngClass"], [1, "metric-info"], [1, "fas", "fa-clock"], [1, "metric-value-container"], [1, "metric-value"], [1, "unit"], [1, "metric-change", 3, "ngClass"], [1, "fas"], ["class", "metric-progress", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "fas", "fa-not-equal"], [1, "metric-progress"], ["mode", "determinate", 3, "value", "color"], ["class", "progress-label", 4, "ngIf"], [1, "progress-label"], [1, "fas", "fa-bullseye"]], template: function PlatformAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-toolbar", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275text(5, " Platform Analytics Dashboard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
      \u0275\u0275text(9, "Time Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-select", 8);
      \u0275\u0275twoWayListener("valueChange", function PlatformAnalyticsComponent_Template_mat_select_valueChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(11, PlatformAnalyticsComponent_mat_option_11_Template, 3, 2, "mat-option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275element(13, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-menu", null, 0)(16, "button", 12);
      \u0275\u0275listener("click", function PlatformAnalyticsComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeView("grid"));
      });
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275text(18, " Grid View ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function PlatformAnalyticsComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeView("list"));
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21, " List View ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275template(23, PlatformAnalyticsComponent_mat_card_23_Template, 32, 24, "mat-card", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
      \u0275\u0275listener("click", function PlatformAnalyticsComponent_Template_button_click_25_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportData());
      });
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275text(27, " Export Data ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 20);
      \u0275\u0275listener("click", function PlatformAnalyticsComponent_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshData());
      });
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275text(30, " Refresh Data ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const viewMenu_r6 = \u0275\u0275reference(15);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("value", ctx.selectedTimeRange);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.timeRanges);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", viewMenu_r6);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.metrics);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    NgStyle,
    DecimalPipe,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatGridListModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatSelectModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    MatToolbarModule,
    MatToolbar,
    MatDividerModule,
    MatDivider,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatProgressBarModule,
    MatProgressBar,
    TimeRangeToTextPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #4caf50;\n  --accent-light: #81c784;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n  --danger: #f44336;\n}\n.platform-analytics-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background-color: var(--background-light);\n  min-height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  margin-bottom: 24px;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.time-range-selector[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.time-range-selector[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.time-range-selector[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.time-range-selector[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: white;\n}\n.time-range-selector[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.metric-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n}\n.metric-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.metric-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.metric-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.metric-value-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.metric-value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  font-weight: normal;\n}\n.metric-change[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 0.875rem;\n  margin-top: 8px;\n}\n.metric-change[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.metric-progress[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  text-align: center;\n  margin-top: 4px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.875rem;\n}\n.actions-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 16px 0;\n}\n@media (max-width: 768px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 12px;\n  }\n  .toolbar-left[_ngcontent-%COMP%], \n   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    margin: 4px 0;\n  }\n  .toolbar-right[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n  .actions-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .platform-analytics-container[_ngcontent-%COMP%] {\n    padding: 16px 8px;\n  }\n  .metric-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=platform-analytics.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ]),
    trigger("cardHover", [
      state("normal", style({
        transform: "translateY(0)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
      })),
      state("hovered", style({
        transform: "translateY(-5px)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
      })),
      transition("normal <=> hovered", animate("200ms ease-in-out"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformAnalyticsComponent, { className: "PlatformAnalyticsComponent", filePath: "src/app/admin/components/platform-analytics/platform-analytics.component.ts", lineNumber: 72 });
})();
export {
  PlatformAnalyticsComponent
};
//# sourceMappingURL=chunk-WAQUISGR.js.map
