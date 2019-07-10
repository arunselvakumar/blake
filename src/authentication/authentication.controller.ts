import { Controller, Get, Res, Query, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    /**
     * Constructor
     */
    constructor(private authenticationService: AuthenticationService) {}

    @Get('/userAccessToken')
    async getAccessToken(@Res() res, @Query() query) {
        const accessTokenResponse = await this.authenticationService.getAccessToken(query.authCode);
        return res.status(HttpStatus.OK).json(accessTokenResponse);
    }

    @Get('/accountDetails')
    async getAccountDetails(@Res() res, @Query() query) {
        const accountDetail = await this.authenticationService.getAccountDetails(query.accessToken);
        return res.status(HttpStatus.OK).json(accountDetail);
    }
}
