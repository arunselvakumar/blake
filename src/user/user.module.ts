import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { SharedModule } from '../shared/shared.module';
import { UsersController } from './controllers/users.controller';

@Module({
    controllers: [UsersController],
    imports: [SharedModule, PassportModule],
})
export class UserModule {}
