import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserSchema } from './models/entities/user.entity.model';

import { AuthenticationService } from './services/authentication.service';
import { BearerAuthenticationStrategy } from './services/bearer-authentication.strategy.service';
import { UserService } from './services/user.service';

@Module({
    providers: [AuthenticationService, BearerAuthenticationStrategy, UserService],
    imports: [
        HttpModule,
        PassportModule.register({ defaultStrategy: 'bearer' }),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    exports: [AuthenticationService, BearerAuthenticationStrategy, UserService, PassportModule],
})
export class SharedModule {}
