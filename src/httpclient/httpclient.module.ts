import { Module, HttpModule } from '@nestjs/common';
import { HttpclientService } from './httpclient.service';

@Module({
  imports:[HttpModule],
  providers: [HttpclientService],
  exports:[HttpclientService]
})
export class HttpclientModule {}
