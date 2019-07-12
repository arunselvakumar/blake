import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { SharedModule } from '../shared/shared.module';
import { ReviewsController } from './controllers/reviews.controller';
import { ReviewSchema } from './models/entities/review.entity.model';
import { ReviewsService } from './services/reviews.service';

@Module({
    controllers: [ReviewsController],
    providers: [ReviewsService],
    imports: [SharedModule, PassportModule, MongooseModule.forFeature([{ name: 'Review', schema: ReviewSchema }])],
})
export class ReviewModule {}
