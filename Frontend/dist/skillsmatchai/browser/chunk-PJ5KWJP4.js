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
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIconButton,
  NgIf,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAQJIRE2.js";

// src/app/employer/components/manage-interviews/manage-interviews.component.ts
function ManageInterviewsComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Candidate");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r1.candidateName, " ");
  }
}
function ManageInterviewsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Position");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r2.position, " ");
  }
}
function ManageInterviewsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, interview_r3.date, "mediumDate"), " ");
  }
}
function ManageInterviewsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Time");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interview_r4.time);
  }
}
function ManageInterviewsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17)(1, "mat-chip", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r5.getTypeColor(interview_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r5.type, " ");
  }
}
function ManageInterviewsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17)(1, "mat-chip", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r7 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r5.getStatusColor(interview_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r7.status, " ");
  }
}
function ManageInterviewsComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Interviewer");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interview_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", interview_r8.interviewer, " ");
  }
}
function ManageInterviewsComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ManageInterviewsComponent_td_32_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ManageInterviewsComponent_td_32_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const interview_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cancelInterview(interview_r10));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function ManageInterviewsComponent_td_32_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ManageInterviewsComponent_td_32_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const interview_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.completeInterview(interview_r10));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Complete");
    \u0275\u0275elementEnd()();
  }
}
function ManageInterviewsComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 17)(1, "button", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 21);
    \u0275\u0275listener("click", function ManageInterviewsComponent_td_32_Template_button_click_5_listener() {
      const interview_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.viewDetails(interview_r10));
    });
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 21);
    \u0275\u0275listener("click", function ManageInterviewsComponent_td_32_Template_button_click_8_listener() {
      const interview_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editInterview(interview_r10));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ManageInterviewsComponent_td_32_button_11_Template, 3, 0, "button", 22)(12, ManageInterviewsComponent_td_32_button_12_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const interview_r10 = ctx.$implicit;
    const menu_r13 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r13);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", interview_r10.status === "scheduled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", interview_r10.status === "scheduled");
  }
}
function ManageInterviewsComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 23);
  }
}
function ManageInterviewsComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 24);
  }
}
var ManageInterviewsComponent = class _ManageInterviewsComponent {
  displayedColumns = [
    "candidateName",
    "position",
    "date",
    "time",
    "type",
    "status",
    "interviewer",
    "actions"
  ];
  interviews = [
    {
      id: "1",
      candidateName: "John Doe",
      position: "Senior Frontend Developer",
      date: /* @__PURE__ */ new Date("2024-03-25"),
      time: "10:00 AM",
      type: "video",
      status: "scheduled",
      interviewer: "Sarah Johnson",
      notes: "Technical interview focusing on Angular and TypeScript"
    },
    {
      id: "2",
      candidateName: "Jane Smith",
      position: "Full Stack Developer",
      date: /* @__PURE__ */ new Date("2024-03-26"),
      time: "2:00 PM",
      type: "in-person",
      status: "scheduled",
      interviewer: "Mike Brown",
      notes: "System design and problem-solving interview"
    },
    {
      id: "3",
      candidateName: "Alex Johnson",
      position: "UX Designer",
      date: /* @__PURE__ */ new Date("2024-03-20"),
      time: "11:30 AM",
      type: "phone",
      status: "completed",
      interviewer: "Emily Davis",
      notes: "Excellent design skills and problem-solving approach"
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  getTypeColor(type) {
    switch (type) {
      case "video":
        return "primary";
      case "in-person":
        return "accent";
      case "phone":
        return "warn";
      default:
        return "";
    }
  }
  getStatusColor(status) {
    switch (status) {
      case "scheduled":
        return "primary";
      case "completed":
        return "accent";
      case "cancelled":
        return "warn";
      default:
        return "";
    }
  }
  scheduleInterview() {
    console.log("Schedule new interview");
  }
  viewDetails(interview) {
    console.log("View details:", interview);
  }
  editInterview(interview) {
    console.log("Edit interview:", interview);
  }
  cancelInterview(interview) {
    console.log("Cancel interview:", interview);
    interview.status = "cancelled";
  }
  completeInterview(interview) {
    console.log("Complete interview:", interview);
    interview.status = "completed";
  }
  static \u0275fac = function ManageInterviewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageInterviewsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageInterviewsComponent, selectors: [["app-manage-interviews"]], decls: 35, vars: 3, consts: [["menu", "matMenu"], [1, "interviews-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "interviews-table", 3, "dataSource"], ["matColumnDef", "candidateName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["matColumnDef", "interviewer"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["selected", "", 3, "color"], ["mat-icon-button", "", "matTooltip", "Actions", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageInterviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Interview Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 2);
      \u0275\u0275listener("click", function ManageInterviewsComponent_Template_button_click_5_listener() {
        return ctx.scheduleInterview();
      });
      \u0275\u0275text(6, " Schedule Interview ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "table", 3);
      \u0275\u0275elementContainerStart(9, 4);
      \u0275\u0275template(10, ManageInterviewsComponent_th_10_Template, 2, 0, "th", 5)(11, ManageInterviewsComponent_td_11_Template, 2, 1, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(12, 7);
      \u0275\u0275template(13, ManageInterviewsComponent_th_13_Template, 2, 0, "th", 5)(14, ManageInterviewsComponent_td_14_Template, 2, 1, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(15, 8);
      \u0275\u0275template(16, ManageInterviewsComponent_th_16_Template, 2, 0, "th", 5)(17, ManageInterviewsComponent_td_17_Template, 3, 4, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(18, 9);
      \u0275\u0275template(19, ManageInterviewsComponent_th_19_Template, 2, 0, "th", 5)(20, ManageInterviewsComponent_td_20_Template, 2, 1, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(21, 10);
      \u0275\u0275template(22, ManageInterviewsComponent_th_22_Template, 2, 0, "th", 5)(23, ManageInterviewsComponent_td_23_Template, 3, 2, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(24, 11);
      \u0275\u0275template(25, ManageInterviewsComponent_th_25_Template, 2, 0, "th", 5)(26, ManageInterviewsComponent_td_26_Template, 3, 2, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(27, 12);
      \u0275\u0275template(28, ManageInterviewsComponent_th_28_Template, 2, 0, "th", 5)(29, ManageInterviewsComponent_td_29_Template, 2, 1, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(30, 13);
      \u0275\u0275template(31, ManageInterviewsComponent_th_31_Template, 2, 0, "th", 5)(32, ManageInterviewsComponent_td_32_Template, 13, 3, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(33, ManageInterviewsComponent_tr_33_Template, 1, 0, "tr", 14)(34, ManageInterviewsComponent_tr_34_Template, 1, 0, "tr", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("dataSource", ctx.interviews);
      \u0275\u0275advance(25);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    DatePipe,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
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
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule,
    MatTooltip
  ], styles: ["\n\n.interviews-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.interviews-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nmat-chip[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=manage-interviews.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageInterviewsComponent, { className: "ManageInterviewsComponent", filePath: "src/app/employer/components/manage-interviews/manage-interviews.component.ts", lineNumber: 163 });
})();
export {
  ManageInterviewsComponent
};
//# sourceMappingURL=chunk-PJ5KWJP4.js.map
