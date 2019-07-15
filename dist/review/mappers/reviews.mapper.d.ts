import { AddReviewResponseDto } from '../models/dtos/response/add-review.response.dto';
import { GetReviewResponseDto } from '../models/dtos/response/get-review.response.dto';
import { ReviewEntityModel } from '../models/entities/review.entity.model';
export declare class ReviewsMapper {
    static mapFromReviewEntityToAddReviewResponseDto(reviewEntity: ReviewEntityModel): AddReviewResponseDto;
    static mapFromReviewEntityToGetReviewResponseDto(reviewEntity: ReviewEntityModel): GetReviewResponseDto;
}
