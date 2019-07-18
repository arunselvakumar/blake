import { ParameterModel } from './paramter.model';

export class WebRequest {
    formatUrl: string;
    urlParams: ParameterModel[] = [];
    queryParams: ParameterModel[] = [];
    httpMethod: Method;

    constructor(formatUrl: string, httpMethod: Method) {
        this.formatUrl = formatUrl;
        this.httpMethod = httpMethod;
    }
}

export enum Method {
    GET,
    POST,
    PUT,
    DELETE,
}
