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
const common_1 = require("@nestjs/common");
let HttpclientService = class HttpclientService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    get(urlFormat, params, queryparams) {
        if (params) {
            params.forEach(param => {
                var formattedParam = "{" + param.key + "}";
                if (urlFormat.indexOf(formattedParam) > 0) {
                    urlFormat = urlFormat.replace(formattedParam, param.value);
                }
                else {
                    throw new common_1.HttpException('Invalid Url', common_1.HttpStatus.BAD_REQUEST);
                }
            });
        }
        if (queryparams) {
            var queryParamArray = [];
            queryparams.forEach(qParam => {
                queryParamArray.push(qParam.key + "=" + qParam.value);
            });
            var qParams = queryParamArray.join("&");
            urlFormat = urlFormat + "?" + qParams;
        }
        return this.httpService.get(urlFormat);
    }
};
HttpclientService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], HttpclientService);
exports.HttpclientService = HttpclientService;
//# sourceMappingURL=httpclient.service.js.map