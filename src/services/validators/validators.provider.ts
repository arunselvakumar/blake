import { Injectable } from '@nestjs/common';

import { CreateServiceDtoValidator } from '../validators/createServiceDto.validator';

import { IEntityUserValidator } from '../../shared/validators/entity-user.validator.interface';
import { IValidatorProvider } from '../../shared/validators/validator.provider.interface';
import { IValidator } from '../../shared/validators/validtor.interface';
import { ServiceEntityUserValidator } from '../validators/serviceEntityUser.validator';
import { UpdateServiceDtoValidator } from './updateServiceDto.validator';

@Injectable()
export class DtoValidatorProvider implements IValidatorProvider {

    private validatorsMap: Map<string, IValidator<any>> = new Map<string, IValidator<any>>();
    private entityUserValidatorsMap: Map<string, IEntityUserValidator<any>> = new Map<string, IEntityUserValidator<any>>();
    constructor(
        createServiceDtoValidator: CreateServiceDtoValidator,
        updateServiceDtoValidator: UpdateServiceDtoValidator,
        serviceEntityUserValidator: ServiceEntityUserValidator) {
        this.validatorsMap.set('CreateServiceRequestDto', createServiceDtoValidator);
        this.validatorsMap.set('UpdateServiceRequestDto', updateServiceDtoValidator);
        this.entityUserValidatorsMap.set('ServiceEntityModel', serviceEntityUserValidator);
    }

    getValidator(validatorKey: string) {
        return this.validatorsMap.get(validatorKey);
    }

    getEntityUserValidator(validatorKey: string): IEntityUserValidator<any> {
        return this.entityUserValidatorsMap.get(validatorKey);
    }
}
