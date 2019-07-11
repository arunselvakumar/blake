import { HttpModule, Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './services/authentication.service';
import { BearerAuthenticationStrategy } from './services/bearer-authentication.strategy.service';

@Module({
    providers: [AuthenticationService, BearerAuthenticationStrategy],
    imports: [HttpModule, PassportModule.register({ defaultStrategy: 'bearer' })],
    exports: [AuthenticationService, BearerAuthenticationStrategy, PassportModule],
})
export class SharedModule {}
