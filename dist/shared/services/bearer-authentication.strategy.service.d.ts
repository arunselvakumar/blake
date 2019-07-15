import { UserIdentityEntityModel } from '../models/entities/user-identity.entity.model';
import { AuthenticationService } from './authentication.service';
declare const BearerAuthenticationStrategy_base: new (...args: any[]) => any;
export declare class BearerAuthenticationStrategy extends BearerAuthenticationStrategy_base {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    validate(token: string): Promise<UserIdentityEntityModel>;
}
export {};
