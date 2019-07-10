import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpclientModule } from './httpclient/httpclient.module';

@Module({
  imports: [AuthenticationModule, HttpclientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
