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
  MatCardSubtitle,
  MatCardTitle,
  MatError,
  MatFormField,
  MatLabel,
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
  faBriefcase,
  faCalendarAlt,
  faDollarSign,
  faMapMarkerAlt,
  faSave,
  faSpinner,
  faTag,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/edit-job/edit-job.component.ts
function EditJobComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job title is required ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Job description is required ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Location is required ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Employment type is required ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Salary must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Deadline is required ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_mat_chip_row_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 28);
    \u0275\u0275listener("removed", function EditJobComponent_mat_chip_row_61_Template_mat_chip_row_removed_0_listener() {
      const skill_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSkill(skill_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275element(3, "fa-icon", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r3.faTimes);
  }
}
function EditJobComponent_fa_icon_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 30);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r3.faSpinner);
  }
}
function EditJobComponent_fa_icon_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 24);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r3.faSave);
  }
}
var EditJobComponent = class _EditJobComponent {
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
  // Font Awesome icons
  faSpinner = faSpinner;
  faSave = faSave;
  faTimes = faTimes;
  faMapMarkerAlt = faMapMarkerAlt;
  faBriefcase = faBriefcase;
  faDollarSign = faDollarSign;
  faCalendarAlt = faCalendarAlt;
  faTag = faTag;
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
        this.snackBar.open(`Job ${this.isEditMode ? "updated" : "created"} successfully`, "Close", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(["/employer/jobs-posted"]);
      },
      error: (error) => {
        console.error("Error saving job:", error);
        this.snackBar.open(error.error?.message || `Failed to ${this.isEditMode ? "update" : "create"} job`, "Close", {
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
  static \u0275fac = function EditJobComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditJobComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditJobComponent, selectors: [["app-edit-job"]], decls: 72, vars: 23, consts: [["picker", ""], ["chipGrid", ""], [1, "edit-job-container"], [1, "edit-job-card"], [1, "edit-job-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title", "placeholder", "e.g., Senior Software Engineer"], [4, "ngIf"], ["matInput", "", "formControlName", "description", "rows", "6", "placeholder", "Describe the role, responsibilities, and requirements..."], ["matInput", "", "formControlName", "location", "placeholder", "e.g., New York, NY"], [1, "field-icon", 3, "icon"], ["formControlName", "employmentType"], ["value", "Full-time"], ["value", "Part-time"], ["value", "Contract"], ["value", "Temporary"], ["value", "Internship"], ["matInput", "", "type", "number", "formControlName", "salary", "placeholder", "e.g., 75000"], ["matInput", "", "formControlName", "deadline", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add skills...", 3, "matChipInputTokenEnd", "matChipInputFor"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], [3, "icon"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["animation", "spin", 3, "icon", 4, "ngIf"], [3, "icon", 4, "ngIf"], [3, "removed"], ["matChipRemove", ""], ["animation", "spin", 3, "icon"]], template: function EditJobComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 4);
      \u0275\u0275listener("ngSubmit", function EditJobComponent_Template_form_ngSubmit_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(9, "mat-form-field", 5)(10, "mat-label");
      \u0275\u0275text(11, "Job Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 6);
      \u0275\u0275template(13, EditJobComponent_mat_error_13_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field", 5)(15, "mat-label");
      \u0275\u0275text(16, "Job Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "textarea", 8);
      \u0275\u0275template(18, EditJobComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 5)(20, "mat-label");
      \u0275\u0275text(21, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 9)(23, "fa-icon", 10);
      \u0275\u0275template(24, EditJobComponent_mat_error_24_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-form-field", 5)(26, "mat-label");
      \u0275\u0275text(27, "Employment Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-select", 11)(29, "mat-option", 12);
      \u0275\u0275text(30, "Full-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-option", 13);
      \u0275\u0275text(32, "Part-time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-option", 14);
      \u0275\u0275text(34, "Contract");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-option", 15);
      \u0275\u0275text(36, "Temporary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 16);
      \u0275\u0275text(38, "Internship");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "fa-icon", 10);
      \u0275\u0275template(40, EditJobComponent_mat_error_40_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-form-field", 5)(42, "mat-label");
      \u0275\u0275text(43, "Salary (Annual)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 17)(45, "fa-icon", 10);
      \u0275\u0275template(46, EditJobComponent_mat_error_46_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-form-field", 5)(48, "mat-label");
      \u0275\u0275text(49, "Application Deadline");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 18)(51, "mat-datepicker-toggle", 19)(52, "mat-datepicker", null, 0)(54, "fa-icon", 10);
      \u0275\u0275template(55, EditJobComponent_mat_error_55_Template, 2, 0, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-form-field", 5)(57, "mat-label");
      \u0275\u0275text(58, "Required Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-chip-grid", null, 1);
      \u0275\u0275template(61, EditJobComponent_mat_chip_row_61_Template, 4, 2, "mat-chip-row", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 21);
      \u0275\u0275listener("matChipInputTokenEnd", function EditJobComponent_Template_input_matChipInputTokenEnd_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addSkill($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "fa-icon", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 22)(65, "button", 23);
      \u0275\u0275listener("click", function EditJobComponent_Template_button_click_65_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275element(66, "fa-icon", 24);
      \u0275\u0275text(67, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 25);
      \u0275\u0275template(69, EditJobComponent_fa_icon_69_Template, 1, 1, "fa-icon", 26)(70, EditJobComponent_fa_icon_70_Template, 1, 1, "fa-icon", 27);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_8_0;
      let tmp_10_0;
      let tmp_12_0;
      let tmp_16_0;
      const picker_r5 = \u0275\u0275reference(53);
      const chipGrid_r6 = \u0275\u0275reference(60);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Job" : "Create New Job");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update the job details below" : "Fill in the job details below", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.jobForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.jobForm.get("title")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.jobForm.get("description")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("icon", ctx.faMapMarkerAlt);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_8_0 = ctx.jobForm.get("location")) == null ? null : tmp_8_0.hasError("required"));
      \u0275\u0275advance(15);
      \u0275\u0275property("icon", ctx.faBriefcase);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.jobForm.get("employmentType")) == null ? null : tmp_10_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("icon", ctx.faDollarSign);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_12_0 = ctx.jobForm.get("salary")) == null ? null : tmp_12_0.hasError("min"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matDatepicker", picker_r5);
      \u0275\u0275advance();
      \u0275\u0275property("for", picker_r5);
      \u0275\u0275advance(3);
      \u0275\u0275property("icon", ctx.faCalendarAlt);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_16_0 = ctx.jobForm.get("deadline")) == null ? null : tmp_16_0.hasError("required"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.requiredSkills);
      \u0275\u0275advance();
      \u0275\u0275property("matChipInputFor", chipGrid_r6);
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faTag);
      \u0275\u0275advance(3);
      \u0275\u0275property("icon", ctx.faTimes);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.jobForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Saving..." : ctx.isEditMode ? "Update Job" : "Create Job", " ");
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
  ], styles: ["\n\n.edit-job-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.edit-job-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.edit-job-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mat-mdc-chip-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=edit-job.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditJobComponent, [{
    type: Component,
    args: [{ selector: "app-edit-job", standalone: true, imports: [
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
    <div class="edit-job-container">
      <mat-card class="edit-job-card">
        <mat-card-header>
          <mat-card-title>{{ isEditMode ? 'Edit Job' : 'Create New Job' }}</mat-card-title>
          <mat-card-subtitle>
            {{ isEditMode ? 'Update the job details below' : 'Fill in the job details below' }}
          </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="jobForm" (ngSubmit)="onSubmit()" class="edit-job-form">
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
              <fa-icon [icon]="faMapMarkerAlt" class="field-icon"></fa-icon>
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
              <fa-icon [icon]="faBriefcase" class="field-icon"></fa-icon>
              <mat-error *ngIf="jobForm.get('employmentType')?.hasError('required')">
                Employment type is required
              </mat-error>
            </mat-form-field>

            <!-- Salary -->
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Salary (Annual)</mat-label>
              <input matInput type="number" formControlName="salary" placeholder="e.g., 75000">
              <fa-icon [icon]="faDollarSign" class="field-icon"></fa-icon>
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
              <fa-icon [icon]="faCalendarAlt" class="field-icon"></fa-icon>
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
                    <fa-icon [icon]="faTimes"></fa-icon>
                  </button>
                </mat-chip-row>
              </mat-chip-grid>
              <input placeholder="Add skills..."
                     [matChipInputFor]="chipGrid"
                     (matChipInputTokenEnd)="addSkill($event)">
              <fa-icon [icon]="faTag" class="field-icon"></fa-icon>
            </mat-form-field>

            <!-- Form Actions -->
            <div class="form-actions">
              <button mat-button type="button" (click)="goBack()">
                <fa-icon [icon]="faTimes"></fa-icon>
                Cancel
              </button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="jobForm.invalid || isSubmitting">
                <fa-icon [icon]="faSpinner" *ngIf="isSubmitting" animation="spin"></fa-icon>
                <fa-icon [icon]="faSave" *ngIf="!isSubmitting"></fa-icon>
                {{ isSubmitting ? 'Saving...' : (isEditMode ? 'Update Job' : 'Create Job') }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;68ce5ad83ae838a591d4a73c4c2709789ca52b6c7086a1b1786b4d5852b0cad0;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/edit-job/edit-job.component.ts */\n.edit-job-container {\n  padding: 20px;\n}\n.edit-job-card {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.edit-job-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px 0;\n}\n.full-width {\n  width: 100%;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 24px;\n}\n.field-icon {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n}\nmat-form-field {\n  margin-bottom: 8px;\n}\n.mat-mdc-chip-input {\n  width: 100%;\n}\nbutton fa-icon {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=edit-job.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: JobService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditJobComponent, { className: "EditJobComponent", filePath: "src/app/components/employer-components/edit-job/edit-job.component.ts", lineNumber: 201 });
})();
export {
  EditJobComponent
};
//# sourceMappingURL=chunk-ZFYXPBJG.js.map
