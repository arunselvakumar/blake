"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const shared_module_1 = require("../shared/shared.module");
const reviews_adapter_1 = require("./adapters/reviews.adapter");
const reviews_controller_1 = require("./controllers/reviews.controller");
const review_entity_model_1 = require("./models/entities/review.entity.model");
const reviews_service_1 = require("./services/reviews.service");
let ReviewModule = class ReviewModule {
};
ReviewModule = __decorate([
    common_1.Module({
        controllers: [reviews_controller_1.ReviewsController],
        providers: [reviews_service_1.ReviewsService, reviews_adapter_1.ReviewsAdapter],
        imports: [shared_module_1.SharedModule, passport_1.PassportModule, mongoose_1.MongooseModule.forFeature([{ name: 'Review', schema: review_entity_model_1.ReviewSchema }])],
    })
], ReviewModule);
exports.ReviewModule = ReviewModule;
//# sourceMappingURL=review.module.js.map