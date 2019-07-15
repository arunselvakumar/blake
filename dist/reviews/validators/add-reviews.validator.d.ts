import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { ReviewsService } from '../services/reviews.service';
export declare class AddReviewsValidator {
    private readonly reviewsService;
    isToday: (date: Date) => boolean;
    constructor(reviewsService: ReviewsService);
    validate(serviceId: string, userId: string, addReviewRequest: AddReviewRequestDto): Promise<void>;
}
