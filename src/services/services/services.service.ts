import { Injectable, NotAcceptableException, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { DB_ERRORS } from '../../shared/utils/constants';
import { ServicesMapper } from '../mappers/services.mapper';
import { CreateServiceResponseDto } from '../models/dtos/service/response/create-service.response.dto';
import { GetNearbyServiceResponseDto } from '../models/dtos/service/response/get-nearby-services.response.dto';
import { GetServicesResponseDto } from '../models/dtos/service/response/get-services.response.dto';
import { UpdateServiceResponseDto } from '../models/dtos/service/response/update-service.response.dto';
import { NearbyServiceEntityModel } from '../models/entities/nearby-service.entity.model';
import { ServiceCategoryEntityModel } from '../models/entities/service-category.entity.model';
import { ServiceEntityModel } from '../models/entities/service.entity.model';
import { DtoValidatorProvider } from '../validators/validators.provider';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel('Service')
        private readonly serviceModel: Model<ServiceEntityModel>,
        @InjectModel('Service')
        private readonly serviceCategoryModel: Model<ServiceCategoryEntityModel>,
        @InjectModel('Service')
        private readonly nearbyServiceModel: Model<NearbyServiceEntityModel>,
        private readonly validatorProvider: DtoValidatorProvider) { }

    public async getAllService(userId: string): Promise<GetServicesResponseDto[]> {
        try {
            const serviceEntities = await this.serviceCategoryModel
                .find({ userId, isArchived: false })
                .populate({ path: 'category', match: { isArchived: false } });

            const allServicesResponse = serviceEntities
                .filter(service => service.category)
                .map(service => ServicesMapper.mapGetServiceResponseFromEntity(service));

            return allServicesResponse;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async createService(
        serviceEntity: ServiceEntityModel,
        userId: string): Promise<CreateServiceResponseDto> {

        try {
            serviceEntity.userId = userId;

            const createdEntity = await this.serviceModel.create(serviceEntity);
            const createServiceResponseDto = ServicesMapper.mapCreateServiceResponseDtoFromEntity(createdEntity);

            return createServiceResponseDto;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async updateService(serviceId: string, userId: string, entityToUpdate: ServiceEntityModel): Promise<UpdateServiceResponseDto> {
        try {
            await this.validateUser(serviceId, userId);
            const updatedEntity = await this.serviceModel.findByIdAndUpdate(serviceId, entityToUpdate).exec();
            const updateServiceResponseDto = ServicesMapper.mapUpdateServiceResponseDtoFromEntity(updatedEntity);
            return updateServiceResponseDto;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async deleteService(serviceId: string, userId): Promise<void> {
        try {
            await this.validateUser(serviceId, userId);
            const deletedEntity = await this.serviceModel.findById(serviceId).exec();
            deletedEntity.isArchived = true;
            await this.serviceModel.findByIdAndUpdate(serviceId, deletedEntity).exec();
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async getNearbyService(
        categoryId: string,
        lat: number,
        long: number,
        skip: number,
        range: number): Promise<GetNearbyServiceResponseDto[]> {
        try {
            const nearByServices = await this.nearbyServiceModel.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: 'Point',
                            coordinates: [parseFloat(long.toString()), parseFloat(lat.toString())],
                        },
                        distanceField: 'dist.calculated',
                        distanceMultiplier: 0.001,
                        maxDistance: range,
                        spherical: true,
                    },
                },
                {
                    $lookup: {
                        from: 'categories',
                        as: 'Category',
                        let: { category: '$category' },
                        pipeline: [{
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ['$_id', '$$category'] },
                                        { $eq: ['$isArchived', 'false'] },
                                    ],
                                },
                            },
                        }],
                    },
                },
                { $unwind: '$Category' },
                {
                    $match: {
                        isArchived: false,
                        category: new Types.ObjectId(categoryId),
                    },
                },
            ]).skip(skip).limit(5);
            const nearByServicesResponse = nearByServices.map(service => ServicesMapper.mapGetNearByServiceResponseFromEntity(service));
            return nearByServicesResponse;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    private async validateUser(entityId: string, userId: string) {
        const validatedResponse = await this.validatorProvider
            .getEntityUserValidator('ServiceEntityModel')
            .validate(this.serviceModel, entityId, userId);

        if (!validatedResponse.isValidated) {
            throw new NotAcceptableException(validatedResponse.errorMessages);
        }
    }
}
