import {
  CandidateService,
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-43ET6NAQ.js";
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-YNKPPERR.js";
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
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatSnackBar,
  NgForOf,
  NgIf,
  ViewChild,
  faBriefcase,
  faDownload,
  faEnvelope,
  faFileAlt,
  faGraduationCap,
  faMapMarkerAlt,
  faPhone,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/candidates/candidates.component.ts
var _c0 = () => ["expandedDetail"];
var _c1 = () => [5, 10, 25, 100];
function CandidatesComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function CandidatesComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 19);
    \u0275\u0275element(2, "fa-icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.faUser);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r1.name, " ");
  }
}
function CandidatesComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Contact");
    \u0275\u0275elementEnd();
  }
}
function CandidatesComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 22)(2, "div", 23);
    \u0275\u0275element(3, "fa-icon", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275element(6, "fa-icon", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const candidate_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.faEnvelope);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r3.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.faPhone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r3.phone, " ");
  }
}
function CandidatesComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Location");
    \u0275\u0275elementEnd();
  }
}
function CandidatesComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 24);
    \u0275\u0275element(2, "fa-icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.faMapMarkerAlt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r4.location, " ");
  }
}
function CandidatesComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Skills");
    \u0275\u0275elementEnd();
  }
}
function CandidatesComponent_td_19_mat_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r5, " ");
  }
}
function CandidatesComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 25);
    \u0275\u0275template(2, CandidatesComponent_td_19_mat_chip_2_Template, 2, 1, "mat-chip", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", candidate_r6.skills);
  }
}
function CandidatesComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CandidatesComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 18)(1, "button", 27);
    \u0275\u0275listener("click", function CandidatesComponent_td_22_Template_button_click_1_listener() {
      const candidate_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(candidate_r8));
    });
    \u0275\u0275text(2, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 28);
    \u0275\u0275element(4, "fa-icon", 20);
    \u0275\u0275text(5, " Resume ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("href", candidate_r8.resumeUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faDownload);
  }
}
function CandidatesComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function CandidatesComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function CandidatesComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function CandidatesComponent_div_27_mat_expansion_panel_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275element(3, "fa-icon", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-panel-description");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.faBriefcase);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", exp_r9.position, " at ", exp_r9.company, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", exp_r9.duration, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r9.description);
  }
}
function CandidatesComponent_div_27_mat_expansion_panel_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275element(3, "fa-icon", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-panel-description");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const edu_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.faGraduationCap);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", edu_r10.degree, " in ", edu_r10.field, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", edu_r10.institution, " (", edu_r10.graduationYear, ") ");
  }
}
function CandidatesComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h3");
    \u0275\u0275text(2, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-accordion");
    \u0275\u0275template(4, CandidatesComponent_div_27_mat_expansion_panel_4_Template, 9, 5, "mat-expansion-panel", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-accordion");
    \u0275\u0275template(8, CandidatesComponent_div_27_mat_expansion_panel_8_Template, 7, 5, "mat-expansion-panel", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCandidate.experience);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCandidate.education);
  }
}
var CandidatesComponent = class _CandidatesComponent {
  candidateService;
  snackBar;
  candidates = [];
  selectedCandidate = null;
  displayedColumns = ["name", "contact", "location", "skills", "actions"];
  // Font Awesome icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faFileAlt = faFileAlt;
  faDownload = faDownload;
  paginator;
  sort;
  table;
  constructor(candidateService, snackBar) {
    this.candidateService = candidateService;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.loadCandidates();
  }
  loadCandidates() {
    this.candidateService.getCandidates().subscribe({
      next: (candidates) => {
        this.candidates = candidates;
      },
      error: (error) => {
        console.error("Error loading candidates:", error);
        this.snackBar.open("Failed to load candidates. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  viewDetails(candidate) {
    this.selectedCandidate = candidate;
  }
  static \u0275fac = function CandidatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CandidatesComponent)(\u0275\u0275directiveInject(CandidateService), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidatesComponent, selectors: [["app-employer-candidates"]], viewQuery: function CandidatesComponent_Query(rf, ctx) {
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
  }, decls: 28, vars: 9, consts: [[1, "candidates-container"], [1, "candidates-card"], [1, "candidates-content"], ["mat-table", "", "matSort", "", 1, "candidates-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "contact"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "location"], ["matColumnDef", "skills"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "expanded-detail", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["class", "candidate-details", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "candidate-name"], [3, "icon"], ["mat-header-cell", ""], [1, "contact-info"], [1, "contact-item"], [1, "location"], [1, "skills-list"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", "target", "_blank", 3, "href"], ["mat-header-row", ""], ["mat-row", ""], [1, "expanded-detail"], [1, "candidate-details"]], template: function CandidatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Candidate List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "div", 2)(7, "table", 3);
      \u0275\u0275elementContainerStart(8, 4);
      \u0275\u0275template(9, CandidatesComponent_th_9_Template, 2, 0, "th", 5)(10, CandidatesComponent_td_10_Template, 4, 2, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(11, 7);
      \u0275\u0275template(12, CandidatesComponent_th_12_Template, 2, 0, "th", 8)(13, CandidatesComponent_td_13_Template, 8, 4, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(14, 9);
      \u0275\u0275template(15, CandidatesComponent_th_15_Template, 2, 0, "th", 5)(16, CandidatesComponent_td_16_Template, 4, 2, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(17, 10);
      \u0275\u0275template(18, CandidatesComponent_th_18_Template, 2, 0, "th", 8)(19, CandidatesComponent_td_19_Template, 3, 1, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(20, 11);
      \u0275\u0275template(21, CandidatesComponent_th_21_Template, 2, 0, "th", 8)(22, CandidatesComponent_td_22_Template, 6, 2, "td", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(23, CandidatesComponent_tr_23_Template, 1, 0, "tr", 12)(24, CandidatesComponent_tr_24_Template, 1, 0, "tr", 13)(25, CandidatesComponent_tr_25_Template, 1, 0, "tr", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "mat-paginator", 15);
      \u0275\u0275template(27, CandidatesComponent_div_27_Template, 9, 2, "div", 16);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("dataSource", ctx.candidates);
      \u0275\u0275advance(16);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("pageSize", 10)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c1));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCandidate);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatAnchor,
    MatButton,
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
    MatIconModule,
    MatChipsModule,
    MatChip,
    MatExpansionModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.candidates-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.candidates-card[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.candidates-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.candidates-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.candidate-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.candidate-details[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.candidate-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n  color: #333;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\nfa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #666;\n}\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=candidates.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CandidatesComponent, [{
    type: Component,
    args: [{ selector: "app-employer-candidates", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatIconModule,
      MatChipsModule,
      MatExpansionModule,
      FontAwesomeModule
    ], template: `
    <div class="candidates-container">
      <mat-card class="candidates-card">
        <mat-card-header>
          <mat-card-title>Candidate List</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="candidates-content">
            <table mat-table [dataSource]="candidates" matSort class="candidates-table">
              <!-- Name Column -->
              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="candidate-name">
                    <fa-icon [icon]="faUser"></fa-icon>
                    {{candidate.name}}
                  </div>
                </td>
              </ng-container>

              <!-- Contact Column -->
              <ng-container matColumnDef="contact">
                <th mat-header-cell *matHeaderCellDef>Contact</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="contact-info">
                    <div class="contact-item">
                      <fa-icon [icon]="faEnvelope"></fa-icon>
                      {{candidate.email}}
                    </div>
                    <div class="contact-item">
                      <fa-icon [icon]="faPhone"></fa-icon>
                      {{candidate.phone}}
                    </div>
                  </div>
                </td>
              </ng-container>

              <!-- Location Column -->
              <ng-container matColumnDef="location">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="location">
                    <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                    {{candidate.location}}
                  </div>
                </td>
              </ng-container>

              <!-- Skills Column -->
              <ng-container matColumnDef="skills">
                <th mat-header-cell *matHeaderCellDef>Skills</th>
                <td mat-cell *matCellDef="let candidate">
                  <div class="skills-list">
                    <mat-chip *ngFor="let skill of candidate.skills">
                      {{skill}}
                    </mat-chip>
                  </div>
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let candidate">
                  <button mat-button color="primary" (click)="viewDetails(candidate)">
                    View Details
                  </button>
                  <a mat-button color="accent" [href]="candidate.resumeUrl" target="_blank">
                    <fa-icon [icon]="faDownload"></fa-icon>
                    Resume
                  </a>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

              <!-- Expanded Content -->
              <tr class="detail-row" *matRowDef="let row; columns: ['expandedDetail']" class="expanded-detail"></tr>
            </table>

            <mat-paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>

            <!-- Candidate Details Dialog -->
            <div class="candidate-details" *ngIf="selectedCandidate">
              <h3>Experience</h3>
              <mat-accordion>
                <mat-expansion-panel *ngFor="let exp of selectedCandidate.experience">
                  <mat-expansion-panel-header>
                    <mat-panel-title>
                      <fa-icon [icon]="faBriefcase"></fa-icon>
                      {{exp.position}} at {{exp.company}}
                    </mat-panel-title>
                    <mat-panel-description>
                      {{exp.duration}}
                    </mat-panel-description>
                  </mat-expansion-panel-header>
                  <p>{{exp.description}}</p>
                </mat-expansion-panel>
              </mat-accordion>

              <h3>Education</h3>
              <mat-accordion>
                <mat-expansion-panel *ngFor="let edu of selectedCandidate.education">
                  <mat-expansion-panel-header>
                    <mat-panel-title>
                      <fa-icon [icon]="faGraduationCap"></fa-icon>
                      {{edu.degree}} in {{edu.field}}
                    </mat-panel-title>
                    <mat-panel-description>
                      {{edu.institution}} ({{edu.graduationYear}})
                    </mat-panel-description>
                  </mat-expansion-panel-header>
                </mat-expansion-panel>
              </mat-accordion>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;8cd95b6da26dd601fca013a2554f85c8bd905082e968ffe71213326db2050742;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/candidates/candidates.component.ts */\n.candidates-container {\n  padding: 20px;\n}\n.candidates-card {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.candidates-content {\n  padding: 20px 0;\n}\n.candidates-table {\n  width: 100%;\n}\n.candidate-name {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.contact-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.location {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.candidate-details {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.candidate-details h3 {\n  margin: 16px 0 8px;\n  color: #333;\n}\nmat-expansion-panel {\n  margin-bottom: 8px;\n}\nfa-icon {\n  margin-right: 8px;\n  color: #666;\n}\n.mat-column-actions {\n  width: 200px;\n}\n/*# sourceMappingURL=candidates.component.css.map */\n"] }]
  }], () => [{ type: CandidateService }, { type: MatSnackBar }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidatesComponent, { className: "CandidatesComponent", filePath: "src/app/components/employer-components/candidates/candidates.component.ts", lineNumber: 222 });
})();
export {
  CandidatesComponent
};
//# sourceMappingURL=chunk-7B3MHCPD.js.map
