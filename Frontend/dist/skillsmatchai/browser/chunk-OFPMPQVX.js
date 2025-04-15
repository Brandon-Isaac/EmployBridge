import {
  MatGridListModule
} from "./chunk-5PDDPM5W.js";
import "./chunk-OK2IM7QW.js";
import {
  MatToolbar,
  MatToolbarModule,
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-IR6OQL5E.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5WW65WYF.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-LXRKCGKC.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CR7B3LEX.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatIconModule
} from "./chunk-DJQE7C7B.js";
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
  MatIconButton,
  NgClass,
  NgForOf,
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IAQJIRE2.js";

// src/app/admin/components/system-monitoring/system-monitoring.component.ts
function SystemMonitoringComponent_mat_card_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 15);
    \u0275\u0275listener("mouseenter", function SystemMonitoringComponent_mat_card_20_Template_mat_card_mouseenter_0_listener() {
      const metric_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cardState[metric_r3.id] = "hovered");
    })("mouseleave", function SystemMonitoringComponent_mat_card_20_Template_mat_card_mouseleave_0_listener() {
      const metric_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cardState[metric_r3.id] = "normal");
    });
    \u0275\u0275elementStart(1, "mat-card-header")(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(10, "mat-divider");
    \u0275\u0275elementStart(11, "mat-card-content")(12, "div", 20)(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 22);
    \u0275\u0275element(16, "i", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "mat-progress-bar", 24);
    \u0275\u0275elementStart(19, "div", 25)(20, "span", 26);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 27);
    \u0275\u0275element(24, "i", 28);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "mat-divider");
    \u0275\u0275elementStart(28, "mat-card-actions")(29, "button", 29);
    \u0275\u0275listener("click", function SystemMonitoringComponent_mat_card_20_Template_button_click_29_listener() {
      const metric_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewDetails(metric_r3));
    });
    \u0275\u0275element(30, "i", 30);
    \u0275\u0275text(31, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 31);
    \u0275\u0275listener("click", function SystemMonitoringComponent_mat_card_20_Template_button_click_32_listener() {
      const metric_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.configureAlert(metric_r3));
    });
    \u0275\u0275element(33, "i", 32);
    \u0275\u0275text(34, " Alerts ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@cardHover", ctx_r3.cardState[metric_r3.id]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", metric_r3.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", metric_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Threshold: ", metric_r3.threshold, "", metric_r3.unit, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", metric_r3.value, "", metric_r3.unit, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "trend-" + metric_r3.trend);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-arrow-up", metric_r3.trend === "up")("fa-arrow-down", metric_r3.trend === "down")("fa-minus", metric_r3.trend === "stable");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getTrendText(metric_r3.trend), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", metric_r3.value)("color", ctx_r3.getStatusColor(metric_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", metric_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 21, metric_r3.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 23, metric_r3.lastUpdated, "shortTime"), " ");
  }
}
var SystemMonitoringComponent = class _SystemMonitoringComponent {
  metrics = [
    {
      id: "1",
      name: "CPU Usage",
      value: 75,
      unit: "%",
      status: "warning",
      trend: "up",
      icon: "fa-microchip",
      threshold: 80,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "2",
      name: "Memory Usage",
      value: 60,
      unit: "%",
      status: "normal",
      trend: "stable",
      icon: "fa-memory",
      threshold: 85,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "3",
      name: "Disk Space",
      value: 85,
      unit: "%",
      status: "warning",
      trend: "up",
      icon: "fa-hdd",
      threshold: 90,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "4",
      name: "Network Traffic",
      value: 45,
      unit: "Mbps",
      status: "normal",
      trend: "down",
      icon: "fa-network-wired",
      threshold: 100,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "5",
      name: "Database Connections",
      value: 32,
      unit: "",
      status: "normal",
      trend: "stable",
      icon: "fa-database",
      threshold: 50,
      lastUpdated: /* @__PURE__ */ new Date()
    },
    {
      id: "6",
      name: "API Response Time",
      value: 120,
      unit: "ms",
      status: "critical",
      trend: "up",
      icon: "fa-stopwatch",
      threshold: 100,
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
  getStatusColor(status) {
    switch (status) {
      case "normal":
        return "primary";
      case "warning":
        return "accent";
      case "critical":
        return "warn";
      default:
        return "";
    }
  }
  getTrendText(trend) {
    const trendMap = {
      up: "Improving",
      down: "Declining",
      stable: "Stable"
    };
    return trendMap[trend];
  }
  refreshMetrics() {
    console.log("Refreshing system metrics...");
  }
  changeView(viewType) {
    console.log("Changing view to:", viewType);
  }
  viewDetails(metric) {
    console.log("Viewing details for:", metric.name);
  }
  configureAlert(metric) {
    console.log("Configuring alerts for:", metric.name);
  }
  static \u0275fac = function SystemMonitoringComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemMonitoringComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemMonitoringComponent, selectors: [["app-system-monitoring"]], decls: 21, vars: 3, consts: [["viewMenu", "matMenu"], [1, "system-monitoring-container"], [1, "toolbar"], [1, "toolbar-left"], [1, "app-title"], [1, "toolbar-right"], ["mat-stroked-button", "", 3, "click"], [1, "fas", "fa-sync-alt"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-th-large"], [1, "fas", "fa-list"], [1, "metrics-grid"], ["class", "metric-card", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "metric-card", 3, "mouseenter", "mouseleave"], [1, "metric-header"], [1, "metric-icon", 3, "ngClass"], [1, "fas", 3, "ngClass"], [1, "metric-title"], [1, "metric-value"], [1, "value"], [1, "trend", 3, "ngClass"], [1, "fas"], ["mode", "determinate", 1, "metric-progress", 3, "value", "color"], [1, "metric-status"], [1, "status-badge", 3, "ngClass"], [1, "last-updated"], [1, "fas", "fa-clock"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-chart-line"], ["mat-button", "", 3, "click"], [1, "fas", "fa-bell"]], template: function SystemMonitoringComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-toolbar", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275text(4, "System Health Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
      \u0275\u0275listener("click", function SystemMonitoringComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshMetrics());
      });
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275text(8, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 10);
      \u0275\u0275listener("click", function SystemMonitoringComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeView("grid"));
      });
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15, " Grid View ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function SystemMonitoringComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeView("list"));
      });
      \u0275\u0275element(17, "i", 12);
      \u0275\u0275text(18, " List View ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275template(20, SystemMonitoringComponent_mat_card_20_Template, 35, 26, "mat-card", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const viewMenu_r5 = \u0275\u0275reference(12);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(9);
      \u0275\u0275property("matMenuTriggerFor", viewMenu_r5);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.metrics);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    TitleCasePipe,
    DatePipe,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatGridListModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressBar,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatToolbarModule,
    MatToolbar,
    MatDividerModule,
    MatDivider,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #4caf50;\n  --accent-light: #81c784;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n  --danger: #f44336;\n  --normal: #2196f3;\n}\n.system-monitoring-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background-color: var(--background-light);\n  min-height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  margin-bottom: 24px;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.metric-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  color: white;\n}\n.metric-icon.normal[_ngcontent-%COMP%] {\n  background-color: var(--normal);\n}\n.metric-icon.warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n.metric-icon.critical[_ngcontent-%COMP%] {\n  background-color: var(--danger);\n}\n.metric-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.metric-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.metric-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.metric-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n}\n.metric-value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.metric-value[_ngcontent-%COMP%]   .trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.metric-progress[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  margin: 0 16px;\n}\n.metric-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.normal[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.1);\n  color: var(--normal);\n}\n.status-badge.warning[_ngcontent-%COMP%] {\n  background-color: rgba(255, 214, 0, 0.1);\n  color: var(--warning);\n}\n.status-badge.critical[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: var(--danger);\n}\n.last-updated[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.last-updated[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 12px;\n  }\n  .toolbar-left[_ngcontent-%COMP%], \n   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    margin: 4px 0;\n  }\n  .toolbar-right[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .system-monitoring-container[_ngcontent-%COMP%] {\n    padding: 16px 8px;\n  }\n  .metric-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=system-monitoring.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemMonitoringComponent, { className: "SystemMonitoringComponent", filePath: "src/app/admin/components/system-monitoring/system-monitoring.component.ts", lineNumber: 391 });
})();
export {
  SystemMonitoringComponent
};
//# sourceMappingURL=chunk-OFPMPQVX.js.map
