import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UserEntityModel } from '../models/entities/user.entity.model';
export declare class AuthorizationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getUserDetails(accessToken: string): Promise<AxiosResponse<UserEntityModel>>;
}
