import {
  RouterModule
} from "./chunk-GQ322XUA.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-DCF6DFJ3.js";
import {
  MatBadgeModule
} from "./chunk-6X7YSIAV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-WFY74L52.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-J7OZMAM5.js";
import "./chunk-F5FUW2P7.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-BZ6GK7LR.js";
import "./chunk-JCHFAW36.js";
import {
  MatDividerModule
} from "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-2YKV2DJK.js";
import {
  MatIconModule
} from "./chunk-MI43YKTU.js";
import "./chunk-2LWENGE2.js";
import "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  CommonModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UOKCMW7L.js";

// src/app/job-seeker/components/profile/profile.component.ts
function ProfileComponent_div_0_a_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.profile.linkedinUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_div_0_a_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.profile.githubUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_div_0_a_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.profile.portfolioUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_div_0_div_86_mat_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 63);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "span", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275property("matTooltip", skill_r2.level + " level");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "level-" + skill_r2.level.toLowerCase());
  }
}
function ProfileComponent_div_0_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "mat-chip-set");
    \u0275\u0275template(5, ProfileComponent_div_0_div_86_mat_chip_5_Template, 3, 3, "mat-chip", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.getSkillsByCategory(category_r3));
  }
}
function ProfileComponent_div_0_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "div", 66);
    \u0275\u0275elementStart(2, "div", 67)(3, "div", 68)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 70)(9, "span", 71);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 73)(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const exp_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(exp_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", exp_r4.startDate, " - ", exp_r4.endDate || "Present", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r4.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r4.location);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r4.description);
  }
}
function ProfileComponent_div_0_div_97_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r5.description);
  }
}
function ProfileComponent_div_0_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "div", 66);
    \u0275\u0275elementStart(2, "div", 67)(3, "div", 68)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 74)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ProfileComponent_div_0_div_97_div_13_Template, 3, 1, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(edu_r5.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", edu_r5.startDate, " - ", edu_r5.endDate, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(edu_r5.institution);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r5.field);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", edu_r5.description);
  }
}
function ProfileComponent_div_0_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "div", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(activity_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r6.date);
  }
}
function ProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
    \u0275\u0275element(16, "i", 10);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275element(20, "i", 11);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 9);
    \u0275\u0275element(24, "i", 12);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 13)(29, "button", 14);
    \u0275\u0275element(30, "i", 15);
    \u0275\u0275text(31, " Edit Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 16);
    \u0275\u0275element(33, "i", 17);
    \u0275\u0275text(34, " Download CV ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 18);
    \u0275\u0275element(36, "i", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 20)(38, "div", 21)(39, "div", 22);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 23);
    \u0275\u0275element(42, "path", 24)(43, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Match Score");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 26)(47, "div", 27)(48, "div", 28)(49, "mat-card", 29)(50, "mat-card-header")(51, "mat-card-title");
    \u0275\u0275text(52, "About");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-card-content")(54, "p");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "mat-card", 30)(57, "mat-card-header")(58, "mat-card-title");
    \u0275\u0275text(59, "Contact Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-card-content")(61, "div", 31);
    \u0275\u0275element(62, "i", 32);
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 31);
    \u0275\u0275element(66, "i", 33);
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 31);
    \u0275\u0275element(70, "i", 10);
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 34);
    \u0275\u0275template(74, ProfileComponent_div_0_a_74_Template, 2, 1, "a", 35)(75, ProfileComponent_div_0_a_75_Template, 2, 1, "a", 36)(76, ProfileComponent_div_0_a_76_Template, 2, 1, "a", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "mat-card", 38)(78, "mat-card-header")(79, "mat-card-title");
    \u0275\u0275text(80, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 39);
    \u0275\u0275element(82, "i", 40);
    \u0275\u0275text(83, " Add Skills ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "mat-card-content")(85, "div", 41);
    \u0275\u0275template(86, ProfileComponent_div_0_div_86_Template, 6, 2, "div", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "div", 43)(88, "mat-card", 44)(89, "mat-tab-group", 45)(90, "mat-tab", 46)(91, "div", 47)(92, "div", 48);
    \u0275\u0275template(93, ProfileComponent_div_0_div_93_Template, 16, 6, "div", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "mat-tab", 50)(95, "div", 47)(96, "div", 48);
    \u0275\u0275template(97, ProfileComponent_div_0_div_97_Template, 14, 6, "div", 49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(98, "mat-card", 51)(99, "mat-card-header")(100, "mat-card-title");
    \u0275\u0275text(101, "Recent Activity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "mat-card-content")(103, "div", 52);
    \u0275\u0275template(104, ProfileComponent_div_0_div_104_Template, 8, 4, "div", 53);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.profile.firstName.charAt(0), "", ctx_r0.profile.lastName.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getAvailabilityClass(ctx_r0.profile.availabilityStatus));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getAvailabilityText(ctx_r0.profile.availabilityStatus));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.profile.firstName, " ", ctx_r0.profile.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile.headline);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.profile.yearsOfExperience, " years experience");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, ctx_r0.profile.preferredJobType));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", ctx_r0.profile.matchScore, "%");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("stroke-dasharray", ctx_r0.profile.matchScore + ", 100");
    \u0275\u0275advance(5);
    \u0275\u0275property("@slideIn", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.profile.summary);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.profile.linkedinUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.githubUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.portfolioUrl);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.skillCategories);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.profile.experience);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.profile.education);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.profile.recentActivity);
  }
}
var ProfileComponent = class _ProfileComponent {
  profile;
  skillCategories = [];
  constructor() {
  }
  ngOnInit() {
    this.profile = {
      firstName: "John",
      lastName: "Doe",
      headline: "Senior Software Engineer | Full Stack Developer | AI Specialist",
      summary: "Passionate and dedicated software engineer with over 8 years of experience designing and implementing scalable applications. Specialized in AI and machine learning solutions across multiple industries. Strong advocate for clean code and test-driven development. Looking for challenging opportunities where I can leverage my expertise in creating impactful solutions.",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      currentJobTitle: "Senior Software Engineer",
      yearsOfExperience: 8,
      preferredJobType: "full-time",
      preferredLocation: "San Francisco or Remote",
      linkedinUrl: "https://linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
      portfolioUrl: "https://johndoe.dev",
      availabilityStatus: "open_to_opportunities",
      matchScore: 85,
      skills: [
        { name: "JavaScript", level: "Expert", category: "Programming Languages" },
        { name: "TypeScript", level: "Expert", category: "Programming Languages" },
        { name: "Python", level: "Intermediate", category: "Programming Languages" },
        { name: "Angular", level: "Expert", category: "Frameworks" },
        { name: "React", level: "Intermediate", category: "Frameworks" },
        { name: "Node.js", level: "Expert", category: "Frameworks" },
        { name: "MongoDB", level: "Intermediate", category: "Databases" },
        { name: "PostgreSQL", level: "Expert", category: "Databases" },
        { name: "TensorFlow", level: "Intermediate", category: "AI/ML" },
        { name: "PyTorch", level: "Beginner", category: "AI/ML" },
        { name: "Docker", level: "Intermediate", category: "DevOps" },
        { name: "AWS", level: "Intermediate", category: "DevOps" }
      ],
      education: [
        {
          institution: "Stanford University",
          degree: "Master of Science",
          field: "Computer Science",
          startDate: "Aug 2014",
          endDate: "May 2016",
          description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Network Optimization."
        },
        {
          institution: "University of California, Berkeley",
          degree: "Bachelor of Science",
          field: "Computer Engineering",
          startDate: "Aug 2010",
          endDate: "May 2014",
          description: "Minor in Mathematics. Dean's List all semesters."
        }
      ],
      experience: [
        {
          company: "TechCorp Inc.",
          position: "Senior Software Engineer",
          startDate: "Jan 2020",
          endDate: null,
          location: "San Francisco, CA",
          description: "Leading a team of 5 engineers developing cloud-based AI solutions. Architected and implemented a scalable microservices infrastructure using Angular, Node.js, and AWS."
        },
        {
          company: "DataDrive Systems",
          position: "Software Engineer",
          startDate: "Jun 2016",
          endDate: "Dec 2019",
          location: "San Jose, CA",
          description: "Developed data visualization tools and analytics dashboards using React and D3.js. Improved system performance by 40% through optimization techniques."
        },
        {
          company: "Innovate Labs",
          position: "Software Development Intern",
          startDate: "May 2015",
          endDate: "Aug 2015",
          location: "Mountain View, CA",
          description: "Assisted in developing RESTful APIs and implemented front-end components using Angular.js."
        }
      ],
      recentActivity: [
        {
          type: "application",
          description: "Applied for Senior Full Stack Developer at CloudTech Solutions",
          date: "2 days ago",
          icon: "fas fa-paper-plane"
        },
        {
          type: "skill",
          description: "Added new skill: GraphQL",
          date: "1 week ago",
          icon: "fas fa-plus-circle"
        },
        {
          type: "interview",
          description: "Completed technical interview with Nexus Software",
          date: "2 weeks ago",
          icon: "fas fa-comments"
        },
        {
          type: "profile",
          description: "Updated professional summary",
          date: "3 weeks ago",
          icon: "fas fa-user-edit"
        }
      ]
    };
    this.skillCategories = [...new Set(this.profile.skills.map((skill) => skill.category))];
  }
  getSkillsByCategory(category) {
    return this.profile.skills.filter((skill) => skill.category === category);
  }
  getAvailabilityClass(status) {
    switch (status) {
      case "actively_looking":
        return "availability-active";
      case "open_to_opportunities":
        return "availability-open";
      case "not_available":
        return "availability-inactive";
      default:
        return "";
    }
  }
  getAvailabilityText(status) {
    switch (status) {
      case "actively_looking":
        return "Actively Looking";
      case "open_to_opportunities":
        return "Open to Opportunities";
      case "not_available":
        return "Not Available";
      default:
        return status;
    }
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [["class", "profile-container", 4, "ngIf"], [1, "profile-container"], [1, "profile-header"], [1, "header-content"], [1, "profile-avatar"], [1, "avatar-circle"], [1, "availability-badge", 3, "ngClass"], [1, "profile-info"], [1, "profile-stats"], [1, "stat"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-briefcase"], [1, "fas", "fa-users"], [1, "profile-actions"], ["mat-raised-button", "", "color", "primary"], [1, "fas", "fa-edit"], ["mat-stroked-button", ""], [1, "fas", "fa-download"], ["mat-stroked-button", "", "matTooltip", "Share profile link"], [1, "fas", "fa-share-alt"], ["matTooltip", "AI Match Score - How well your profile matches job requirements", 1, "match-score"], [1, "score-circle"], [1, "score-value"], ["viewBox", "0 0 36 36", 1, "score-chart"], ["d", "M18 2.0845\n                    a 15.9155 15.9155 0 0 1 0 31.831\n                    a 15.9155 15.9155 0 0 1 0 -31.831", 1, "score-circle-bg"], ["d", "M18 2.0845\n                    a 15.9155 15.9155 0 0 1 0 31.831\n                    a 15.9155 15.9155 0 0 1 0 -31.831", 1, "score-circle-fill"], [1, "profile-content"], [1, "content-grid"], [1, "left-column"], [1, "profile-card", "summary-card"], [1, "profile-card", "contact-card"], [1, "contact-item"], [1, "fas", "fa-envelope"], [1, "fas", "fa-phone"], [1, "social-links"], ["target", "_blank", "matTooltip", "LinkedIn Profile", 3, "href", 4, "ngIf"], ["target", "_blank", "matTooltip", "GitHub Profile", 3, "href", 4, "ngIf"], ["target", "_blank", "matTooltip", "Portfolio", 3, "href", 4, "ngIf"], [1, "profile-card", "skills-card"], ["mat-button", "", "color", "primary", 1, "card-action-btn"], [1, "fas", "fa-plus"], [1, "skills-categories"], ["class", "skill-category", 4, "ngFor", "ngForOf"], [1, "right-column"], [1, "profile-card", "experience-card"], ["animationDuration", "400ms", "color", "accent"], ["label", "Experience"], [1, "tab-content"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["label", "Education"], [1, "profile-card", "activity-card"], [1, "activity-timeline"], ["class", "activity-item", 4, "ngFor", "ngForOf"], ["target", "_blank", "matTooltip", "LinkedIn Profile", 3, "href"], [1, "fab", "fa-linkedin"], ["target", "_blank", "matTooltip", "GitHub Profile", 3, "href"], [1, "fab", "fa-github"], ["target", "_blank", "matTooltip", "Portfolio", 3, "href"], [1, "fas", "fa-globe"], [1, "skill-category"], [1, "skill-chips"], [3, "matTooltip", 4, "ngFor", "ngForOf"], [3, "matTooltip"], [1, "skill-level", 3, "ngClass"], [1, "timeline-item"], [1, "timeline-marker"], [1, "timeline-content"], [1, "timeline-header"], [1, "timeline-period"], [1, "timeline-company"], [1, "company-name"], [1, "company-location"], [1, "timeline-description"], [1, "timeline-institution"], [1, "education-field"], ["class", "timeline-description", 4, "ngIf"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-content"], [1, "activity-description"], [1, "activity-date"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProfileComponent_div_0_Template, 105, 27, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.profile);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    TitleCasePipe,
    RouterModule,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatTooltip,
    MatTabsModule,
    MatTab,
    MatTabGroup,
    MatBadgeModule
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #8B5A2B;\n  --primary-light: #A67C52;\n  --primary-dark: #6B4423;\n  --accent: #D2B48C;\n  --accent-light: #E6D2B8;\n  --accent-dark: #9F8A6E;\n  --text-primary: #3E2723;\n  --text-secondary: #5D4037;\n  --background-light: #F5F0E6;\n  --card-bg: #FFFFFF;\n  --success: #4CAF50;\n  --warning: #FFC107;\n  --danger: #F44336;\n  --info: #2196F3;\n  --light-gray: #EEEEEE;\n  --border-radius: 10px;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0;\n}\n.profile-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      var(--primary) 100%);\n  padding: 30px;\n  border-radius: var(--border-radius);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background: var(--primary-dark);\n  border: 4px solid white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.availability-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.availability-active[_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: white;\n}\n.availability-open[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n  color: var(--text-primary);\n}\n.availability-inactive[_ngcontent-%COMP%] {\n  background-color: var(--danger);\n  color: white;\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 600;\n}\n.profile-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 15px;\n  font-size: 18px;\n  font-weight: 400;\n  opacity: 0.9;\n}\n.profile-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.profile-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.match-score[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.score-circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.score-value[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 28px;\n  font-weight: bold;\n}\n.score-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.score-circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.3);\n  stroke-width: 3;\n}\n.score-circle-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: white;\n  stroke-width: 3;\n  stroke-linecap: round;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 30px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: var(--border-radius);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  margin-bottom: 30px;\n  overflow: hidden;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 16px 0;\n}\n.card-action-btn[_ngcontent-%COMP%] {\n  margin-right: -8px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 0;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.contact-card[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  color: var(--text-secondary);\n}\n.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  width: 20px;\n  text-align: center;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-top: 20px;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--accent-light);\n  color: var(--primary);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  color: white;\n  transform: translateY(-2px);\n}\n.skills-categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.skill-category[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.skill-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\nmat-chip[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n  color: var(--text-primary) !important;\n  font-weight: 500;\n  position: relative;\n  padding-right: 28px !important;\n}\n.skill-level[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.level-beginner[_ngcontent-%COMP%] {\n  background-color: var(--info);\n}\n.level-intermediate[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n.level-expert[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n.timeline[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding-bottom: 30px;\n  position: relative;\n}\n.timeline-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 20px;\n  bottom: 0;\n  width: 2px;\n  background-color: var(--accent);\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: var(--primary);\n  margin-top: 6px;\n  z-index: 1;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.timeline-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary);\n  font-weight: 600;\n  font-size: 16px;\n}\n.timeline-period[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.timeline-company[_ngcontent-%COMP%], \n.timeline-institution[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 5px 0 10px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.company-name[_ngcontent-%COMP%], \n.education-field[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.timeline-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n.activity-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--accent-light);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--primary);\n}\n.activity-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.activity-description[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 5px;\n}\n.activity-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n  .mat-mdc-tab-header {\n  border-bottom: 1px solid var(--accent-light);\n}\n  .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {\n  color: var(--primary);\n  font-weight: 500;\n}\n  .mat-mdc-tab-header .mat-mdc-tab-label-container {\n  padding: 0 16px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n@media screen and (max-width: 992px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .profile-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .match-score[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .profile-header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .timeline-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 5px;\n  }\n  .timeline-company[_ngcontent-%COMP%], \n   .timeline-institution[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 5px;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */'], data: { animation: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(10px)" }),
        animate("400ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ]),
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-20px)" }),
        animate("500ms ease-out", style({ opacity: 1, transform: "translateX(0)" }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/job-seeker/components/profile/profile.component.ts", lineNumber: 781 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-B2FRIHII.js.map
