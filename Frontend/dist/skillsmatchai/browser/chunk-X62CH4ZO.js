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
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
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

// src/app/job-seeker/components/portfolio/portfolio.component.ts
function PortfolioComponent_mat_chip_row_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 12);
    \u0275\u0275listener("removed", function PortfolioComponent_mat_chip_row_20_Template_mat_chip_row_removed_0_listener() {
      const tech_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeTechnology(tech_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 13)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tech_r3, " ");
  }
}
function PortfolioComponent_mat_expansion_panel_29_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275text(1, " View Project ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", project_r6.link, \u0275\u0275sanitizeUrl);
  }
}
function PortfolioComponent_mat_expansion_panel_29_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "div", 14)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PortfolioComponent_mat_expansion_panel_29_a_13_Template, 2, 1, "a", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-action-row")(15, "button", 16);
    \u0275\u0275listener("click", function PortfolioComponent_mat_expansion_panel_29_Template_button_click_15_listener() {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteProject(project_r6));
    });
    \u0275\u0275text(16, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r6.technologies.join(", "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Duration: ", \u0275\u0275pipeBind1(11, 6, project_r6.startDate), " - ", project_r6.endDate ? \u0275\u0275pipeBind1(12, 8, project_r6.endDate) : "Present", "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", project_r6.link);
  }
}
var PortfolioComponent = class _PortfolioComponent {
  fb;
  projectForm;
  technologies = [];
  projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Angular and Node.js",
      technologies: ["Angular", "Node.js", "MongoDB", "Express"],
      startDate: /* @__PURE__ */ new Date("2023-01-01"),
      link: "https://github.com/example/ecommerce"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Redux"],
      startDate: /* @__PURE__ */ new Date("2023-06-01"),
      endDate: /* @__PURE__ */ new Date("2023-12-31")
    }
  ];
  constructor(fb) {
    this.fb = fb;
    this.projectForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      link: [""]
    });
  }
  ngOnInit() {
  }
  addProject() {
    if (this.projectForm.valid) {
      const newProject = __spreadProps(__spreadValues({
        id: Date.now().toString()
      }, this.projectForm.value), {
        technologies: [...this.technologies],
        startDate: /* @__PURE__ */ new Date()
      });
      this.projects.push(newProject);
      this.projectForm.reset();
      this.technologies = [];
    }
  }
  deleteProject(project) {
    const index = this.projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }
  addTechnology(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.technologies.push(value);
      event.chipInput.clear();
    }
  }
  removeTechnology(tech) {
    const index = this.technologies.indexOf(tech);
    if (index >= 0) {
      this.technologies.splice(index, 1);
    }
  }
  static \u0275fac = function PortfolioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioComponent, selectors: [["app-portfolio"]], decls: 30, vars: 5, consts: [["chipGrid", ""], [1, "portfolio-container"], [1, "project-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title", "required", ""], ["matInput", "", "formControlName", "description", "rows", "4", "required", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New technology...", 3, "matChipInputTokenEnd", "matChipInputFor"], ["matInput", "", "formControlName", "link", "type", "url"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "projects-list"], [4, "ngFor", "ngForOf"], [3, "removed"], ["matChipRemove", ""], [1, "project-details"], ["target", "_blank", "mat-button", "", "color", "primary", 3, "href", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click"], ["target", "_blank", "mat-button", "", "color", "primary", 3, "href"]], template: function PortfolioComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Your Portfolio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "form", 2);
      \u0275\u0275listener("ngSubmit", function PortfolioComponent_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addProject());
      });
      \u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
      \u0275\u0275text(9, "Project Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-form-field", 3)(12, "mat-label");
      \u0275\u0275text(13, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "textarea", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-form-field", 3)(16, "mat-label");
      \u0275\u0275text(17, "Technologies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-chip-grid", null, 0);
      \u0275\u0275template(20, PortfolioComponent_mat_chip_row_20_Template, 5, 1, "mat-chip-row", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 7);
      \u0275\u0275listener("matChipInputTokenEnd", function PortfolioComponent_Template_input_matChipInputTokenEnd_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTechnology($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "mat-form-field", 3)(23, "mat-label");
      \u0275\u0275text(24, "Project Link");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 9);
      \u0275\u0275text(27, " Add Project ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "mat-accordion", 10);
      \u0275\u0275template(29, PortfolioComponent_mat_expansion_panel_29_Template, 17, 10, "mat-expansion-panel", 11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const chipGrid_r7 = \u0275\u0275reference(19);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.projectForm);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.technologies);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r7);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.projectForm.valid);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.projects);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatButtonModule, MatAnchor, MatButton, MatIconModule, MatIcon, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatChipsModule, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow], styles: ["\n\n.portfolio-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.project-form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.projects-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.project-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=portfolio.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioComponent, { className: "PortfolioComponent", filePath: "src/app/job-seeker/components/portfolio/portfolio.component.ts", lineNumber: 172 });
})();
export {
  PortfolioComponent
};
//# sourceMappingURL=chunk-X62CH4ZO.js.map
