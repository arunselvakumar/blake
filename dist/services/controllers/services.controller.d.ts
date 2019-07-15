import { GetServicesResponseDto } from '../models/dtos/service/response/get-services.response.dto';
export declare class ServicesController {
    createService(request: Request): Promise<string>;
    getAllServices(): GetServicesResponseDto;
}
