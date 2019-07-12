import { IValidator, ValidatedResponse } from '../../shared/validators/validtor.interface';
import { CreateServiceRequestDto } from '../models/dtos/service/request/create-service.requrest.dto';

export class CreateServiceDtoValidator implements IValidator<CreateServiceRequestDto> {
    validate(obj: CreateServiceRequestDto): ValidatedResponse {
        const errorMessages = [];
        if (obj.name == null || obj.name.trim().length <= 0) {
            errorMessages.push('name cannot be empty');
        }

        if (obj.location == null) {
            errorMessages.push('location cannot be empty');
        }

        if (obj.location != null &&
            (obj.location.lat < -90 || obj.location.lat > 90) &&
            (obj.location.long < -180 || obj.location.long > 180)) {
            errorMessages.push('location lat should between -90 to 90 and long should between -180 to 180');
        }

        if (obj.categoryIds == null || obj.categoryIds.length === 0) {
            errorMessages.push('atleast one service should be given for a service provider');
        }

        if (errorMessages.length > 0) { return new ValidatedResponse(false, errorMessages); }
        return new ValidatedResponse(true, []);
    }
}
