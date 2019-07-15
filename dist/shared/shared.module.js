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
const user_entity_model_1 = require("./models/entities/user.entity.model");
const authentication_service_1 = require("./services/authentication.service");
const bearer_authentication_strategy_service_1 = require("./services/bearer-authentication.strategy.service");
const user_service_1 = require("./services/user.service");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Module({
        providers: [authentication_service_1.AuthenticationService, bearer_authentication_strategy_service_1.BearerAuthenticationStrategy, user_service_1.UserService],
        imports: [
            common_1.HttpModule,
            passport_1.PassportModule.register({ defaultStrategy: 'bearer' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_entity_model_1.UserSchema }]),
        ],
        exports: [authentication_service_1.AuthenticationService, bearer_authentication_strategy_service_1.BearerAuthenticationStrategy, user_service_1.UserService, passport_1.PassportModule],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map