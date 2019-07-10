import { Controller, Get, Post } from '@nestjs/common';

import { GetServicesResponseDto } from '../models/dtos/get-services.response.dto';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Controller('api/services')
export class ServicesController {
    constructor(private readonly authenticationService: AuthenticationService) {}

    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }

    @Post()
    createService(): string {
        return null;
    }
}
