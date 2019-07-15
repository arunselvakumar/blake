import { GetServicesResponseDto } from '../models/dtos/get-services.response.dto';
import { CreateService } from '../services/create-service.service';
export declare class ServicesController {
    private readonly foo;
    constructor(foo: CreateService);
    getAllServices(): GetServicesResponseDto;
    createService(): string;
}
