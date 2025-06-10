import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatNativeDateModule
} from "./chunk-JAL5VROU.js";
import "./chunk-KM7HY7RM.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5QZTZ3GT.js";
import {
  JobService
} from "./chunk-VRK6DSAD.js";
import {
  ActivatedRoute,
  AuthService,
  Router
} from "./chunk-NJ7YUX4Y.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-LH77XFOL.js";
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
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
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
  MatCardTitle,
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSnackBar,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  __spreadProps,
  __spreadValues,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/job-posting/job-posting.component.ts
function JobPostingComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job title is required ");
    \u0275\u0275elementEnd();
  }
}
function JobPostingComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job description is required ");
    \u0275\u0275elementEnd();
  }
}
function JobPostingComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Location is required ");
    \u0275\u0275elementEnd();
  }
}
function JobPostingComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Employment type is required ");
    \u0275\u0275elementEnd();
  }
}
function JobPostingComponent_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Salary must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
function JobPostingComponent_mat_error_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Deadline is required ");
    \u0275\u0275elementEnd();
  }
}
function JobPostingComponent_mat_chip_row_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 26);
    \u0275\u0275listener("removed", function JobPostingComponent_mat_chip_row_57_Template_mat_chip_row_removed_0_listener() {
      const skill_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 27)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function JobPostingComponent_fa_icon_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 28);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r3.faSpinner);
  }
}
var JobPostingComponent = class _JobPostingComponent {
  fb;
  jobService;
  authService;
  router;
  route;
  snackBar;
  jobForm;
  isSubmitting = false;
  isEditMode = false;
  jobId = null;
  requiredSkills = [];
  faSpinner = faSpinner;
  constructor(fb, jobService, authService, router, route, snackBar) {
    this.fb = fb;
    this.jobService = jobService;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.jobForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      location: ["", Validators.required],
      employmentType: ["", Validators.required],
      salary: [null, [Validators.min(0)]],
      deadline: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get("id");
    if (this.jobId) {
      this.isEditMode = true;
      this.loadJob();
    }
  }
  loadJob() {
    if (!this.jobId)
      return;
    this.jobService.getJobById(this.jobId).subscribe({
      next: (job) => {
        this.jobForm.patchValue({
          title: job.title,
          description: job.description,
          location: job.location,
          employmentType: job.employmentType,
          salary: job.salary,
          deadline: job.deadline
        });
        this.requiredSkills = job.requiredSkills.map((skill) => skill.name);
      },
      error: (error) => {
        console.error("Error loading job:", error);
        this.snackBar.open("Failed to load job details", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(["/employer/jobs-posted"]);
      }
    });
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
  onSubmit() {
    if (this.jobForm.invalid)
      return;
    this.isSubmitting = true;
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
    const jobData = __spreadProps(__spreadValues({}, this.jobForm.value), {
      requiredSkills: this.requiredSkills.map((skill) => ({ name: skill })),
      employer: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email
      }
    });
    const request = this.isEditMode && this.jobId ? this.jobService.updateJob(this.jobId, jobData) : this.jobService.createJob(jobData);
    request.subscribe({
      next: () => {
        this.snackBar.open(`Job ${this.isEditMode ? "updated" : "posted"} successfully`, "Close", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(["/employer/jobs-posted"]);
      },
      error: (error) => {
        console.error("Error saving job:", error);
        this.snackBar.open(error.error?.message || `Failed to ${this.isEditMode ? "update" : "post"} job`, "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.isSubmitting = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/employer/jobs-posted"]);
  }
  static \u0275fac = function JobPostingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobPostingComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobPostingComponent, selectors: [["app-employer-job-posting"]], decls: 65, vars: 15, consts: [["picker", ""], ["chipGrid", ""], [1, "job-posting-container"], [1, "job-posting-card"], [1, "job-posting-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title", "placeholder", "e.g., Senior Software Engineer"], [4, "ngIf"], ["matInput", "", "formControlName", "description", "rows", "6", "placeholder", "Describe the role, responsibilities, and requirements..."], ["matInput", "", "formControlName", "location", "placeholder", "e.g., New York, NY"], ["formControlName", "employmentType"], ["value", "Full-time"], ["value", "Part-time"], ["value", "Contract"], ["value", "Temporary"], ["value", "Internship"], ["matInput", "", "type", "number", "formControlName", "salary", "placeholder", "e.g., 75000"], ["matPrefix", ""], ["matInput", "", "formControlName", "deadline", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add skills...", 3, "matChipInputTokenEnd", "matChipInputFor"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["animation", "spin", 3, "icon", 4, "ngIf"], [3, "removed"], ["matChipRemove", ""], ["animation", "spin", 3, "icon"]], template: function JobPostingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function JobPostingComponent_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(7, "mat-form-field", 5)(8, "mat-label");
      \u0275\u0275text(9, "Job Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 6);
      \u0275\u0275template(11, JobPostingComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-form-field", 5)(13, "mat-label");
      \u0275\u0275text(14, "Job Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "textarea", 8);
      \u0275\u0275template(16, JobPostingComponent_mat_error_16_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 5)(18, "mat-label");
      \u0275\u0275text(19, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 9);
      \u0275\u0275template(21, JobPostingComponent_mat_error_21_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-form-field", 5)(23, "mat-label");
      \u0275\u0275text(24, "Employment Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-select", 10)(26, "mat-option", 11);
      \u0275\u0275text(27, "Full-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-option", 12);
      \u0275\u0275text(29, "Part-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-option", 13);
      \u0275\u0275text(31, "Contract");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-option", 14);
      \u0275\u0275text(33, "Temporary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-option", 15);
      \u0275\u0275text(35, "Internship");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, JobPostingComponent_mat_error_36_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-form-field", 5)(38, "mat-label");
      \u0275\u0275text(39, "Salary (Annual)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 16);
      \u0275\u0275elementStart(41, "span", 17);
      \u0275\u0275text(42, "$\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, JobPostingComponent_mat_error_43_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-form-field", 5)(45, "mat-label");
      \u0275\u0275text(46, "Application Deadline");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 18)(48, "mat-datepicker-toggle", 19)(49, "mat-datepicker", null, 0);
      \u0275\u0275template(51, JobPostingComponent_mat_error_51_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-form-field", 5)(53, "mat-label");
      \u0275\u0275text(54, "Required Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-chip-grid", null, 1);
      \u0275\u0275template(57, JobPostingComponent_mat_chip_row_57_Template, 5, 1, "mat-chip-row", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "input", 21);
      \u0275\u0275listener("matChipInputTokenEnd", function JobPostingComponent_Template_input_matChipInputTokenEnd_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSkill($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 22)(60, "button", 23);
      \u0275\u0275listener("click", function JobPostingComponent_Template_button_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275text(61, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 24);
      \u0275\u0275template(63, JobPostingComponent_fa_icon_63_Template, 1, 1, "fa-icon", 25);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_11_0;
      const picker_r5 = \u0275\u0275reference(50);
      const chipGrid_r6 = \u0275\u0275reference(56);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Job" : "Post a New Job");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.jobForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.jobForm.get("title")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.jobForm.get("description")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.jobForm.get("location")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.jobForm.get("employmentType")) == null ? null : tmp_7_0.hasError("required"));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", (tmp_8_0 = ctx.jobForm.get("salary")) == null ? null : tmp_8_0.hasError("min"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matDatepicker", picker_r5);
      \u0275\u0275advance();
      \u0275\u0275property("for", picker_r5);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (tmp_11_0 = ctx.jobForm.get("deadline")) == null ? null : tmp_11_0.hasError("required"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.requiredSkills);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r6);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.jobForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Saving..." : ctx.isEditMode ? "Update Job" : "Post Job", " ");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatIconModule,
    MatIcon,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatNativeDateModule,
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
  ], styles: ["\n\n.job-posting-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.job-posting-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.job-posting-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mat-mdc-chip-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=job-posting.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobPostingComponent, [{
    type: Component,
    args: [{ selector: "app-employer-job-posting", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      ReactiveFormsModule,
      FontAwesomeModule
    ], template: `
    <div class="job-posting-container">
      <mat-card class="job-posting-card">
        <mat-card-header>
          <mat-card-title>{{ isEditMode ? 'Edit Job' : 'Post a New Job' }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="jobForm" (ngSubmit)="onSubmit()" class="job-posting-form">
            <!-- Title -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Title</mat-label>
              <input matInput formControlName="title" placeholder="e.g., Senior Software Engineer">
              <mat-error *ngIf="jobForm.get('title')?.hasError('required')">
                Job title is required
              </mat-error>
            </mat-form-field>

            <!-- Description -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Job Description</mat-label>
              <textarea matInput formControlName="description" rows="6" 
                placeholder="Describe the role, responsibilities, and requirements..."></textarea>
              <mat-error *ngIf="jobForm.get('description')?.hasError('required')">
                Job description is required
              </mat-error>
            </mat-form-field>

            <!-- Location -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" placeholder="e.g., New York, NY">
              <mat-error *ngIf="jobForm.get('location')?.hasError('required')">
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
              <mat-error *ngIf="jobForm.get('employmentType')?.hasError('required')">
                Employment type is required
              </mat-error>
            </mat-form-field>

            <!-- Salary -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Salary (Annual)</mat-label>
              <input matInput type="number" formControlName="salary" placeholder="e.g., 75000">
              <span matPrefix>$&nbsp;</span>
              <mat-error *ngIf="jobForm.get('salary')?.hasError('min')">
                Salary must be greater than 0
              </mat-error>
            </mat-form-field>

            <!-- Deadline -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Application Deadline</mat-label>
              <input matInput [matDatepicker]="picker" formControlName="deadline">
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
              <mat-error *ngIf="jobForm.get('deadline')?.hasError('required')">
                Deadline is required
              </mat-error>
            </mat-form-field>

            <!-- Required Skills -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Required Skills</mat-label>
              <mat-chip-grid #chipGrid>
                <mat-chip-row *ngFor="let skill of requiredSkills" (removed)="removeSkill(skill)">
                  {{skill}}
                  <button matChipRemove>
                    <mat-icon>cancel</mat-icon>
                  </button>
                </mat-chip-row>
              </mat-chip-grid>
              <input placeholder="Add skills..."
                     [matChipInputFor]="chipGrid"
                     (matChipInputTokenEnd)="addSkill($event)">
            </mat-form-field>

            <!-- Form Actions -->
            <div class="form-actions">
              <button mat-button type="button" (click)="goBack()">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="jobForm.invalid || isSubmitting">
                <fa-icon [icon]="faSpinner" *ngIf="isSubmitting" animation="spin"></fa-icon>
                {{ isSubmitting ? 'Saving...' : (isEditMode ? 'Update Job' : 'Post Job') }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;3ab979c0a76f3e115b755ac9af332b7b08fd4a54add6b22117375f7d61fd0489;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/job-posting/job-posting.component.ts */\n.job-posting-container {\n  padding: 20px;\n}\n.job-posting-card {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.job-posting-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px 0;\n}\n.full-width {\n  width: 100%;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\nmat-form-field {\n  margin-bottom: 8px;\n}\n.mat-mdc-chip-input {\n  width: 100%;\n}\n/*# sourceMappingURL=job-posting.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: JobService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobPostingComponent, { className: "JobPostingComponent", filePath: "src/app/components/employer-components/job-posting/job-posting.component.ts", lineNumber: 170 });
})();
export {
  JobPostingComponent
};
//# sourceMappingURL=chunk-CMTDM33H.js.map
