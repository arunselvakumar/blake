import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PassportModule } from '@nestjs/passport';
import { SharedModule } from '../shared/shared.module';
import { CategoriesController } from './controllers/categories.controller';
import { ServicesController } from './controllers/services.controller';
import { CategorySchema } from './models/entities/category.entity.model';
import { CategoriesService } from './services/categories.service';

@Module({
    controllers: [ServicesController, CategoriesController],
    providers: [CategoriesService],
    imports: [SharedModule, PassportModule, MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }])],
})
export class ServicesModule {}
