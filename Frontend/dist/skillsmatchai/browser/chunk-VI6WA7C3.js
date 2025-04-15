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
import "./chunk-QHY3LIYG.js";
import "./chunk-EEGQKQWR.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import "./chunk-ZTFMCIUB.js";
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAQJIRE2.js";

// src/app/employer/components/listings/active-listings/active-listings.component.ts
function ActiveListingsComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Position");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
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
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
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
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Location");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r3.location);
  }
}
function ActiveListingsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15)(1, "mat-chip-set")(2, "mat-chip");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r4.type);
  }
}
function ActiveListingsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15)(1, "mat-chip-set")(2, "mat-chip", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("color", job_r5.status === "Active" ? "primary" : "warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r5.status, " ");
  }
}
function ActiveListingsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Applicants");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r6.applicants);
  }
}
function ActiveListingsComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Posted");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r7.posted);
  }
}
function ActiveListingsComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ActiveListingsComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15)(1, "button", 17);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275text(4, "Close");
    \u0275\u0275elementEnd()();
  }
}
function ActiveListingsComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 19);
  }
}
function ActiveListingsComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 20);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActiveListingsComponent, selectors: [["app-active-listings"]], decls: 35, vars: 3, consts: [[1, "listings-container"], ["mat-table", "", 1, "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "department"], ["matColumnDef", "location"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["matColumnDef", "applicants"], ["matColumnDef", "posted"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["selected", "", 3, "color"], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "warn"], ["mat-header-row", ""], ["mat-row", ""]], template: function ActiveListingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Active Job Listings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Manage your current job postings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "table", 1);
      \u0275\u0275elementContainerStart(9, 2);
      \u0275\u0275template(10, ActiveListingsComponent_th_10_Template, 2, 0, "th", 3)(11, ActiveListingsComponent_td_11_Template, 2, 1, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(12, 5);
      \u0275\u0275template(13, ActiveListingsComponent_th_13_Template, 2, 0, "th", 3)(14, ActiveListingsComponent_td_14_Template, 2, 1, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(15, 6);
      \u0275\u0275template(16, ActiveListingsComponent_th_16_Template, 2, 0, "th", 3)(17, ActiveListingsComponent_td_17_Template, 2, 1, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(18, 7);
      \u0275\u0275template(19, ActiveListingsComponent_th_19_Template, 2, 0, "th", 3)(20, ActiveListingsComponent_td_20_Template, 4, 1, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(21, 8);
      \u0275\u0275template(22, ActiveListingsComponent_th_22_Template, 2, 0, "th", 3)(23, ActiveListingsComponent_td_23_Template, 4, 2, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(24, 9);
      \u0275\u0275template(25, ActiveListingsComponent_th_25_Template, 2, 0, "th", 3)(26, ActiveListingsComponent_td_26_Template, 2, 1, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(27, 10);
      \u0275\u0275template(28, ActiveListingsComponent_th_28_Template, 2, 0, "th", 3)(29, ActiveListingsComponent_td_29_Template, 2, 1, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(30, 11);
      \u0275\u0275template(31, ActiveListingsComponent_th_31_Template, 2, 0, "th", 3)(32, ActiveListingsComponent_td_32_Template, 5, 0, "td", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(33, ActiveListingsComponent_tr_33_Template, 1, 0, "tr", 12)(34, ActiveListingsComponent_tr_34_Template, 1, 0, "tr", 13);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("dataSource", ctx.jobListings);
      \u0275\u0275advance(25);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [
    CommonModule,
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
    MatChip,
    MatChipSet,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
  ], styles: ["\n\n.listings-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-chip-set[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=active-listings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActiveListingsComponent, { className: "ActiveListingsComponent", filePath: "src/app/employer/components/listings/active-listings/active-listings.component.ts", lineNumber: 130 });
})();
export {
  ActiveListingsComponent
};
//# sourceMappingURL=chunk-VI6WA7C3.js.map
