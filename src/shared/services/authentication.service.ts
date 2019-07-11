import { HttpService, Injectable } from '@nestjs/common';

import { AxiosResponse } from 'axios';
import { UserEntityModel } from '../models/entities/user.entity.model';

@Injectable()
export class AuthenticationService {
    constructor(private readonly httpService: HttpService) {}

    public async getUserDetails(accessToken: string): Promise<AxiosResponse<UserEntityModel>> {
        const applicationUrl = `https://graph.accountkit.com/v1.3/me/`;
        const apiUrl = `${applicationUrl}?access_token=${accessToken}`;

        return await this.httpService.get<UserEntityModel>(apiUrl).toPromise();
    }
}
