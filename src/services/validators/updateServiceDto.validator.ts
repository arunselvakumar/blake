import { ValidatedResponse } from '../../shared/validators/validatedResponse';
import { IValidator } from '../../shared/validators/validtor.interface';
import { UpdateServiceRequestDto } from '../models/dtos/service/request/update-service.request.dto';

export class UpdateServiceDtoValidator implements IValidator<UpdateServiceRequestDto> {
    validate(UpdateServiceRequest: UpdateServiceRequestDto): ValidatedResponse {
        const errorMessages = [];

        if (UpdateServiceRequest.name === null || UpdateServiceRequest.name.trim().length <= 0) {
            errorMessages.push('name cannot be empty');
        }

        if (UpdateServiceRequest.location === null) {
            errorMessages.push('location cannot be empty');
        }

        if (UpdateServiceRequest.location !== null &&
            (UpdateServiceRequest.location.lat < -90 || UpdateServiceRequest.location.lat > 90) &&
            (UpdateServiceRequest.location.long < -180 || UpdateServiceRequest.location.long > 180)) {
            errorMessages.push('location lat should between -90 to 90 and long should between -180 to 180');
        }

        if (UpdateServiceRequest.category === null || UpdateServiceRequest.category.trim().length <= 0) {
            errorMessages.push('atleast one service should be given for a service provider');
        }

        if (errorMessages.length > 0) { return new ValidatedResponse(false, errorMessages); }
        return new ValidatedResponse(true, []);
    }
}
