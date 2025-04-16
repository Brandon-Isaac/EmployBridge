import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-VVAP3QIX.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-QJ7WF3FG.js";
import {
  MatDialogModule
} from "./chunk-TQ6JUWYT.js";
import {
  MatBadgeModule
} from "./chunk-MFJU2DX3.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-3QCHWOEP.js";
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
  animate,
  style,
  transition,
  trigger
} from "./chunk-7BNL2RL5.js";
import "./chunk-2CZVWUUL.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-DG7YLRMC.js";
import "./chunk-VW3NTET3.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-XFTMB2RM.js";
import "./chunk-KCSVOKMR.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-LQ5JCGHX.js";
import {
  MatIconModule
} from "./chunk-E6YAXSQU.js";
import "./chunk-255VWD3Z.js";
import {
  CommonModule,
  DatePipe,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatIconButton,
  NgIf,
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NJVFXHEQ.js";

// src/app/admin/components/user-management/user-management.component.ts
function UserManagementComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function UserManagementComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "mat-chip", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("role-chip " + user_r2.role.toLowerCase());
    \u0275\u0275property("color", ctx_r2.getRoleColor(user_r2.role));
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-user", user_r2.role === "JOB_SEEKER")("fa-briefcase", user_r2.role === "EMPLOYER")("fa-shield-alt", user_r2.role === "ADMIN");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, user_r2.role), " ");
  }
}
function UserManagementComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "mat-chip", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("status-chip " + user_r4.status);
    \u0275\u0275property("color", ctx_r2.getStatusColor(user_r4.status));
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-check-circle", user_r4.status === "active")("fa-times-circle", user_r4.status === "inactive")("fa-ban", user_r4.status === "suspended");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, user_r4.status), " ");
  }
}
function UserManagementComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Created At");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, user_r5.createdAt, "mediumDate"), " ");
  }
}
function UserManagementComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Last Login");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, user_r6.lastLogin, "medium"), " ");
  }
}
function UserManagementComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_31_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function UserManagementComponent_td_31_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.suspendUser(user_r8));
    });
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Suspend");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_td_31_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function UserManagementComponent_td_31_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const user_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activateUser(user_r8));
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Activate");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 32);
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-menu", 34, 0)(5, "button", 35);
    \u0275\u0275listener("click", function UserManagementComponent_td_31_Template_button_click_5_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(user_r8));
    });
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, UserManagementComponent_td_31_button_9_Template, 4, 0, "button", 37)(10, UserManagementComponent_td_31_button_10_Template, 4, 0, "button", 37);
    \u0275\u0275element(11, "mat-divider");
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275listener("click", function UserManagementComponent_td_31_Template_button_click_12_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser(user_r8));
    });
    \u0275\u0275element(13, "i", 39);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const menu_r11 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r11);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", user_r8.status !== "suspended");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r8.status !== "active");
  }
}
function UserManagementComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 42);
  }
}
function UserManagementComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 43);
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275classProp("active-row", row_r12.status === "active")("inactive-row", row_r12.status === "inactive")("suspended-row", row_r12.status === "suspended");
  }
}
var UserManagementComponent = class _UserManagementComponent {
  displayedColumns = [
    "email",
    "role",
    "status",
    "createdAt",
    "lastLogin",
    "actions"
  ];
  users = [
    {
      id: "1",
      email: "jobseeker@example.com",
      role: "JOB_SEEKER",
      status: "active",
      createdAt: /* @__PURE__ */ new Date("2024-01-01"),
      lastLogin: /* @__PURE__ */ new Date("2024-03-20")
    },
    {
      id: "2",
      email: "employer@example.com",
      role: "EMPLOYER",
      status: "active",
      createdAt: /* @__PURE__ */ new Date("2024-01-15"),
      lastLogin: /* @__PURE__ */ new Date("2024-03-19")
    },
    {
      id: "3",
      email: "admin@example.com",
      role: "ADMIN",
      status: "suspended",
      createdAt: /* @__PURE__ */ new Date("2024-02-10"),
      lastLogin: /* @__PURE__ */ new Date("2024-03-18")
    },
    {
      id: "4",
      email: "inactive@example.com",
      role: "JOB_SEEKER",
      status: "inactive",
      createdAt: /* @__PURE__ */ new Date("2024-02-20"),
      lastLogin: /* @__PURE__ */ new Date("2024-02-25")
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  getRoleColor(role) {
    switch (role) {
      case "ADMIN":
        return "primary";
      case "EMPLOYER":
        return "accent";
      default:
        return "";
    }
  }
  getStatusColor(status) {
    switch (status) {
      case "active":
        return "primary";
      case "suspended":
        return "warn";
      default:
        return "";
    }
  }
  addUser() {
    console.log("Add new user");
  }
  editUser(user) {
    console.log("Edit user:", user);
  }
  suspendUser(user) {
    console.log("Suspend user:", user);
  }
  activateUser(user) {
    console.log("Activate user:", user);
  }
  deleteUser(user) {
    console.log("Delete user:", user);
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 34, vars: 5, consts: [["menu", "matMenu"], [1, "user-management-container"], [1, "toolbar"], [1, "toolbar-left"], [1, "app-title"], [1, "toolbar-right"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-plus"], [1, "content-card"], [1, "table-container"], ["mat-table", "", 1, "users-table", "mat-elevation-z4", 3, "dataSource"], ["matColumnDef", "email"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "email-cell", 4, "matCellDef"], ["matColumnDef", "role"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "lastLogin"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions-header", 4, "matHeaderCellDef"], ["mat-header-row", "", "class", "header-row", 4, "matHeaderRowDef"], ["mat-row", "", 3, "active-row", "inactive-row", "suspended-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "email-cell"], [1, "fas", "fa-envelope"], ["mat-cell", ""], [3, "color"], [1, "fas"], [1, "fas", "fa-calendar-alt"], [1, "fas", "fa-clock"], ["mat-header-cell", "", 1, "actions-header"], ["mat-icon-button", "", 1, "action-button", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], [1, "user-menu"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-edit"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "delete-action", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-ban"], [1, "fas", "fa-check-circle"], ["mat-header-row", "", 1, "header-row"], ["mat-row", ""]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-toolbar", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275text(4, "User Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_6_listener() {
        return ctx.addUser();
      });
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Add User");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "mat-card", 8)(11, "mat-card-content")(12, "div", 9)(13, "table", 10);
      \u0275\u0275elementContainerStart(14, 11);
      \u0275\u0275template(15, UserManagementComponent_th_15_Template, 2, 0, "th", 12)(16, UserManagementComponent_td_16_Template, 3, 1, "td", 13);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(17, 14);
      \u0275\u0275template(18, UserManagementComponent_th_18_Template, 2, 0, "th", 12)(19, UserManagementComponent_td_19_Template, 5, 12, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(20, 16);
      \u0275\u0275template(21, UserManagementComponent_th_21_Template, 2, 0, "th", 12)(22, UserManagementComponent_td_22_Template, 5, 12, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(23, 17);
      \u0275\u0275template(24, UserManagementComponent_th_24_Template, 2, 0, "th", 12)(25, UserManagementComponent_td_25_Template, 4, 4, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(26, 18);
      \u0275\u0275template(27, UserManagementComponent_th_27_Template, 2, 0, "th", 12)(28, UserManagementComponent_td_28_Template, 4, 4, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(29, 19);
      \u0275\u0275template(30, UserManagementComponent_th_30_Template, 2, 0, "th", 20)(31, UserManagementComponent_td_31_Template, 16, 3, "td", 15);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(32, UserManagementComponent_tr_32_Template, 1, 0, "tr", 21)(33, UserManagementComponent_tr_33_Template, 1, 6, "tr", 22);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("@slideInFromRight", void 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("dataSource", ctx.users);
      \u0275\u0275advance(19);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    TitleCasePipe,
    DatePipe,
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
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatChipsModule,
    MatChip,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatDialogModule,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatToolbarModule,
    MatToolbar,
    MatDividerModule,
    MatDivider,
    MatBadgeModule
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #4caf50;\n  --accent-light: #81c784;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n  --danger: #f44336;\n}\n.user-management-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: var(--background-light);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  margin-bottom: 24px;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.content-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.header-row[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  height: 56px;\n}\n.header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.users-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  height: 60px;\n}\n.users-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(79, 84, 200, 0.05);\n  transform: translateX(2px);\n}\n.active-row[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--accent);\n}\n.inactive-row[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--warning);\n}\n.suspended-row[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--danger);\n}\n.users-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n}\n.users-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--primary-light);\n}\n.email-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.role-chip[_ngcontent-%COMP%], \n.status-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.75rem;\n  padding: 4px 12px;\n  border-radius: 16px;\n}\n.role-chip.job_seeker[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.role-chip.employer[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.role-chip.admin[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  color: #7b1fa2;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #ff8f00;\n}\n.status-chip.suspended[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.action-button[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  transition: all 0.3s ease;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  transform: scale(1.1);\n}\n.user-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.user-menu[_ngcontent-%COMP%]   .mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.user-menu[_ngcontent-%COMP%]   .mat-menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n}\n.delete-action[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n@media (max-width: 768px) {\n  .user-management-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 12px;\n  }\n  .toolbar-left[_ngcontent-%COMP%], \n   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    margin: 4px 0;\n  }\n}\n@media (max-width: 480px) {\n  .user-management-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .content-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 0.75rem;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 4px;\n  }\n  .role-chip[_ngcontent-%COMP%], \n   .status-chip[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 2px 8px;\n  }\n}\n/*# sourceMappingURL=user-management.component.css.map */"], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ]),
    trigger("slideInFromRight", [
      transition(":enter", [
        style({ transform: "translateX(50px)", opacity: 0 }),
        animate("400ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/app/admin/components/user-management/user-management.component.ts", lineNumber: 401 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-45JFIRWW.js.map
