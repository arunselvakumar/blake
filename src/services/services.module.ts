import { Module } from '@nestjs/common';

import { ServicesController } from './controller/services.controller';
import { CreateService } from './services/create-service.service';

@Module({
    controllers: [ServicesController],
    providers: [CreateService],
})
export class ServicesModule {}
