export class ValidatedResponse {
    constructor(isValidated: boolean, errorMessages: string[]) {
        this.isValidated = isValidated;
        this.errorMessages = errorMessages;
    }
    isValidated: boolean;
    errorMessages: string[];
}