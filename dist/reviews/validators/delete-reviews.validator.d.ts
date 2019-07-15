import { ReviewsService } from '../services/reviews.service';
export declare class DeleteReviewsValidator {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    validate(reviewId: string, userId: string): Promise<void>;
}
