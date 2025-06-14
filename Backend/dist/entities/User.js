"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const Job_1 = require("./Job");
const Application_1 = require("./Application");
const Portfolio_1 = require("./Portfolio");
const CV_1 = require("./CV");
const Experience_1 = require("./Experience");
const Education_1 = require("./Education");
const chatMessage_1 = require("./chatMessage");
const Skill_1 = require("./Skill");
const Careerpath_1 = require("./Careerpath");
var UserRole;
(function (UserRole) {
    UserRole["JOB_SEEKER"] = "job_seeker";
    UserRole["EMPLOYER"] = "employer";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserRole,
        default: UserRole.JOB_SEEKER,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Job_1.Job, (job) => job.employer),
    __metadata("design:type", Array)
], User.prototype, "jobs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Skill_1.Skill, (skill) => skill.users),
    __metadata("design:type", Array)
], User.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Application_1.Application, (application) => application.user),
    __metadata("design:type", Array)
], User.prototype, "applications", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Portfolio_1.Portfolio, (portfolio) => portfolio.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Portfolio_1.Portfolio)
], User.prototype, "portfolio", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CV_1.CV, (cv) => cv.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", CV_1.CV)
], User.prototype, "cv", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Experience_1.Experience, (experience) => experience.user),
    __metadata("design:type", Array)
], User.prototype, "experiences", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Education_1.Education, (education) => education.user),
    __metadata("design:type", Array)
], User.prototype, "educations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chatMessage_1.ChatMessage, (chatMessage) => chatMessage.user),
    __metadata("design:type", Array)
], User.prototype, "chatMessages", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Careerpath_1.CareerPath, (careerPath) => careerPath.user),
    __metadata("design:type", Array)
], User.prototype, "careerPaths", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
