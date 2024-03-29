import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReviewModule } from './reviews/review.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        ReviewModule,
        ServicesModule,
        MongooseModule.forRoot('mongodb://arunselvakumar:abz123@ds052629.mlab.com:52629/blake'),
        SharedModule,
    ],
})
export class AppModule {}
