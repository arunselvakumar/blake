import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UserIdentityEntityModel } from '../models/entities/user-identity.entity.model';
export declare class AuthenticationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getUserDetails(accessToken: string): Promise<AxiosResponse<UserIdentityEntityModel>>;
}
