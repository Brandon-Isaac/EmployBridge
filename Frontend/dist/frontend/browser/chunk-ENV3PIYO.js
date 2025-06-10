import {
  MatDivider,
  MatDividerModule
} from "./chunk-JNVMLMGE.js";
import {
  CompanyService
} from "./chunk-2TZIIS4D.js";
import {
  MatProgressSpinnerModule
} from "./chunk-D357AIHJ.js";
import {
  AuthService,
  Router
} from "./chunk-NJ7YUX4Y.js";
import "./chunk-UILPAKWT.js";
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
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatSnackBar,
  NgForOf,
  NgIf,
  SlicePipe,
  faBuilding,
  faCircleExclamation,
  faGlobe,
  faLocationDot,
  faSpinner,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/profile/profile.component.ts
function ProfileComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "fa-icon", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading company profile...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faSpinner);
  }
}
function ProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-card", 8)(2, "mat-card-content");
    \u0275\u0275element(3, "fa-icon", 9);
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Error Loading Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function ProfileComponent_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retryLoading());
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
function ProfileComponent_mat_card_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "fa-icon", 15);
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275text(3, "Website");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faGlobe);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.companyProfile.company.website, \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_mat_card_3_div_35_mat_card_1_mat_chip_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r4.name, " ");
  }
}
function ProfileComponent_mat_card_3_div_35_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 25)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card-content")(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26);
    \u0275\u0275template(11, ProfileComponent_mat_card_3_div_35_mat_card_1_mat_chip_11_Template, 2, 1, "mat-chip", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r5.location);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(9, 4, job_r5.description, 0, 150), "...");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", job_r5.requiredSkills);
  }
}
function ProfileComponent_mat_card_3_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ProfileComponent_mat_card_3_div_35_mat_card_1_Template, 12, 8, "mat-card", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.companyProfile.jobs);
  }
}
function ProfileComponent_mat_card_3_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No open positions at the moment.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 11)(1, "mat-card-header")(2, "div", 12)(3, "img", 13);
    \u0275\u0275listener("error", function ProfileComponent_mat_card_3_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleImageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "mat-card-title");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card-subtitle");
    \u0275\u0275element(8, "fa-icon", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "mat-card-content")(11, "div", 16)(12, "section", 17)(13, "h3");
    \u0275\u0275text(14, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "mat-divider");
    \u0275\u0275elementStart(18, "section", 17)(19, "h3");
    \u0275\u0275text(20, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19);
    \u0275\u0275element(23, "fa-icon", 15);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275element(27, "fa-icon", 15);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ProfileComponent_mat_card_3_div_30_Template, 4, 2, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "mat-divider");
    \u0275\u0275elementStart(32, "section", 17)(33, "h3");
    \u0275\u0275text(34, "Open Positions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ProfileComponent_mat_card_3_div_35_Template, 2, 1, "div", 21)(36, ProfileComponent_mat_card_3_ng_template_36_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const noJobs_r6 = \u0275\u0275reference(37);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.companyProfile.company.logo || "assets/default-company.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.companyProfile.company.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.faBuilding);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.companyProfile.company.industry, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.companyProfile.company.description);
    \u0275\u0275advance(7);
    \u0275\u0275property("icon", ctx_r0.faLocationDot);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.companyProfile.company.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.faUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.companyProfile.company.employeeCount, " Employees");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.companyProfile.company.website);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.companyProfile == null ? null : ctx_r0.companyProfile.jobs) && ctx_r0.companyProfile.jobs.length > 0)("ngIfElse", noJobs_r6);
  }
}
var ProfileComponent = class _ProfileComponent {
  companyService;
  authService;
  router;
  snackBar;
  companyProfile = null;
  isLoading = true;
  error = null;
  // Font Awesome icons
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;
  faUsers = faUsers;
  faGlobe = faGlobe;
  faSpinner = faSpinner;
  faCircleExclamation = faCircleExclamation;
  constructor(companyService, authService, router, snackBar) {
    this.companyService = companyService;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.loadCompanyProfile();
  }
  loadCompanyProfile() {
    this.isLoading = true;
    this.error = null;
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      this.error = "You must be logged in as a company to view the profile";
      this.isLoading = false;
      this.router.navigate(["/login"]);
      return;
    }
    this.companyService.getCompanyByUserId(currentUser.id).subscribe({
      next: (company) => {
        this.companyService.getCompanyProfile(company.id).subscribe({
          next: (profile) => {
            this.companyProfile = profile;
            this.isLoading = false;
          },
          error: (error) => {
            console.error("Error fetching company profile:", error);
            this.error = error.error?.message || "Failed to load company profile. Please try again.";
            this.isLoading = false;
            this.snackBar.open(this.error || "An error occurred", "Close", {
              duration: 5e3,
              horizontalPosition: "center",
              verticalPosition: "bottom"
            });
          }
        });
      },
      error: (error) => {
        console.error("Error fetching company:", error);
        this.error = "Failed to load company information";
        this.isLoading = false;
        this.snackBar.open(this.error, "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  retryLoading() {
    this.loadCompanyProfile();
  }
  handleImageError(event) {
    const imgElement = event.target;
    imgElement.src = "assets/default-company.png";
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-employer-profile"]], decls: 4, vars: 3, consts: [["noJobs", ""], [1, "profile-container"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "profile-card", 4, "ngIf"], [1, "loading-container"], ["animation", "spin", "size", "2x", 3, "icon"], [1, "error-container"], [1, "error-card"], ["size", "2x", 1, "error-icon", 3, "icon"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "profile-card"], [1, "header-content"], ["alt", "Company Logo", 1, "company-logo", 3, "error", "src"], [1, "header-text"], [3, "icon"], [1, "profile-content"], [1, "info-section"], [1, "details-grid"], [1, "detail-item"], ["class", "detail-item", 4, "ngIf"], ["class", "jobs-grid", 4, "ngIf", "ngIfElse"], ["target", "_blank", 3, "href"], [1, "jobs-grid"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-tags"], [4, "ngFor", "ngForOf"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, ProfileComponent_div_1_Template, 4, 1, "div", 2)(2, ProfileComponent_div_2_Template, 10, 2, "div", 3)(3, ProfileComponent_mat_card_3_Template, 38, 12, "mat-card", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.companyProfile && !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    SlicePipe,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatDividerModule,
    MatDivider,
    MatChipsModule,
    MatChip,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.profile-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 400px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.profile-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n}\n.company-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.jobs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n}\n.job-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.job-tags[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\nfa-icon[_ngcontent-%COMP%] {\n  color: #666;\n}\na[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.error-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.error-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-employer-profile", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatDividerModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      FontAwesomeModule
    ], template: `
    <div class="profile-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
        <p>Loading company profile...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <mat-card class="error-card">
          <mat-card-content>
            <fa-icon [icon]="faCircleExclamation" class="error-icon" size="2x"></fa-icon>
            <h2>Error Loading Profile</h2>
            <p>{{ error }}</p>
            <button mat-raised-button color="primary" (click)="retryLoading()">
              Retry
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Profile Content -->
      <mat-card class="profile-card" *ngIf="companyProfile && !isLoading && !error">
        <mat-card-header>
          <div class="header-content">
            <img [src]="companyProfile.company.logo || 'assets/default-company.png'" 
                 alt="Company Logo" 
                 class="company-logo"
                 (error)="handleImageError($event)">
            <div class="header-text">
              <mat-card-title>{{ companyProfile.company.name }}</mat-card-title>
              <mat-card-subtitle>
                <fa-icon [icon]="faBuilding"></fa-icon>
                {{ companyProfile.company.industry }}
              </mat-card-subtitle>
            </div>
          </div>
        </mat-card-header>

        <mat-card-content>
          <div class="profile-content">
            <section class="info-section">
              <h3>About</h3>
              <p>{{ companyProfile.company.description }}</p>
            </section>

            <mat-divider></mat-divider>

            <section class="info-section">
              <h3>Details</h3>
              <div class="details-grid">
                <div class="detail-item">
                  <fa-icon [icon]="faLocationDot"></fa-icon>
                  <span>{{ companyProfile.company.location }}</span>
                </div>
                <div class="detail-item">
                  <fa-icon [icon]="faUsers"></fa-icon>
                  <span>{{ companyProfile.company.employeeCount }} Employees</span>
                </div>
                <div class="detail-item" *ngIf="companyProfile.company.website">
                  <fa-icon [icon]="faGlobe"></fa-icon>
                  <a [href]="companyProfile.company.website" target="_blank">Website</a>
                </div>
              </div>
            </section>

            <mat-divider></mat-divider>

            <section class="info-section">
              <h3>Open Positions</h3>
              <div class="jobs-grid" *ngIf="companyProfile?.jobs && companyProfile.jobs.length > 0; else noJobs">
                <mat-card class="job-card" *ngFor="let job of companyProfile.jobs">
                  <mat-card-header>
                    <mat-card-title>{{ job.title }}</mat-card-title>
                    <mat-card-subtitle>{{ job.location }}</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p>{{ job.description | slice:0:150 }}...</p>
                    <div class="job-tags">
                      <mat-chip *ngFor="let skill of job.requiredSkills">
                        {{ skill.name }}
                      </mat-chip>
                    </div>
                  </mat-card-content>
                </mat-card>
              </div>
              <ng-template #noJobs>
                <p>No open positions at the moment.</p>
              </ng-template>
            </section>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;741e306c3968357bdf0e50aa33948551746b8d2a29438e36e3abc6f48ce076ba;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/profile/profile.component.ts */\n.profile-container {\n  padding: 20px;\n  min-height: 400px;\n}\n.profile-card {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.profile-content {\n  padding: 20px 0;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n}\n.company-logo {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.header-text {\n  flex: 1;\n}\n.info-section {\n  margin: 20px 0;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n}\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.jobs-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n}\n.job-card {\n  height: 100%;\n}\n.job-tags {\n  margin-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\nfa-icon {\n  color: #666;\n}\na {\n  color: #1976d2;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.error-container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.error-card {\n  text-align: center;\n  padding: 20px;\n}\n.error-icon {\n  color: #f44336;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], () => [{ type: CompanyService }, { type: AuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/components/employer-components/profile/profile.component.ts", lineNumber: 219 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-ENV3PIYO.js.map
