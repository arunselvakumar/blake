import { Injectable } from '@nestjs/common';

import { CreateServiceDtoValidator } from '../validators/createServiceDto.validator';

import { IValidatorProvider } from '../../shared/validators/validator.provider.interface';
import { IValidator } from '../../shared/validators/validtor.interface';
import { UpdateServiceDtoValidator } from './updateServiceDto.validator';

@Injectable()
export class DtoValidatorProvider implements IValidatorProvider {

    private validatorsMap: Map<string, IValidator<any>> = new Map<string, IValidator<any>>();
    constructor(
        createServiceDtoValidator: CreateServiceDtoValidator,
        updateServiceDtoValidator: UpdateServiceDtoValidator) {
        this.validatorsMap.set('CreateServiceRequestDto', createServiceDtoValidator);
        this.validatorsMap.set('UpdateServiceRequestDto', updateServiceDtoValidator);
     }

     getValidator(validatorKey: string) {
         return this.validatorsMap.get(validatorKey);
     }
}
