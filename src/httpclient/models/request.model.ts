export class WebRequest {
    formatUrl: string;
    urlParams: ParameterModel[] = [];
    queryParams: ParameterModel[] = [];    
    httpMethod: Method;

    constructor(formatUrl: string, httpMethod: Method){
        this.formatUrl = formatUrl;
        this.httpMethod = httpMethod;
    }
}

export enum Method{
    GET,
    POST,
    PUT,
    DELETE
}

export class ParameterModel{
    key: string;
    value: string;

    constructor(key: string, value: string){
        this.key = key;
        this.value = value;
    }
}
