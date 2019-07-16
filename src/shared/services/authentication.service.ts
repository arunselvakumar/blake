import { HttpService, Injectable } from '@nestjs/common';

import { AxiosResponse } from 'axios';
import { UserIdentityEntityModel } from '../models/entities/user-identity.entity.model';

@Injectable()
export class AuthenticationService {
    constructor(private readonly httpService: HttpService) {}

    public async getUserDetails(accessToken: string): Promise<AxiosResponse<UserIdentityEntityModel>> {
        const applicationUrl = `https://graph.accountkit.com/v1.3/me/`;
        const apiUrl = `${applicationUrl}?access_token=${accessToken}`;

        return await this.httpService.get<UserIdentityEntityModel>(apiUrl).toPromise();
    }
}
