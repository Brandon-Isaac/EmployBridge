import {
  MatSortModule
} from "./chunk-ZEUQNEEZ.js";
import {
  MatPaginatorModule
} from "./chunk-D7CU6W3F.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-VVAP3QIX.js";
import {
  MatSelectModule
} from "./chunk-QZIPTO56.js";
import {
  MatDialogModule
} from "./chunk-TQ6JUWYT.js";
import {
  MatBadgeModule
} from "./chunk-MFJU2DX3.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-3QCHWOEP.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GBKEUDMN.js";
import {
  MatTableModule
} from "./chunk-GDU4ATDP.js";
import {
  animate,
  state,
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
import {
  MatInputModule
} from "./chunk-W7G65VI2.js";
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
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import {
  MatIconModule
} from "./chunk-E6YAXSQU.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-255VWD3Z.js";
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
  NgClass,
  NgForOf,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NJVFXHEQ.js";

// src/app/admin/components/ai-model-management/ai-model-management.component.ts
function AIModelManagementComponent_mat_card_11_mat_chip_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r4, " ");
  }
}
function AIModelManagementComponent_mat_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9);
    \u0275\u0275listener("mouseenter", function AIModelManagementComponent_mat_card_11_Template_mat_card_mouseenter_0_listener() {
      const model_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cardState[model_r2.id] = "hovered");
    })("mouseleave", function AIModelManagementComponent_mat_card_11_Template_mat_card_mouseleave_0_listener() {
      const model_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cardState[model_r2.id] = "normal");
    });
    \u0275\u0275elementStart(1, "mat-card-header")(2, "div", 10)(3, "div", 11)(4, "mat-card-title");
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card-subtitle")(8, "mat-chip", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14)(11, "mat-chip", 15);
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(14, "mat-divider");
    \u0275\u0275elementStart(15, "mat-card-content")(16, "div", 16)(17, "div", 17)(18, "span");
    \u0275\u0275text(19, "Training Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "mat-progress-bar", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 19)(24, "div", 20)(25, "div", 21);
    \u0275\u0275element(26, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23)(28, "span", 24);
    \u0275\u0275text(29, "Accuracy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 25);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 20)(33, "div", 21);
    \u0275\u0275element(34, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 23)(36, "span", 24);
    \u0275\u0275text(37, "Precision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 25);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 20)(41, "div", 21);
    \u0275\u0275element(42, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 23)(44, "span", 24);
    \u0275\u0275text(45, "Recall");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 25);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 28)(49, "h4");
    \u0275\u0275text(50, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-chip-set");
    \u0275\u0275template(52, AIModelManagementComponent_mat_card_11_mat_chip_52_Template, 3, 1, "mat-chip", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 30);
    \u0275\u0275element(54, "i", 31);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "mat-divider");
    \u0275\u0275elementStart(58, "mat-card-actions")(59, "button", 32);
    \u0275\u0275listener("click", function AIModelManagementComponent_mat_card_11_Template_button_click_59_listener() {
      const model_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retrainModel(model_r2));
    });
    \u0275\u0275element(60, "i", 33);
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "Retrain");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "button", 34);
    \u0275\u0275listener("click", function AIModelManagementComponent_mat_card_11_Template_button_click_63_listener() {
      const model_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deployModel(model_r2));
    });
    \u0275\u0275element(64, "i", 35);
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66, "Deploy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "button", 36);
    \u0275\u0275listener("click", function AIModelManagementComponent_mat_card_11_Template_button_click_67_listener() {
      const model_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteModel(model_r2));
    });
    \u0275\u0275element(68, "i", 37);
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const model_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideInFromRight", void 0)("@cardHover", ctx_r2.cardState[model_r2.id]);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("fa-robot", model_r2.type === "Recommendation")("fa-brain", model_r2.type === "NLP")("fa-chart-line", model_r2.type === "Analytics");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", model_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", model_r2.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", model_r2.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", model_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-check-circle", model_r2.status === "Active")("fa-spinner", model_r2.status === "Training")("fa-pause-circle", model_r2.status === "Inactive")("fa-exclamation-circle", model_r2.status === "Error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", model_r2.status, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", model_r2.trainingProgress, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", model_r2.trainingProgress)("color", ctx_r2.getProgressColor(model_r2));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", model_r2.accuracy, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", model_r2.precision, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", model_r2.recall, "%");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", model_r2.features);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Last updated: ", \u0275\u0275pipeBind2(56, 30, model_r2.lastUpdated, "medium"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", model_r2.status !== "Active");
  }
}
var AIModelManagementComponent = class _AIModelManagementComponent {
  models = [
    {
      id: "1",
      name: "Job Matching Model",
      type: "Recommendation",
      status: "Active",
      trainingProgress: 100,
      accuracy: 92.5,
      precision: 89.3,
      recall: 91.8,
      features: ["Skills", "Experience", "Education", "Location"],
      lastUpdated: /* @__PURE__ */ new Date("2024-03-15")
    },
    {
      id: "2",
      name: "Resume Analysis Model",
      type: "NLP",
      status: "Training",
      trainingProgress: 75,
      accuracy: 88.3,
      precision: 85.7,
      recall: 87.2,
      features: ["Text Analysis", "Keyword Extraction", "Format Detection"],
      lastUpdated: /* @__PURE__ */ new Date("2024-03-10")
    },
    {
      id: "3",
      name: "Salary Prediction Model",
      type: "Analytics",
      status: "Inactive",
      trainingProgress: 100,
      accuracy: 85.2,
      precision: 83.1,
      recall: 84.7,
      features: ["Experience", "Location", "Industry", "Education"],
      lastUpdated: /* @__PURE__ */ new Date("2024-02-28")
    },
    {
      id: "4",
      name: "Candidate Ranking Model",
      type: "Recommendation",
      status: "Error",
      trainingProgress: 42,
      accuracy: 65.8,
      precision: 62.3,
      recall: 67.1,
      features: ["Skills Match", "Experience Level", "Education Score"],
      lastUpdated: /* @__PURE__ */ new Date("2024-03-18")
    }
  ];
  cardState = {};
  constructor() {
  }
  ngOnInit() {
    this.models.forEach((model) => {
      this.cardState[model.id] = "normal";
    });
  }
  getProgressColor(model) {
    if (model.status === "Error")
      return "warn";
    if (model.status === "Training")
      return "accent";
    if (model.status === "Active")
      return "primary";
    return "";
  }
  createModel() {
    console.log("Create new model");
  }
  retrainModel(model) {
    console.log("Retraining model:", model);
  }
  deployModel(model) {
    console.log("Deploying model:", model);
  }
  deleteModel(model) {
    console.log("Deleting model:", model);
  }
  static \u0275fac = function AIModelManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIModelManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIModelManagementComponent, selectors: [["app-ai-model-management"]], decls: 12, vars: 2, consts: [[1, "ai-model-management-container"], [1, "toolbar"], [1, "toolbar-left"], [1, "app-title"], [1, "toolbar-right"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-plus"], [1, "model-list"], ["class", "model-card mat-elevation-z4", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "model-card", "mat-elevation-z4", 3, "mouseenter", "mouseleave"], [1, "model-header"], [1, "model-title"], [1, "fas"], [1, "type-chip", 3, "ngClass"], [1, "model-status-badge"], [1, "status-chip", 3, "ngClass"], [1, "model-progress"], [1, "progress-info"], ["mode", "determinate", 3, "value", "color"], [1, "model-metrics"], [1, "metric"], [1, "metric-icon"], [1, "fas", "fa-bullseye"], [1, "metric-value"], [1, "metric-label"], [1, "metric-number"], [1, "fas", "fa-crosshairs"], [1, "fas", "fa-undo"], [1, "model-features"], ["class", "feature-chip", 4, "ngFor", "ngForOf"], [1, "last-updated"], [1, "fas", "fa-clock"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-sync-alt"], ["mat-button", "", "color", "accent", 3, "click", "disabled"], [1, "fas", "fa-rocket"], ["mat-button", "", "color", "warn", 3, "click"], [1, "fas", "fa-trash"], [1, "feature-chip"], [1, "fas", "fa-tag"]], template: function AIModelManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-toolbar", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "AI Model Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function AIModelManagementComponent_Template_button_click_6_listener() {
        return ctx.createModel();
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "New Model");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, AIModelManagementComponent_mat_card_11_Template, 71, 33, "mat-card", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.models);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatDialogModule,
    MatToolbarModule,
    MatToolbar,
    MatDividerModule,
    MatDivider,
    MatBadgeModule
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #4caf50;\n  --accent-light: #81c784;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n  --danger: #f44336;\n  --info: #2196f3;\n}\n.ai-model-management-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: var(--background-light);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  margin-bottom: 24px;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.model-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 24px;\n}\n.model-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.model-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n.model-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.model-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-right: 8px;\n}\n.model-status-badge[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 2px 8px;\n  margin-top: 4px;\n}\n.type-chip.recommendation[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.type-chip.nlp[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.analytics[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.training[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #616161;\n}\n.status-chip.error[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.model-progress[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.model-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin: 16px 0;\n}\n.metric[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  border-radius: 8px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  background-color: var(--primary-light);\n  color: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.metric-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.metric-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.metric-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: var(--primary);\n}\n.model-features[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.model-features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.feature-chip[_ngcontent-%COMP%] {\n  margin: 4px;\n  font-size: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.feature-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary-light);\n}\n.last-updated[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n}\n.last-updated[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  margin-top: auto;\n}\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .model-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 16px;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 12px;\n  }\n  .toolbar-left[_ngcontent-%COMP%], \n   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    margin: 4px 0;\n  }\n}\n@media (max-width: 480px) {\n  .ai-model-management-container[_ngcontent-%COMP%] {\n    padding: 16px 8px;\n  }\n  .model-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .model-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=ai-model-management.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ]),
    trigger("slideInFromRight", [
      transition(":enter", [
        style({ transform: "translateX(50px)", opacity: 0 }),
        animate("400ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIModelManagementComponent, { className: "AIModelManagementComponent", filePath: "src/app/admin/components/ai-model-management/ai-model-management.component.ts", lineNumber: 503 });
})();
export {
  AIModelManagementComponent
};
//# sourceMappingURL=chunk-SG6DVRTD.js.map
