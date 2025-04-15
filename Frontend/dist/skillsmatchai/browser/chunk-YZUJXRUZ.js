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
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-2XNMZTMP.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import "./chunk-EEGQKQWR.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  DatePipe,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIconButton,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAQJIRE2.js";

// src/app/job-seeker/components/applications/applications.component.ts
function ApplicationsComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, "Job Title");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r1.jobTitle);
  }
}
function ApplicationsComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, "Company");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const application_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r2.company, " ");
  }
}
function ApplicationsComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, "Applied");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const application_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, application_r3.appliedDate, "mediumDate"), " ");
  }
}
function ApplicationsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13)(1, "mat-chip", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r4.getStatusColor(application_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r4.status, " ");
  }
}
function ApplicationsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 13)(1, "button", 15);
    \u0275\u0275listener("click", function ApplicationsComponent_td_21_Template_button_click_1_listener() {
      const application_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewDetails(application_r7));
    });
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function ApplicationsComponent_td_21_Template_button_click_3_listener() {
      const application_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.withdrawApplication(application_r7));
    });
    \u0275\u0275element(4, "i", 18);
    \u0275\u0275elementEnd()();
  }
}
function ApplicationsComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 19);
  }
}
function ApplicationsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 20);
  }
}
var ApplicationsComponent = class _ApplicationsComponent {
  displayedColumns = [
    "jobTitle",
    "company",
    "appliedDate",
    "status",
    "actions"
  ];
  applications = [
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp",
      appliedDate: /* @__PURE__ */ new Date("2024-03-15"),
      status: "Interview",
      lastUpdated: /* @__PURE__ */ new Date("2024-03-20")
    },
    {
      id: "2",
      jobTitle: "Full Stack Developer",
      company: "InnovateSoft",
      appliedDate: /* @__PURE__ */ new Date("2024-03-10"),
      status: "Pending",
      lastUpdated: /* @__PURE__ */ new Date("2024-03-10")
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  getStatusColor(status) {
    switch (status) {
      case "Accepted":
        return "primary";
      case "Interview":
        return "accent";
      case "Rejected":
        return "warn";
      case "Reviewed":
        return "accent";
      case "Pending":
      default:
        return "";
    }
  }
  viewDetails(application) {
    console.log("View details for application:", application);
  }
  withdrawApplication(application) {
    console.log("Withdraw application:", application);
  }
  static \u0275fac = function ApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationsComponent, selectors: [["app-applications"]], decls: 24, vars: 3, consts: [[1, "applications-container"], [1, "elevated-card"], ["mat-table", "", 1, "mat-elevation-z2", "applications-table", 3, "dataSource"], ["matColumnDef", "jobTitle"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "company"], ["matColumnDef", "appliedDate"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["selected", "", 1, "status-chip", 3, "color"], ["mat-icon-button", "", "color", "primary", "matTooltip", "View Details", 3, "click"], [1, "fas", "fa-eye"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Withdraw", 3, "click"], [1, "fas", "fa-trash-alt"], ["mat-header-row", ""], ["mat-row", ""]], template: function ApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Your Applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "table", 2);
      \u0275\u0275elementContainerStart(7, 3);
      \u0275\u0275template(8, ApplicationsComponent_th_8_Template, 2, 0, "th", 4)(9, ApplicationsComponent_td_9_Template, 3, 1, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(10, 6);
      \u0275\u0275template(11, ApplicationsComponent_th_11_Template, 2, 0, "th", 4)(12, ApplicationsComponent_td_12_Template, 2, 1, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(13, 7);
      \u0275\u0275template(14, ApplicationsComponent_th_14_Template, 2, 0, "th", 4)(15, ApplicationsComponent_td_15_Template, 3, 4, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(16, 8);
      \u0275\u0275template(17, ApplicationsComponent_th_17_Template, 2, 0, "th", 4)(18, ApplicationsComponent_td_18_Template, 3, 2, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(19, 9);
      \u0275\u0275template(20, ApplicationsComponent_th_20_Template, 2, 0, "th", 4)(21, ApplicationsComponent_td_21_Template, 5, 0, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(22, ApplicationsComponent_tr_22_Template, 1, 0, "tr", 10)(23, ApplicationsComponent_tr_23_Template, 1, 0, "tr", 11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("dataSource", ctx.applications);
      \u0275\u0275advance(16);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
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
    MatIconButton,
    MatIconModule,
    MatChipsModule,
    MatChip,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatTooltipModule,
    MatTooltip
  ], styles: ["\n\n.applications-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: 100%;\n  overflow-x: auto;\n}\n.elevated-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\n}\n.applications-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 600px;\n  border-collapse: collapse;\n}\n@media (max-width: 768px) {\n  .applications-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .mat-header-cell[_ngcontent-%COMP%], \n   .mat-cell[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 14px;\n  }\n  .status-chip[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=applications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationsComponent, { className: "ApplicationsComponent", filePath: "src/app/job-seeker/components/applications/applications.component.ts", lineNumber: 149 });
})();
export {
  ApplicationsComponent
};
//# sourceMappingURL=chunk-YZUJXRUZ.js.map
