import { HttpModule, Module } from '@nestjs/common';

import { AuthenticationService } from './services/authentication.service';

@Module({
    providers: [AuthenticationService],
    imports: [HttpModule],
    exports: [AuthenticationService],
})
export class SharedModule {}
