import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';
import { GetServicesResponseDto } from '../models/dtos/service/response/get-services.response.dto';
import { ServiceEntityModel } from '../models/entities/service.entity.model';
import { ServicesService } from '../services/services.service';

@Controller('api/services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Post()
    @UseGuards(AuthGuard('bearer'))
    async createService(
        @Req() request: Request,
        @Body() createServiceRequestDto: CreateServiceRequestDto): Promise<ServiceEntityModel[]> {
        // @ts-ignore
        const { user } = request;
        const createdServices = await this.servicesService.createService(createServiceRequestDto, user.phone.number);
        return createdServices;
    }

    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }
}
