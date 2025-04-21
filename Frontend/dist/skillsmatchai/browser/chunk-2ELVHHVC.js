import {
  MatInputModule
} from "./chunk-3DCVMGSB.js";
import "./chunk-VAADXG4L.js";
import {
  MatFormFieldModule
} from "./chunk-GPGOCT2X.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-DCF6DFJ3.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import {
  MatIconModule
} from "./chunk-MI43YKTU.js";
import "./chunk-2LWENGE2.js";
import {
  FormsModule
} from "./chunk-LSJFNPXS.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-UOKCMW7L.js";

// src/app/employer/components/company-profile/company-profile.component.ts
var CompanyProfileComponent = class _CompanyProfileComponent {
  static \u0275fac = function CompanyProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyProfileComponent, selectors: [["app-company-profile"]], decls: 94, vars: 1, consts: [[1, "profile-container"], [1, "profile-card"], [1, "header-content"], [1, "fas", "fa-building", "header-icon"], [1, "header-text"], [1, "profile-section"], [1, "section-header"], ["mat-button", "", "color", "primary", 1, "edit-button"], [1, "fas", "fa-edit"], [1, "info-grid"], [1, "info-item"], [1, "info-item", "full-width"], [1, "social-links"], ["href", "#", 1, "social-link"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook"], [1, "fab", "fa-instagram"]], template: function CompanyProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "div", 2);
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "mat-card-title");
      \u0275\u0275text(7, "Company Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-card-subtitle");
      \u0275\u0275text(9, "Manage your company information and settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "mat-card-content")(11, "div", 5)(12, "div", 6)(13, "h3");
      \u0275\u0275text(14, "Company Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275element(16, "i", 8);
      \u0275\u0275text(17, " Edit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "label");
      \u0275\u0275text(21, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Tech Solutions Inc.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 10)(25, "label");
      \u0275\u0275text(26, "Industry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Information Technology");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 10)(30, "label");
      \u0275\u0275text(31, "Company Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "100-500 employees");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 10)(35, "label");
      \u0275\u0275text(36, "Founded");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "2010");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 11)(40, "label");
      \u0275\u0275text(41, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Tech Solutions Inc. is a leading provider of innovative software solutions and IT services. We specialize in developing cutting-edge technologies that help businesses transform and grow in the digital age.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(44, "mat-divider");
      \u0275\u0275elementStart(45, "div", 5)(46, "div", 6)(47, "h3");
      \u0275\u0275text(48, "Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 7);
      \u0275\u0275element(50, "i", 8);
      \u0275\u0275text(51, " Edit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 9)(53, "div", 10)(54, "label");
      \u0275\u0275text(55, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "contact@techsolutions.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 10)(59, "label");
      \u0275\u0275text(60, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "+1 (555) 123-4567");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 10)(64, "label");
      \u0275\u0275text(65, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, "www.techsolutions.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 11)(69, "label");
      \u0275\u0275text(70, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p");
      \u0275\u0275text(72, "123 Tech Street, Silicon Valley, CA 94025, United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(73, "mat-divider");
      \u0275\u0275elementStart(74, "div", 5)(75, "div", 6)(76, "h3");
      \u0275\u0275text(77, "Social Media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 7);
      \u0275\u0275element(79, "i", 8);
      \u0275\u0275text(80, " Edit ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 12)(82, "a", 13);
      \u0275\u0275element(83, "i", 14);
      \u0275\u0275text(84, " LinkedIn ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 13);
      \u0275\u0275element(86, "i", 15);
      \u0275\u0275text(87, " Twitter ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "a", 13);
      \u0275\u0275element(89, "i", 16);
      \u0275\u0275text(90, " Facebook ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "a", 13);
      \u0275\u0275element(92, "i", 17);
      \u0275\u0275text(93, " Instagram ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeIn", void 0);
    }
  }, dependencies: [
    CommonModule,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatDividerModule,
    MatDivider,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ], styles: ["\n\n.profile-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 0;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--primary);\n}\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.profile-section[_ngcontent-%COMP%] {\n  padding: 24px 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.edit-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.info-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--background-light);\n  border-radius: 8px;\n  color: var(--text-primary);\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  background: var(--accent-light);\n  transform: translateY(-2px);\n}\n.social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n/*# sourceMappingURL=company-profile.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("300ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyProfileComponent, { className: "CompanyProfileComponent", filePath: "src/app/employer/components/company-profile/company-profile.component.ts", lineNumber: 258 });
})();
export {
  CompanyProfileComponent
};
//# sourceMappingURL=chunk-2ELVHHVC.js.map
