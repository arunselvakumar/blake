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
const categories_controller_1 = require("./controllers/categories.controller");
const services_controller_1 = require("./controllers/services.controller");
const category_entity_model_1 = require("./models/entities/category.entity.model");
const categories_service_1 = require("./services/categories.service");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    common_1.Module({
        controllers: [services_controller_1.ServicesController, categories_controller_1.CategoriesController],
        providers: [categories_service_1.CategoriesService],
        imports: [shared_module_1.SharedModule, passport_1.PassportModule, mongoose_1.MongooseModule.forFeature([{ name: 'Category', schema: category_entity_model_1.CategorySchema }])],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map