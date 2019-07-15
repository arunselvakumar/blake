import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-http-bearer';

import { UserIdentityEntityModel } from '../models/entities/user-identity.entity.model';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class BearerAuthenticationStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authenticationService: AuthenticationService) {
        super();
    }

    public async validate(token: string): Promise<UserIdentityEntityModel> {
        const user = await this.authenticationService.getUserDetails(token);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user.data;
    }
}
