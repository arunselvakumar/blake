import { Injectable } from '@nestjs/common';
import { HttpclientService } from '../httpclient/httpclient.service';
import { WebRequestBuilder } from '../httpclient/builders/webrequest.builder';
import { Method } from '../httpclient/models/request.model';

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

        var webRequest =
            new WebRequestBuilder(graphQLUrlFormat, Method.GET)
                .withQueryParam("grant_type", "authorization_code")
                .withQueryParam("code", authCode)
                .withQueryParam("access_token", app_access_token)
                .newWebRequest();

        return await
            this.httpService.executeRequest(webRequest).toPromise().then(response => response.data);
    }

    async getAccountDetails(accessToken: string) {
        var meEndPointUrl = "https://graph.accountkit.com/v1.0/me";

        var webRequest =
            new WebRequestBuilder(meEndPointUrl, Method.GET)
                .withQueryParam("access_token", accessToken)
                .newWebRequest();

        return await
            this.httpService.executeRequest(webRequest).toPromise().then(response => response.data);
    }
}
