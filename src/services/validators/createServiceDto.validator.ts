import { ValidatedResponse } from '../../shared/validators/validatedResponse';
import { IValidator } from '../../shared/validators/validtor.interface';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';

export class CreateServiceDtoValidator implements IValidator<CreateServiceRequestDto> {
    validate(createserviceRequest: CreateServiceRequestDto): ValidatedResponse {
        const errorMessages = [];
        if (createserviceRequest.name === null || createserviceRequest.name.trim().length <= 0) {
            errorMessages.push('name cannot be empty');
        }

        if (createserviceRequest.location === null) {
            errorMessages.push('location cannot be empty');
        }

        if (createserviceRequest.location !== null &&
            (createserviceRequest.location.lat < -90 || createserviceRequest.location.lat > 90) &&
            (createserviceRequest.location.long < -180 || createserviceRequest.location.long > 180)) {
            errorMessages.push('location lat should between -90 to 90 and long should between -180 to 180');
        }

        if (createserviceRequest.category === null || createserviceRequest.category.trim().length <= 0) {
            errorMessages.push('atleast one service should be given for a service provider');
        }

        if (errorMessages.length > 0) { return new ValidatedResponse(false, errorMessages); }
        return new ValidatedResponse(true, []);
    }
}
