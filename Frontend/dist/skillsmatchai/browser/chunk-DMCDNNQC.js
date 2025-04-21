import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-3JPVUUIX.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-3DCVMGSB.js";
import "./chunk-VAADXG4L.js";
import {
  MatFormFieldModule
} from "./chunk-GPGOCT2X.js";
import "./chunk-56ZLA7LI.js";
import "./chunk-YKUVITQE.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-DCF6DFJ3.js";
import "./chunk-F5FUW2P7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-BZ6GK7LR.js";
import "./chunk-JCHFAW36.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-2YKV2DJK.js";
import {
  MatIconModule
} from "./chunk-MI43YKTU.js";
import {
  MatError,
  MatFormField,
  MatLabel
} from "./chunk-2LWENGE2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  NgForOf,
  NgIf,
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
} from "./chunk-UOKCMW7L.js";

// src/app/employer/components/post-job/post-job.component.ts
function PostJobComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job title is required ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job description is required ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Location is required ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job type is required ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_mat_chip_row_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 37);
    \u0275\u0275listener("removed", function PostJobComponent_mat_chip_row_61_Template_mat_chip_row_removed_0_listener() {
      const skill_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function PostJobComponent_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Experience level is required ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_mat_error_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Salary range is required ");
    \u0275\u0275elementEnd();
  }
}
var PostJobComponent = class _PostJobComponent {
  fb;
  jobForm;
  requiredSkills = [];
  constructor(fb) {
    this.fb = fb;
    this.jobForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      location: ["", Validators.required],
      jobType: ["", Validators.required],
      experienceLevel: ["", Validators.required],
      salaryRange: ["", Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.jobForm.valid) {
      const jobData = __spreadProps(__spreadValues({}, this.jobForm.value), {
        requiredSkills: this.requiredSkills
      });
      console.log("Job data:", jobData);
    }
  }
  addSkill(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.requiredSkills.push(value);
      event.chipInput.clear();
    }
  }
  removeSkill(skill) {
    const index = this.requiredSkills.indexOf(skill);
    if (index >= 0) {
      this.requiredSkills.splice(index, 1);
    }
  }
  static \u0275fac = function PostJobComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PostJobComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostJobComponent, selectors: [["app-post-job"]], decls: 88, vars: 11, consts: [["chipGrid", ""], [1, "post-job-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "job-form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "fas", "fa-file-alt", "section-icon"], [1, "form-row"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title", "required", "", "placeholder", "e.g. Senior Frontend Developer"], [4, "ngIf"], ["matInput", "", "formControlName", "description", "rows", "6", "required", "", "placeholder", "Describe the role, responsibilities, and qualifications..."], [1, "fas", "fa-map-marker-alt", "section-icon"], [1, "form-row", "two-column"], ["appearance", "outline"], ["matInput", "", "formControlName", "location", "required", "", "placeholder", "e.g. New York, NY or Remote"], ["formControlName", "jobType", "required", ""], ["value", "fulltime"], ["value", "parttime"], ["value", "contract"], ["value", "internship"], [1, "fas", "fa-laptop-code", "section-icon"], ["class", "skill-chip", 3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add skill and press Enter...", 3, "matChipInputTokenEnd", "matChipInputFor"], ["formControlName", "experienceLevel", "required", ""], ["value", "entry"], ["value", "mid"], ["value", "senior"], ["value", "executive"], ["matInput", "", "formControlName", "salaryRange", "required", "", "placeholder", "e.g. $80,000 - $100,000"], [1, "form-actions"], ["mat-button", "", "type", "button", 1, "cancel-button"], ["mat-raised-button", "", "type", "submit", 1, "post-button", 3, "disabled"], [1, "fas", "fa-paper-plane"], [1, "skill-chip", 3, "removed"], ["matChipRemove", ""], [1, "fas", "fa-times"]], template: function PostJobComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3, "Post New Job");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, "Create a new job listing for your company");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-card", 5)(7, "mat-card-content")(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function PostJobComponent_Template_form_ngSubmit_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "h3", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275text(12, " Job Details ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "mat-divider");
      \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
      \u0275\u0275text(17, "Job Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275template(19, PostJobComponent_mat_error_19_Template, 2, 0, "mat-error", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10)(21, "mat-form-field", 11)(22, "mat-label");
      \u0275\u0275text(23, "Job Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "textarea", 14);
      \u0275\u0275template(25, PostJobComponent_mat_error_25_Template, 2, 0, "mat-error", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 7)(27, "h3", 8);
      \u0275\u0275element(28, "i", 15);
      \u0275\u0275text(29, " Location & Work Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "mat-divider");
      \u0275\u0275elementStart(31, "div", 16)(32, "mat-form-field", 17)(33, "mat-label");
      \u0275\u0275text(34, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 18);
      \u0275\u0275template(36, PostJobComponent_mat_error_36_Template, 2, 0, "mat-error", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-form-field", 17)(38, "mat-label");
      \u0275\u0275text(39, "Job Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "mat-select", 19)(41, "mat-option", 20);
      \u0275\u0275text(42, "Full-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-option", 21);
      \u0275\u0275text(44, "Part-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 22);
      \u0275\u0275text(46, "Contract");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 23);
      \u0275\u0275text(48, "Internship");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, PostJobComponent_mat_error_49_Template, 2, 0, "mat-error", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 7)(51, "h3", 8);
      \u0275\u0275element(52, "i", 24);
      \u0275\u0275text(53, " Skills & Requirements ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "mat-divider");
      \u0275\u0275elementStart(55, "div", 10)(56, "mat-form-field", 11)(57, "mat-label");
      \u0275\u0275text(58, "Required Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-chip-grid", null, 0);
      \u0275\u0275template(61, PostJobComponent_mat_chip_row_61_Template, 4, 1, "mat-chip-row", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 26);
      \u0275\u0275listener("matChipInputTokenEnd", function PostJobComponent_Template_input_matChipInputTokenEnd_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSkill($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 16)(64, "mat-form-field", 17)(65, "mat-label");
      \u0275\u0275text(66, "Experience Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-select", 27)(68, "mat-option", 28);
      \u0275\u0275text(69, "Entry Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 29);
      \u0275\u0275text(71, "Mid Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 30);
      \u0275\u0275text(73, "Senior Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 31);
      \u0275\u0275text(75, "Executive Level");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(76, PostJobComponent_mat_error_76_Template, 2, 0, "mat-error", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-form-field", 17)(78, "mat-label");
      \u0275\u0275text(79, "Salary Range");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 32);
      \u0275\u0275template(81, PostJobComponent_mat_error_81_Template, 2, 0, "mat-error", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 33)(83, "button", 34);
      \u0275\u0275text(84, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "button", 35);
      \u0275\u0275element(86, "i", 36);
      \u0275\u0275text(87, " Post Job ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_9_0;
      let tmp_10_0;
      const chipGrid_r5 = \u0275\u0275reference(60);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.jobForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.jobForm.get("title")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.jobForm.get("description")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.jobForm.get("location")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.jobForm.get("jobType")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.requiredSkills);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r5);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", (tmp_9_0 = ctx.jobForm.get("experienceLevel")) == null ? null : tmp_9_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.jobForm.get("salaryRange")) == null ? null : tmp_10_0.hasError("required"));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.jobForm.valid);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatIconModule,
    MatDividerModule,
    MatDivider
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary-green: #4caf50;\n  --primary-green-light: rgba(200, 230, 201, 0.5);\n  --primary-green-medium: rgba(129, 199, 132, 0.8);\n  --primary-green-dark: #2e7d32;\n  --neutral-bg: #f8f9fa;\n  --neutral-dark: #455a64;\n  --neutral-light: #eceff1;\n  --card-bg: #ffffff;\n  --error-color: #f44336;\n}\n.post-job-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 0 40px 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  color: var(--primary-green-dark);\n  font-size: 28px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  font-size: 16px;\n  margin: 0;\n  opacity: 0.8;\n}\n.job-form-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--primary-green-dark);\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n  gap: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n  font-size: 18px;\n  opacity: 0.9;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-color: var(--primary-green-light);\n}\n.form-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.two-column[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  height: 16px !important;\n}\n  .mat-mdc-form-field {\n  background: var(--card-bg);\n  border-radius: 8px;\n}\n  .mat-mdc-text-field-wrapper {\n  background: var(--card-bg) !important;\n}\n  .mat-mdc-form-field-flex {\n  background: var(--card-bg) !important;\n}\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading, \n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch, \n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading, \n  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch, \n  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: var(--primary-green);\n}\n  .mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {\n  color: var(--primary-green);\n}\n  .mat-mdc-form-field-type-mat-select.mat-focused .mat-mdc-form-field-infix {\n  color: var(--primary-green);\n}\n  .skill-chip {\n  background-color: var(--primary-green-light) !important;\n  color: var(--primary-green-dark) !important;\n  border: 1px solid var(--primary-green-medium) !important;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 32px;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  background-color: var(--neutral-light);\n  border-radius: 30px;\n  padding: 0 24px;\n  height: 46px;\n  font-weight: 500;\n}\n.post-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      var(--primary-green),\n      var(--primary-green-dark));\n  color: white;\n  border-radius: 30px;\n  padding: 0 32px;\n  height: 46px;\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);\n  transition: all 0.3s ease;\n}\n.post-button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4);\n  transform: translateY(-2px);\n}\n.post-button[disabled][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #b0bec5,\n      #90a4ae);\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .post-job-container[_ngcontent-%COMP%] {\n    padding: 0 0 20px 0;\n  }\n  .two-column[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 12px;\n  }\n  .cancel-button[_ngcontent-%COMP%], \n   .post-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=post-job.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostJobComponent, { className: "PostJobComponent", filePath: "src/app/employer/components/post-job/post-job.component.ts", lineNumber: 48 });
})();
export {
  PostJobComponent
};
//# sourceMappingURL=chunk-DMCDNNQC.js.map
