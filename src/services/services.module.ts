import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateServiceDtoValidator } from '../services/validators/createServiceDto.validator';

import { PassportModule } from '@nestjs/passport';
import { SharedModule } from '../shared/shared.module';
import { CategoriesController } from './controllers/categories.controller';
import { ServicesController } from './controllers/services.controller';
import { CategorySchema } from './models/entities/category.entity.model';
import { ServiceEntitySchema } from './models/entities/service.entity.model';
import { CategoriesService } from './services/categories.service';
import { ServicesService } from './services/services.service';
import { ServiceEntityUserValidator } from './validators/serviceEntityUser.validator';
import { UpdateServiceDtoValidator } from './validators/updateServiceDto.validator';
import { DtoValidatorProvider } from './validators/validators.provider';

@Module({
    controllers: [ServicesController, CategoriesController],
    providers: [
        CreateServiceDtoValidator,
        CategoriesService,
        ServicesService,
        UpdateServiceDtoValidator,
        DtoValidatorProvider,
        ServiceEntityUserValidator,
    ],
    imports: [
        SharedModule,
        MongooseModule.forFeature([
            { name: 'Category', schema: CategorySchema },
            { name: 'Service', schema: ServiceEntitySchema }]),
        PassportModule,
    ],
})
export class ServicesModule { }
