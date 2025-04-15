import {
  MatDialog,
  MatDialogModule
} from "./chunk-X577FGJR.js";
import {
  MatSelectModule
} from "./chunk-2VSBSU4O.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-LXRKCGKC.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CR7B3LEX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-2XNMZTMP.js";
import "./chunk-LJRDQJQ7.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-QHY3LIYG.js";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-Y2XFKMC4.js";
import {
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
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-V4N7KRHG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-DJQE7C7B.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-ZTFMCIUB.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IAQJIRE2.js";

// src/app/job-seeker/components/skill-management/skill-management.component.ts
function SkillManagementComponent_mat_expansion_panel_41_div_7_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 29);
    \u0275\u0275text(1, "verified");
    \u0275\u0275elementEnd();
  }
}
function SkillManagementComponent_mat_expansion_panel_41_div_7_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function SkillManagementComponent_mat_expansion_panel_41_div_7_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const jobSkill_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.startSkillAssessment(jobSkill_r3));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Verify Skill ");
    \u0275\u0275elementEnd();
  }
}
function SkillManagementComponent_mat_expansion_panel_41_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275template(5, SkillManagementComponent_mat_expansion_panel_41_div_7_mat_icon_5_Template, 2, 0, "mat-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-chip-set")(10, "mat-chip");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 21);
    \u0275\u0275element(13, "mat-progress-bar", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23)(15, "span", 24)(16, "mat-icon");
    \u0275\u0275text(17, "recommend");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 25);
    \u0275\u0275template(20, SkillManagementComponent_mat_expansion_panel_41_div_7_button_20_Template, 4, 0, "button", 26);
    \u0275\u0275elementStart(21, "button", 27);
    \u0275\u0275listener("click", function SkillManagementComponent_mat_expansion_panel_41_div_7_Template_button_click_21_listener() {
      const jobSkill_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateSkill(jobSkill_r3));
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Update ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 28);
    \u0275\u0275listener("click", function SkillManagementComponent_mat_expansion_panel_41_div_7_Template_button_click_25_listener() {
      const jobSkill_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeSkill(jobSkill_r3));
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(28, "mat-divider");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jobSkill_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", jobSkill_r3.skill.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", jobSkill_r3.isVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", jobSkill_r3.yearsOfExperience, " years \xB7 Last used ", \u0275\u0275pipeBind1(8, 13, jobSkill_r3.lastUsedDate), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getProficiencyClass(jobSkill_r3.proficiencyLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getProficiencyLabel(jobSkill_r3.proficiencyLevel), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getProficiencyClass(jobSkill_r3.proficiencyLevel));
    \u0275\u0275property("value", jobSkill_r3.proficiencyLevel * 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r3.getEndorsementTooltip(jobSkill_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", jobSkill_r3.endorsements.length, " endorsements ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !jobSkill_r3.isVerified);
  }
}
function SkillManagementComponent_mat_expansion_panel_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel", 12)(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-panel-description");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275template(7, SkillManagementComponent_mat_expansion_panel_41_div_7_Template, 29, 15, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r5.skills.length, " skills ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", category_r5.skills);
  }
}
var SkillManagementComponent = class _SkillManagementComponent {
  dialog;
  skillCategories = [];
  constructor(dialog) {
    this.dialog = dialog;
  }
  ngOnInit() {
    this.loadSkills();
  }
  loadSkills() {
    this.skillCategories = [
      {
        name: "Programming Languages",
        skills: [
          {
            id: 1,
            skillId: 1,
            proficiencyLevel: 5,
            isVerified: true,
            yearsOfExperience: 5,
            lastUsedDate: /* @__PURE__ */ new Date(),
            skill: {
              id: 1,
              name: "TypeScript",
              category: "Programming Languages",
              description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
            },
            endorsements: [
              {
                id: 1,
                endorserId: 2,
                endorserName: "John Doe",
                endorsementDate: /* @__PURE__ */ new Date(),
                note: "Excellent TypeScript skills demonstrated in recent project"
              }
            ]
          }
          // Add more skills...
        ]
      }
      // Add more categories...
    ];
  }
  getTotalSkills() {
    return this.skillCategories.reduce((total, category) => total + category.skills.length, 0);
  }
  getVerifiedSkills() {
    return this.skillCategories.reduce((total, category) => total + category.skills.filter((skill) => skill.isVerified).length, 0);
  }
  getTotalEndorsements() {
    return this.skillCategories.reduce((total, category) => total + category.skills.reduce((sum, skill) => sum + skill.endorsements.length, 0), 0);
  }
  getAverageProficiency() {
    const totalSkills = this.getTotalSkills();
    if (totalSkills === 0)
      return 0;
    const sumProficiency = this.skillCategories.reduce((total, category) => total + category.skills.reduce((sum, skill) => sum + skill.proficiencyLevel, 0), 0);
    return sumProficiency / totalSkills;
  }
  getProficiencyClass(level) {
    if (level <= 1)
      return "beginner";
    if (level <= 2)
      return "intermediate";
    if (level <= 3)
      return "advanced";
    if (level <= 4)
      return "expert";
    return "master";
  }
  getProficiencyLabel(level) {
    if (level <= 1)
      return "Beginner";
    if (level <= 2)
      return "Intermediate";
    if (level <= 3)
      return "Advanced";
    if (level <= 4)
      return "Expert";
    return "Master";
  }
  getEndorsementTooltip(jobSkill) {
    if (jobSkill.endorsements.length === 0)
      return "No endorsements yet";
    return jobSkill.endorsements.map((e) => `${e.endorserName} - ${e.note || "Endorsed your skill"}`).join("\n");
  }
  openAddSkillDialog() {
  }
  startSkillAssessment(jobSkill) {
  }
  updateSkill(jobSkill) {
  }
  removeSkill(jobSkill) {
  }
  static \u0275fac = function SkillManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillManagementComponent)(\u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillManagementComponent, selectors: [["app-skill-management"]], decls: 42, vars: 8, consts: [[1, "skills-container"], [1, "header-card"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "skills-content"], [1, "assessment-card"], [1, "assessment-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "skills-grid"], ["class", "category-panel", 4, "ngFor", "ngForOf"], [1, "category-panel"], [1, "skill-list"], ["class", "skill-item", 4, "ngFor", "ngForOf"], [1, "skill-item"], [1, "skill-header"], [1, "skill-info"], [1, "skill-name"], ["matTooltip", "Verified Skill", "class", "verified-icon", 4, "ngIf"], [1, "skill-meta"], [1, "skill-progress"], ["mode", "determinate", 3, "value"], [1, "skill-details"], [1, "endorsements", 3, "matTooltip"], [1, "skill-actions"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matTooltip", "Verified Skill", 1, "verified-icon"], ["mat-button", "", "color", "primary", 3, "click"]], template: function SkillManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Skills Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Track and improve your professional skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-actions", 2)(8, "button", 3);
      \u0275\u0275listener("click", function SkillManagementComponent_Template_button_click_8_listener() {
        return ctx.openAddSkillDialog();
      });
      \u0275\u0275text(9, " Add New Skill ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 4)(11, "mat-card", 5)(12, "mat-card-header")(13, "mat-card-title");
      \u0275\u0275text(14, "Skill Assessment Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-card-subtitle");
      \u0275\u0275text(16, "Track your skill verification progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-card-content")(18, "div", 6)(19, "div", 7)(20, "div", 8);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9);
      \u0275\u0275text(23, "Total Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 8);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 9);
      \u0275\u0275text(28, "Verified Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 7)(30, "div", 8);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 9);
      \u0275\u0275text(33, "Endorsements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 7)(35, "div", 8);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 9);
      \u0275\u0275text(39, "Avg. Proficiency");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 10);
      \u0275\u0275template(41, SkillManagementComponent_mat_expansion_panel_41_Template, 8, 3, "mat-expansion-panel", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(ctx.getTotalSkills());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getVerifiedSkills());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getTotalEndorsements());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 5, ctx.getAverageProficiency(), "1.1-1"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.skillCategories);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    DecimalPipe,
    DatePipe,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatDividerModule,
    MatDivider,
    MatDialogModule,
    MatTooltipModule,
    MatTooltip,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ], styles: ["\n\n.skills-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.skills-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.assessment-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.assessment-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #1976d2;\n  margin-bottom: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n}\n.category-panel[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.skill-list[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.skill-item[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.skill-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.skill-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.skill-meta[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 4px;\n}\n.verified-icon[_ngcontent-%COMP%] {\n  color: #388e3c;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.skill-progress[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.skill-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 8px 0;\n}\n.endorsements[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n}\n.skill-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.beginner[_ngcontent-%COMP%] {\n  color: #fb8c00 !important;\n}\n.intermediate[_ngcontent-%COMP%] {\n  color: #1976d2 !important;\n}\n.advanced[_ngcontent-%COMP%] {\n  color: #388e3c !important;\n}\n.expert[_ngcontent-%COMP%] {\n  color: #7b1fa2 !important;\n}\n.master[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n/*# sourceMappingURL=skill-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillManagementComponent, { className: "SkillManagementComponent", filePath: "src/app/job-seeker/components/skill-management/skill-management.component.ts", lineNumber: 344 });
})();
export {
  SkillManagementComponent
};
//# sourceMappingURL=chunk-CZJVJPKQ.js.map
