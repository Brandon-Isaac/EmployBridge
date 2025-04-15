import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-Y2XFKMC4.js";
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
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IAQJIRE2.js";

// src/app/job-seeker/components/cv-manager/cv-manager.component.ts
function CvManagerComponent_mat_chip_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 14);
    \u0275\u0275listener("removed", function CvManagerComponent_mat_chip_row_28_Template_mat_chip_row_removed_0_listener() {
      const skill_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 15)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function CvManagerComponent_mat_expansion_panel_37_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1, " View CV ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cv_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", cv_r6.link, \u0275\u0275sanitizeUrl);
  }
}
function CvManagerComponent_mat_expansion_panel_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-panel-description");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CvManagerComponent_mat_expansion_panel_37_a_11_Template, 2, 1, "a", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-action-row")(13, "button", 18);
    \u0275\u0275listener("click", function CvManagerComponent_mat_expansion_panel_37_Template_button_click_13_listener() {
      const cv_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteCV(cv_r6));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cv_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cv_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", cv_r6.email, " | ", cv_r6.skills.join(", "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cv_r6.summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Phone: ", cv_r6.phone, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cv_r6.link);
  }
}
var CvManagerComponent = class _CvManagerComponent {
  fb;
  cvForm;
  skills = [];
  cvs = [];
  constructor(fb) {
    this.fb = fb;
    this.cvForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      summary: ["", Validators.required],
      link: [""]
    });
  }
  ngOnInit() {
  }
  addCV() {
    if (this.cvForm.valid) {
      const newCV = __spreadProps(__spreadValues({
        id: Date.now().toString()
      }, this.cvForm.value), {
        skills: [...this.skills]
      });
      this.cvs.push(newCV);
      this.cvForm.reset();
      this.skills = [];
    }
  }
  deleteCV(cv) {
    const index = this.cvs.findIndex((c) => c.id === cv.id);
    if (index !== -1) {
      this.cvs.splice(index, 1);
    }
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
  static \u0275fac = function CvManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CvManagerComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CvManagerComponent, selectors: [["app-cv-manager"]], decls: 38, vars: 5, consts: [["chipGrid", ""], [1, "cv-container"], [1, "cv-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "phone", "type", "tel", "required", ""], ["matInput", "", "formControlName", "summary", "rows", "4", "required", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New skill...", 3, "matChipInputTokenEnd", "matChipInputFor"], ["matInput", "", "formControlName", "link", "type", "url"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "cv-list"], [4, "ngFor", "ngForOf"], [3, "removed"], ["matChipRemove", ""], [1, "cv-details"], ["target", "_blank", "mat-button", "", "color", "primary", 3, "href", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click"], ["target", "_blank", "mat-button", "", "color", "primary", 3, "href"]], template: function CvManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "CV Manager");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "form", 2);
      \u0275\u0275listener("ngSubmit", function CvManagerComponent_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addCV());
      });
      \u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
      \u0275\u0275text(9, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-form-field", 3)(12, "mat-label");
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-form-field", 3)(16, "mat-label");
      \u0275\u0275text(17, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 3)(20, "mat-label");
      \u0275\u0275text(21, "Professional Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "textarea", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-form-field", 3)(24, "mat-label");
      \u0275\u0275text(25, "Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-chip-grid", null, 0);
      \u0275\u0275template(28, CvManagerComponent_mat_chip_row_28_Template, 5, 1, "mat-chip-row", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 9);
      \u0275\u0275listener("matChipInputTokenEnd", function CvManagerComponent_Template_input_matChipInputTokenEnd_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSkill($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "mat-form-field", 3)(31, "mat-label");
      \u0275\u0275text(32, "CV Link");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 11);
      \u0275\u0275text(35, " Add CV ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "mat-accordion", 12);
      \u0275\u0275template(37, CvManagerComponent_mat_expansion_panel_37_Template, 17, 6, "mat-expansion-panel", 13);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const chipGrid_r7 = \u0275\u0275reference(27);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.cvForm);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.skills);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r7);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.cvForm.valid);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.cvs);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatButtonModule, MatAnchor, MatButton, MatIconModule, MatIcon, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatChipsModule, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow], styles: ["\n\n.cv-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.cv-form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.cv-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.cv-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=cv-manager.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CvManagerComponent, { className: "CvManagerComponent", filePath: "src/app/job-seeker/components/cv-manager/cv-manager.component.ts", lineNumber: 170 });
})();
export {
  CvManagerComponent
};
//# sourceMappingURL=chunk-2LPC2TYY.js.map
