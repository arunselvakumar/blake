import { ValidatedResponse } from '../validators/validatedResponse';

export interface IValidator<T> {
    validate(obj: T): ValidatedResponse;
}
