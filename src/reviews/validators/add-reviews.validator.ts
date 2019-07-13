import { BadRequestException, Injectable } from '@nestjs/common';

import * as validator from 'validator';

import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { ReviewsService } from '../services/reviews.service';

@Injectable()
export class AddReviewsValidator {
    isToday = date => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }

    constructor(private readonly reviewsService: ReviewsService) {}

    public async validate(serviceId: string, userId: string, addReviewRequest: AddReviewRequestDto): Promise<void> {
        const MAX_REVIEWS_PER_DAY = 3;

        if (validator.isEmpty(serviceId) || validator.isEmpty(userId)) {
            throw new BadRequestException();
        }

        if (addReviewRequest.rating && (addReviewRequest.rating < 0 || addReviewRequest.rating > 5)) {
            throw new BadRequestException();
        }

        if (addReviewRequest.content && (addReviewRequest.content.length < 9 || addReviewRequest.content.length > 999)) {
            throw new BadRequestException();
        }

        const serviceResult = await this.reviewsService.getReviewsForServiceByUserId(serviceId, userId);
        if (serviceResult.length > 0 && serviceResult.filter(x => this.isToday(x.modifiedOn)).length > MAX_REVIEWS_PER_DAY) {
            throw new BadRequestException();
        }
    }
}
