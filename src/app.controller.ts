import { Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post()
    saveHello(): string {
        return 'Hello World';
    }

    @Patch()
    updateHello(): string {
        return 'New Hello World';
    }
}
