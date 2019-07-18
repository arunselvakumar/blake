import { IValidator } from '../validators/validtor.interface';
import { IEntityUserValidator } from './entity-user.validator.interface';

export interface IValidatorProvider {
    getValidator(validatorKey: string): IValidator<any>;
    getEntityUserValidator(validatorKey: string): IEntityUserValidator<any>;
}
