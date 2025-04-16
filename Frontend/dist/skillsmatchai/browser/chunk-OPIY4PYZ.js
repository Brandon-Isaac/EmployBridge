import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-ZEUQNEEZ.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-D7CU6W3F.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-QJ7WF3FG.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-QZIPTO56.js";
import {
  MatBadgeModule
} from "./chunk-MFJU2DX3.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-YZ6GIE3H.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-3QCHWOEP.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GBKEUDMN.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-GDU4ATDP.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PFNPEZPC.js";
import "./chunk-2CZVWUUL.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-W7G65VI2.js";
import "./chunk-R4NVDLOM.js";
import {
  MatFormFieldModule
} from "./chunk-B7JQH24K.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-VW3NTET3.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatFormField,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgModel
} from "./chunk-255VWD3Z.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIconButton,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJVFXHEQ.js";

// src/app/employer/components/view-candidates/view-candidates.component.ts
var _c0 = () => [5, 10, 25];
function ViewCandidatesComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275property("value", skill_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r1, " ");
  }
}
function ViewCandidatesComponent_mat_card_88_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(candidate_r3.education);
  }
}
function ViewCandidatesComponent_mat_card_88_mat_chip_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("highlighted", ctx_r4.isHighlightedSkill(skill_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r4, " ");
  }
}
function ViewCandidatesComponent_mat_card_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 59)(1, "div", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-card-header")(4, "div", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card-title");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-card-subtitle");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-card-content")(11, "div", 62)(12, "div", 63)(13, "div", 64)(14, "span");
    \u0275\u0275text(15, "Match Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 65);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "mat-progress-bar", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 67)(20, "div", 68);
    \u0275\u0275element(21, "i", 69);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 68);
    \u0275\u0275element(25, "i", 70);
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ViewCandidatesComponent_mat_card_88_div_28_Template, 4, 1, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 72)(30, "mat-chip-set");
    \u0275\u0275template(31, ViewCandidatesComponent_mat_card_88_mat_chip_31_Template, 2, 2, "mat-chip", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(32, "mat-divider");
    \u0275\u0275elementStart(33, "mat-card-actions")(34, "button", 74);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_88_Template_button_click_34_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewProfile(candidate_r3));
    });
    \u0275\u0275element(35, "i", 75);
    \u0275\u0275text(36, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 76);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_88_Template_button_click_37_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.scheduleInterview(candidate_r3));
    });
    \u0275\u0275element(38, "i", 77);
    \u0275\u0275text(39, " Interview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 78);
    \u0275\u0275element(41, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-menu", null, 0)(44, "button", 80);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_88_Template_button_click_44_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadResume(candidate_r3));
    });
    \u0275\u0275element(45, "i", 81);
    \u0275\u0275text(46, " Download Resume ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 80);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_88_Template_button_click_47_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.sendMessage(candidate_r3));
    });
    \u0275\u0275element(48, "i", 82);
    \u0275\u0275text(49, " Send Message ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "mat-divider");
    \u0275\u0275elementStart(51, "button", 80);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_88_Template_button_click_51_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.moveToShortlist(candidate_r3));
    });
    \u0275\u0275element(52, "i", 83);
    \u0275\u0275text(53, " Add to Shortlist ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 84);
    \u0275\u0275listener("click", function ViewCandidatesComponent_mat_card_88_Template_button_click_54_listener() {
      const candidate_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.rejectCandidate(candidate_r3));
    });
    \u0275\u0275element(55, "i", 85);
    \u0275\u0275text(56, " Reject Candidate ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const candidate_r3 = ctx.$implicit;
    const menu_r6 = \u0275\u0275reference(43);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "status-" + candidate_r3.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", "Status: " + candidate_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r3.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(candidate_r3.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(candidate_r3.title);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", candidate_r3.matchScore, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", candidate_r3.matchScore)("color", ctx_r4.getMatchScoreColor(candidate_r3.matchScore));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(candidate_r3.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", candidate_r3.experience, " years experience");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", candidate_r3.education);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", candidate_r3.skills);
    \u0275\u0275advance(9);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
  }
}
function ViewCandidatesComponent_th_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, " Name ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r7.name, " ");
  }
}
function ViewCandidatesComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, " Title ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r8.title, " ");
  }
}
function ViewCandidatesComponent_th_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, " Location ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r9.location, " ");
  }
}
function ViewCandidatesComponent_th_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, " Experience ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r10.experience, " years ");
  }
}
function ViewCandidatesComponent_th_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 90);
    \u0275\u0275text(1, " Key Skills ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_106_mat_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r11 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("highlighted", ctx_r4.isHighlightedSkill(skill_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r11, " ");
  }
}
function ViewCandidatesComponent_td_106_mat_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", candidate_r12.skills.length - 2, " ");
  }
}
function ViewCandidatesComponent_td_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89)(1, "mat-chip-set");
    \u0275\u0275template(2, ViewCandidatesComponent_td_106_mat_chip_2_Template, 2, 2, "mat-chip", 73)(3, ViewCandidatesComponent_td_106_mat_chip_3_Template, 2, 1, "mat-chip", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", candidate_r12.skills.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", candidate_r12.skills.length > 2);
  }
}
function ViewCandidatesComponent_th_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, " Match Score ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89)(1, "div", 93);
    \u0275\u0275element(2, "mat-progress-bar", 66);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const candidate_r13 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", candidate_r13.matchScore)("color", ctx_r4.getMatchScoreColor(candidate_r13.matchScore));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", candidate_r13.matchScore, "%");
  }
}
function ViewCandidatesComponent_th_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 88);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89)(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const candidate_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + candidate_r14.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", candidate_r14.status, " ");
  }
}
function ViewCandidatesComponent_th_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 90);
    \u0275\u0275text(1, " Actions ");
    \u0275\u0275elementEnd();
  }
}
function ViewCandidatesComponent_td_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 89)(1, "button", 95);
    \u0275\u0275listener("click", function ViewCandidatesComponent_td_115_Template_button_click_1_listener() {
      const candidate_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewProfile(candidate_r16));
    });
    \u0275\u0275element(2, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ViewCandidatesComponent_td_115_Template_button_click_3_listener() {
      const candidate_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.scheduleInterview(candidate_r16));
    });
    \u0275\u0275element(4, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 78);
    \u0275\u0275element(6, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-menu", null, 1)(9, "button", 80);
    \u0275\u0275listener("click", function ViewCandidatesComponent_td_115_Template_button_click_9_listener() {
      const candidate_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadResume(candidate_r16));
    });
    \u0275\u0275element(10, "i", 81);
    \u0275\u0275text(11, " Download Resume ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 80);
    \u0275\u0275listener("click", function ViewCandidatesComponent_td_115_Template_button_click_12_listener() {
      const candidate_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.sendMessage(candidate_r16));
    });
    \u0275\u0275element(13, "i", 82);
    \u0275\u0275text(14, " Send Message ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "mat-divider");
    \u0275\u0275elementStart(16, "button", 80);
    \u0275\u0275listener("click", function ViewCandidatesComponent_td_115_Template_button_click_16_listener() {
      const candidate_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.moveToShortlist(candidate_r16));
    });
    \u0275\u0275element(17, "i", 83);
    \u0275\u0275text(18, " Add to Shortlist ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 84);
    \u0275\u0275listener("click", function ViewCandidatesComponent_td_115_Template_button_click_19_listener() {
      const candidate_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.rejectCandidate(candidate_r16));
    });
    \u0275\u0275element(20, "i", 85);
    \u0275\u0275text(21, " Reject Candidate ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tableMenu_r17 = \u0275\u0275reference(8);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", tableMenu_r17);
  }
}
function ViewCandidatesComponent_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 98);
  }
}
function ViewCandidatesComponent_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 99);
  }
}
var ViewCandidatesComponent = class _ViewCandidatesComponent {
  paginator;
  sort;
  searchText = "";
  selectedSkills = [];
  experienceLevel = "";
  selectedStatus = "";
  sortOption = "matchScore";
  displayedColumns = ["name", "title", "location", "experience", "skills", "matchScore", "status", "actions"];
  availableSkills = [
    "Angular",
    "React",
    "Vue",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "SQL",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "GraphQL",
    "REST API",
    "RxJS",
    "NgRx",
    "Redux"
  ];
  candidates = [
    {
      id: "1",
      name: "John Doe",
      title: "Senior Frontend Developer",
      location: "New York, NY",
      experience: 5,
      matchScore: 95,
      skills: ["Angular", "TypeScript", "RxJS", "NgRx"],
      status: "New",
      appliedDate: new Date(2025, 3, 10),
      education: "B.S. Computer Science"
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      experience: 3,
      matchScore: 88,
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      status: "Reviewed",
      appliedDate: new Date(2025, 3, 8),
      education: "M.S. Software Engineering"
    },
    {
      id: "3",
      name: "Robert Johnson",
      title: "DevOps Engineer",
      location: "Austin, TX",
      experience: 7,
      matchScore: 92,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      status: "Interview",
      appliedDate: new Date(2025, 3, 5)
    },
    {
      id: "4",
      name: "Emily Chen",
      title: "UI/UX Developer",
      location: "Seattle, WA",
      experience: 4,
      matchScore: 82,
      skills: ["React", "CSS", "Figma", "UX Research"],
      status: "New",
      appliedDate: new Date(2025, 3, 12),
      education: "B.A. Design & Computer Science"
    },
    {
      id: "5",
      name: "Michael Brown",
      title: "Backend Developer",
      location: "Chicago, IL",
      experience: 6,
      matchScore: 78,
      skills: ["Java", "Spring Boot", "SQL", "Microservices"],
      status: "Reviewed",
      appliedDate: new Date(2025, 3, 7)
    },
    {
      id: "6",
      name: "Sarah Wilson",
      title: "Frontend Engineer",
      location: "Boston, MA",
      experience: 2,
      matchScore: 90,
      skills: ["Angular", "TypeScript", "SCSS", "Material UI"],
      status: "New",
      appliedDate: new Date(2025, 3, 14),
      education: "B.S. Information Systems"
    }
  ];
  filteredCandidates = [];
  constructor() {
    this.filteredCandidates = [...this.candidates];
  }
  ngOnInit() {
    this.sortCandidates();
  }
  applyFilters() {
    this.filteredCandidates = this.candidates.filter((candidate) => {
      const searchMatch = !this.searchText || candidate.name.toLowerCase().includes(this.searchText.toLowerCase()) || candidate.title.toLowerCase().includes(this.searchText.toLowerCase()) || candidate.location.toLowerCase().includes(this.searchText.toLowerCase()) || candidate.skills.some((skill) => skill.toLowerCase().includes(this.searchText.toLowerCase()));
      const skillsMatch = this.selectedSkills.length === 0 || this.selectedSkills.every((skill) => candidate.skills.includes(skill));
      let experienceMatch = true;
      if (this.experienceLevel) {
        if (this.experienceLevel === "entry") {
          experienceMatch = candidate.experience < 3;
        } else if (this.experienceLevel === "mid") {
          experienceMatch = candidate.experience >= 3 && candidate.experience < 6;
        } else if (this.experienceLevel === "senior") {
          experienceMatch = candidate.experience >= 6;
        }
      }
      const statusMatch = !this.selectedStatus || candidate.status === this.selectedStatus;
      return searchMatch && skillsMatch && experienceMatch && statusMatch;
    });
    this.sortCandidates();
  }
  sortCandidates() {
    if (this.sortOption === "matchScore") {
      this.filteredCandidates.sort((a, b) => b.matchScore - a.matchScore);
    } else if (this.sortOption === "experience") {
      this.filteredCandidates.sort((a, b) => b.experience - a.experience);
    } else if (this.sortOption === "name") {
      this.filteredCandidates.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  sortTable(sort) {
    const data = [...this.filteredCandidates];
    if (!sort.active || sort.direction === "") {
      this.filteredCandidates = data;
      return;
    }
    this.filteredCandidates = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "title":
          return this.compare(a.title, b.title, isAsc);
        case "location":
          return this.compare(a.location, b.location, isAsc);
        case "experience":
          return this.compare(a.experience, b.experience, isAsc);
        case "matchScore":
          return this.compare(a.matchScore, b.matchScore, isAsc);
        case "status":
          return this.compare(a.status, b.status, isAsc);
        default:
          return 0;
      }
    });
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  getMatchScoreColor(score) {
    if (score >= 90)
      return "primary";
    if (score >= 75)
      return "accent";
    return "warn";
  }
  isHighlightedSkill(skill) {
    return this.selectedSkills.includes(skill);
  }
  viewProfile(candidate) {
    console.log("Viewing profile:", candidate);
  }
  scheduleInterview(candidate) {
    console.log("Scheduling interview for:", candidate);
    candidate.status = "Interview";
  }
  downloadResume(candidate) {
    console.log("Downloading resume for:", candidate);
  }
  sendMessage(candidate) {
    console.log("Sending message to:", candidate);
  }
  rejectCandidate(candidate) {
    console.log("Rejecting candidate:", candidate);
  }
  moveToShortlist(candidate) {
    console.log("Moving to shortlist:", candidate);
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("");
  }
  getAverageMatchScore() {
    if (this.candidates.length === 0)
      return 0;
    const total = this.candidates.reduce((sum, candidate) => sum + candidate.matchScore, 0);
    return Math.round(total / this.candidates.length);
  }
  getPositionsToFill() {
    return 8;
  }
  getInterviewingCount() {
    return 18;
  }
  static \u0275fac = function ViewCandidatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCandidatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCandidatesComponent, selectors: [["app-view-candidates"]], viewQuery: function ViewCandidatesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
      \u0275\u0275viewQuery(MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    }
  }, decls: 134, vars: 17, consts: [["menu", "matMenu"], ["tableMenu", "matMenu"], [1, "view-candidates-container"], [1, "header-section"], [1, "title-section"], [1, "subtitle"], [1, "metrics-section"], [1, "metric-card"], [1, "metric-value"], [1, "metric-label"], ["label", "Card View"], [1, "filters-panel"], [1, "search-filter"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name, skills, or location", 3, "ngModelChange", "ngModel"], ["matSuffix", "", 1, "fas", "fa-search"], [1, "filter-controls"], ["multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "entry"], ["value", "mid"], ["value", "senior"], ["value", "New"], ["value", "Reviewed"], ["value", "Interview"], ["value", "Offer"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-filter"], [1, "candidates-summary"], [1, "results-count"], [1, "sort-controls"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "matchScore"], ["value", "experience"], ["value", "name"], [1, "candidates-list"], ["class", "candidate-card", 3, "ngClass", 4, "ngFor", "ngForOf"], ["label", "Table View"], [1, "table-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z2", 3, "matSortChange", "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "location"], ["matColumnDef", "experience"], ["matColumnDef", "skills"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "matchScore"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["label", "Analytics"], [1, "analytics-placeholder"], [3, "value"], [1, "candidate-card", 3, "ngClass"], [1, "status-indicator", 3, "matTooltip"], ["mat-card-avatar", "", 1, "candidate-avatar"], [1, "candidate-analytics"], [1, "match-score-indicator"], [1, "score-header"], [1, "score-value"], ["mode", "determinate", 3, "value", "color"], [1, "candidate-details"], [1, "detail-item"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-briefcase"], ["class", "detail-item", 4, "ngIf"], [1, "skills-section"], [3, "highlighted", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-user"], ["mat-button", "", "color", "accent", 3, "click"], [1, "fas", "fa-calendar-alt"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-download"], [1, "fas", "fa-envelope"], [1, "fas", "fa-star"], ["mat-menu-item", "", 1, "reject-action", 3, "click"], [1, "fas", "fa-times"], [1, "fas", "fa-graduation-cap"], [3, "highlighted"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["color", "primary", 4, "ngIf"], ["color", "primary"], [1, "table-match-score"], [1, "status-badge", 3, "ngClass"], ["mat-icon-button", "", "color", "primary", "matTooltip", "View Profile", 3, "click"], [1, "fas", "fa-eye"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Schedule Interview", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewCandidatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1");
      \u0275\u0275text(4, "Candidate Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Track, analyze, and manage your talent pipeline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275text(12, "Active Candidates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17, "Interviews Scheduled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 7)(19, "div", 8);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9);
      \u0275\u0275text(22, "Avg. Match Score");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 7)(24, "div", 8);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9);
      \u0275\u0275text(27, "Positions to Fill");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(28, "mat-divider");
      \u0275\u0275elementStart(29, "mat-tab-group")(30, "mat-tab", 10)(31, "div", 11)(32, "div", 12)(33, "mat-form-field", 13)(34, "mat-label");
      \u0275\u0275text(35, "Search Candidates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCandidatesComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "i", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 16)(39, "mat-form-field", 13)(40, "mat-label");
      \u0275\u0275text(41, "Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCandidatesComponent_Template_mat_select_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSkills, $event) || (ctx.selectedSkills = $event);
        return $event;
      });
      \u0275\u0275template(43, ViewCandidatesComponent_mat_option_43_Template, 2, 2, "mat-option", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "mat-form-field", 13)(45, "mat-label");
      \u0275\u0275text(46, "Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCandidatesComponent_Template_mat_select_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.experienceLevel, $event) || (ctx.experienceLevel = $event);
        return $event;
      });
      \u0275\u0275elementStart(48, "mat-option", 20);
      \u0275\u0275text(49, "All Levels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-option", 21);
      \u0275\u0275text(51, "Entry Level (0-2 years)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-option", 22);
      \u0275\u0275text(53, "Mid Level (3-5 years)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "mat-option", 23);
      \u0275\u0275text(55, "Senior Level (6+ years)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "mat-form-field", 13)(57, "mat-label");
      \u0275\u0275text(58, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCandidatesComponent_Template_mat_select_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275elementStart(60, "mat-option", 20);
      \u0275\u0275text(61, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 24);
      \u0275\u0275text(63, "New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-option", 25);
      \u0275\u0275text(65, "Reviewed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "mat-option", 26);
      \u0275\u0275text(67, "Interview Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 27);
      \u0275\u0275text(69, "Offer Extended");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "button", 28);
      \u0275\u0275listener("click", function ViewCandidatesComponent_Template_button_click_70_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275element(71, "i", 29);
      \u0275\u0275text(72, " Apply Filters ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 30)(74, "span", 31);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 32)(77, "mat-form-field", 13)(78, "mat-label");
      \u0275\u0275text(79, "Sort by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-select", 33);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCandidatesComponent_Template_mat_select_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortOption, $event) || (ctx.sortOption = $event);
        return $event;
      });
      \u0275\u0275listener("selectionChange", function ViewCandidatesComponent_Template_mat_select_selectionChange_80_listener() {
        return ctx.sortCandidates();
      });
      \u0275\u0275elementStart(81, "mat-option", 34);
      \u0275\u0275text(82, "Match Score (High to Low)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-option", 35);
      \u0275\u0275text(84, "Experience (High to Low)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "mat-option", 36);
      \u0275\u0275text(86, "Name (A to Z)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(87, "div", 37);
      \u0275\u0275template(88, ViewCandidatesComponent_mat_card_88_Template, 57, 14, "mat-card", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "mat-tab", 39)(90, "div", 40)(91, "table", 41);
      \u0275\u0275listener("matSortChange", function ViewCandidatesComponent_Template_table_matSortChange_91_listener($event) {
        return ctx.sortTable($event);
      });
      \u0275\u0275elementContainerStart(92, 42);
      \u0275\u0275template(93, ViewCandidatesComponent_th_93_Template, 2, 0, "th", 43)(94, ViewCandidatesComponent_td_94_Template, 2, 1, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(95, 45);
      \u0275\u0275template(96, ViewCandidatesComponent_th_96_Template, 2, 0, "th", 43)(97, ViewCandidatesComponent_td_97_Template, 2, 1, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(98, 46);
      \u0275\u0275template(99, ViewCandidatesComponent_th_99_Template, 2, 0, "th", 43)(100, ViewCandidatesComponent_td_100_Template, 2, 1, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(101, 47);
      \u0275\u0275template(102, ViewCandidatesComponent_th_102_Template, 2, 0, "th", 43)(103, ViewCandidatesComponent_td_103_Template, 2, 1, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(104, 48);
      \u0275\u0275template(105, ViewCandidatesComponent_th_105_Template, 2, 0, "th", 49)(106, ViewCandidatesComponent_td_106_Template, 4, 2, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(107, 50);
      \u0275\u0275template(108, ViewCandidatesComponent_th_108_Template, 2, 0, "th", 43)(109, ViewCandidatesComponent_td_109_Template, 5, 3, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(110, 51);
      \u0275\u0275template(111, ViewCandidatesComponent_th_111_Template, 2, 0, "th", 43)(112, ViewCandidatesComponent_td_112_Template, 3, 2, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(113, 52);
      \u0275\u0275template(114, ViewCandidatesComponent_th_114_Template, 2, 0, "th", 49)(115, ViewCandidatesComponent_td_115_Template, 22, 1, "td", 44);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(116, ViewCandidatesComponent_tr_116_Template, 1, 0, "tr", 53)(117, ViewCandidatesComponent_tr_117_Template, 1, 0, "tr", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275element(118, "mat-paginator", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "mat-tab", 56)(120, "div", 57)(121, "h3");
      \u0275\u0275text(122, "Candidate Analytics Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Analytics features would display here with charts showing:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "ul")(126, "li");
      \u0275\u0275text(127, "Candidate distribution by skill");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "li");
      \u0275\u0275text(129, "Match score trends");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "li");
      \u0275\u0275text(131, "Hiring pipeline metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "li");
      \u0275\u0275text(133, "Time-to-hire analytics");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.candidates.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getInterviewingCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.getAverageMatchScore(), "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getPositionsToFill());
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSkills);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.availableSkills);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.experienceLevel);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("Showing ", ctx.filteredCandidates.length, " candidates");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortOption);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.filteredCandidates);
      \u0275\u0275advance(3);
      \u0275\u0275property("dataSource", ctx.filteredCandidates);
      \u0275\u0275advance(25);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(16, _c0));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardAvatar,
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
    MatProgressBarModule,
    MatProgressBar,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginatorModule,
    MatPaginator,
    MatSortModule,
    MatSort,
    MatSortHeader,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule,
    MatTooltip,
    MatTabsModule,
    MatTab,
    MatTabGroup,
    MatBadgeModule,
    MatDividerModule,
    MatDivider
  ], styles: ["\n\n.view-candidates-container[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: #f5f7fa;\n  min-height: 100vh;\n}\n.header-section[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 24px 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.title-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 500;\n  color: #263238;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #607d8b;\n  margin: 4px 0 0;\n  font-size: 16px;\n}\n.metrics-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background-color: #f5f7fa;\n  border-radius: 8px;\n  min-width: 120px;\n  text-align: center;\n  border-left: 4px solid #5c6bc0;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #263238;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #607d8b;\n  margin-top: 4px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 16px 24px;\n  margin: 16px 24px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n}\n.filter-controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.candidates-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  margin-bottom: 16px;\n}\n.results-count[_ngcontent-%COMP%] {\n  color: #607d8b;\n  font-size: 14px;\n}\n.sort-controls[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.candidates-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 24px;\n  padding: 0 24px 24px;\n}\n.candidate-card[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n}\n.candidate-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  background-color: #e0e0e0;\n  color: #424242;\n}\n.status-new[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.status-reviewed[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #388e3c;\n}\n.status-interview[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ffa000;\n}\n.status-offer[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n  color: #3949ab;\n}\n.candidate-avatar[_ngcontent-%COMP%] {\n  background-color: #5c6bc0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.candidate-analytics[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.match-score-indicator[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.score-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.score-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.candidate-details[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n  color: #546e7a;\n}\n.detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 20px;\n  text-align: center;\n  color: #666;\n}\n.skills-section[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  justify-content: space-between;\n}\n.table-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-match-score[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.table-match-score[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-right: 8px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  background-color: #e0e0e0;\n  color: #424242;\n}\n.status-badge.status-new[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.status-badge.status-reviewed[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #388e3c;\n}\n.status-badge.status-interview[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ffa000;\n}\n.status-badge.status-offer[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n  color: #3949ab;\n}\n.analytics-placeholder[_ngcontent-%COMP%] {\n  padding: 48px;\n  text-align: center;\n  color: #546e7a;\n}\n.analytics-placeholder[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  margin-top: 16px;\n}\n.analytics-placeholder[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n@media (max-width: 960px) {\n  .header-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .metrics-section[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100%;\n    overflow-x: auto;\n  }\n  .candidates-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 600px) {\n  .filter-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .candidates-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.reject-action[_ngcontent-%COMP%] {\n  color: #f44336;\n}\nmat-tab-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nmat-menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.reject-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n/*# sourceMappingURL=view-candidates.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCandidatesComponent, { className: "ViewCandidatesComponent", filePath: "src/app/employer/components/view-candidates/view-candidates.component.ts", lineNumber: 669 });
})();
export {
  ViewCandidatesComponent
};
//# sourceMappingURL=chunk-OPIY4PYZ.js.map
