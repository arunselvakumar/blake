import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { AddReviewResponseDto } from '../models/dtos/response/add-review.response.dto';
import { GetReviewResponseDto } from '../models/dtos/response/get-review.response.dto';
import { ReviewsValidationProvider } from '../providers/reviews-validation.provider';
import { ReviewsService } from '../services/reviews.service';
export declare class ReviewsController {
    private readonly reviewsService;
    private readonly validationProvider;
    constructor(reviewsService: ReviewsService, validationProvider: ReviewsValidationProvider);
    addReviewForService(serviceId: string, request: Request, addReviewRequest: AddReviewRequestDto): Promise<AddReviewResponseDto>;
    getReviewsForService(serviceId: string, page: number): Promise<GetReviewResponseDto[]>;
    deleteReview(reviewId: string, request: Request): Promise<void>;
}
