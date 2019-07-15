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
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../shared/utils/constants");
let ReviewsService = class ReviewsService {
    constructor(reviewModel) {
        this.reviewModel = reviewModel;
    }
    addReview(entityToCreate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.reviewModel.create(entityToCreate);
            }
            catch (_a) {
                throw new common_1.ServiceUnavailableException(constants_1.DB_ERRORS.OfflineError);
            }
        });
    }
    getReviewById(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.reviewModel.findById(reviewId).exec();
            }
            catch (_a) {
                throw new common_1.NotFoundException(constants_1.DB_ERRORS.NotFound);
            }
        });
    }
    getReviewsForService(serviceId, page = 1, limit = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {
                    page: Number(page),
                    limit: Number(limit),
                    sort: { modifiedOn: 'desc' },
                };
                const entityResult = yield this.reviewModel.paginate({ isArchived: false, serviceId }, options);
                return entityResult.docs;
            }
            catch (_a) {
                throw new common_1.NotFoundException(constants_1.DB_ERRORS.NotFound);
            }
        });
    }
    getReviewsForServiceByUserId(serviceId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.reviewModel.find({ serviceId, userId, isArchived: false }).exec();
            }
            catch (_a) {
                return [];
            }
        });
    }
    deleteReview(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entityToBeDeleted = yield this.reviewModel.findById(reviewId).exec();
                entityToBeDeleted.isArchived = true;
                yield this.reviewModel.findByIdAndUpdate(reviewId, entityToBeDeleted);
            }
            catch (_a) {
                throw new common_1.NotFoundException(constants_1.DB_ERRORS.NotFound);
            }
        });
    }
};
ReviewsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Review')),
    __metadata("design:paramtypes", [Object])
], ReviewsService);
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map