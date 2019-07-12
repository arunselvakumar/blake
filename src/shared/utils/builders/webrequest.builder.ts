import {WebRequest, Method, ParameterModel} from '../../models/webrequest/webrequest.model';

export class WebRequestBuilder{

    private webRequest: WebRequest;
    private formatUrl : string;

    constructor(formatUrl: string, httpMethod: Method){
        this.webRequest = new WebRequest(formatUrl, httpMethod);
    }

    withUrlParam(key: string, value: string){
        this.webRequest.urlParams.push(new ParameterModel(key, value));
        return this;
    }

    withQueryParam(key: string, value: string){
        this.webRequest.queryParams.push(new ParameterModel(key, value));
        return this;
    }

    newWebRequest(){
        return this.webRequest;
    }
}