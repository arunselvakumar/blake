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
const mongoose_2 = require("mongoose");
const constants_1 = require("../../shared/utils/constants");
let CategoriesService = class CategoriesService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    createCategory(entityToCreate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.create(entityToCreate);
            }
            catch (_a) {
                throw new common_1.ServiceUnavailableException(constants_1.DB_ERRORS.OfflineError);
            }
        });
    }
    getCategoryById(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.findById(categoryId).exec();
            }
            catch (_a) {
                throw new common_1.NotFoundException(constants_1.DB_ERRORS.NotFound);
            }
        });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.find({ isArchived: false }).exec();
            }
            catch (_a) {
                throw new common_1.ServiceUnavailableException(constants_1.DB_ERRORS.OfflineError);
            }
        });
    }
    updateCategory(categoryId, entityToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.categoryModel.findByIdAndUpdate(categoryId, entityToUpdate).exec();
            }
            catch (_a) {
                throw new common_1.NotFoundException(constants_1.DB_ERRORS.NotFound);
            }
            return yield this.categoryModel.findById(categoryId);
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entityToBeDeleted = yield this.categoryModel.findById(categoryId).exec();
                entityToBeDeleted.isArchived = true;
                yield this.categoryModel.findByIdAndUpdate(categoryId, entityToBeDeleted);
            }
            catch (_a) {
                throw new common_1.NotFoundException(constants_1.DB_ERRORS.NotFound);
            }
        });
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map