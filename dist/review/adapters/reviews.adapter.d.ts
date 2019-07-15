import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { ReviewEntityModel } from '../models/entities/review.entity.model';
export declare class ReviewsAdapter {
    getReviewsEntityModel(userId: string, serviceId: string, addReviewRequestDto: AddReviewRequestDto): ReviewEntityModel;
}
