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
  state,
  style,
  transition,
  trigger
} from "./chunk-7BNL2RL5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PFNPEZPC.js";
import "./chunk-2CZVWUUL.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import "./chunk-VW3NTET3.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-E6YAXSQU.js";
import "./chunk-255VWD3Z.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJVFXHEQ.js";

// src/app/job-seeker/components/applications/applications.component.ts
function ApplicationsComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Job Title");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275listener("mouseenter", function ApplicationsComponent_td_9_Template_td_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowState = "hovered");
    })("mouseleave", function ApplicationsComponent_td_9_Template_td_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowState = "normal");
    });
    \u0275\u0275elementStart(1, "strong", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@rowHover", ctx_r1.rowState);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r3.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r3.company);
  }
}
function ApplicationsComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Company");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r4.company);
  }
}
function ApplicationsComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Applied");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 20)(2, "mat-icon", 21);
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const application_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 1, application_r5.appliedDate, "mediumDate"));
  }
}
function ApplicationsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "mat-chip", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(application_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r6.status, " ");
  }
}
function ApplicationsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 23)(2, "button", 24);
    \u0275\u0275listener("click", function ApplicationsComponent_td_21_Template_button_click_2_listener() {
      const application_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(application_r8));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function ApplicationsComponent_td_21_Template_button_click_5_listener() {
      const application_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.withdrawApplication(application_r8));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()()();
  }
}
function ApplicationsComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function ApplicationsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27);
    \u0275\u0275listener("mouseenter", function ApplicationsComponent_tr_23_Template_tr_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowState = "hovered");
    })("mouseleave", function ApplicationsComponent_tr_23_Template_tr_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowState = "normal");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideIn", void 0)("@rowHover", ctx_r1.rowState);
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
    },
    {
      id: "3",
      jobTitle: "UX Designer",
      company: "DesignHub",
      appliedDate: /* @__PURE__ */ new Date("2024-03-05"),
      status: "Reviewed",
      lastUpdated: /* @__PURE__ */ new Date("2024-03-08")
    },
    {
      id: "4",
      jobTitle: "Product Manager",
      company: "ProductLabs",
      appliedDate: /* @__PURE__ */ new Date("2024-02-28"),
      status: "Rejected",
      lastUpdated: /* @__PURE__ */ new Date("2024-03-15")
    },
    {
      id: "5",
      jobTitle: "DevOps Engineer",
      company: "CloudSystems",
      appliedDate: /* @__PURE__ */ new Date("2024-03-01"),
      status: "Accepted",
      lastUpdated: /* @__PURE__ */ new Date("2024-03-18")
    }
  ];
  typewriterState = "start";
  rowState = "normal";
  constructor() {
  }
  ngOnInit() {
    setTimeout(() => {
      this.typewriterState = "end";
    }, 100);
  }
  getStatusClass(status) {
    switch (status) {
      case "Accepted":
        return "accepted-chip";
      case "Interview":
        return "interview-chip";
      case "Rejected":
        return "rejected-chip";
      case "Reviewed":
        return "reviewed-chip";
      case "Pending":
      default:
        return "pending-chip";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationsComponent, selectors: [["app-applications"]], decls: 24, vars: 5, consts: [[1, "applications-container"], [1, "elevated-card"], [1, "typewriter"], ["mat-table", "", 1, "mat-elevation-z2", "applications-table", 3, "dataSource"], ["matColumnDef", "jobTitle"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "mouseenter", "mouseleave", 4, "matCellDef"], ["matColumnDef", "company"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "appliedDate"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "mouseenter", "mouseleave", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 3, "mouseenter", "mouseleave"], [1, "job-title"], [1, "company-mobile"], ["mat-cell", ""], [1, "company-desktop"], [1, "date-container"], [1, "date-icon"], ["selected", "", 1, "status-chip"], [1, "actions-container"], ["mat-icon-button", "", "matTooltip", "View Details", 1, "view-button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Withdraw", 1, "withdraw-button", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "mouseenter", "mouseleave"]], template: function ApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title", 2);
      \u0275\u0275text(4, " Your Applications ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "table", 3);
      \u0275\u0275elementContainerStart(7, 4);
      \u0275\u0275template(8, ApplicationsComponent_th_8_Template, 2, 0, "th", 5)(9, ApplicationsComponent_td_9_Template, 5, 3, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(10, 7);
      \u0275\u0275template(11, ApplicationsComponent_th_11_Template, 2, 0, "th", 5)(12, ApplicationsComponent_td_12_Template, 3, 1, "td", 8);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(13, 9);
      \u0275\u0275template(14, ApplicationsComponent_th_14_Template, 2, 0, "th", 5)(15, ApplicationsComponent_td_15_Template, 7, 4, "td", 8);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(16, 10);
      \u0275\u0275template(17, ApplicationsComponent_th_17_Template, 2, 0, "th", 5)(18, ApplicationsComponent_td_18_Template, 3, 3, "td", 8);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(19, 11);
      \u0275\u0275template(20, ApplicationsComponent_th_20_Template, 2, 0, "th", 5)(21, ApplicationsComponent_td_21_Template, 8, 0, "td", 8);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(22, ApplicationsComponent_tr_22_Template, 1, 0, "tr", 12)(23, ApplicationsComponent_tr_23_Template, 1, 2, "tr", 13);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@slideIn", void 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("@typewriter", ctx.typewriterState);
      \u0275\u0275advance(3);
      \u0275\u0275property("dataSource", ctx.applications);
      \u0275\u0275advance(16);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [CommonModule, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatChipsModule, MatChip, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatTooltipModule, MatTooltip], styles: ['\n\n[_nghost-%COMP%] {\n  --primary-brown: #6D4C41;\n  --light-brown: #8D6E63;\n  --dark-brown: #4E342E;\n  --accent-brown: #A1887F;\n  --background-brown: #EFEBE9;\n  --text-brown: #3E2723;\n  --pending: #BCAAA4;\n  --reviewed: #FFB74D;\n  --interview: #64B5F6;\n  --rejected: #E57373;\n  --accepted: #81C784;\n}\n.applications-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  width: 100%;\n  overflow-x: auto;\n  background-color: var(--background-brown);\n  min-height: 100vh;\n}\n.elevated-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);\n  background-color: white;\n  border: 1px solid var(--accent-brown);\n}\n.applications-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 600px;\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n.typewriter[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: var(--primary-brown);\n  font-size: 1.8rem;\n  font-weight: 500;\n  overflow: hidden;\n  white-space: nowrap;\n  border-right: 3px solid var(--primary-brown);\n  animation: _ngcontent-%COMP%_typing 2s steps(30, end), _ngcontent-%COMP%_blink-caret 0.75s step-end infinite;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_blink-caret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: var(--primary-brown);\n  }\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--dark-brown);\n  font-size: 0.9rem;\n  padding: 12px 16px;\n  background-color: var(--background-brown);\n}\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-brown);\n  border-top: 1px solid var(--accent-brown);\n  border-bottom: 1px solid var(--accent-brown);\n  background-color: white;\n}\n.mat-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid var(--accent-brown);\n  border-radius: 8px 0 0 8px;\n}\n.mat-cell[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid var(--accent-brown);\n  border-radius: 0 8px 8px 0;\n}\n.job-title[_ngcontent-%COMP%] {\n  color: var(--dark-brown);\n  font-size: 1rem;\n}\n.company-desktop[_ngcontent-%COMP%] {\n  color: var(--light-brown);\n  font-size: 0.9rem;\n}\n.company-mobile[_ngcontent-%COMP%] {\n  display: none;\n  color: var(--light-brown);\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n.date-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.date-icon[_ngcontent-%COMP%] {\n  color: var(--light-brown);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.8rem;\n  padding: 4px 8px;\n  min-height: 24px;\n}\n.pending-chip[_ngcontent-%COMP%] {\n  background-color: var(--pending);\n  color: var(--text-brown);\n}\n.reviewed-chip[_ngcontent-%COMP%] {\n  background-color: var(--reviewed);\n  color: var(--text-brown);\n}\n.interview-chip[_ngcontent-%COMP%] {\n  background-color: var(--interview);\n  color: white;\n}\n.rejected-chip[_ngcontent-%COMP%] {\n  background-color: var(--rejected);\n  color: white;\n}\n.accepted-chip[_ngcontent-%COMP%] {\n  background-color: var(--accepted);\n  color: white;\n}\n.actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.view-button[_ngcontent-%COMP%] {\n  color: var(--primary-brown);\n  background-color: rgba(109, 76, 65, 0.1);\n}\n.withdraw-button[_ngcontent-%COMP%] {\n  color: var(--rejected);\n  background-color: rgba(229, 115, 115, 0.1);\n}\n.mat-row[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .applications-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .typewriter[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .company-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .company-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .mat-header-cell[_ngcontent-%COMP%], \n   .mat-cell[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 14px;\n  }\n  .status-chip[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .applications-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .typewriter[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .mat-cell[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n  }\n  .actions-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=applications.component.css.map */'], data: { animation: [
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("400ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ]),
    trigger("typewriter", [
      state("start", style({ width: "0" })),
      state("end", style({ width: "100%" })),
      transition("start => end", [
        animate("2000ms steps(40, end)")
      ])
    ]),
    trigger("rowHover", [
      state("normal", style({ transform: "scale(1)" })),
      state("hovered", style({ transform: "scale(1.02)" })),
      transition("normal <=> hovered", animate("200ms ease-in-out"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationsComponent, { className: "ApplicationsComponent", filePath: "src/app/job-seeker/components/applications/applications.component.ts", lineNumber: 365 });
})();
export {
  ApplicationsComponent
};
//# sourceMappingURL=chunk-MBVU3TRZ.js.map
