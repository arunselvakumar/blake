import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEntityUserValidator } from '../../shared/validators/entity-user.validator.interface';
import { ValidatedResponse } from '../../shared/validators/validatedResponse';
import { ServiceEntityModel } from '../models/entities/service.entity.model';

export class ServiceEntityUserValidator implements IEntityUserValidator<ServiceEntityModel> {
    async validate(
        serviceModel: Model<ServiceEntityModel>,
        entityId: string,
        userId: string): Promise<ValidatedResponse> {

        const entity = await serviceModel.findById(entityId);
        if (entity && entity.userId === userId) {
            return new ValidatedResponse(true, []);
        }

        return new ValidatedResponse(false, ['Other user information cannot be modified']);
    }
}
