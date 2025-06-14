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
exports.Interview = exports.InterviewStatus = void 0;
const typeorm_1 = require("typeorm");
const Application_1 = require("./Application");
var InterviewStatus;
(function (InterviewStatus) {
    InterviewStatus["PENDING"] = "pending";
    InterviewStatus["ACCEPTED"] = "accepted";
    InterviewStatus["REJECTED"] = "rejected";
    InterviewStatus["CANCELLED"] = "cancelled";
})(InterviewStatus || (exports.InterviewStatus = InterviewStatus = {}));
let Interview = class Interview {
};
exports.Interview = Interview;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Interview.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Application_1.Application, application => application.interview),
    __metadata("design:type", Application_1.Application)
], Interview.prototype, "application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Interview.prototype, "scheduledTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: InterviewStatus,
        default: InterviewStatus.PENDING
    }),
    __metadata("design:type", String)
], Interview.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Interview.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Interview.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Interview.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Interview.prototype, "updatedAt", void 0);
exports.Interview = Interview = __decorate([
    (0, typeorm_1.Entity)()
], Interview);
