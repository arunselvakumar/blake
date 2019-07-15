import { ReviewsAdapter } from '../adapters/reviews.adapter';
import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { AddReviewResponseDto } from '../models/dtos/response/add-review.response.dto';
import { GetReviewResponseDto } from '../models/dtos/response/get-review.response.dto';
import { ReviewsService } from '../services/reviews.service';
export declare class ReviewsController {
    private readonly reviewsService;
    private readonly reviewsAdapter;
    constructor(reviewsService: ReviewsService, reviewsAdapter: ReviewsAdapter);
    addReviewForService(serviceId: string, request: Request, addReviewRequest: AddReviewRequestDto): Promise<AddReviewResponseDto>;
    getReviewsForService(serviceId: string): Promise<GetReviewResponseDto[]>;
    deleteReview(reviewId: string): Promise<void>;
}
