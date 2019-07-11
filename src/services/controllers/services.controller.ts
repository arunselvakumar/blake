import { Controller, Get, Post, UnauthorizedException } from '@nestjs/common';

import { GetServicesResponseDto } from '../models/dtos/get-services.response.dto';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Controller('api/services')
export class ServicesController {
    constructor(private readonly authenticationService: AuthenticationService) {}

    @Post()
    createService(): string {
        // Replace with https://docs.nestjs.com/techniques/authentication
        if (this.authenticationService.getUserDetails('')) {
        }

        throw new UnauthorizedException();
    }

    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }
}
