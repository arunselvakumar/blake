import { Body, Controller, Get, Post } from '@nestjs/common';

import { GetServicesResponseDto } from '../models/dtos/get-services.response.dto';
import { CreateService } from '../services/create-service.service';

@Controller('services')
export class ServicesController {
    constructor(private readonly foo: CreateService) {}

    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }

    @Post()
    createService(): string {
        return null;
    }
}
