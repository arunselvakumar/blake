import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Request, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { ServicesMapper } from '../mappers/services.mapper';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';
import { UpdateServiceRequestDto } from '../models/dtos/service/request/update-service.request.dto';
import { ServiceCategoryModel, ServiceEntityModel } from '../models/entities/service.entity.model';
import { ServicesService } from '../services/services.service';
import { ValidatorProvider } from '../validators/validators.provider';

@Controller('api/services')
export class ServicesController {
    constructor(
        private readonly servicesService: ServicesService,
        private readonly validatorProvider: ValidatorProvider) { }

    @Post()
    @UseGuards(AuthGuard('bearer'))
    async createService(
        @Req() request: Request,
        @Body() createServiceRequestDto: CreateServiceRequestDto): Promise<ServiceEntityModel> {
        // @ts-ignore
        const { user } = request;

        this.validate('CreateServiceRequestDto', createServiceRequestDto);

        const serviceEntity = ServicesMapper.mapFromCreateServiceRequestDtoToEntity(createServiceRequestDto);

        const createdServices = await this.servicesService.createService(
            serviceEntity,
            user.id);
        return createdServices;
    }

    @Get()
    @UseGuards(AuthGuard('bearer'))
    async getAllServices(@Req() request: Request): Promise<ServiceCategoryModel[]> {
        // @ts-ignore
        const { user } = request;
        const services = await this.servicesService.getAllService(user.id);
        return services;
    }

    @Patch(':serviceId')
    @UseGuards(AuthGuard('bearer'))
    async updateService(
        @Param('serviceId') serviceId: string,
        @Req() request: Request,
        @Body() updateServiceRequestDto: UpdateServiceRequestDto): Promise<ServiceEntityModel> {
        // @ts-ignore
        const { user } = request;

        this.validate('UpdateServiceRequestDto', updateServiceRequestDto);

        const serviceEntity = ServicesMapper.mapFromUpdateServiceRequestDtoToEntity(updateServiceRequestDto);

        const updatedServices = await this.servicesService.updateService(
            serviceId,
            user.id,
            serviceEntity);
        return updatedServices;
    }

    @Delete(':serviceId')
    @UseGuards(AuthGuard('bearer'))
    async deleteService(
        @Param('serviceId') serviceId: string,
        @Req() request: Request): Promise<void> {
        // @ts-ignore
        const { user } = request;

        return await this.servicesService.deleteService(serviceId);
    }

    @Get('/nearby/:categoryId')
    async getNearyByServices(
        @Query() query,
        @Param('categoryId') categoryId: string) {
        const withInKm = parseInt(query.withIn, 2) * 1000; // user can give withIn in form of km (ex: withIn: 2km -> 2000m)
        const skipResult = parseInt(query.skip, 2);
        return await this.servicesService
            .getNearbyService(categoryId, query.lat, query.long, skipResult, withInKm);
    }

    private validate(validatorKey: string, dto: any) {
        const validateResponse = this.validatorProvider
            .getValidator(validatorKey)
            .validate(dto);

        if (!validateResponse.isValidated) {
            throw new BadRequestException(validateResponse.errorMessages);
        }
    }
}
