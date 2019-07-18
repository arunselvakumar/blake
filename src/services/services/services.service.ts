import { Injectable, NotAcceptableException, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { ServiceCategoryEntityModel } from 'dist/services/models/entities/service.entity.model';
import { DB_ERRORS } from '../../shared/utils/constants';
import { ServicesMapper } from '../mappers/services.mapper';
import { CreateServiceResponseDto } from '../models/dtos/service/response/create-service.response.dto';
import { GetServicesResponseDto } from '../models/dtos/service/response/get-services.response.dto';
import { UpdateServiceResponseDto } from '../models/dtos/service/response/update-service.response.dto';
import { ServiceEntityModel } from '../models/entities/service.entity.model';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel('Service')
        private readonly serviceModel: Model<ServiceEntityModel>,
        @InjectModel('Service')
        private readonly serviceCategoryModel: Model<ServiceCategoryEntityModel>) { }

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

    public async getAllService(userId: string): Promise<GetServicesResponseDto[]> {
        try {
            const services = await this.serviceCategoryModel
                .find({ userId, isArchived: false })
                .populate({ path: 'category', match: { isArchived: false } });

            const allServicesResponse = services
                .filter(service => service.category)
                .map(service => ServicesMapper.mapGetServiceResponseFromEntity(service));

            return allServicesResponse;
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
            const service = await this.serviceModel.findById(serviceId).exec();
            service.isArchived = true;
            await this.serviceModel.findByIdAndUpdate(serviceId, service).exec();
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async getNearbyService(
        categoryId: string,
        lat: number,
        long: number,
        skip: number,
        withIn: number): Promise<ServiceEntityModel[]> {
        try {
            const nearByServices = await this.serviceModel.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: 'Point',
                            coordinates: [parseFloat(long.toString()), parseFloat(lat.toString())],
                        },
                        distanceField: 'dist.calculated',
                        distanceMultiplier: 0.001,
                        maxDistance: withIn,
                        spherical: true,
                    },
                },
                {
                    $lookup: {
                        from: 'categories',
                        localField: 'category',
                        foreignField: '_id',
                        as: 'Categories',
                    },
                },
                {
                    $match: {
                        isArchived: false,
                        category: new Types.ObjectId(categoryId),
                    },
                },
            ]).skip(skip).limit(5);

            return nearByServices;
        } catch (e) {
            console.log(e);
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    private async validateUser(serviceId: string, userId: string) {
        const currentService = await this.serviceModel.findById(serviceId);

        if (currentService.userId !== userId) {
            throw new NotAcceptableException('Cannot modify other user service');
        }
    }
}
