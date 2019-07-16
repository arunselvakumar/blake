import { IValidator } from '../validators/validtor.interface';

export interface IValidatorProvider {
    getValidator(validatorKey: string): IValidator<any>;
}
