import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesModule } from './services/services.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpclientModule } from './httpclient/httpclient.module';

@Module({
    imports: [
        ServicesModule,
        HttpclientModule,
        AuthenticationModule,
        MongooseModule.forRoot('mongodb://arunselvakumar:abz123@ds052629.mlab.com:52629/blake'),
    ],
})
export class AppModule {}
