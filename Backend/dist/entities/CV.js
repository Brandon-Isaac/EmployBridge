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
exports.CV = exports.CVStatus = exports.CVType = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
var CVType;
(function (CVType) {
    CVType["CV"] = "cv";
    CVType["COVER_LETTER"] = "cover_letter";
    CVType["RESUME"] = "resume";
})(CVType || (exports.CVType = CVType = {}));
var CVStatus;
(function (CVStatus) {
    CVStatus["DRAFT"] = "draft";
    CVStatus["PUBLISHED"] = "published";
    CVStatus["ARCHIVED"] = "archived";
})(CVStatus || (exports.CVStatus = CVStatus = {}));
let CV = class CV {
};
exports.CV = CV;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CV.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, (user) => user.cv),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_1.User)
], CV.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CV.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CV.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CVType,
        default: CVType.CV
    }),
    __metadata("design:type", String)
], CV.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CVStatus,
        default: CVStatus.DRAFT
    }),
    __metadata("design:type", String)
], CV.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], CV.prototype, "extractedSkills", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CV.prototype, "uploadedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CV.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CV.prototype, "updatedAt", void 0);
exports.CV = CV = __decorate([
    (0, typeorm_1.Entity)()
], CV);
