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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const validator = require("validator");
const reviews_service_1 = require("../services/reviews.service");
let AddReviewsValidator = class AddReviewsValidator {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
        this.isToday = (date) => {
            const today = new Date();
            return (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear());
        };
    }
    validate(serviceId, userId, addReviewRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const MAX_REVIEWS_PER_DAY = 3;
            if (validator.isEmpty(serviceId) || validator.isEmpty(userId)) {
                throw new common_1.BadRequestException();
            }
            if (addReviewRequest.rating && (addReviewRequest.rating < 0 || addReviewRequest.rating > 5)) {
                throw new common_1.BadRequestException();
            }
            if (addReviewRequest.content && (addReviewRequest.content.length < 9 || addReviewRequest.content.length > 999)) {
                throw new common_1.BadRequestException();
            }
            const serviceResult = yield this.reviewsService.getReviewsForServiceByUserId(serviceId, userId);
            if (serviceResult.length > 0 && serviceResult.filter(x => this.isToday(x.modifiedOn)).length > MAX_REVIEWS_PER_DAY) {
                throw new common_1.BadRequestException();
            }
        });
    }
};
AddReviewsValidator = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], AddReviewsValidator);
exports.AddReviewsValidator = AddReviewsValidator;
//# sourceMappingURL=add-reviews.validator.js.map