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
const users_mapper_1 = require("../../shared/mappers/users.mapper");
const user_service_1 = require("../../shared/services/user.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    updateUser(userId, request, updateUserRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = request;
            if (userId !== user.id) {
                throw new common_1.BadRequestException();
            }
            updateUserRequest.id = userId;
            const mappedEntity = users_mapper_1.UsersMapper.mapFromUpdateUserRequestDtoToEntity(updateUserRequest);
            const serviceResult = yield this.userService.updateUser(mappedEntity);
            return users_mapper_1.UsersMapper.mapFromUserEntityToUpdateUserResponseDto(serviceResult);
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceResult = yield this.userService.getUserByUserId(userId);
            return users_mapper_1.UsersMapper.mapFromUserEntityToGetUserResponseDto(serviceResult);
        });
    }
};
__decorate([
    common_1.Patch(':userId'),
    common_1.UseGuards(passport_1.AuthGuard('bearer')),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Req()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Get(':userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
UsersController = __decorate([
    common_1.Controller('api/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map