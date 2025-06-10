import {
  CompanyService
} from "./chunk-2TZIIS4D.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5QZTZ3GT.js";
import {
  AuthService,
  Router
} from "./chunk-NJ7YUX4Y.js";
import {
  MatFormFieldModule
} from "./chunk-42HARFSR.js";
import "./chunk-IPERWXTS.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FaIconComponent,
  FontAwesomeModule,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatError,
  MatFormField,
  MatLabel,
  MatSnackBar,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Validators,
  faBuilding,
  faGlobe,
  faLocationDot,
  faSpinner,
  setClassMetadata,
  ɵNgNoValidate,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/profile-update/profile-update.component.ts
function ProfileUpdateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "fa-icon", 5);
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
function ProfileUpdateComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-card", 7)(2, "mat-card-content")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function ProfileUpdateComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retryLoading());
    });
    \u0275\u0275text(6, " Retry ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ProfileUpdateComponent_mat_card_3_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Company name is required ");
    \u0275\u0275elementEnd();
  }
}
function ProfileUpdateComponent_mat_card_3_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Industry is required ");
    \u0275\u0275elementEnd();
  }
}
function ProfileUpdateComponent_mat_card_3_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Description is required ");
    \u0275\u0275elementEnd();
  }
}
function ProfileUpdateComponent_mat_card_3_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Location is required ");
    \u0275\u0275elementEnd();
  }
}
function ProfileUpdateComponent_mat_card_3_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid URL ");
    \u0275\u0275elementEnd();
  }
}
function ProfileUpdateComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3, "Update Company Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "form", 10);
    \u0275\u0275listener("ngSubmit", function ProfileUpdateComponent_mat_card_3_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(6, "div", 11)(7, "mat-form-field", 12)(8, "mat-label");
    \u0275\u0275text(9, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 13);
    \u0275\u0275template(11, ProfileUpdateComponent_mat_card_3_mat_error_11_Template, 2, 0, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 12)(13, "mat-label");
    \u0275\u0275text(14, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 15);
    \u0275\u0275elementStart(16, "mat-icon", 16);
    \u0275\u0275element(17, "fa-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ProfileUpdateComponent_mat_card_3_mat_error_18_Template, 2, 0, "mat-error", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 18)(20, "mat-label");
    \u0275\u0275text(21, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "textarea", 19);
    \u0275\u0275template(23, ProfileUpdateComponent_mat_card_3_mat_error_23_Template, 2, 0, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "mat-form-field", 12)(26, "mat-label");
    \u0275\u0275text(27, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 20);
    \u0275\u0275elementStart(29, "mat-icon", 16);
    \u0275\u0275element(30, "fa-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ProfileUpdateComponent_mat_card_3_mat_error_31_Template, 2, 0, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 12)(33, "mat-label");
    \u0275\u0275text(34, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 21);
    \u0275\u0275elementStart(36, "mat-icon", 16);
    \u0275\u0275element(37, "fa-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, ProfileUpdateComponent_mat_card_3_mat_error_38_Template, 2, 0, "mat-error", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 22)(40, "button", 23);
    \u0275\u0275listener("click", function ProfileUpdateComponent_mat_card_3_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCancel());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 24);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.updateForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.updateForm.get("name")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance(6);
    \u0275\u0275property("icon", ctx_r0.faBuilding);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.updateForm.get("industry")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r0.updateForm.get("description")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance(7);
    \u0275\u0275property("icon", ctx_r0.faLocationDot);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r0.updateForm.get("location")) == null ? null : tmp_7_0.hasError("required"));
    \u0275\u0275advance(6);
    \u0275\u0275property("icon", ctx_r0.faGlobe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_9_0 = ctx_r0.updateForm.get("website")) == null ? null : tmp_9_0.hasError("pattern"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.updateForm.invalid || ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting ? "Updating..." : "Update Profile", " ");
  }
}
var ProfileUpdateComponent = class _ProfileUpdateComponent {
  fb;
  companyService;
  authService;
  router;
  snackBar;
  updateForm;
  isLoading = true;
  isSubmitting = false;
  error = null;
  companyId = null;
  // Font Awesome icons
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;
  faGlobe = faGlobe;
  faSpinner = faSpinner;
  constructor(fb, companyService, authService, router, snackBar) {
    this.fb = fb;
    this.companyService = companyService;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.updateForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      industry: ["", Validators.required],
      location: ["", Validators.required],
      website: ["", [Validators.pattern("https?://.+")]]
    });
  }
  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      this.error = "You must be logged in as a company to update the profile";
      this.isLoading = false;
      this.router.navigate(["/login"]);
      return;
    }
    this.companyService.getCompanyByUserId(currentUser.id).subscribe({
      next: (company) => {
        this.companyId = company.id;
        this.loadCompanyProfile();
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
  loadCompanyProfile() {
    if (!this.companyId) {
      this.error = "No company found";
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.error = null;
    this.companyService.getCompanyById(this.companyId).subscribe({
      next: (company) => {
        this.updateForm.patchValue({
          name: company.name,
          description: company.description,
          industry: company.industry,
          location: company.location,
          website: company.website
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error fetching company profile:", error);
        this.error = error.error?.message || "Failed to load company profile";
        this.isLoading = false;
        this.snackBar.open(this.error || "An error occurred", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      }
    });
  }
  onSubmit() {
    if (this.updateForm.valid && this.companyId) {
      this.isSubmitting = true;
      this.companyService.updateCompany(this.companyId, this.updateForm.value).subscribe({
        next: () => {
          this.snackBar.open("Company profile updated successfully", "Close", {
            duration: 3e3,
            horizontalPosition: "center",
            verticalPosition: "bottom"
          });
          this.router.navigate(["/company", this.companyId]);
        },
        error: (error) => {
          console.error("Error updating company profile:", error);
          this.error = error.error?.message || "Failed to update company profile";
          this.snackBar.open(this.error || "An error occurred", "Close", {
            duration: 5e3,
            horizontalPosition: "center",
            verticalPosition: "bottom"
          });
          this.isSubmitting = false;
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/company", this.companyId]);
  }
  retryLoading() {
    this.loadCompanyProfile();
  }
  static \u0275fac = function ProfileUpdateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileUpdateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileUpdateComponent, selectors: [["app-employer-profile-update"]], decls: 4, vars: 3, consts: [[1, "profile-update-container"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "profile-update-card", 4, "ngIf"], [1, "loading-container"], ["animation", "spin", "size", "2x", 3, "icon"], [1, "error-container"], [1, "error-card"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "profile-update-card"], [1, "profile-update-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Enter company name"], [4, "ngIf"], ["matInput", "", "formControlName", "industry", "placeholder", "Enter industry"], ["matSuffix", ""], [3, "icon"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "description", "placeholder", "Enter company description", "rows", "4"], ["matInput", "", "formControlName", "location", "placeholder", "Enter location"], ["matInput", "", "formControlName", "website", "placeholder", "Enter website URL"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function ProfileUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ProfileUpdateComponent_div_1_Template, 4, 1, "div", 1)(2, ProfileUpdateComponent_div_2_Template, 7, 1, "div", 2)(3, ProfileUpdateComponent_mat_card_3_Template, 44, 11, "mat-card", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FontAwesomeModule, FaIconComponent], styles: ["\n\n.profile-update-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 400px;\n}\n.profile-update-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.profile-update-form[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.error-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.error-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=profile-update.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileUpdateComponent, [{
    type: Component,
    args: [{ selector: "app-employer-profile-update", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FontAwesomeModule
    ], template: `
    <div class="profile-update-container">
      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-container">
        <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
        <p>Loading company profile...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error" class="error-container">
        <mat-card class="error-card">
          <mat-card-content>
            <p>{{ error }}</p>
            <button mat-raised-button color="primary" (click)="retryLoading()">
              Retry
            </button>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Update Form -->
      <mat-card class="profile-update-card" *ngIf="!isLoading && !error">
        <mat-card-header>
          <mat-card-title>Update Company Profile</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="updateForm" (ngSubmit)="onSubmit()" class="profile-update-form">
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Company Name</mat-label>
                <input matInput formControlName="name" placeholder="Enter company name">
                <mat-error *ngIf="updateForm.get('name')?.hasError('required')">
                  Company name is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Industry</mat-label>
                <input matInput formControlName="industry" placeholder="Enter industry">
                <mat-icon matSuffix>
                  <fa-icon [icon]="faBuilding"></fa-icon>
                </mat-icon>
                <mat-error *ngIf="updateForm.get('industry')?.hasError('required')">
                  Industry is required
                </mat-error>
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" 
                        placeholder="Enter company description"
                        rows="4"></textarea>
              <mat-error *ngIf="updateForm.get('description')?.hasError('required')">
                Description is required
              </mat-error>
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Location</mat-label>
                <input matInput formControlName="location" placeholder="Enter location">
                <mat-icon matSuffix>
                  <fa-icon [icon]="faLocationDot"></fa-icon>
                </mat-icon>
                <mat-error *ngIf="updateForm.get('location')?.hasError('required')">
                  Location is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Website</mat-label>
                <input matInput formControlName="website" placeholder="Enter website URL">
                <mat-icon matSuffix>
                  <fa-icon [icon]="faGlobe"></fa-icon>
                </mat-icon>
                <mat-error *ngIf="updateForm.get('website')?.hasError('pattern')">
                  Please enter a valid URL
                </mat-error>
              </mat-form-field>
            </div>

            <div class="form-actions">
              <button mat-button type="button" (click)="onCancel()">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="updateForm.invalid || isSubmitting">
                {{ isSubmitting ? 'Updating...' : 'Update Profile' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;99d6a3b44d2d95b414c71180139bd15a9df97aa2192b4e93d87ab0ba8dd8dd89;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/profile-update/profile-update.component.ts */\n.profile-update-container {\n  padding: 20px;\n  min-height: 400px;\n}\n.profile-update-card {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.profile-update-form {\n  padding: 20px 0;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.full-width {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.error-container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.error-card {\n  text-align: center;\n  padding: 20px;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=profile-update.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CompanyService }, { type: AuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileUpdateComponent, { className: "ProfileUpdateComponent", filePath: "src/app/components/employer-components/profile-update/profile-update.component.ts", lineNumber: 171 });
})();
export {
  ProfileUpdateComponent
};
//# sourceMappingURL=chunk-YQOJD2VF.js.map
