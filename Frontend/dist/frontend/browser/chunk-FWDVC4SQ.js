import {
  MatProgressSpinnerModule
} from "./chunk-D357AIHJ.js";
import "./chunk-KM7HY7RM.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5QZTZ3GT.js";
import {
  JobService
} from "./chunk-VRK6DSAD.js";
import {
  AuthService,
  Router
} from "./chunk-NJ7YUX4Y.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-HJUTQLGZ.js";
import "./chunk-UILPAKWT.js";
import {
  MatFormFieldModule
} from "./chunk-42HARFSR.js";
import {
  MatChip,
  MatChipRemove,
  MatChipSet,
  MatChipsModule
} from "./chunk-LGNT6V3W.js";
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
  MatCardSubtitle,
  MatCardTitle,
  MatError,
  MatFormField,
  MatLabel,
  MatSnackBar,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  __spreadProps,
  __spreadValues,
  faBriefcase,
  faCheck,
  faDollarSign,
  faMagic,
  faMapMarkerAlt,
  faSpinner,
  faTimes,
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

// src/app/components/employer-components/job-generation/job-generation.component.ts
function JobGenerationComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job title is required ");
    \u0275\u0275elementEnd();
  }
}
function JobGenerationComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Location is required ");
    \u0275\u0275elementEnd();
  }
}
function JobGenerationComponent_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Employment type is required ");
    \u0275\u0275elementEnd();
  }
}
function JobGenerationComponent_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Salary must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
function JobGenerationComponent_div_42_mat_chip_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 27);
    \u0275\u0275listener("removed", function JobGenerationComponent_div_42_mat_chip_12_Template_mat_chip_removed_0_listener() {
      const skill_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSkill(skill_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275element(3, "fa-icon", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faTimes);
  }
}
function JobGenerationComponent_div_42_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.generationMessage);
  }
}
function JobGenerationComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h3");
    \u0275\u0275text(2, "Generated Job Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "h4");
    \u0275\u0275text(5, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "h4");
    \u0275\u0275text(10, "Required Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-chip-set");
    \u0275\u0275template(12, JobGenerationComponent_div_42_mat_chip_12_Template, 4, 2, "mat-chip", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, JobGenerationComponent_div_42_div_13_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.generatedJob.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.generatedSkills);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.generationMessage);
  }
}
function JobGenerationComponent_fa_icon_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r2.faSpinner);
  }
}
function JobGenerationComponent_fa_icon_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 29);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r2.faMagic);
  }
}
function JobGenerationComponent_button_50_fa_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r2.faSpinner);
  }
}
function JobGenerationComponent_button_50_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 29);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r2.faCheck);
  }
}
function JobGenerationComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function JobGenerationComponent_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPostJob());
    });
    \u0275\u0275template(1, JobGenerationComponent_button_50_fa_icon_1_Template, 1, 1, "fa-icon", 19)(2, JobGenerationComponent_button_50_fa_icon_2_Template, 1, 1, "fa-icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isPosting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isPosting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isPosting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isPosting ? "Posting..." : "Post Job", " ");
  }
}
var JobGenerationComponent = class _JobGenerationComponent {
  fb;
  jobService;
  authService;
  router;
  snackBar;
  generationForm;
  isGenerating = false;
  isPosting = false;
  generatedJob = null;
  generatedSkills = [];
  generationMessage = null;
  faSpinner = faSpinner;
  faMagic = faMagic;
  faCheck = faCheck;
  faTimes = faTimes;
  faMapMarkerAlt = faMapMarkerAlt;
  faBriefcase = faBriefcase;
  faDollarSign = faDollarSign;
  constructor(fb, jobService, authService, router, snackBar) {
    this.fb = fb;
    this.jobService = jobService;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.generationForm = this.fb.group({
      title: ["", Validators.required],
      location: ["", Validators.required],
      employmentType: ["", Validators.required],
      salary: [null, [Validators.min(0)]]
    });
  }
  onGenerate() {
    if (this.generationForm.invalid)
      return;
    this.isGenerating = true;
    this.generatedJob = null;
    this.generatedSkills = [];
    this.generationMessage = null;
    const params = this.generationForm.value;
    this.jobService.generateJobWithAI(params).subscribe({
      next: (response) => {
        this.generatedJob = response.job;
        this.generatedSkills = response.generatedSkills;
        this.generationMessage = response.message;
        this.isGenerating = false;
      },
      error: (error) => {
        console.error("Error generating job:", error);
        this.snackBar.open(error.error?.message || "Failed to generate job description", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.isGenerating = false;
      }
    });
  }
  onPostJob() {
    if (!this.generatedJob)
      return;
    this.isPosting = true;
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      this.snackBar.open("You must be logged in to post a job", "Close", {
        duration: 5e3,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["/login"]);
      return;
    }
    const jobData = __spreadProps(__spreadValues({}, this.generatedJob), {
      employer: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email
      }
    });
    this.jobService.createJob(jobData).subscribe({
      next: () => {
        this.snackBar.open("Job posted successfully", "Close", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(["/employer/jobs-posted"]);
      },
      error: (error) => {
        console.error("Error posting job:", error);
        this.snackBar.open(error.error?.message || "Failed to post job", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.isPosting = false;
      }
    });
  }
  removeSkill(skill) {
    const index = this.generatedSkills.findIndex((s) => s.name === skill);
    if (index >= 0) {
      this.generatedSkills.splice(index, 1);
    }
  }
  goBack() {
    this.router.navigate(["/employer/jobs-posted"]);
  }
  static \u0275fac = function JobGenerationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobGenerationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobGenerationComponent, selectors: [["app-employer-job-generation"]], decls: 51, vars: 14, consts: [[1, "job-generation-container"], [1, "job-generation-card"], [1, "job-generation-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title", "placeholder", "e.g., Senior Software Engineer"], [4, "ngIf"], ["matInput", "", "formControlName", "location", "placeholder", "e.g., New York, NY"], [1, "field-icon", 3, "icon"], ["formControlName", "employmentType"], ["value", "Full-time"], ["value", "Part-time"], ["value", "Contract"], ["value", "Temporary"], ["value", "Internship"], ["matInput", "", "type", "number", "formControlName", "salary", "placeholder", "e.g., 75000"], ["class", "generated-content", 4, "ngIf"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["animation", "spin", 3, "icon", 4, "ngIf"], [3, "icon", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "generated-content"], [1, "description-section"], [1, "skills-section"], [3, "removed", 4, "ngFor", "ngForOf"], ["class", "message-section", 4, "ngIf"], [3, "removed"], ["matChipRemove", ""], [3, "icon"], [1, "message-section"], ["animation", "spin", 3, "icon"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click", "disabled"]], template: function JobGenerationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "AI Job Description Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, " Let AI help you create a comprehensive job description ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 2);
      \u0275\u0275listener("ngSubmit", function JobGenerationComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onGenerate();
      });
      \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
      \u0275\u0275text(11, "Job Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 4);
      \u0275\u0275template(13, JobGenerationComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field", 3)(15, "mat-label");
      \u0275\u0275text(16, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 6)(18, "fa-icon", 7);
      \u0275\u0275template(19, JobGenerationComponent_mat_error_19_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
      \u0275\u0275text(22, "Employment Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-select", 8)(24, "mat-option", 9);
      \u0275\u0275text(25, "Full-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 10);
      \u0275\u0275text(27, "Part-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-option", 11);
      \u0275\u0275text(29, "Contract");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-option", 12);
      \u0275\u0275text(31, "Temporary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-option", 13);
      \u0275\u0275text(33, "Internship");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "fa-icon", 7);
      \u0275\u0275template(35, JobGenerationComponent_mat_error_35_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-form-field", 3)(37, "mat-label");
      \u0275\u0275text(38, "Salary (Annual)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 14)(40, "fa-icon", 7);
      \u0275\u0275template(41, JobGenerationComponent_mat_error_41_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, JobGenerationComponent_div_42_Template, 14, 3, "div", 15);
      \u0275\u0275elementStart(43, "div", 16)(44, "button", 17);
      \u0275\u0275listener("click", function JobGenerationComponent_Template_button_click_44_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(45, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 18);
      \u0275\u0275template(47, JobGenerationComponent_fa_icon_47_Template, 1, 1, "fa-icon", 19)(48, JobGenerationComponent_fa_icon_48_Template, 1, 1, "fa-icon", 20);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, JobGenerationComponent_button_50_Template, 4, 4, "button", 21);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      let tmp_5_0;
      let tmp_7_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.generationForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.generationForm.get("title")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("icon", ctx.faMapMarkerAlt);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.generationForm.get("location")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(15);
      \u0275\u0275property("icon", ctx.faBriefcase);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.generationForm.get("employmentType")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("icon", ctx.faDollarSign);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.generationForm.get("salary")) == null ? null : tmp_7_0.hasError("min"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.generatedJob);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.generationForm.invalid || ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isGenerating ? "Generating..." : "Generate Description", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.generatedJob);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatChipsModule,
    MatChip,
    MatChipRemove,
    MatChipSet,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.job-generation-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.job-generation-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.job-generation-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\n.generated-content[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 8px;\n}\n.description-section[_ngcontent-%COMP%], \n.skills-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.description-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.skills-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #666;\n}\n.message-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: #e3f2fd;\n  border-radius: 4px;\n  color: #1976d2;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mat-mdc-chip-set[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\nbutton[_ngcontent-%COMP%]   matChipRemove[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=job-generation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobGenerationComponent, [{
    type: Component,
    args: [{ selector: "app-employer-job-generation", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      ReactiveFormsModule,
      FontAwesomeModule
    ], template: `
    <div class="job-generation-container">
      <mat-card class="job-generation-card">
        <mat-card-header>
          <mat-card-title>AI Job Description Generator</mat-card-title>
          <mat-card-subtitle>
            Let AI help you create a comprehensive job description
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="generationForm" (ngSubmit)="onGenerate()" class="job-generation-form">
            <!-- Job Title -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Title</mat-label>
              <input matInput formControlName="title" placeholder="e.g., Senior Software Engineer">
              <mat-error *ngIf="generationForm.get('title')?.hasError('required')">
                Job title is required
              </mat-error>
            </mat-form-field>

            <!-- Location -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" placeholder="e.g., New York, NY">
              <fa-icon [icon]="faMapMarkerAlt" class="field-icon"></fa-icon>
              <mat-error *ngIf="generationForm.get('location')?.hasError('required')">
                Location is required
              </mat-error>
            </mat-form-field>

            <!-- Employment Type -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Employment Type</mat-label>
              <mat-select formControlName="employmentType">
                <mat-option value="Full-time">Full-time</mat-option>
                <mat-option value="Part-time">Part-time</mat-option>
                <mat-option value="Contract">Contract</mat-option>
                <mat-option value="Temporary">Temporary</mat-option>
                <mat-option value="Internship">Internship</mat-option>
              </mat-select>
              <fa-icon [icon]="faBriefcase" class="field-icon"></fa-icon>
              <mat-error *ngIf="generationForm.get('employmentType')?.hasError('required')">
                Employment type is required
              </mat-error>
            </mat-form-field>

            <!-- Salary -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Salary (Annual)</mat-label>
              <input matInput type="number" formControlName="salary" placeholder="e.g., 75000">
              <fa-icon [icon]="faDollarSign" class="field-icon"></fa-icon>
              <mat-error *ngIf="generationForm.get('salary')?.hasError('min')">
                Salary must be greater than 0
              </mat-error>
            </mat-form-field>

            <!-- Generated Content -->
            <div *ngIf="generatedJob" class="generated-content">
              <h3>Generated Job Description</h3>
              <div class="description-section">
                <h4>Description</h4>
                <p>{{ generatedJob.description }}</p>
              </div>

              <div class="skills-section">
                <h4>Required Skills</h4>
                <mat-chip-set>
                  <mat-chip *ngFor="let skill of generatedSkills" (removed)="removeSkill(skill)">
                    {{ skill.name }}
                    <button matChipRemove>
                      <fa-icon [icon]="faTimes"></fa-icon>
                    </button>
                  </mat-chip>
                </mat-chip-set>
              </div>

              <div class="message-section" *ngIf="generationMessage">
                <p>{{ generationMessage }}</p>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="form-actions">
              <button mat-button type="button" (click)="goBack()">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="generationForm.invalid || isGenerating">
                <fa-icon [icon]="faSpinner" *ngIf="isGenerating" animation="spin"></fa-icon>
                <fa-icon [icon]="faMagic" *ngIf="!isGenerating"></fa-icon>
                {{ isGenerating ? 'Generating...' : 'Generate Description' }}
              </button>
              <button mat-raised-button color="accent" type="button" 
                      *ngIf="generatedJob"
                      (click)="onPostJob()"
                      [disabled]="isPosting">
                <fa-icon [icon]="faSpinner" *ngIf="isPosting" animation="spin"></fa-icon>
                <fa-icon [icon]="faCheck" *ngIf="!isPosting"></fa-icon>
                {{ isPosting ? 'Posting...' : 'Post Job' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;6011fd101a62bb8e813c13efeab7ed7e0a17b20c8642d95f3a7042aa9a4a82a0;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/job-generation/job-generation.component.ts */\n.job-generation-container {\n  padding: 20px;\n}\n.job-generation-card {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.job-generation-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px 0;\n}\n.full-width {\n  width: 100%;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\n.generated-content {\n  margin-top: 24px;\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 8px;\n}\n.description-section,\n.skills-section {\n  margin-bottom: 20px;\n}\n.description-section h4,\n.skills-section h4 {\n  margin-bottom: 8px;\n  color: #666;\n}\n.message-section {\n  margin-top: 16px;\n  padding: 12px;\n  background: #e3f2fd;\n  border-radius: 4px;\n  color: #1976d2;\n}\nmat-form-field {\n  margin-bottom: 8px;\n}\n.mat-mdc-chip-set {\n  margin-top: 8px;\n}\n.field-icon {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\nbutton matChipRemove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=job-generation.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: JobService }, { type: AuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobGenerationComponent, { className: "JobGenerationComponent", filePath: "src/app/components/employer-components/job-generation/job-generation.component.ts", lineNumber: 200 });
})();
export {
  JobGenerationComponent
};
//# sourceMappingURL=chunk-FWDVC4SQ.js.map
