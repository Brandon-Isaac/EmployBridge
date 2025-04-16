import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-AITKVB7Z.js";
import "./chunk-WO6AJLKG.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-D7CU6W3F.js";
import {
  MatToolbarModule
} from "./chunk-VVAP3QIX.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-QJ7WF3FG.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-QZIPTO56.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-3QCHWOEP.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GBKEUDMN.js";
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
} from "./chunk-GDU4ATDP.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-7BNL2RL5.js";
import {
  MatTooltipModule
} from "./chunk-PFNPEZPC.js";
import "./chunk-2CZVWUUL.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import "./chunk-R4NVDLOM.js";
import {
  MatFormFieldModule
} from "./chunk-B7JQH24K.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-VW3NTET3.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-E6YAXSQU.js";
import {
  FormsModule,
  MatFormField,
  MatLabel,
  NgControlStatus,
  NgModel
} from "./chunk-255VWD3Z.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJVFXHEQ.js";

// src/app/admin/components/accuracy-metrics/accuracy-metrics.component.ts
var _c0 = () => [5, 10, 20];
function AccuracyMetricsComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r1 = ctx.$implicit;
    \u0275\u0275property("value", period_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", period_r1.label, " ");
  }
}
function AccuracyMetricsComponent_mat_card_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 31)(1, "div", 32)(2, "div", 33)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 34)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 35)(11, "span", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "mat-progress-bar", 38);
    \u0275\u0275elementStart(16, "div", 39)(17, "span", 40)(18, "mat-icon");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 41);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    \u0275\u0275property("@cardAnimation", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", metric_r2.color + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", metric_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(metric_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", metric_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r2.value, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Target: ", metric_r2.target, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", metric_r2.value)("color", metric_r2.value >= metric_r2.target ? "primary" : "warn");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("trend-" + metric_r2.trend);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", metric_r2.trend === "up" ? "arrow_upward" : metric_r2.trend === "down" ? "arrow_downward" : "remove", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r2.change, "% from last period ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Updated: ", \u0275\u0275pipeBind2(23, 19, metric_r2.lastUpdated, "MMM d, h:mm a"), " ");
  }
}
function AccuracyMetricsComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    \u0275\u0275property("value", category_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r3.label, " ");
  }
}
function AccuracyMetricsComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Metric");
    \u0275\u0275elementEnd();
  }
}
function AccuracyMetricsComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "div", 44)(2, "div", 45)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 46)(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const metric_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", metric_r4.color + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", metric_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getIcon(metric_r4.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.getCategoryName(metric_r4.category));
  }
}
function AccuracyMetricsComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Value");
    \u0275\u0275elementEnd();
  }
}
function AccuracyMetricsComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275element(5, "mat-progress-bar", 52);
    \u0275\u0275elementStart(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const metric_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", metric_r6.value >= metric_r6.target ? "var(--success)" : "var(--warn)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r6.value, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", metric_r6.value)("color", metric_r6.value >= metric_r6.target ? "primary" : "warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", metric_r6.target, "% target");
  }
}
function AccuracyMetricsComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Trend");
    \u0275\u0275elementEnd();
  }
}
function AccuracyMetricsComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "div", 54)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("trend-" + metric_r7.trend);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", metric_r7.trend === "up" ? "arrow_upward" : metric_r7.trend === "down" ? "arrow_downward" : "remove", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.getTrendLabel(metric_r7.trend));
  }
}
function AccuracyMetricsComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 42);
  }
}
function AccuracyMetricsComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 43)(1, "button", 55)(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 0)(6, "button", 56);
    \u0275\u0275listener("click", function AccuracyMetricsComponent_td_53_Template_button_click_6_listener() {
      const metric_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewDetails(metric_r9));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "insights");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 56);
    \u0275\u0275listener("click", function AccuracyMetricsComponent_td_53_Template_button_click_10_listener() {
      const metric_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.adjustTarget(metric_r9));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "adjust");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Adjust Target ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 56);
    \u0275\u0275listener("click", function AccuracyMetricsComponent_td_53_Template_button_click_14_listener() {
      const metric_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewHistory(metric_r9));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " View History ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metricMenu_r10 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", metricMenu_r10);
  }
}
function AccuracyMetricsComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function AccuracyMetricsComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 58);
  }
}
var AccuracyMetricsComponent = class _AccuracyMetricsComponent {
  // Configuration
  timePeriods = [
    { value: "7", label: "Last 7 days" },
    { value: "14", label: "Last 14 days" },
    { value: "30", label: "Last 30 days" },
    { value: "90", label: "Last 90 days" }
  ];
  metricCategories = [
    { value: "matching", label: "Job Matching" },
    { value: "assessment", label: "Skill Assessment" },
    { value: "recommendation", label: "Recommendations" },
    { value: "satisfaction", label: "Satisfaction" }
  ];
  displayedColumns = ["name", "value", "trend", "actions"];
  // State
  selectedPeriod = "30";
  selectedMetric = "all";
  isLoading = false;
  // Sample data - in a real app this would come from a service
  overviewMetrics = [
    {
      id: "1",
      name: "Job Matching Accuracy",
      description: "How well jobs match candidate skills",
      value: 85,
      target: 80,
      trend: "up",
      change: 2.5,
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "handshake",
      color: "#3f51b5"
    },
    {
      id: "2",
      name: "Skill Assessment Accuracy",
      description: "Accuracy of skill level assessments",
      value: 92,
      target: 90,
      trend: "up",
      change: 1.2,
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "star",
      color: "#4caf50"
    },
    {
      id: "3",
      name: "Recommendation Accuracy",
      description: "Quality of learning recommendations",
      value: 78,
      target: 85,
      trend: "down",
      change: -3.1,
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "lightbulb_outline",
      color: "#ff9800"
    }
  ];
  metrics = [
    {
      id: "1",
      name: "Job Matching Accuracy",
      value: 85,
      target: 80,
      trend: "up",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "handshake",
      color: "#3f51b5",
      category: "matching"
    },
    {
      id: "2",
      name: "Skill Assessment Accuracy",
      value: 92,
      target: 90,
      trend: "up",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "star",
      color: "#4caf50",
      category: "assessment"
    },
    {
      id: "3",
      name: "Recommendation Accuracy",
      value: 78,
      target: 85,
      trend: "down",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "lightbulb_outline",
      color: "#ff9800",
      category: "recommendation"
    },
    {
      id: "4",
      name: "Candidate Satisfaction",
      value: 88,
      target: 85,
      trend: "stable",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "mood",
      color: "#9c27b0",
      category: "satisfaction"
    },
    {
      id: "5",
      name: "Employer Satisfaction",
      value: 82,
      target: 85,
      trend: "up",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "business",
      color: "#2196f3",
      category: "satisfaction"
    },
    {
      id: "6",
      name: "Skill Gap Identification",
      value: 91,
      target: 90,
      trend: "up",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "search",
      color: "#009688",
      category: "assessment"
    },
    {
      id: "7",
      name: "Job Recommendation Relevance",
      value: 84,
      target: 85,
      trend: "stable",
      lastUpdated: /* @__PURE__ */ new Date(),
      icon: "work_outline",
      color: "#ff5722",
      category: "recommendation"
    }
  ];
  ngOnInit() {
    this.loadMetrics();
  }
  get filteredMetrics() {
    if (this.selectedMetric === "all")
      return this.metrics;
    return this.metrics.filter((metric) => metric.category === this.selectedMetric);
  }
  loadMetrics() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
  refreshMetrics() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1e3);
  }
  exportMetrics() {
    console.log("Exporting metrics data...");
  }
  viewDetails(metric) {
    console.log("Viewing details for:", metric.name);
  }
  adjustTarget(metric) {
    console.log("Adjusting target for:", metric.name);
  }
  viewHistory(metric) {
    console.log("Viewing history for:", metric.name);
  }
  getTrendLabel(trend) {
    const trends = {
      up: "Improving",
      down: "Declining",
      stable: "Stable"
    };
    return trends[trend];
  }
  getCategoryName(category) {
    const found = this.metricCategories.find((c) => c.value === category);
    return found ? found.label : "";
  }
  getIcon(iconName) {
    const iconMap = {
      "fa-handshake": "handshake",
      "fa-star": "star",
      "fa-lightbulb": "lightbulb_outline",
      "fa-smile": "mood",
      "fa-briefcase": "business",
      "fa-search": "search",
      "fa-work": "work_outline"
    };
    return iconMap[iconName] || iconName;
  }
  static \u0275fac = function AccuracyMetricsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccuracyMetricsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccuracyMetricsComponent, selectors: [["app-accuracy-metrics"]], decls: 57, vars: 11, consts: [["metricMenu", "matMenu"], [1, "dashboard-container"], [1, "dashboard-header"], [1, "header-content"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-controls"], ["appearance", "outline", 1, "period-selector"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "refresh-button", 3, "click"], [1, "metrics-summary"], ["class", "summary-card", 4, "ngFor", "ngForOf"], [1, "detailed-metrics"], [1, "metrics-table-card"], [1, "table-controls"], ["appearance", "outline", 1, "metric-filter"], ["value", "all"], ["mat-stroked-button", "", 1, "export-button", 3, "click"], [1, "table-wrapper"], ["mat-table", "", 1, "metrics-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "value"], ["matColumnDef", "trend"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of metrics", 3, "pageSizeOptions"], [3, "value"], [1, "summary-card"], [1, "card-header"], [1, "metric-icon-container"], [1, "metric-title"], [1, "metric-value-container"], [1, "current-value"], [1, "target-value"], ["mode", "determinate", 3, "value", "color"], [1, "metric-trend-container"], [1, "trend-indicator"], [1, "last-updated"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "metric-cell"], [1, "metric-icon"], [1, "metric-info"], [1, "metric-name"], [1, "metric-category"], [1, "value-display"], [1, "value-percent"], [1, "progress-wrapper"], ["mode", "determinate", 1, "compact-progress", 3, "value", "color"], [1, "target-label"], [1, "trend-badge"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AccuracyMetricsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4, "Accuracy Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Track and analyze system performance metrics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "mat-form-field", 7)(9, "mat-label");
      \u0275\u0275text(10, "Time Period");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AccuracyMetricsComponent_Template_mat_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
        return $event;
      });
      \u0275\u0275template(12, AccuracyMetricsComponent_mat_option_12_Template, 2, 2, "mat-option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function AccuracyMetricsComponent_Template_button_click_13_listener() {
        return ctx.refreshMetrics();
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Refresh ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "section", 11);
      \u0275\u0275template(18, AccuracyMetricsComponent_mat_card_18_Template, 24, 22, "mat-card", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "section", 13)(20, "mat-card", 14)(21, "mat-card-header")(22, "mat-card-title");
      \u0275\u0275text(23, "Detailed Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-card-subtitle");
      \u0275\u0275text(25, "Performance across all measured metrics");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "mat-divider");
      \u0275\u0275elementStart(27, "mat-card-content")(28, "div", 15)(29, "mat-form-field", 16)(30, "mat-label");
      \u0275\u0275text(31, "Filter Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AccuracyMetricsComponent_Template_mat_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMetric, $event) || (ctx.selectedMetric = $event);
        return $event;
      });
      \u0275\u0275elementStart(33, "mat-option", 17);
      \u0275\u0275text(34, "All Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, AccuracyMetricsComponent_mat_option_35_Template, 2, 2, "mat-option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function AccuracyMetricsComponent_Template_button_click_36_listener() {
        return ctx.exportMetrics();
      });
      \u0275\u0275elementStart(37, "mat-icon");
      \u0275\u0275text(38, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " Export ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 19)(41, "table", 20);
      \u0275\u0275elementContainerStart(42, 21);
      \u0275\u0275template(43, AccuracyMetricsComponent_th_43_Template, 2, 0, "th", 22)(44, AccuracyMetricsComponent_td_44_Template, 10, 7, "td", 23);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(45, 24);
      \u0275\u0275template(46, AccuracyMetricsComponent_th_46_Template, 2, 0, "th", 22)(47, AccuracyMetricsComponent_td_47_Template, 8, 6, "td", 23);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(48, 25);
      \u0275\u0275template(49, AccuracyMetricsComponent_th_49_Template, 2, 0, "th", 22)(50, AccuracyMetricsComponent_td_50_Template, 6, 4, "td", 23);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(51, 26);
      \u0275\u0275template(52, AccuracyMetricsComponent_th_52_Template, 1, 0, "th", 22)(53, AccuracyMetricsComponent_td_53_Template, 18, 1, "td", 23);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(54, AccuracyMetricsComponent_tr_54_Template, 1, 0, "tr", 27)(55, AccuracyMetricsComponent_tr_55_Template, 1, 0, "tr", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "mat-paginator", 29);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.timePeriods);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.overviewMetrics);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedMetric);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.metricCategories);
      \u0275\u0275advance(6);
      \u0275\u0275property("dataSource", ctx.filteredMetrics);
      \u0275\u0275advance(13);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(10, _c0));
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    DatePipe,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
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
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatSelectModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    MatToolbarModule,
    MatDividerModule,
    MatDivider,
    MatProgressBarModule,
    MatProgressBar,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule,
    MatPaginatorModule,
    MatPaginator
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #3f51b5;\n  --primary-light: #7986cb;\n  --primary-dark: #303f9f;\n  --accent: #4caf50;\n  --warn: #f44336;\n  --success: #4caf50;\n  --warning: #ff9800;\n  --text-primary: #212121;\n  --text-secondary: #757575;\n  --divider: #e0e0e0;\n  --background: #f5f5f5;\n  --card-bg: #ffffff;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 24px;\n  background-color: var(--background);\n  min-height: 100vh;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dashboard-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1rem;\n  color: var(--text-secondary);\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.period-selector[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.refresh-button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.metrics-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.metric-icon-container[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n}\n.metric-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.metric-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.metric-value-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 12px;\n}\n.current-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1;\n}\n.target-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 3px;\n  margin-bottom: 12px;\n}\n.metric-trend-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n}\n.trend-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: var(--warn);\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.last-updated[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.detailed-metrics[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.metrics-table-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.table-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 16px 0;\n}\n.metric-filter[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.export-button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 16px;\n}\n.metrics-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.metrics-table[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n.metrics-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.metrics-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.metrics-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(63, 81, 181, 0.04);\n}\n.metric-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.metric-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.metric-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.metric-category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.value-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.value-percent[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.progress-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.compact-progress[_ngcontent-%COMP%] {\n  height: 4px;\n  flex-grow: 1;\n}\n.target-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.trend-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.trend-badge.trend-up[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.1);\n}\n.trend-badge.trend-down[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n}\n.trend-badge.trend-stable[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.1);\n}\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-top: 1px solid var(--divider);\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .header-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .period-selector[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .refresh-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .metrics-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .metric-filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=accuracy-metrics.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms ease-in", style({ opacity: 1 }))
      ])
    ]),
    trigger("cardAnimation", [
      transition(":enter", [
        style({ transform: "translateY(20px)", opacity: 0 }),
        animate("300ms ease-out", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccuracyMetricsComponent, { className: "AccuracyMetricsComponent", filePath: "src/app/admin/components/accuracy-metrics/accuracy-metrics.component.ts", lineNumber: 588 });
})();
export {
  AccuracyMetricsComponent
};
//# sourceMappingURL=chunk-2DI7ABGS.js.map
