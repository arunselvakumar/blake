import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { SharedModule } from '../shared/shared.module';
import { ReviewsController } from './controllers/reviews.controller';
import { ReviewSchema } from './models/entities/review.entity.model';
import { ReviewsValidationProvider } from './providers/reviews-validation.provider';
import { ReviewsService } from './services/reviews.service';
import { AddReviewsValidator } from './validators/add-reviews.validator';
import { DeleteReviewsValidator } from './validators/delete-reviews.validator';

@Module({
    controllers: [ReviewsController],
    providers: [ReviewsService, AddReviewsValidator, DeleteReviewsValidator, ReviewsValidationProvider],
    imports: [SharedModule, PassportModule, MongooseModule.forFeature([{ name: 'Review', schema: ReviewSchema }])],
})
export class ReviewModule {}
