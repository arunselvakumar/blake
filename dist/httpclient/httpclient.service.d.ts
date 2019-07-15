import { HttpService } from '@nestjs/common';
export declare class HttpclientService {
    private httpService;
    constructor(httpService: HttpService);
    get(urlFormat: string, params: {
        key: string;
        value: string;
    }[], queryparams: {
        key: string;
        value: string;
    }[]): import("rxjs").Observable<import("axios").AxiosResponse<any>>;
}
