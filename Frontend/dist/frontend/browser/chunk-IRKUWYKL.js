import {
  ChatbotService
} from "./chunk-CPMA7HRA.js";
import {
  MatProgressSpinnerModule
} from "./chunk-D357AIHJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5QZTZ3GT.js";
import {
  MatIconModule
} from "./chunk-LH77XFOL.js";
import "./chunk-42HARFSR.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-LGNT6V3W.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FaIconComponent,
  FontAwesomeModule,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatFormField,
  MatLabel,
  MatSnackBar,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  faBriefcase,
  faGraduationCap,
  faLocationDot,
  faSearch,
  faSpinner,
  faStar,
  faUser,
  setClassMetadata,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IDO4PSKF.js";

// src/app/components/employer-components/ai-recommendations/ai-recommendations.component.ts
function AIRecommendationsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "fa-icon", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Finding the perfect candidates...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faSpinner);
  }
}
function AIRecommendationsComponent_div_17_mat_card_7_mat_chip_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function AIRecommendationsComponent_div_17_mat_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275element(3, "fa-icon", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "div", 18)(7, "div", 19);
    \u0275\u0275element(8, "fa-icon", 6);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275element(12, "fa-icon", 6);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 20)(16, "h4");
    \u0275\u0275text(17, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 21);
    \u0275\u0275template(19, AIRecommendationsComponent_div_17_mat_card_7_mat_chip_19_Template, 2, 1, "mat-chip", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "mat-card-actions")(21, "button", 23);
    \u0275\u0275listener("click", function AIRecommendationsComponent_div_17_mat_card_7_Template_button_click_21_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewCandidateProfile(candidate_r4.id));
    });
    \u0275\u0275text(22, " View Profile ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r0.faUser);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r4.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r0.faBriefcase);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", candidate_r4.experienceCount, " years experience");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.faGraduationCap);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r4.education[0]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", candidate_r4.skills);
  }
}
function AIRecommendationsComponent_div_17_div_8_mat_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Skills: ", ctx_r0.queryResponse.filters.skills, " ");
  }
}
function AIRecommendationsComponent_div_17_div_8_mat_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Min Experience: ", ctx_r0.queryResponse.filters.minExperience, " years ");
  }
}
function AIRecommendationsComponent_div_17_div_8_mat_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Education: ", ctx_r0.queryResponse.filters.educationLevel, " ");
  }
}
function AIRecommendationsComponent_div_17_div_8_mat_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Location: ", ctx_r0.queryResponse.filters.location, " ");
  }
}
function AIRecommendationsComponent_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h3");
    \u0275\u0275text(2, "Applied Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275template(4, AIRecommendationsComponent_div_17_div_8_mat_chip_4_Template, 2, 1, "mat-chip", 26)(5, AIRecommendationsComponent_div_17_div_8_mat_chip_5_Template, 2, 1, "mat-chip", 26)(6, AIRecommendationsComponent_div_17_div_8_mat_chip_6_Template, 2, 1, "mat-chip", 26)(7, AIRecommendationsComponent_div_17_div_8_mat_chip_7_Template, 2, 1, "mat-chip", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.queryResponse.filters.skills == null ? null : ctx_r0.queryResponse.filters.skills.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.queryResponse.filters.minExperience);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.queryResponse.filters.educationLevel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.queryResponse.filters.location);
  }
}
function AIRecommendationsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h3");
    \u0275\u0275text(3, "AI Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275template(7, AIRecommendationsComponent_div_17_mat_card_7_Template, 23, 7, "mat-card", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AIRecommendationsComponent_div_17_div_8_Template, 8, 4, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.queryResponse.summary);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.queryResponse.candidates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.queryResponse.filters);
  }
}
function AIRecommendationsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3");
    \u0275\u0275text(2, "Start Your Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Describe the type of candidate you're looking for, and our AI will help you find the perfect match.");
    \u0275\u0275elementEnd()();
  }
}
var AIRecommendationsComponent = class _AIRecommendationsComponent {
  chatbotService;
  snackBar;
  searchQuery = "";
  isLoading = false;
  queryResponse = null;
  // Font Awesome icons
  faSpinner = faSpinner;
  faSearch = faSearch;
  faUser = faUser;
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;
  faStar = faStar;
  constructor(chatbotService, snackBar) {
    this.chatbotService = chatbotService;
    this.snackBar = snackBar;
  }
  ngOnInit() {
  }
  searchCandidates() {
    if (!this.searchQuery.trim())
      return;
    this.isLoading = true;
    this.queryResponse = null;
    this.chatbotService.queryCandidates(this.searchQuery).subscribe({
      next: (response) => {
        this.queryResponse = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error searching candidates:", error);
        this.snackBar.open(error.error?.message || "Failed to search candidates. Please try again.", "Close", {
          duration: 5e3,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.isLoading = false;
      }
    });
  }
  viewCandidateProfile(candidateId) {
    console.log("View profile for candidate:", candidateId);
  }
  static \u0275fac = function AIRecommendationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIRecommendationsComponent)(\u0275\u0275directiveInject(ChatbotService), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIRecommendationsComponent, selectors: [["app-ai-recommendations"]], decls: 19, vars: 6, consts: [[1, "ai-recommendations-container"], [1, "search-card"], [1, "search-section"], [1, "search-input"], ["matInput", "", "placeholder", "e.g., 'Find me a senior React developer with 5+ years of experience'", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [3, "icon"], ["class", "loading-container", 4, "ngIf"], ["class", "results-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-container"], ["animation", "spin", "size", "2x", 3, "icon"], [1, "results-section"], [1, "summary-section"], [1, "candidates-grid"], ["class", "candidate-card", 4, "ngFor", "ngForOf"], ["class", "filters-section", 4, "ngIf"], [1, "candidate-card"], [1, "candidate-details"], [1, "detail-item"], [1, "skills-section"], [1, "skills-list"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [1, "filters-section"], [1, "filters-list"], [4, "ngIf"], [1, "empty-state"]], template: function AIRecommendationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "AI Candidate Recommendations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, " Use natural language to find the perfect candidates for your job ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 2)(9, "mat-form-field", 3)(10, "mat-label");
      \u0275\u0275text(11, "Describe your ideal candidate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AIRecommendationsComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function AIRecommendationsComponent_Template_input_keyup_enter_12_listener() {
        return ctx.searchCandidates();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function AIRecommendationsComponent_Template_button_click_13_listener() {
        return ctx.searchCandidates();
      });
      \u0275\u0275element(14, "fa-icon", 6);
      \u0275\u0275text(15, " Search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, AIRecommendationsComponent_div_16_Template, 4, 1, "div", 7)(17, AIRecommendationsComponent_div_17_Template, 9, 3, "div", 8)(18, AIRecommendationsComponent_div_18_Template, 5, 0, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || !ctx.searchQuery.trim());
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faSearch);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.queryResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.queryResponse);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButtonModule,
    MatButton,
    MatChipsModule,
    MatChip,
    MatIconModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.ai-recommendations-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.search-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.search-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  gap: 16px;\n}\n.results-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.summary-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.candidates-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.candidate-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.candidate-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 16px 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n.skills-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.filters-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.filters-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n}\nfa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nbutton[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=ai-recommendations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIRecommendationsComponent, [{
    type: Component,
    args: [{ selector: "app-ai-recommendations", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatChipsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      FontAwesomeModule
    ], template: `
    <div class="ai-recommendations-container">
      <mat-card class="search-card">
        <mat-card-header>
          <mat-card-title>AI Candidate Recommendations</mat-card-title>
          <mat-card-subtitle>
            Use natural language to find the perfect candidates for your job
          </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="search-section">
            <mat-form-field class="search-input">
              <mat-label>Describe your ideal candidate</mat-label>
              <input matInput
                     [(ngModel)]="searchQuery"
                     placeholder="e.g., 'Find me a senior React developer with 5+ years of experience'"
                     (keyup.enter)="searchCandidates()">
            </mat-form-field>
            <button mat-raised-button 
                    color="primary" 
                    (click)="searchCandidates()"
                    [disabled]="isLoading || !searchQuery.trim()">
              <fa-icon [icon]="faSearch"></fa-icon>
              Search
            </button>
          </div>

          <!-- Loading State -->
          <div *ngIf="isLoading" class="loading-container">
            <fa-icon [icon]="faSpinner" animation="spin" size="2x"></fa-icon>
            <p>Finding the perfect candidates...</p>
          </div>

          <!-- Results Section -->
          <div *ngIf="!isLoading && queryResponse" class="results-section">
            <div class="summary-section">
              <h3>AI Analysis</h3>
              <p>{{ queryResponse.summary }}</p>
            </div>

            <div class="candidates-grid">
              <mat-card *ngFor="let candidate of queryResponse.candidates" class="candidate-card">
                <mat-card-header>
                  <mat-card-title>
                    <fa-icon [icon]="faUser"></fa-icon>
                    {{ candidate.name }}
                  </mat-card-title>
                </mat-card-header>

                <mat-card-content>
                  <div class="candidate-details">
                    <div class="detail-item">
                      <fa-icon [icon]="faBriefcase"></fa-icon>
                      <span>{{ candidate.experienceCount }} years experience</span>
                    </div>
                    <div class="detail-item">
                      <fa-icon [icon]="faGraduationCap"></fa-icon>
                      <span>{{ candidate.education[0] }}</span>
                    </div>
                  </div>

                  <div class="skills-section">
                    <h4>Skills</h4>
                    <div class="skills-list">
                      <mat-chip *ngFor="let skill of candidate.skills">
                        {{ skill }}
                      </mat-chip>
                    </div>
                  </div>
                </mat-card-content>

                <mat-card-actions>
                  <button mat-button color="primary" (click)="viewCandidateProfile(candidate.id)">
                    View Profile
                  </button>
                </mat-card-actions>
              </mat-card>
            </div>

            <!-- Filters Section -->
            <div class="filters-section" *ngIf="queryResponse.filters">
              <h3>Applied Filters</h3>
              <div class="filters-list">
                <mat-chip *ngIf="queryResponse.filters.skills?.length">
                  Skills: {{ queryResponse.filters.skills }}
                </mat-chip>
                <mat-chip *ngIf="queryResponse.filters.minExperience">
                  Min Experience: {{ queryResponse.filters.minExperience }} years
                </mat-chip>
                <mat-chip *ngIf="queryResponse.filters.educationLevel">
                  Education: {{ queryResponse.filters.educationLevel }}
                </mat-chip>
                <mat-chip *ngIf="queryResponse.filters.location">
                  Location: {{ queryResponse.filters.location }}
                </mat-chip>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div *ngIf="!isLoading && !queryResponse" class="empty-state">
            <h3>Start Your Search</h3>
            <p>Describe the type of candidate you're looking for, and our AI will help you find the perfect match.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;f0e67aeaa7548dcf193e428e9518426c4df75d5cd6ba682c2eea8bcf787e668c;C:/Users/isaac/Desktop/EmployBridge/Frontend/src/app/components/employer-components/ai-recommendations/ai-recommendations.component.ts */\n.ai-recommendations-container {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.search-card {\n  margin-bottom: 24px;\n}\n.search-section {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.search-input {\n  flex: 1;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  gap: 16px;\n}\n.results-section {\n  margin-top: 24px;\n}\n.summary-section {\n  margin-bottom: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.candidates-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.candidate-card {\n  height: 100%;\n}\n.candidate-details {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 16px 0;\n}\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n.skills-section {\n  margin-top: 16px;\n}\n.skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.filters-section {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.filters-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n}\nfa-icon {\n  margin-right: 8px;\n}\nbutton fa-icon {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=ai-recommendations.component.css.map */\n"] }]
  }], () => [{ type: ChatbotService }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIRecommendationsComponent, { className: "AIRecommendationsComponent", filePath: "src/app/components/employer-components/ai-recommendations/ai-recommendations.component.ts", lineNumber: 235 });
})();
export {
  AIRecommendationsComponent
};
//# sourceMappingURL=chunk-IRKUWYKL.js.map
