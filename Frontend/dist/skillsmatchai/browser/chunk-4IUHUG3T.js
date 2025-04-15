import {
  MatGridList,
  MatGridListModule,
  MatGridTile
} from "./chunk-5PDDPM5W.js";
import "./chunk-OK2IM7QW.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5WW65WYF.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-E2EGRSM7.js";
import "./chunk-6JM4SM7P.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIconButton,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAQJIRE2.js";

// src/app/employer/components/templates/job-templates/job-templates.component.ts
function JobTemplatesComponent_mat_grid_tile_11_mat_chip_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r1, " ");
  }
}
function JobTemplatesComponent_mat_grid_tile_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-grid-tile")(1, "mat-card", 7)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-menu", null, 0)(11, "button", 10)(12, "span");
    \u0275\u0275text(13, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 10)(15, "span");
    \u0275\u0275text(16, "Duplicate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 11)(18, "span");
    \u0275\u0275text(19, "Delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "mat-card-content")(21, "mat-chip-set")(22, "mat-chip");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 12);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13)(27, "h4");
    \u0275\u0275text(28, "Required Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-chip-set");
    \u0275\u0275template(30, JobTemplatesComponent_mat_grid_tile_11_mat_chip_30_Template, 2, 1, "mat-chip", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p", 15);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-card-actions")(34, "button", 16);
    \u0275\u0275text(35, "Use Template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const template_r2 = ctx.$implicit;
    const menu_r3 = \u0275\u0275reference(10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(template_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r2.department);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(template_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r2.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", template_r2.skills);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Last used: ", template_r2.lastUsed, "");
  }
}
var JobTemplatesComponent = class _JobTemplatesComponent {
  jobTemplates = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      type: "Full-time",
      description: "We are looking for a software engineer with strong problem-solving skills and experience in modern web technologies.",
      skills: ["JavaScript", "TypeScript", "Angular", "Node.js"],
      lastUsed: "2024-02-15"
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      description: "Seeking a product designer to create intuitive and beautiful user experiences for our products.",
      skills: ["UI/UX", "Figma", "User Research", "Prototyping"],
      lastUsed: "2024-03-01"
    },
    {
      id: 3,
      title: "Marketing Manager",
      department: "Marketing",
      type: "Full-time",
      description: "Looking for an experienced marketing manager to lead our digital marketing initiatives.",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      lastUsed: "2024-03-10"
    },
    {
      id: 4,
      title: "Sales Representative",
      department: "Sales",
      type: "Full-time",
      description: "Join our sales team to help drive business growth and build strong client relationships.",
      skills: ["B2B Sales", "Negotiation", "CRM", "Lead Generation"],
      lastUsed: "2024-02-28"
    }
  ];
  static \u0275fac = function JobTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobTemplatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobTemplatesComponent, selectors: [["app-job-templates"]], decls: 12, vars: 1, consts: [["menu", "matMenu"], [1, "templates-container"], [1, "header-card"], ["align", "end"], ["mat-raised-button", "", "color", "primary"], ["cols", "2", "rowHeight", "400px", "gutterSize", "20px"], [4, "ngFor", "ngForOf"], [1, "template-card"], ["mat-icon-button", "", 1, "more-button", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", ""], ["mat-menu-item", "", "color", "warn"], [1, "description"], [1, "skills-section"], ["color", "primary", "selected", "", 4, "ngFor", "ngForOf"], [1, "last-used"], ["mat-button", "", "color", "primary"], ["color", "primary", "selected", ""]], template: function JobTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Job Templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Create and manage reusable job templates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-actions", 3)(8, "button", 4);
      \u0275\u0275text(9, "New Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "mat-grid-list", 5);
      \u0275\u0275template(11, JobTemplatesComponent_mat_grid_tile_11_Template, 36, 7, "mat-grid-tile", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.jobTemplates);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatGridListModule,
    MatGridList,
    MatGridTile,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ], styles: ["\n\n.templates-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.template-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 10px;\n  position: relative;\n}\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  color: rgba(0, 0, 0, 0.87);\n  height: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n.skills-section[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.skills-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.last-used[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.mat-chip-set[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\nmat-chip[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n/*# sourceMappingURL=job-templates.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobTemplatesComponent, { className: "JobTemplatesComponent", filePath: "src/app/employer/components/templates/job-templates/job-templates.component.ts", lineNumber: 166 });
})();
export {
  JobTemplatesComponent
};
//# sourceMappingURL=chunk-4IUHUG3T.js.map
