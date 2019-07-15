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
const categories_mapper_1 = require("../mappers/categories.mapper");
const categories_service_1 = require("../services/categories.service");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    createCategory(createCategoryRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const mappedEntity = categories_mapper_1.CategoriesMapper.mapFromCreateCategoryRequestDtoToEntity(createCategoryRequest);
            const serviceResult = yield this.categoriesService.createCategory(mappedEntity);
            return categories_mapper_1.CategoriesMapper.mapFromCategoryEntityToCreateCategoryResponseDto(serviceResult);
        });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceResult = yield this.categoriesService.getAllCategories();
            return serviceResult.map(x => categories_mapper_1.CategoriesMapper.mapFromCategoryEntityToGetCategoryResponseDto(x));
        });
    }
    getCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceResult = yield this.categoriesService.getCategoryById(categoryId);
            return categories_mapper_1.CategoriesMapper.mapFromCategoryEntityToGetCategoryResponseDto(serviceResult);
        });
    }
    updateCategory(categoryId, updateCategoryRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const mappedEntity = categories_mapper_1.CategoriesMapper.mapFromUpdateCategoryRequestDtoToEntity(updateCategoryRequest);
            const serviceResult = yield this.categoriesService.updateCategory(categoryId, mappedEntity);
            return categories_mapper_1.CategoriesMapper.mapFromCategoryEntityToUpdateCategoryResponseDto(serviceResult);
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriesService.deleteCategory(categoryId);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createCategory", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getAllCategories", null);
__decorate([
    common_1.Get(':categoryId'),
    __param(0, common_1.Param('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategory", null);
__decorate([
    common_1.Patch(':categoryId'),
    __param(0, common_1.Param('categoryId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateCategory", null);
__decorate([
    common_1.Delete(':categoryId'),
    __param(0, common_1.Param('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
CategoriesController = __decorate([
    common_1.Controller('api/categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map