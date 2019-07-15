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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const passport_1 = require("@nestjs/passport");
const reviews_adapter_1 = require("../adapters/reviews.adapter");
const reviews_mapper_1 = require("../mappers/reviews.mapper");
const reviews_service_1 = require("../services/reviews.service");
let ReviewsController = class ReviewsController {
    constructor(reviewsService, reviewsAdapter) {
        this.reviewsService = reviewsService;
        this.reviewsAdapter = reviewsAdapter;
    }
    addReviewForService(serviceId, request, addReviewRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = request;
            const addReviewEntity = this.reviewsAdapter.getReviewsEntityModel(user.id, serviceId, addReviewRequest);
            const serviceResult = yield this.reviewsService.addReview(addReviewEntity);
            return reviews_mapper_1.ReviewsMapper.mapFromReviewEntityToAddReviewResponseDto(serviceResult);
        });
    }
    getReviewsForService(serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceResult = yield this.reviewsService.getReviewsForService(serviceId);
            return serviceResult.map(data => reviews_mapper_1.ReviewsMapper.mapFromReviewEntityToGetReviewResponseDto(data));
        });
    }
    deleteReview(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reviewsService.deleteReview(reviewId);
        });
    }
};
__decorate([
    common_1.Post(':serviceId'),
    common_1.UseGuards(passport_1.AuthGuard('bearer')),
    __param(0, common_1.Param('serviceId')),
    __param(1, common_1.Req()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "addReviewForService", null);
__decorate([
    common_1.Get(':serviceId'),
    __param(0, common_1.Param('serviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "getReviewsForService", null);
__decorate([
    common_1.Delete(':reviewId'),
    common_1.UseGuards(passport_1.AuthGuard('bearer')),
    __param(0, common_1.Param('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "deleteReview", null);
ReviewsController = __decorate([
    common_1.Controller('api/reviews'),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService, reviews_adapter_1.ReviewsAdapter])
], ReviewsController);
exports.ReviewsController = ReviewsController;
//# sourceMappingURL=reviews.controller.js.map