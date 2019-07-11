import { Injectable } from '@nestjs/common';
import { HttpclientService } from '../httpclient/httpclient.service';

@Injectable()
export class AuthenticationService {
    /**
     * Constructor
     */
    constructor(
        private httpService: HttpclientService) { }

    async getAccessToken(authCode: string) {
        var app_access_token = ['AA', '2511892505501421', '5895d76ce2aac16fc1aa92e643dd03cb'].join('%7C');
        var graphQLUrlFormat = "https://graph.accountkit.com/v1.0/access_token";
        var queryParam = [
            { key: "grant_type", value: "authorization_code" },
            { key: "code", value: authCode },
            { key: "access_token", value: app_access_token }
        ]
        
        return await this.httpService.get(graphQLUrlFormat, null, queryParam)
            .toPromise().then(res => res.data);
    }

    async getAccountDetails(accessToken: string) {
        var meEndPointUrl = "https://graph.accountkit.com/v1.0/me";
        var queryParam = [
            { key: "access_token", value: accessToken }
        ]

        return await this.httpService.get(meEndPointUrl, null, queryParam)
            .toPromise().then(res => res.data);
    }
}
