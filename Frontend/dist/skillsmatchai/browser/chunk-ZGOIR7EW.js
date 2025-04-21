import {
  MatListModule
} from "./chunk-UJ4FTC47.js";
import "./chunk-56ZLA7LI.js";
import "./chunk-YKUVITQE.js";
import "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  CommonModule,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIconButton,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UOKCMW7L.js";

// src/app/job-seeker/components/learning/learning-resources.component.ts
function LearningResourcesComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9);
    \u0275\u0275element(9, "i");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "i", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275element(15, "i", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const resource_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(resource_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("fas fa-", resource_r1.type === "course" ? "book" : resource_r1.type === "article" ? "file-alt" : "video", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", resource_r1.type, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", resource_r1.duration, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", resource_r1.level, " ");
  }
}
var LearningResourcesComponent = class _LearningResourcesComponent {
  resources = [
    {
      title: "Angular Fundamentals",
      description: "Learn the basics of Angular framework",
      type: "course",
      duration: "4 hours",
      level: "beginner"
    },
    {
      title: "Advanced TypeScript",
      description: "Deep dive into TypeScript features",
      type: "course",
      duration: "6 hours",
      level: "advanced"
    },
    {
      title: "Best Practices in Web Development",
      description: "Industry standards and best practices",
      type: "article",
      duration: "30 min",
      level: "intermediate"
    }
  ];
  static \u0275fac = function LearningResourcesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LearningResourcesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearningResourcesComponent, selectors: [["app-learning-resources"]], decls: 10, vars: 1, consts: [[1, "learning-container"], [1, "resources-list"], ["class", "resource-card", 4, "ngFor", "ngForOf"], [1, "resource-card"], [1, "resource-content"], [1, "resource-main"], [1, "resource-title"], [1, "resource-description"], [1, "resource-details"], [1, "resource-type"], [1, "resource-duration"], [1, "fas", "fa-clock"], [1, "resource-level"], [1, "fas", "fa-signal"], ["mat-icon-button", "", "color", "primary"], [1, "fas", "fa-play-circle"]], template: function LearningResourcesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Learning Resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Enhance your skills and knowledge");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 1);
      \u0275\u0275template(9, LearningResourcesComponent_mat_card_9_Template, 19, 8, "mat-card", 2);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.resources);
    }
  }, dependencies: [CommonModule, NgForOf, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatButtonModule, MatIconButton, MatListModule], styles: ["\n\n.learning-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.resources-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.resource-card[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.resource-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.resource-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 16px;\n  padding: 16px;\n}\n.resource-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resource-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n.resource-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.resource-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  min-width: 300px;\n}\n.resource-type[_ngcontent-%COMP%], \n.resource-duration[_ngcontent-%COMP%], \n.resource-level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\nmat-icon-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=learning-resources.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearningResourcesComponent, { className: "LearningResourcesComponent", filePath: "src/app/job-seeker/components/learning/learning-resources.component.ts", lineNumber: 136 });
})();
export {
  LearningResourcesComponent
};
//# sourceMappingURL=chunk-ZGOIR7EW.js.map
