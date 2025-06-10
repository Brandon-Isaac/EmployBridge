import {
  ApplicationService,
  ApplicationStatus
} from "./chunk-CHRKFC3R.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-YYFOACDK.js";
import {
  CandidateService,
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-43ET6NAQ.js";
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
} from "./chunk-X3VTV5VE.js";
import {
  MatIconModule
} from "./chunk-LH77XFOL.js";
import "./chunk-HJUTQLGZ.js";
import "./chunk-UILPAKWT.js";
import "./chunk-42HARFSR.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-LGNT6V3W.js";
import "./chunk-IPERWXTS.js";
import {
  CommonModule,
  Component,
  FaIconComponent,
  FontAwesomeModule,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIconButton,
  MatSnackBar,
  NgClass,
  NgIf,
  ViewChild,
  faCheckCircle,
  faClock,
  faEllipsisV,
  faEnvelope,
  faEye,
  faFileAlt,
  faTimesCircle,
  faUser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/applications/applications.component.ts
var _c0 = () => [5, 10, 25, 100];
function ApplicationsComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Candidate");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 19);
    \u0275\u0275element(2, "fa-icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.faUser);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCandidateName(application_r1.userId), " ");
  }
}
function ApplicationsComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Applied Date");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const application_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.applicationService.formatDate(application_r3.appliedAt), " ");
  }
}
function ApplicationsComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Match Score");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getMatchScoreClass(application_r4.matchScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r4.matchScore, "% ");
  }
}
function ApplicationsComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "mat-chip", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.applicationService.getStatusColor(application_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r5.status, " ");
  }
}
function ApplicationsComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ApplicationsComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 18)(1, "button", 24);
    \u0275\u0275element(2, "fa-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 25);
    \u0275\u0275listener("click", function ApplicationsComponent_td_22_Template_button_click_5_listener() {
      const application_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewApplication(application_r7));
    });
    \u0275\u0275element(6, "fa-icon", 20);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function ApplicationsComponent_td_22_Template_button_click_9_listener() {
      const application_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(application_r7.id, ctx_r1.ApplicationStatus.REVIEWED));
    });
    \u0275\u0275element(10, "fa-icon", 20);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Mark as Reviewed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 25);
    \u0275\u0275listener("click", function ApplicationsComponent_td_22_Template_button_click_13_listener() {
      const application_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(application_r7.id, ctx_r1.ApplicationStatus.INTERVIEW));
    });
    \u0275\u0275element(14, "fa-icon", 20);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Schedule Interview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function ApplicationsComponent_td_22_Template_button_click_17_listener() {
      const application_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(application_r7.id, ctx_r1.ApplicationStatus.REJECTED));
    });
    \u0275\u0275element(18, "fa-icon", 20);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Reject");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r8 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faEllipsisV);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.faEye);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.faCheckCircle);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.faClock);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.faTimesCircle);
  }
}
function ApplicationsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function ApplicationsComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function ApplicationsComponent_div_26_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p")(2, "strong");
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCandidate.name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCandidate.email, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCandidate.phone, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCandidate.location, "");
  }
}
function ApplicationsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h3");
    \u0275\u0275text(2, "Application Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30)(5, "h4");
    \u0275\u0275text(6, "Cover Letter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30)(10, "h4");
    \u0275\u0275text(11, "Candidate Information");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ApplicationsComponent_div_26_div_12_Template, 17, 4, "div", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedApplication.coverLetter);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedCandidate);
  }
}
var ApplicationsComponent = class _ApplicationsComponent {
  applicationService;
  candidateService;
  snackBar;
  applications = [];
  selectedApplication = null;
  selectedCandidate = null;
  displayedColumns = ["candidateName", "appliedAt", "matchScore", "status", "actions"];
  ApplicationStatus = ApplicationStatus;
  // Make enum available in template
  // Font Awesome icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faClock = faClock;
  faEye = faEye;
  faEllipsisV = faEllipsisV;
  paginator;
  sort;
  table;
  constructor(applicationService, candidateService, snackBar) {
    this.applicationService = applicationService;
    this.candidateService = candidateService;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.loadApplications();
  }
  loadApplications() {
    this.applicationService.getJobApplications("all").subscribe({
      next: (applications) => {
        this.applications = applications;
      },
      error: (error) => {
        console.error("Error loading applications:", error);
        this.snackBar.open("Failed to load applications. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  getCandidateName(userId) {
    return "Loading...";
  }
  getMatchScoreClass(score) {
    if (score >= 80)
      return "high";
    if (score >= 60)
      return "medium";
    return "low";
  }
  viewApplication(application) {
    this.selectedApplication = application;
    this.candidateService.getCandidateById(application.userId).subscribe({
      next: (candidate) => {
        this.selectedCandidate = candidate;
      },
      error: (error) => {
        console.error("Error loading candidate details:", error);
        this.snackBar.open("Failed to load candidate details. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  updateStatus(applicationId, newStatus) {
    this.applicationService.updateApplicationStatus(applicationId, newStatus).subscribe({
      next: () => {
        this.loadApplications();
        this.snackBar.open("Application status updated successfully.", "Close", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      },
      error: (error) => {
        console.error("Error updating application status:", error);
        this.snackBar.open("Failed to update application status. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  static \u0275fac = function ApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationsComponent)(\u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(CandidateService), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationsComponent, selectors: [["app-employer-applications"]], viewQuery: function ApplicationsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
      \u0275\u0275viewQuery(MatSort, 5);
      \u0275\u0275viewQuery(MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, decls: 27, vars: 7, consts: [["menu", "matMenu"], [1, "applications-container"], [1, "applications-card"], [1, "applications-content"], ["mat-table", "", "matSort", "", 1, "applications-table", 3, "dataSource"], ["matColumnDef", "candidateName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "appliedAt"], ["matColumnDef", "matchScore"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["class", "application-details", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "candidate-info"], [3, "icon"], [1, "match-score", 3, "ngClass"], ["selected", "", 3, "color"], ["mat-header-cell", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "application-details"], [1, "details-content"], [1, "detail-section"], ["class", "candidate-details", 4, "ngIf"], [1, "candidate-details"]], template: function ApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Job Applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "div", 3)(7, "table", 4);
      \u0275\u0275elementContainerStart(8, 5);
      \u0275\u0275template(9, ApplicationsComponent_th_9_Template, 2, 0, "th", 6)(10, ApplicationsComponent_td_10_Template, 4, 2, "td", 7);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(11, 8);
      \u0275\u0275template(12, ApplicationsComponent_th_12_Template, 2, 0, "th", 6)(13, ApplicationsComponent_td_13_Template, 2, 1, "td", 7);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(14, 9);
      \u0275\u0275template(15, ApplicationsComponent_th_15_Template, 2, 0, "th", 6)(16, ApplicationsComponent_td_16_Template, 3, 2, "td", 7);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(17, 10);
      \u0275\u0275template(18, ApplicationsComponent_th_18_Template, 2, 0, "th", 6)(19, ApplicationsComponent_td_19_Template, 3, 2, "td", 7);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(20, 11);
      \u0275\u0275template(21, ApplicationsComponent_th_21_Template, 2, 0, "th", 12)(22, ApplicationsComponent_td_22_Template, 21, 6, "td", 7);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(23, ApplicationsComponent_tr_23_Template, 1, 0, "tr", 13)(24, ApplicationsComponent_tr_24_Template, 1, 0, "tr", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "mat-paginator", 15);
      \u0275\u0275template(26, ApplicationsComponent_div_26_Template, 13, 2, "div", 16);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("dataSource", ctx.applications);
      \u0275\u0275advance(16);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("pageSize", 10)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedApplication);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
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
    MatPaginatorModule,
    MatPaginator,
    MatSortModule,
    MatSort,
    MatSortHeader,
    MatChipsModule,
    MatChip,
    MatIconModule,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.applications-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.applications-card[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.applications-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.applications-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.match-score[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.match-score.high[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.match-score.medium[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #ef6c00;\n}\n.match-score.low[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.application-details[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #333;\n}\nfa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #666;\n}\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 80px;\n}\n/*# sourceMappingURL=applications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationsComponent, [{
    type: Component,
    args: [{ selector: "app-employer-applications", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatChipsModule,
      MatIconModule,
      MatMenuModule,
      FontAwesomeModule
    ], template: `
    <div class="applications-container">
      <mat-card class="applications-card">
        <mat-card-header>
          <mat-card-title>Job Applications</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="applications-content">
            <table mat-table [dataSource]="applications" matSort class="applications-table">
              <!-- Candidate Name Column -->
              <ng-container matColumnDef="candidateName">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Candidate</th>
                <td mat-cell *matCellDef="let application">
                  <div class="candidate-info">
                    <fa-icon [icon]="faUser"></fa-icon>
                    {{getCandidateName(application.userId)}}
                  </div>
                </td>
              </ng-container>

              <!-- Applied Date Column -->
              <ng-container matColumnDef="appliedAt">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Applied Date</th>
                <td mat-cell *matCellDef="let application">
                  {{applicationService.formatDate(application.appliedAt)}}
                </td>
              </ng-container>

              <!-- Match Score Column -->
              <ng-container matColumnDef="matchScore">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Match Score</th>
                <td mat-cell *matCellDef="let application">
                  <div class="match-score" [ngClass]="getMatchScoreClass(application.matchScore)">
                    {{application.matchScore}}%
                  </div>
                </td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                <td mat-cell *matCellDef="let application">
                  <mat-chip [color]="applicationService.getStatusColor(application.status)" selected>
                    {{application.status}}
                  </mat-chip>
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let application">
                  <button mat-icon-button [matMenuTriggerFor]="menu">
                    <fa-icon [icon]="faEllipsisV"></fa-icon>
                  </button>
                  <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="viewApplication(application)">
                      <fa-icon [icon]="faEye"></fa-icon>
                      <span>View Details</span>
                    </button>
                    <button mat-menu-item (click)="updateStatus(application.id, ApplicationStatus.REVIEWED)">
                      <fa-icon [icon]="faCheckCircle"></fa-icon>
                      <span>Mark as Reviewed</span>
                    </button>
                    <button mat-menu-item (click)="updateStatus(application.id, ApplicationStatus.INTERVIEW)">
                      <fa-icon [icon]="faClock"></fa-icon>
                      <span>Schedule Interview</span>
                    </button>
                    <button mat-menu-item (click)="updateStatus(application.id, ApplicationStatus.REJECTED)">
                      <fa-icon [icon]="faTimesCircle"></fa-icon>
                      <span>Reject</span>
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
            <mat-paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>

            <!-- Application Details Dialog -->
            <div class="application-details" *ngIf="selectedApplication">
              <h3>Application Details</h3>
              <div class="details-content">
                <div class="detail-section">
                  <h4>Cover Letter</h4>
                  <p>{{selectedApplication.coverLetter}}</p>
                </div>
                <div class="detail-section">
                  <h4>Candidate Information</h4>
                  <div class="candidate-details" *ngIf="selectedCandidate">
                    <p><strong>Name:</strong> {{selectedCandidate.name}}</p>
                    <p><strong>Email:</strong> {{selectedCandidate.email}}</p>
                    <p><strong>Phone:</strong> {{selectedCandidate.phone}}</p>
                    <p><strong>Location:</strong> {{selectedCandidate.location}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;2f2adac272ff3d65cb6193eafb94ad29e5d5a0f9557cde40ff82818a2b180e2e;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/applications/applications.component.ts */\n.applications-container {\n  padding: 20px;\n}\n.applications-card {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.applications-content {\n  padding: 20px 0;\n}\n.applications-table {\n  width: 100%;\n}\n.candidate-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.match-score {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.match-score.high {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.match-score.medium {\n  background-color: #fff3e0;\n  color: #ef6c00;\n}\n.match-score.low {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.application-details {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.detail-section {\n  margin-bottom: 20px;\n}\n.detail-section h4 {\n  margin-bottom: 8px;\n  color: #333;\n}\nfa-icon {\n  margin-right: 8px;\n  color: #666;\n}\n.mat-column-actions {\n  width: 80px;\n}\n/*# sourceMappingURL=applications.component.css.map */\n"] }]
  }], () => [{ type: ApplicationService }, { type: CandidateService }, { type: MatSnackBar }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }], table: [{
    type: ViewChild,
    args: [MatTable]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationsComponent, { className: "ApplicationsComponent", filePath: "src/app/components/employer-components/applications/applications.component.ts", lineNumber: 204 });
})();
export {
  ApplicationsComponent
};
//# sourceMappingURL=chunk-HX7WML6T.js.map
