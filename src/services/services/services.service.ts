import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { ServiceCategoryModel, ServiceEntityModel } from '../models/entities/service.entity.model';
import { DB_ERRORS } from '../utils/constants';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel('Service')
        private readonly serviceModel: Model<ServiceEntityModel>) { }

    public async createService(
        serviceEntity: ServiceEntityModel,
        userId: string): Promise<ServiceEntityModel> {

        try {
            serviceEntity.userId = userId;
            const createdEntity = await this.serviceModel.create(serviceEntity);
            return createdEntity;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async getAllService(userId: string): Promise<ServiceCategoryModel[]> {
        try {
            const userServices = await this.serviceModel.aggregate([{
                $lookup: {
                    from: 'categories',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'Categories',
                },
            },
            { $match: { userId, isArchived: false } },
            ]);

            return userServices;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async updateService(serviceId: string, userId: string, entityToUpdate: ServiceEntityModel): Promise<ServiceEntityModel> {
        try {
            const updatedEntity = await this.serviceModel.findByIdAndUpdate(serviceId, entityToUpdate).exec();
            return updatedEntity;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async deleteService(serviceId: string): Promise<void> {
        try {
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
                        localField: 'categoryId',
                        foreignField: '_id',
                        as: 'Categories',
                    },
                },
                { $match: { isArchived: false, categoryId: new Types.ObjectId(categoryId) } },
            ]).skip(skip).limit(5);

            return nearByServices;
        } catch (e) {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }
}
