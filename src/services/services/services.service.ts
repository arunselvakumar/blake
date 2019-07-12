import { BadRequestException, Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ServicesMapper } from '../mappers/services.mapper';

import { CreateServiceDtoValidator } from '../validators/createServiceDto.validator';

import { Model } from 'mongoose';

import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';
import { ServiceEntityModel } from '../models/entities/service.entity.model';
import { DB_ERRORS } from '../utils/constants';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel('Service')
        private readonly serviceModel: Model<ServiceEntityModel>,
        private readonly createServiceDtoValidator: CreateServiceDtoValidator,
    ) { }

    public async createService(
        dtoToCreate: CreateServiceRequestDto,
        phoneNumber: string): Promise<ServiceEntityModel[]> {

        const validateResponse = this.createServiceDtoValidator.validate(dtoToCreate);
        if (!validateResponse.isValidated) {
            let errorMessage = ``;
            validateResponse.errorMessages.forEach(em => {
                errorMessage = `${errorMessage} && ${em}`;
            });
            throw new BadRequestException(errorMessage);
        }

        try {
            const serviceEntity = ServicesMapper.mapFromCreateServiceRequestDtoToEntity(dtoToCreate);
            serviceEntity.phone = phoneNumber;
            const createdEntities = [];

            await Promise.all(dtoToCreate.categoryIds.map(async (categoryId) => {
                serviceEntity.categoryId = categoryId;
                const createdEntity = await this.serviceModel.create(serviceEntity);
                createdEntities.push(createdEntity);
            }));

            return createdEntities;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async updateService(entityToCreate: ServiceEntityModel): Promise<ServiceEntityModel> {
        try {
            return await this.serviceModel.create(entityToCreate);
        } catch {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }
}
