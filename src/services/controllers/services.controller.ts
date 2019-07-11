import { Controller, Get, Post } from '@nestjs/common';

import { GetServicesResponseDto } from '../models/dtos/get-services.response.dto';

@Controller('api/services')
export class ServicesController {
    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }

    @Post()
    createService(): string {
        return null;
    }
}
