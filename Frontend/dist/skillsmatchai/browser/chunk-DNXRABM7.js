import {
  MatGridListModule
} from "./chunk-Q4A5QHK5.js";
import "./chunk-WO6AJLKG.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-QJ7WF3FG.js";
import {
  MatBadgeModule
} from "./chunk-MFJU2DX3.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-3QCHWOEP.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PFNPEZPC.js";
import "./chunk-2CZVWUUL.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import "./chunk-255VWD3Z.js";
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
  NgClass,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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
} from "./chunk-NJVFXHEQ.js";

// src/app/employer/components/templates/job-templates/job-templates.component.ts
function JobTemplatesComponent_mat_card_38_mat_chip_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r2, " ");
  }
}
function JobTemplatesComponent_mat_card_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "mat-card-header")(3, "div", 21)(4, "mat-card-title");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card-subtitle");
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275element(10, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-menu", 25, 1)(13, "button", 16);
    \u0275\u0275element(14, "i", 26);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 16);
    \u0275\u0275element(18, "i", 27);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Duplicate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "mat-divider");
    \u0275\u0275elementStart(22, "button", 28);
    \u0275\u0275element(23, "i", 29);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "mat-card-content")(27, "div", 30)(28, "mat-chip", 31);
    \u0275\u0275element(29, "i", 32);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p", 33);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 34)(34, "h4", 35);
    \u0275\u0275element(35, "i", 36);
    \u0275\u0275text(36, " Required Skills ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-chip-set", 37);
    \u0275\u0275template(38, JobTemplatesComponent_mat_card_38_mat_chip_38_Template, 2, 1, "mat-chip", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(39, "mat-divider");
    \u0275\u0275elementStart(40, "mat-card-actions")(41, "div", 39)(42, "span", 40);
    \u0275\u0275element(43, "i", 41);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 42);
    \u0275\u0275element(46, "i", 43);
    \u0275\u0275text(47, " Use Template ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const template_r3 = ctx.$implicit;
    const actionMenu_r4 = \u0275\u0275reference(12);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.getDepartmentClass(template_r3.department));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(template_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", template_r3.department, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionMenu_r4);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngClass", ctx_r4.getJobTypeClass(template_r3.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.getJobTypeIcon(template_r3.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r3.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r3.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", template_r3.skills);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Last used: ", ctx_r4.formatDate(template_r3.lastUsed), " ");
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
  getDepartmentClass(department) {
    return department.toLowerCase();
  }
  getJobTypeClass(type) {
    return type.toLowerCase().replace("-", "");
  }
  getJobTypeIcon(type) {
    switch (type.toLowerCase()) {
      case "full-time":
        return "fa-briefcase";
      case "part-time":
        return "fa-clock";
      case "contract":
        return "fa-file-contract";
      default:
        return "fa-briefcase";
    }
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  createNewTemplate() {
    console.log("Creating new template");
  }
  static \u0275fac = function JobTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobTemplatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobTemplatesComponent, selectors: [["app-job-templates"]], decls: 39, vars: 2, consts: [["sortMenu", "matMenu"], ["actionMenu", "matMenu"], [1, "templates-container"], [1, "page-header"], [1, "header-content"], [1, "header-title"], [1, "header-subtitle"], ["mat-raised-button", "", 1, "new-template-btn", 3, "click"], [1, "fas", "fa-plus"], [1, "template-filters"], [1, "filter-chips"], [1, "filter-chip", "active"], [1, "filter-chip"], [1, "sort-filter"], ["mat-button", "", 1, "sort-button", 3, "matMenuTriggerFor"], [1, "fas", "fa-sort"], ["mat-menu-item", ""], [1, "templates-grid"], ["class", "template-card", 4, "ngFor", "ngForOf"], [1, "template-card"], [1, "card-header-stripe", 3, "ngClass"], [1, "template-info"], [1, "fas", "fa-users", "department-icon"], ["mat-icon-button", "", "matTooltip", "More Options", 1, "more-options-btn", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], [1, "template-actions-menu"], [1, "fas", "fa-edit"], [1, "fas", "fa-copy"], ["mat-menu-item", "", 1, "delete-option"], [1, "fas", "fa-trash"], [1, "job-type-indicator"], [1, "job-type-chip", 3, "ngClass"], [1, "fas", 3, "ngClass"], [1, "description"], [1, "skills-section"], [1, "section-title"], [1, "fas", "fa-star", "section-icon"], [1, "skills-chips"], ["class", "skill-chip", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "last-used"], [1, "fas", "fa-clock", "timestamp-icon"], ["mat-flat-button", "", 1, "use-template-btn"], [1, "fas", "fa-file-alt"], [1, "skill-chip"]], template: function JobTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
      \u0275\u0275text(4, "Job Templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 6);
      \u0275\u0275text(6, "Create and manage reusable job templates for consistent hiring");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function JobTemplatesComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createNewTemplate());
      });
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275text(9, " New Template ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "mat-chip-set")(13, "mat-chip", 11);
      \u0275\u0275text(14, "All Templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-chip", 12);
      \u0275\u0275text(16, "Recently Used");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-chip", 12);
      \u0275\u0275text(18, "Engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-chip", 12);
      \u0275\u0275text(20, "Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-chip", 12);
      \u0275\u0275text(22, "Marketing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 13)(24, "button", 14);
      \u0275\u0275element(25, "i", 15);
      \u0275\u0275text(26, " Sort By ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-menu", null, 0)(29, "button", 16);
      \u0275\u0275text(30, "Name (A-Z)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 16);
      \u0275\u0275text(32, "Name (Z-A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 16);
      \u0275\u0275text(34, "Recent First");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 16);
      \u0275\u0275text(36, "Oldest First");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 17);
      \u0275\u0275template(38, JobTemplatesComponent_mat_card_38_Template, 48, 10, "mat-card", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const sortMenu_r6 = \u0275\u0275reference(28);
      \u0275\u0275advance(24);
      \u0275\u0275property("matMenuTriggerFor", sortMenu_r6);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.jobTemplates);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
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
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatGridListModule,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDividerModule,
    MatDivider,
    MatTooltipModule,
    MatTooltip,
    MatBadgeModule
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --primary-green: #2e7d32;\n  --light-green: #4caf50;\n  --pale-green: #e8f5e9;\n  --blue-accent: #0288d1;\n  --teal-accent: #009688;\n  --purple-accent: #7b1fa2;\n  --orange-accent: #f57c00;\n  --dark-text: #263238;\n  --medium-text: #546e7a;\n  --light-text: #78909c;\n  --card-bg: #ffffff;\n  --hover-bg: #f5f9f5;\n  --divider: #e0f2f1;\n}\n.templates-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n  font-family: "Roboto", sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--divider);\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: var(--dark-text);\n  margin: 0 0 8px 0;\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--medium-text);\n  margin: 0;\n}\n.new-template-btn[_ngcontent-%COMP%] {\n  background-color: var(--primary-green);\n  color: white;\n  border-radius: 24px;\n  padding: 0 24px;\n  height: 48px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.2s ease;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);\n}\n.new-template-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--teal-accent);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.new-template-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.template-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.filter-chips[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-bottom: 4px;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  background-color: #f1f3f4;\n  color: var(--medium-text);\n  font-weight: 500;\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background-color: var(--pale-green);\n  color: var(--primary-green);\n  border: 1px solid var(--light-green);\n}\n.sort-button[_ngcontent-%COMP%] {\n  color: var(--medium-text);\n}\n.sort-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.templates-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n}\n.template-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.template-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.card-header-stripe[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 100%;\n}\n.card-header-stripe.engineering[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--teal-accent),\n      var(--blue-accent));\n}\n.card-header-stripe.design[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--purple-accent),\n      #9c27b0);\n}\n.card-header-stripe.marketing[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--orange-accent),\n      #ff9800);\n}\n.card-header-stripe.sales[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue-accent),\n      #03a9f4);\n}\nmat-card-header[_ngcontent-%COMP%] {\n  padding: 16px 16px 8px;\n  display: flex;\n  justify-content: space-between;\n}\n.template-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--dark-text);\n  margin-bottom: 4px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--medium-text);\n  font-size: 14px;\n}\n.department-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  opacity: 0.8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.more-options-btn[_ngcontent-%COMP%] {\n  color: var(--medium-text);\n}\n.more-options-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n  flex: 1;\n}\n.job-type-indicator[_ngcontent-%COMP%] {\n  margin: 8px 0 16px;\n}\n.job-type-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 24px;\n  padding: 0 12px;\n}\n.job-type-chip.full-time[_ngcontent-%COMP%] {\n  background-color: rgba(46, 125, 50, 0.1);\n  color: var(--primary-green);\n}\n.job-type-chip.part-time[_ngcontent-%COMP%] {\n  background-color: rgba(2, 136, 209, 0.1);\n  color: var(--blue-accent);\n}\n.job-type-chip.contract[_ngcontent-%COMP%] {\n  background-color: rgba(245, 124, 0, 0.1);\n  color: var(--orange-accent);\n}\n.job-type-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  color: var(--dark-text);\n  font-size: 14px;\n  line-height: 1.5;\n  height: 84px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n.skills-section[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--dark-text);\n  margin-bottom: 12px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 6px;\n  color: var(--teal-accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.skills-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  margin: 4px;\n  background-color: rgba(0, 150, 136, 0.1);\n  color: var(--teal-accent);\n  font-size: 12px;\n  height: 24px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.last-used[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: var(--medium-text);\n}\n.timestamp-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-right: 6px;\n  color: var(--medium-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.use-template-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--teal-accent);\n  font-weight: 500;\n  border: 1px solid var(--teal-accent);\n  transition: all 0.2s ease;\n}\n.use-template-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 150, 136, 0.1);\n}\n.use-template-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.delete-option[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.template-actions-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.template-actions-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .templates-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .new-template-btn[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100%;\n  }\n  .template-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filter-chips[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    width: 100%;\n  }\n  .sort-filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .sort-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .templates-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=job-templates.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobTemplatesComponent, { className: "JobTemplatesComponent", filePath: "src/app/employer/components/templates/job-templates/job-templates.component.ts", lineNumber: 557 });
})();
export {
  JobTemplatesComponent
};
//# sourceMappingURL=chunk-DNXRABM7.js.map
