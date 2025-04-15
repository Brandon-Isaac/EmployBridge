import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-2VSBSU4O.js";
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
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
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
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCardModule,
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
} from "./chunk-IAQJIRE2.js";

// src/app/employer/components/post-job/post-job.component.ts
function PostJobComponent_mat_chip_row_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 15);
    \u0275\u0275listener("removed", function PostJobComponent_mat_chip_row_15_Template_mat_chip_row_removed_0_listener() {
      const skill_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 16);
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
var PostJobComponent = class _PostJobComponent {
  fb;
  jobForm;
  requiredSkills = [];
  constructor(fb) {
    this.fb = fb;
    this.jobForm = this.fb.group({
      description: ["", Validators.required],
      location: ["", Validators.required],
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostJobComponent, selectors: [["app-post-job"]], decls: 34, vars: 4, consts: [["chipGrid", ""], [1, "post-job-container"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "description", "rows", "6", "required", ""], ["matInput", "", "formControlName", "location", "required", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New skill...", 3, "matChipInputTokenEnd", "matChipInputFor"], ["formControlName", "experienceLevel", "required", ""], ["value", "entry"], ["value", "mid"], ["value", "senior"], ["matInput", "", "formControlName", "salaryRange", "required", ""], [1, "button-container"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "post-button", 3, "disabled"], [3, "removed"], ["matChipRemove", ""]], template: function PostJobComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "form", 2);
      \u0275\u0275listener("ngSubmit", function PostJobComponent_Template_form_ngSubmit_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(2, "mat-form-field", 3)(3, "mat-label");
      \u0275\u0275text(4, "Job Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "textarea", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-form-field", 3)(7, "mat-label");
      \u0275\u0275text(8, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
      \u0275\u0275text(12, "Required Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-chip-grid", null, 0);
      \u0275\u0275template(15, PostJobComponent_mat_chip_row_15_Template, 4, 1, "mat-chip-row", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 7);
      \u0275\u0275listener("matChipInputTokenEnd", function PostJobComponent_Template_input_matChipInputTokenEnd_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSkill($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-form-field", 3)(18, "mat-label");
      \u0275\u0275text(19, "Experience Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-select", 8)(21, "mat-option", 9);
      \u0275\u0275text(22, "Entry Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-option", 10);
      \u0275\u0275text(24, "Mid Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-option", 11);
      \u0275\u0275text(26, "Senior Level");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "mat-form-field", 3)(28, "mat-label");
      \u0275\u0275text(29, "Salary Range");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 13)(32, "button", 14);
      \u0275\u0275text(33, " Post Job ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const chipGrid_r5 = \u0275\u0275reference(14);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.jobForm);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.requiredSkills);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r5);
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", !ctx.jobForm.valid);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
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
    MatFormFieldModule,
    MatFormField,
    MatLabel,
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
    MatChipRow
  ], styles: ["\n\n.post-job-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 20px;\n}\n.post-button[_ngcontent-%COMP%] {\n  min-width: 120px;\n  height: 45px;\n  font-size: 16px;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n  .mat-mdc-form-field {\n  background: white;\n  border-radius: 4px;\n}\n  .mat-mdc-text-field-wrapper {\n  background: white !important;\n}\n  .mat-mdc-form-field-flex {\n  background: white !important;\n}\n/*# sourceMappingURL=post-job.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostJobComponent, { className: "PostJobComponent", filePath: "src/app/employer/components/post-job/post-job.component.ts", lineNumber: 132 });
})();
export {
  PostJobComponent
};
//# sourceMappingURL=chunk-LM5U4JTW.js.map
