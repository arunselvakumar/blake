import { HttpService } from '@nestjs/common';
import { HttpclientService } from '../httpclient/httpclient.service';
export declare class AuthenticationService {
    private httpService;
    private defaultHttpService;
    constructor(httpService: HttpclientService, defaultHttpService: HttpService);
    getAccessToken(authCode: string): Promise<any>;
    getAccountDetails(accessToken: string): Promise<any>;
}
