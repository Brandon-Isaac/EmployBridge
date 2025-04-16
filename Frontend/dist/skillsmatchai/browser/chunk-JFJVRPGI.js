import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-AITKVB7Z.js";
import "./chunk-WO6AJLKG.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-QZIPTO56.js";
import "./chunk-2CZVWUUL.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import {
  MatExpansionModule
} from "./chunk-LPR5CXJW.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-W7G65VI2.js";
import "./chunk-R4NVDLOM.js";
import {
  MatFormFieldModule
} from "./chunk-B7JQH24K.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-VW3NTET3.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import {
  MatIconModule
} from "./chunk-E6YAXSQU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatFormField,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-255VWD3Z.js";
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
  NgForOf,
  __spreadProps,
  __spreadValues,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NJVFXHEQ.js";

// src/app/job-seeker/components/cv-manager/cv-manager.component.ts
function ProfileManagerComponent_mat_chip_row_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 30);
    \u0275\u0275listener("removed", function ProfileManagerComponent_mat_chip_row_58_Template_mat_chip_row_removed_0_listener() {
      const skill_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function ProfileManagerComponent_mat_chip_row_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 30);
    \u0275\u0275listener("removed", function ProfileManagerComponent_mat_chip_row_65_Template_mat_chip_row_removed_0_listener() {
      const language_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeLanguage(language_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const language_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", language_r6, " ");
  }
}
var ProfileManagerComponent = class _ProfileManagerComponent {
  fb;
  profileForm;
  skills = [];
  languages = [];
  constructor(fb) {
    this.fb = fb;
    this.profileForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      location: ["", Validators.required],
      currentRole: ["", Validators.required],
      experience: [0, [Validators.required, Validators.min(0)]],
      education: ["", Validators.required],
      summary: ["", Validators.required],
      availability: ["Immediate", Validators.required],
      salaryExpectation: [0, [Validators.required, Validators.min(0)]]
    });
  }
  ngOnInit() {
  }
  updateProfile() {
    if (this.profileForm.valid) {
      const profile = __spreadProps(__spreadValues({
        id: Date.now().toString()
      }, this.profileForm.value), {
        skills: [...this.skills],
        languages: [...this.languages]
      });
      console.log("Profile updated:", profile);
    }
  }
  resetForm() {
    this.profileForm.reset();
    this.skills = [];
    this.languages = [];
  }
  addSkill(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.skills.push(value);
      event.chipInput.clear();
    }
  }
  removeSkill(skill) {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }
  addLanguage(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.languages.push(value);
      event.chipInput.clear();
    }
  }
  removeLanguage(language) {
    const index = this.languages.indexOf(language);
    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }
  static \u0275fac = function ProfileManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileManagerComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileManagerComponent, selectors: [["app-profile-manager"]], decls: 91, vars: 6, consts: [["skillGrid", ""], ["languageGrid", ""], [1, "profile-container"], [1, "profile-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], ["appearance", "outline", 1, "half-width"], ["matInput", "", "formControlName", "fullName", "required", ""], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "phone", "type", "tel", "required", ""], ["matInput", "", "formControlName", "location", "required", ""], ["matInput", "", "formControlName", "currentRole", "required", ""], ["matInput", "", "formControlName", "experience", "type", "number", "required", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "education", "required", ""], ["matInput", "", "formControlName", "summary", "rows", "4", "required", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add skill...", 3, "matChipInputTokenEnd", "matChipInputFor"], ["placeholder", "Add language...", 3, "matChipInputTokenEnd", "matChipInputFor"], ["formControlName", "availability"], ["value", "Immediate"], ["value", "1-2 weeks"], ["value", "1 month"], ["value", "2+ months"], ["matInput", "", "formControlName", "salaryExpectation", "type", "number", "required", ""], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "fas", "fa-save"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "fas", "fa-undo"], [3, "removed"], ["matChipRemove", ""], [1, "fas", "fa-times"]], template: function ProfileManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Profile Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Manage your professional profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 3);
      \u0275\u0275listener("ngSubmit", function ProfileManagerComponent_Template_form_ngSubmit_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateProfile());
      });
      \u0275\u0275elementStart(9, "div", 4)(10, "h3");
      \u0275\u0275text(11, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5)(13, "mat-form-field", 6)(14, "mat-label");
      \u0275\u0275text(15, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 6)(18, "mat-label");
      \u0275\u0275text(19, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 5)(22, "mat-form-field", 6)(23, "mat-label");
      \u0275\u0275text(24, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-form-field", 6)(27, "mat-label");
      \u0275\u0275text(28, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 4)(31, "h3");
      \u0275\u0275text(32, "Professional Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 5)(34, "mat-form-field", 6)(35, "mat-label");
      \u0275\u0275text(36, "Current Role");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-form-field", 6)(39, "mat-label");
      \u0275\u0275text(40, "Years of Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "mat-form-field", 13)(43, "mat-label");
      \u0275\u0275text(44, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-form-field", 13)(47, "mat-label");
      \u0275\u0275text(48, "Professional Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "textarea", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 4)(51, "h3");
      \u0275\u0275text(52, "Skills & Preferences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "mat-form-field", 13)(54, "mat-label");
      \u0275\u0275text(55, "Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-chip-grid", null, 0);
      \u0275\u0275template(58, ProfileManagerComponent_mat_chip_row_58_Template, 4, 1, "mat-chip-row", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 17);
      \u0275\u0275listener("matChipInputTokenEnd", function ProfileManagerComponent_Template_input_matChipInputTokenEnd_59_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSkill($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "mat-form-field", 13)(61, "mat-label");
      \u0275\u0275text(62, "Languages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-chip-grid", null, 1);
      \u0275\u0275template(65, ProfileManagerComponent_mat_chip_row_65_Template, 4, 1, "mat-chip-row", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "input", 18);
      \u0275\u0275listener("matChipInputTokenEnd", function ProfileManagerComponent_Template_input_matChipInputTokenEnd_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addLanguage($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 5)(68, "mat-form-field", 6)(69, "mat-label");
      \u0275\u0275text(70, "Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-select", 19)(72, "mat-option", 20);
      \u0275\u0275text(73, "Immediate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 21);
      \u0275\u0275text(75, "1-2 weeks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 22);
      \u0275\u0275text(77, "1 month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 23);
      \u0275\u0275text(79, "2+ months");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "mat-form-field", 6)(81, "mat-label");
      \u0275\u0275text(82, "Salary Expectation (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "input", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 25)(85, "button", 26);
      \u0275\u0275element(86, "i", 27);
      \u0275\u0275text(87, " Save Profile ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "button", 28);
      \u0275\u0275listener("click", function ProfileManagerComponent_Template_button_click_88_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetForm());
      });
      \u0275\u0275element(89, "i", 29);
      \u0275\u0275text(90, " Reset ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const skillGrid_r7 = \u0275\u0275reference(57);
      const languageGrid_r8 = \u0275\u0275reference(64);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(50);
      \u0275\u0275property("ngForOf", ctx.skills);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", skillGrid_r7);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.languages);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", languageGrid_r8);
      \u0275\u0275advance(19);
      \u0275\u0275property("disabled", !ctx.profileForm.valid);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
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
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatDatepickerModule,
    MatNativeDateModule
  ], styles: ["\n\n.profile-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: rgba(245, 245, 245, 0.5);\n  padding: 20px;\n  border-radius: 8px;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.half-width[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\nmat-chip-row[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.1);\n  color: #2e7d32;\n}\nmat-chip-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .half-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=cv-manager.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileManagerComponent, { className: "ProfileManagerComponent", filePath: "src/app/job-seeker/components/cv-manager/cv-manager.component.ts", lineNumber: 255 });
})();
export {
  ProfileManagerComponent
};
//# sourceMappingURL=chunk-JFJVRPGI.js.map
