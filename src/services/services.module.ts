import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriesController } from './controllers/categories.controller';
import { ServicesController } from './controllers/services.controller';
import { CategorySchema } from './models/entity/category.entity.model';
import { CategoriesService } from './services/categories.service';

@Module({
    controllers: [ServicesController, CategoriesController],
    providers: [CategoriesService],
    imports: [MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }])],
})
export class ServicesModule {}
