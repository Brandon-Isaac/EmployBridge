import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-2VSBSU4O.js";
import {
  MatDividerModule
} from "./chunk-LXRKCGKC.js";
import {
  MatTooltipModule
} from "./chunk-2XNMZTMP.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NSIWRWDC.js";
import "./chunk-VLHMKKTI.js";
import {
  MatFormFieldModule
} from "./chunk-R45PVQ3E.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-EEGQKQWR.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatFormField,
  MatLabel,
  MatSuffix,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZTFMCIUB.js";
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-IAQJIRE2.js";

// src/app/job-seeker/components/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  fb;
  profileForm;
  constructor(fb) {
    this.fb = fb;
    this.profileForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      headline: ["", Validators.required],
      summary: [""],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      location: [""],
      currentJobTitle: [""],
      yearsOfExperience: [0, [Validators.min(0), Validators.max(50)]],
      preferredJobType: [""],
      preferredLocation: [""],
      linkedinUrl: ["", Validators.pattern("https?://.+")],
      githubUrl: ["", Validators.pattern("https?://.+")],
      portfolioUrl: ["", Validators.pattern("https?://.+")],
      availabilityStatus: ["actively_looking"]
    });
  }
  ngOnInit() {
    const savedProfile = localStorage.getItem("jobSeekerProfile");
    if (savedProfile) {
      this.profileForm.patchValue(JSON.parse(savedProfile));
    }
  }
  onSubmit() {
    if (this.profileForm.valid) {
      const profileData = this.profileForm.value;
      console.log("Profile data:", profileData);
      localStorage.setItem("jobSeekerProfile", JSON.stringify(profileData));
    }
  }
  resetForm() {
    this.profileForm.reset({
      yearsOfExperience: 0,
      availabilityStatus: "actively_looking"
    });
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 110, vars: 2, consts: [[1, "profile-container"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "headline", "required", "", "placeholder", "e.g., Senior Software Engineer | AI Specialist"], ["matInput", "", "formControlName", "summary", "rows", "4", "placeholder", "Brief overview of your professional background and aspirations"], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "phone", "type", "tel"], ["matInput", "", "formControlName", "location", "placeholder", "City, Country"], ["matInput", "", "formControlName", "currentJobTitle"], ["matInput", "", "type", "number", "formControlName", "yearsOfExperience", "min", "0"], ["formControlName", "preferredJobType"], ["value", "full-time"], ["value", "part-time"], ["value", "contract"], ["value", "freelance"], ["value", "internship"], ["matInput", "", "formControlName", "preferredLocation", "placeholder", "City, Country or Remote"], ["matInput", "", "formControlName", "linkedinUrl", "type", "url"], ["matSuffix", ""], ["matInput", "", "formControlName", "githubUrl", "type", "url"], ["matInput", "", "formControlName", "portfolioUrl", "type", "url"], ["formControlName", "availabilityStatus"], ["value", "actively_looking"], ["value", "open_to_opportunities"], ["value", "not_available"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Profile Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Keep your professional profile up to date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 1);
      \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "h3");
      \u0275\u0275text(10, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 2)(12, "mat-form-field", 3)(13, "mat-label");
      \u0275\u0275text(14, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-form-field", 3)(17, "mat-label");
      \u0275\u0275text(18, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "mat-form-field", 6)(21, "mat-label");
      \u0275\u0275text(22, "Professional Headline");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-form-field", 6)(25, "mat-label");
      \u0275\u0275text(26, "Professional Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "textarea", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3");
      \u0275\u0275text(29, "Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-form-field", 6)(31, "mat-label");
      \u0275\u0275text(32, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-form-field", 6)(35, "mat-label");
      \u0275\u0275text(36, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-form-field", 6)(39, "mat-label");
      \u0275\u0275text(40, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h3");
      \u0275\u0275text(43, "Professional Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 2)(45, "mat-form-field", 3)(46, "mat-label");
      \u0275\u0275text(47, "Current Job Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-form-field", 3)(50, "mat-label");
      \u0275\u0275text(51, "Years of Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 2)(54, "mat-form-field", 3)(55, "mat-label");
      \u0275\u0275text(56, "Preferred Job Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-select", 14)(58, "mat-option", 15);
      \u0275\u0275text(59, "Full-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 16);
      \u0275\u0275text(61, "Part-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 17);
      \u0275\u0275text(63, "Contract");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-option", 18);
      \u0275\u0275text(65, "Freelance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "mat-option", 19);
      \u0275\u0275text(67, "Internship");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "mat-form-field", 3)(69, "mat-label");
      \u0275\u0275text(70, "Preferred Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "h3");
      \u0275\u0275text(73, "Online Presence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 2)(75, "mat-form-field", 3)(76, "mat-label");
      \u0275\u0275text(77, "LinkedIn URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "input", 21);
      \u0275\u0275elementStart(79, "mat-icon", 22);
      \u0275\u0275text(80, "link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "mat-form-field", 3)(82, "mat-label");
      \u0275\u0275text(83, "GitHub URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "input", 23);
      \u0275\u0275elementStart(85, "mat-icon", 22);
      \u0275\u0275text(86, "link");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "mat-form-field", 6)(88, "mat-label");
      \u0275\u0275text(89, "Portfolio URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 24);
      \u0275\u0275elementStart(91, "mat-icon", 22);
      \u0275\u0275text(92, "link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "h3");
      \u0275\u0275text(94, "Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-form-field", 6)(96, "mat-label");
      \u0275\u0275text(97, "Availability Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-select", 25)(99, "mat-option", 26);
      \u0275\u0275text(100, "Actively Looking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "mat-option", 27);
      \u0275\u0275text(102, "Open to Opportunities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "mat-option", 28);
      \u0275\u0275text(104, "Not Available");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 29)(106, "button", 30);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_106_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275text(107, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button", 31);
      \u0275\u0275text(109, " Save Profile ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(100);
      \u0275\u0275property("disabled", !ctx.profileForm.valid);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatChipsModule,
    MatIconModule,
    MatIcon,
    MatDividerModule,
    MatTooltipModule
  ], styles: ["\n\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\nmat-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 24px 0 16px;\n  color: #333;\n  font-weight: 500;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/job-seeker/components/profile/profile.component.ts", lineNumber: 240 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-SEUFJT6V.js.map
