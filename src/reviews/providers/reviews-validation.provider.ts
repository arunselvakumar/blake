import { Injectable } from '@nestjs/common';
import { AddReviewsValidator } from '../validators/add-reviews.validator';
import { DeleteReviewsValidator } from '../validators/delete-reviews.validator';

@Injectable()
export class ReviewsValidationProvider {
    constructor(public deleteValidator: DeleteReviewsValidator, public addValidator: AddReviewsValidator) {}
}
