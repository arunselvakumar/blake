import { AuthenticationService } from './authentication.service';
export declare class AuthenticationController {
    private authenticationService;
    constructor(authenticationService: AuthenticationService);
    getAccessToken(res: any, query: any): Promise<any>;
    getAccountDetails(res: any, query: any): Promise<any>;
}
