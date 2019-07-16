import { AddReviewResponseDto } from '../models/dtos/response/add-review.response.dto';
import { GetReviewResponseDto } from '../models/dtos/response/get-review.response.dto';
import { ReviewEntityModel } from '../models/entities/review.entity.model';

export class ReviewsMapper {
    public static mapFromReviewEntityToAddReviewResponseDto(reviewEntity: ReviewEntityModel): AddReviewResponseDto {
        return {
            id: reviewEntity._id,
            rating: reviewEntity.rating,
            content: reviewEntity.content,
            modifiedOn: reviewEntity.modifiedOn,
            serviceId: reviewEntity.serviceId,
            userId: reviewEntity.userId,
        };
    }

    public static mapFromReviewEntityToGetReviewResponseDto(reviewEntity: ReviewEntityModel): GetReviewResponseDto {
        return {
            id: reviewEntity._id,
            rating: reviewEntity.rating,
            content: reviewEntity.content,
            modifiedOn: reviewEntity.modifiedOn,
            serviceId: reviewEntity.serviceId,
            userId: reviewEntity.userId,
        };
    }
}
