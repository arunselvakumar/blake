import { Controller, Get, Res, Query, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('api/authentication')
export class AuthenticationController {
    /**
     * Constructor
     */
    constructor(private authenticationService: AuthenticationService) {}

    @Get('/userAccessToken')
    async getAccessToken(@Query() query) {
        const accessTokenResponse = await this.authenticationService.getAccessToken(query.authCode);
        return accessTokenResponse;
    }

    @Get('/accountDetails')
    async getAccountDetails(@Query() query) {
        const accountDetail = await this.authenticationService.getAccountDetails(query.accessToken);
        return accountDetail;
    }
}
