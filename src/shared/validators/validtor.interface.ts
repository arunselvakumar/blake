export interface IValidator<T> {
    validate(obj: T): ValidatedResponse;
}

export class ValidatedResponse {
    constructor(isValidated: boolean, errorMessages: string[]) {
        this.isValidated = isValidated;
        this.errorMessages = errorMessages;
    }
    isValidated: boolean;
    errorMessages: string[];
}
