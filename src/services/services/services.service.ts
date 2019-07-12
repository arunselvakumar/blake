import { NotFoundException, ServiceUnavailableException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ServiceEntityModel } from '../models/entities/service.entity.model';
import { DB_ERRORS } from '../utils/constants';

@Injectable()
export class ServicesService{
    constructor(
        @InjectModel('Service')
        private readonly serviceModel: Model<ServiceEntityModel>,
    ) {}

    public async createService(entityToCreate: ServiceEntityModel): Promise<ServiceEntityModel> {
        try {
            return await this.serviceModel.create(entityToCreate);
        } catch {
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

