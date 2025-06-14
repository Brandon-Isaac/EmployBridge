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
exports.Application = exports.ApplicationStatus = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Job_1 = require("./Job");
const Interview_1 = require("./Interview");
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["PENDING"] = "PENDING";
    ApplicationStatus["REVIEWED"] = "REVIEWED";
    ApplicationStatus["INTERVIEW"] = "INTERVIEW";
    ApplicationStatus["ACCEPTED"] = "ACCEPTED";
    ApplicationStatus["REJECTED"] = "REJECTED";
})(ApplicationStatus || (exports.ApplicationStatus = ApplicationStatus = {}));
let Application = class Application {
};
exports.Application = Application;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Application.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Application.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Job_1.Job),
    __metadata("design:type", Job_1.Job)
], Application.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Application.prototype, "coverLetter", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['PENDING', 'REVIEWED', 'INTERVIEW', 'ACCEPTED', 'REJECTED'],
        default: ApplicationStatus.PENDING
    }),
    __metadata("design:type", String)
], Application.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Interview_1.Interview, interview => interview.application),
    __metadata("design:type", Interview_1.Interview)
], Application.prototype, "interview", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Application.prototype, "interviewDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Application.prototype, "matchScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Application.prototype, "appliedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Application.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Application.prototype, "updatedAt", void 0);
exports.Application = Application = __decorate([
    (0, typeorm_1.Entity)()
], Application);
