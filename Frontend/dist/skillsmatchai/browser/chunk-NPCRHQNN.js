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
import "./chunk-DG7YLRMC.js";
import "./chunk-VW3NTET3.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import "./chunk-255VWD3Z.js";
import {
  CommonModule,
  DatePipe,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NJVFXHEQ.js";

// src/app/employer/components/listings/active-listings/active-listings.component.ts
function ActiveListingsComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Position");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r1.title);
  }
}
function ActiveListingsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r2.department);
  }
}
function ActiveListingsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Location");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r3.location);
  }
}
function ActiveListingsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r4.type);
  }
}
function ActiveListingsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "span", 35);
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", job_r5.status === "Active" ? "status-active" : "status-paused");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", job_r5.status === "Active" ? "fa-check-circle" : "fa-pause-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r5.status);
  }
}
function ActiveListingsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Applicants");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5, "applicants");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r6.applicants);
  }
}
function ActiveListingsComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Posted");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "div", 43);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, job_r7.posted, "MMM d, y"));
  }
}
function ActiveListingsComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "div", 47)(2, "button", 48);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275element(7, "i", 52);
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9, "Close");
    \u0275\u0275elementEnd()()()();
  }
}
function ActiveListingsComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function ActiveListingsComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
var ActiveListingsComponent = class _ActiveListingsComponent {
  displayedColumns = [
    "title",
    "department",
    "location",
    "type",
    "status",
    "applicants",
    "posted",
    "actions"
  ];
  jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      status: "Active",
      applicants: 12,
      posted: "2024-03-01"
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      status: "Active",
      applicants: 8,
      posted: "2024-03-05"
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Contract",
      status: "Paused",
      applicants: 5,
      posted: "2024-03-10"
    }
  ];
  static \u0275fac = function ActiveListingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveListingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActiveListingsComponent, selectors: [["app-active-listings"]], decls: 35, vars: 4, consts: [[1, "listings-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "listings-card"], ["mat-table", "", 1, "mat-elevation-z0", "job-table", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "job-title", 4, "matCellDef"], ["matColumnDef", "department"], ["mat-cell", "", "class", "department-cell", 4, "matCellDef"], ["matColumnDef", "location"], ["mat-cell", "", "class", "location-cell", 4, "matCellDef"], ["matColumnDef", "type"], ["mat-cell", "", "class", "type-cell", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", "class", "status-cell", 4, "matCellDef"], ["matColumnDef", "applicants"], ["mat-cell", "", "class", "applicants-cell", 4, "matCellDef"], ["matColumnDef", "posted"], ["mat-cell", "", "class", "posted-cell", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", "class", "header-row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "job-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "job-title"], ["mat-cell", "", 1, "department-cell"], ["mat-cell", "", 1, "location-cell"], [1, "location-text"], [1, "fas", "fa-map-marker-alt", "location-icon"], [1, "location-value"], ["mat-cell", "", 1, "type-cell"], [1, "job-type"], ["mat-cell", "", 1, "status-cell"], [1, "status-chip", 3, "ngClass"], [1, "fas", 3, "ngClass"], [1, "status-text"], ["mat-cell", "", 1, "applicants-cell"], [1, "applicants-count"], [1, "applicant-number"], [1, "applicant-text"], ["mat-cell", "", 1, "posted-cell"], [1, "posted-date"], [1, "fas", "fa-calendar-alt", "date-icon"], [1, "date-text"], ["mat-cell", "", 1, "actions-cell"], [1, "action-buttons"], ["mat-button", "", 1, "edit-button"], [1, "fas", "fa-edit"], [1, "button-text"], ["mat-button", "", 1, "close-button"], [1, "fas", "fa-times"], ["mat-header-row", "", 1, "header-row"], ["mat-row", "", 1, "job-row"]], template: function ActiveListingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Active Job Listings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage your current job postings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-card", 4)(7, "mat-card-content")(8, "table", 5);
      \u0275\u0275elementContainerStart(9, 6);
      \u0275\u0275template(10, ActiveListingsComponent_th_10_Template, 2, 0, "th", 7)(11, ActiveListingsComponent_td_11_Template, 2, 1, "td", 8);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(12, 9);
      \u0275\u0275template(13, ActiveListingsComponent_th_13_Template, 2, 0, "th", 7)(14, ActiveListingsComponent_td_14_Template, 2, 1, "td", 10);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(15, 11);
      \u0275\u0275template(16, ActiveListingsComponent_th_16_Template, 2, 0, "th", 7)(17, ActiveListingsComponent_td_17_Template, 5, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(18, 13);
      \u0275\u0275template(19, ActiveListingsComponent_th_19_Template, 2, 0, "th", 7)(20, ActiveListingsComponent_td_20_Template, 3, 1, "td", 14);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(21, 15);
      \u0275\u0275template(22, ActiveListingsComponent_th_22_Template, 2, 0, "th", 7)(23, ActiveListingsComponent_td_23_Template, 5, 3, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(24, 17);
      \u0275\u0275template(25, ActiveListingsComponent_th_25_Template, 2, 0, "th", 7)(26, ActiveListingsComponent_td_26_Template, 6, 1, "td", 18);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(27, 19);
      \u0275\u0275template(28, ActiveListingsComponent_th_28_Template, 2, 0, "th", 7)(29, ActiveListingsComponent_td_29_Template, 6, 4, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(30, 21);
      \u0275\u0275template(31, ActiveListingsComponent_th_31_Template, 2, 0, "th", 7)(32, ActiveListingsComponent_td_32_Template, 10, 0, "td", 22);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(33, ActiveListingsComponent_tr_33_Template, 1, 0, "tr", 23)(34, ActiveListingsComponent_tr_34_Template, 1, 0, "tr", 24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("dataSource", ctx.jobListings);
      \u0275\u0275advance(25);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
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
    MatButton,
    MatChipsModule,
    MatCardModule,
    MatCard,
    MatCardContent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary-color: rgba(102, 187, 106, 0.95);\n  --primary-dark: rgba(56, 142, 60, 0.95);\n  --primary-light: rgba(200, 230, 201, 0.7);\n  --accent-color: #4caf50;\n  --text-primary: #2e7d32;\n  --text-secondary: #455a64;\n  --background-light: rgba(245, 245, 245, 0.95);\n  --card-bg: rgba(255, 255, 255, 0.98);\n  --active-bg: rgba(200, 230, 201, 0.5);\n  --hover-opacity: 0.08;\n}\n.listings-container[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 28px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin: 0;\n  opacity: 0.8;\n}\n.listings-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.job-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.header-row[_ngcontent-%COMP%] {\n  height: 56px;\n  background-color: var(--primary-light);\n}\nth.mat-header-cell[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 0 16px !important;\n  border: none;\n}\ntd.mat-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px !important;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  color: var(--text-secondary);\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.job-row[_ngcontent-%COMP%] {\n  height: 72px;\n  transition: background-color 0.2s ease;\n}\n.job-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(200, 230, 201, 0.2);\n}\n.job-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: 15px;\n}\n.location-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.location-icon[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.job-type[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 16px;\n  background-color: var(--primary-light);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  gap: 6px;\n}\n.status-active[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.15);\n  color: #2e7d32;\n}\n.status-paused[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.15);\n  color: #ef6c00;\n}\n.applicants-count[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.applicant-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--text-primary);\n}\n.applicant-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.posted-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.date-icon[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  opacity: 0.7;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.edit-button[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  background-color: rgba(76, 175, 80, 0.1);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.edit-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(76, 175, 80, 0.2);\n}\n.close-button[_ngcontent-%COMP%] {\n  color: #f44336;\n  background-color: rgba(244, 67, 54, 0.1);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(244, 67, 54, 0.2);\n}\n@media (max-width: 768px) {\n  .listings-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .job-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n.department-cell[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.location-cell[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.location-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.location-value[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.type-cell[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.status-cell[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.status-text[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.applicants-cell[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.posted-cell[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.job-title[_ngcontent-%COMP%] {\n  min-width: 200px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=active-listings.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActiveListingsComponent, { className: "ActiveListingsComponent", filePath: "src/app/employer/components/listings/active-listings/active-listings.component.ts", lineNumber: 374 });
})();
export {
  ActiveListingsComponent
};
//# sourceMappingURL=chunk-NPCRHQNN.js.map
