import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { GetServicesResponseDto } from '../models/dtos/service/response/get-services.response.dto';

@Controller('api/services')
export class ServicesController {
    @Post()
    @UseGuards(AuthGuard('bearer'))
    async createService(@Req() request: Request): Promise<string> {
        // @ts-ignore
        const { user } = request;
        return user;
    }

    @Get()
    getAllServices(): GetServicesResponseDto {
        return null;
    }
}
