import { Injectable } from '@nestjs/common';
import { DeleteReviewsValidator } from '../validators/delete-reviews.validator';

@Injectable()
export class ReviewsValidationProvider {
    constructor(public deleteValidator: DeleteReviewsValidator) {}
}
