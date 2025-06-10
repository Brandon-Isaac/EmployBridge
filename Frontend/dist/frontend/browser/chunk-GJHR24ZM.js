import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-YYFOACDK.js";
import {
  JobService
} from "./chunk-VRK6DSAD.js";
import {
  AuthService,
  Router
} from "./chunk-NJ7YUX4Y.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-LGNT6V3W.js";
import "./chunk-IPERWXTS.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  FaIconComponent,
  FontAwesomeModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIconButton,
  MatSnackBar,
  NgForOf,
  NgIf,
  SlicePipe,
  TitleCasePipe,
  faBriefcase,
  faCalendarAlt,
  faCheckCircle,
  faCircleExclamation,
  faEdit,
  faEllipsisVertical,
  faLocationDot,
  faMoneyBill,
  faSpinner,
  faTimesCircle,
  faTrash,
  faUsers,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/jobs-posted/jobs-posted.component.ts
function JobsPostedComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "fa-icon", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading jobs...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faSpinner);
  }
}
function JobsPostedComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-card", 11)(2, "mat-card-content");
    \u0275\u0275element(3, "fa-icon", 12);
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Error Loading Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 3);
    \u0275\u0275listener("click", function JobsPostedComponent_div_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadJobs());
    });
    \u0275\u0275text(9, " Retry ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r0.faCircleExclamation);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function JobsPostedComponent_div_8_mat_card_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "fa-icon", 18);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faMoneyBill);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, job_r4.salary));
  }
}
function JobsPostedComponent_div_8_mat_card_1_mat_chip_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r5.name, " ");
  }
}
function JobsPostedComponent_div_8_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 15)(1, "mat-card-header")(2, "div", 16)(3, "div", 17)(4, "mat-card-title");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card-subtitle");
    \u0275\u0275element(7, "fa-icon", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275element(10, "fa-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 20);
    \u0275\u0275listener("click", function JobsPostedComponent_div_8_mat_card_1_Template_button_click_13_listener() {
      const job_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editJob(job_r4));
    });
    \u0275\u0275element(14, "fa-icon", 18);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 20);
    \u0275\u0275listener("click", function JobsPostedComponent_div_8_mat_card_1_Template_button_click_17_listener() {
      const job_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewApplications(job_r4));
    });
    \u0275\u0275element(18, "fa-icon", 18);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "View Applications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function JobsPostedComponent_div_8_mat_card_1_Template_button_click_21_listener() {
      const job_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteJob(job_r4));
    });
    \u0275\u0275element(22, "fa-icon", 18);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "mat-card-content")(26, "p", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 22)(30, "div", 23);
    \u0275\u0275element(31, "fa-icon", 18);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, JobsPostedComponent_div_8_mat_card_1_div_34_Template, 5, 4, "div", 24);
    \u0275\u0275elementStart(35, "div", 23);
    \u0275\u0275element(36, "fa-icon", 18);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 23);
    \u0275\u0275element(40, "fa-icon", 18);
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 25);
    \u0275\u0275template(45, JobsPostedComponent_div_8_mat_card_1_mat_chip_45_Template, 2, 1, "mat-chip", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 27)(47, "mat-chip", 28);
    \u0275\u0275element(48, "fa-icon", 18);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "titlecase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    const menu_r6 = \u0275\u0275reference(12);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(job_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.faLocationDot);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r4.location, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faEllipsisVertical);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r0.faEdit);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r0.faUsers);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r0.faTrash);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(28, 20, job_r4.description, 0, 150), "...");
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r0.faBriefcase);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r4.employmentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r4.salary);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.faUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getApplicationCount(job_r4), " Applications");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.faCalendarAlt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Posted ", \u0275\u0275pipeBind1(43, 24, job_r4.createdAt), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", job_r4.requiredSkills);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r0.isJobOpen(job_r4) ? "primary" : "warn");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.isJobOpen(job_r4) ? ctx_r0.faCheckCircle : ctx_r0.faTimesCircle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 26, ctx_r0.getJobStatus(job_r4)), " ");
  }
}
function JobsPostedComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, JobsPostedComponent_div_8_mat_card_1_Template, 51, 28, "mat-card", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.jobs);
  }
}
function JobsPostedComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-card")(2, "mat-card-content")(3, "h2");
    \u0275\u0275text(4, "No Jobs Posted Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Start posting jobs to find the perfect candidates for your company.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function JobsPostedComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navigateToJobPosting());
    });
    \u0275\u0275text(8, " Post Your First Job ");
    \u0275\u0275elementEnd()()()();
  }
}
var JobsPostedComponent = class _JobsPostedComponent {
  jobService;
  authService;
  router;
  snackBar;
  jobs = [];
  isLoading = true;
  error = null;
  // Font Awesome icons
  faSpinner = faSpinner;
  faCircleExclamation = faCircleExclamation;
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;
  faUsers = faUsers;
  faCalendarAlt = faCalendarAlt;
  faEllipsisVertical = faEllipsisVertical;
  faEdit = faEdit;
  faTrash = faTrash;
  faMoneyBill = faMoneyBill;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  constructor(jobService, authService, router, snackBar) {
    this.jobService = jobService;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.loadJobs();
  }
  getApplicationCount(job) {
    return job.applications?.length || 0;
  }
  getJobStatus(job) {
    if (!job.deadline)
      return "open";
    return new Date(job.deadline) > /* @__PURE__ */ new Date() ? "open" : "closed";
  }
  isJobOpen(job) {
    return this.getJobStatus(job) === "open";
  }
  loadJobs() {
    this.isLoading = true;
    this.error = null;
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      this.error = "You must be logged in as a company to view posted jobs";
      this.isLoading = false;
      this.router.navigate(["/login"]);
      return;
    }
    this.jobService.getJobsByEmployer(currentUser.id).subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error fetching jobs:", error);
        this.error = error.error?.message || "Failed to load jobs. Please try again.";
        this.isLoading = false;
        this.snackBar.open(this.error || "An error occurred", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  navigateToJobPosting() {
    this.router.navigate(["/employer/job-posting"]);
  }
  editJob(job) {
    this.router.navigate(["/employer/job-posting", job.id]);
  }
  viewApplications(job) {
    this.router.navigate(["/employer/applications", job.id]);
  }
  deleteJob(job) {
    if (confirm("Are you sure you want to delete this job posting?")) {
      this.jobService.deleteJob(job.id).subscribe({
        next: () => {
          this.snackBar.open("Job deleted successfully", "Close", {
            duration: 3e3,
            horizontalPosition: "center",
            verticalPosition: "bottom"
          });
          this.loadJobs();
        },
        error: (error) => {
          console.error("Error deleting job:", error);
          this.snackBar.open(error.error?.message || "Failed to delete job", "Close", {
            duration: 5e3,
            horizontalPosition: "center",
            verticalPosition: "bottom"
          });
        }
      });
    }
  }
  static \u0275fac = function JobsPostedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobsPostedComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobsPostedComponent, selectors: [["app-jobs-posted"]], decls: 10, vars: 4, consts: [["menu", "matMenu"], [1, "jobs-posted-container"], [1, "header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "jobs-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-container"], ["animation", "spin", "size", "2x", 3, "icon"], [1, "error-container"], [1, "error-card"], ["size", "2x", 1, "error-icon", 3, "icon"], [1, "jobs-grid"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title-section"], [3, "icon"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "job-description"], [1, "job-details"], [1, "detail-item"], ["class", "detail-item", 4, "ngIf"], [1, "job-tags"], [4, "ngFor", "ngForOf"], [1, "job-status"], ["selected", "", 3, "color"], [1, "empty-state"]], template: function JobsPostedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1");
      \u0275\u0275text(3, "Jobs Posted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function JobsPostedComponent_Template_button_click_4_listener() {
        return ctx.navigateToJobPosting();
      });
      \u0275\u0275text(5, " Post New Job ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, JobsPostedComponent_div_6_Template, 4, 1, "div", 4)(7, JobsPostedComponent_div_7_Template, 10, 2, "div", 5)(8, JobsPostedComponent_div_8_Template, 2, 1, "div", 6)(9, JobsPostedComponent_div_9_Template, 9, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error && (!ctx.jobs || ctx.jobs.length === 0));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, TitleCasePipe, CurrencyPipe, DatePipe, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatButtonModule, MatButton, MatIconButton, MatChipsModule, MatChip, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, FontAwesomeModule, FaIconComponent], styles: ["\n\n.jobs-posted-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.jobs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.job-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n.job-title-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-description[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  color: #666;\n}\n.job-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin: 16px 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n.job-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin: 16px 0;\n}\n.job-status[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.error-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.error-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 40px auto;\n  text-align: center;\n}\nfa-icon[_ngcontent-%COMP%] {\n  color: #666;\n}\nmat-menu-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.job-status[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=jobs-posted.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsPostedComponent, [{
    type: Component,
    args: [{ selector: "app-jobs-posted", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatChipsModule,
      MatMenuModule,
      FontAwesomeModule
    ], template: `
    <div class="jobs-posted-container">
      <!-- Header -->
      <div class="header">
        <h1>Jobs Posted</h1>
        <button mat-raised-button color="primary" (click)="navigateToJobPosting()">
          Post New Job
        </button>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
        <p>Loading jobs...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <mat-card class="error-card">
          <mat-card-content>
            <fa-icon [icon]="faCircleExclamation" class="error-icon" size="2x"></fa-icon>
            <h2>Error Loading Jobs</h2>
            <p>{{ error }}</p>
            <button mat-raised-button color="primary" (click)="loadJobs()">
              Retry
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Jobs List -->
      <div class="jobs-grid" *ngIf="!isLoading && !error">
        <mat-card class="job-card" *ngFor="let job of jobs">
          <mat-card-header>
            <div class="job-header">
              <div class="job-title-section">
                <mat-card-title>{{ job.title }}</mat-card-title>
                <mat-card-subtitle>
                  <fa-icon [icon]="faLocationDot"></fa-icon>
                  {{ job.location }}
                </mat-card-subtitle>
              </div>
              <button mat-icon-button [matMenuTriggerFor]="menu">
                <fa-icon [icon]="faEllipsisVertical"></fa-icon>
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editJob(job)">
                  <fa-icon [icon]="faEdit"></fa-icon>
                  <span>Edit</span>
                </button>
                <button mat-menu-item (click)="viewApplications(job)">
                  <fa-icon [icon]="faUsers"></fa-icon>
                  <span>View Applications</span>
                </button>
                <button mat-menu-item (click)="deleteJob(job)">
                  <fa-icon [icon]="faTrash"></fa-icon>
                  <span>Delete</span>
                </button>
              </mat-menu>
            </div>
          </mat-card-header>

          <mat-card-content>
            <p class="job-description">{{ job.description | slice:0:150 }}...</p>
            
            <div class="job-details">
              <div class="detail-item">
                <fa-icon [icon]="faBriefcase"></fa-icon>
                <span>{{ job.employmentType }}</span>
              </div>
              <div class="detail-item" *ngIf="job.salary">
                <fa-icon [icon]="faMoneyBill"></fa-icon>
                <span>{{ job.salary | currency }}</span>
              </div>
              <div class="detail-item">
                <fa-icon [icon]="faUsers"></fa-icon>
                <span>{{ getApplicationCount(job) }} Applications</span>
              </div>
              <div class="detail-item">
                <fa-icon [icon]="faCalendarAlt"></fa-icon>
                <span>Posted {{ job.createdAt | date }}</span>
              </div>
            </div>

            <div class="job-tags">
              <mat-chip *ngFor="let skill of job.requiredSkills">
                {{ skill.name }}
              </mat-chip>
            </div>

            <div class="job-status">
              <mat-chip [color]="isJobOpen(job) ? 'primary' : 'warn'" selected>
                <fa-icon [icon]="isJobOpen(job) ? faCheckCircle : faTimesCircle"></fa-icon>
                {{ getJobStatus(job) | titlecase }}
              </mat-chip>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Empty State -->
      <div *ngIf="!isLoading && !error && (!jobs || jobs.length === 0)" class="empty-state">
        <mat-card>
          <mat-card-content>
            <h2>No Jobs Posted Yet</h2>
            <p>Start posting jobs to find the perfect candidates for your company.</p>
            <button mat-raised-button color="primary" (click)="navigateToJobPosting()">
              Post Your First Job
            </button>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;b6c3188a4a56f081ceac1a432bc4280ce6da6d7067c8f211700e6418b27c239e;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/jobs-posted/jobs-posted.component.ts */\n.jobs-posted-container {\n  padding: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.jobs-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.job-card {\n  height: 100%;\n}\n.job-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n.job-title-section {\n  flex: 1;\n}\n.job-description {\n  margin: 16px 0;\n  color: #666;\n}\n.job-details {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin: 16px 0;\n}\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n.job-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin: 16px 0;\n}\n.job-status {\n  margin-top: 16px;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.error-container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.error-card {\n  text-align: center;\n  padding: 20px;\n}\n.error-icon {\n  color: #f44336;\n  margin-bottom: 16px;\n}\n.empty-state {\n  max-width: 600px;\n  margin: 40px auto;\n  text-align: center;\n}\nfa-icon {\n  color: #666;\n}\nmat-menu-item fa-icon {\n  margin-right: 8px;\n}\n.job-status fa-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=jobs-posted.component.css.map */\n"] }]
  }], () => [{ type: JobService }, { type: AuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobsPostedComponent, { className: "JobsPostedComponent", filePath: "src/app/components/employer-components/jobs-posted/jobs-posted.component.ts", lineNumber: 241 });
})();
export {
  JobsPostedComponent
};
//# sourceMappingURL=chunk-GJHR24ZM.js.map
