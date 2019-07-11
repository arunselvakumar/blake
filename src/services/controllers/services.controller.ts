import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { GetServicesResponseDto } from '../models/dtos/get-services.response.dto';

@Controller('api/services')
export class ServicesController {
    @Post()
    @UseGuards(AuthGuard('bearer'))
    async createService(@Res() request: Request): Promise<string> {
        console.log(request);

        return null;
    }

    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }
}
