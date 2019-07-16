import { BadRequestException, Injectable } from '@nestjs/common';

import * as validator from 'validator';

import { ReviewsService } from '../services/reviews.service';

@Injectable()
export class DeleteReviewsValidator {
    constructor(private readonly reviewsService: ReviewsService) {}

    public async validate(reviewId: string, userId: string): Promise<void> {
        if (validator.isEmpty(reviewId) || validator.isEmpty(userId)) {
            throw new BadRequestException();
        }
        const serviceResult = await this.reviewsService.getReviewById(reviewId);
        if (serviceResult.userId !== userId || serviceResult.isArchived) {
            throw new BadRequestException();
        }
    }
}
