import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import { WebRequest, Method } from './models/request.model';

@Injectable()
export class HttpclientService {
    constructor(private httpService: HttpService) { }

    executeRequest(webRequest: WebRequest){
        switch(webRequest.httpMethod){
            case Method.GET:
                return this.executeGet(webRequest);
            default:
                throw new HttpException("Not Implemented", HttpStatus.NOT_IMPLEMENTED);
        }
    }

    private formatUrl(webRequest: WebRequest){
        var params = webRequest.urlParams;
        var urlFormat = webRequest.formatUrl;
        var queryparams = webRequest.queryParams;

        params.forEach(param => {
            var formattedParam = "{" + param.key + "}";
            if (urlFormat.indexOf(formattedParam) > 0) {
                urlFormat = urlFormat.replace(formattedParam, param.value)
            }
            else {
                throw new HttpException('Invalid Url', HttpStatus.BAD_REQUEST);
            }
        });
        if (queryparams) {
            var queryParamArray = [];
            queryparams.forEach(qParam => {
                queryParamArray.push(qParam.key + "=" + qParam.value);
            });
            var qParams = queryParamArray.join("&");
            urlFormat = urlFormat + "?" + qParams;
        }

        return urlFormat;
    }

    private executeGet(webRequest: WebRequest){
        var formattedUrl = this.formatUrl(webRequest);
        return this.httpService.get(formattedUrl);
    }    
}

