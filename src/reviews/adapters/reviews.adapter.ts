import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { ReviewEntityModel } from '../models/entities/review.entity.model';

export class ReviewsAdapter {
    public static getReviewsEntityModel(userId: string, serviceId: string, addReviewRequestDto: AddReviewRequestDto): ReviewEntityModel {
        // @ts-ignore
        return {
            userId,
            serviceId,
            content: addReviewRequestDto.content,
            isArchived: false,
            modifiedOn: new Date(),
        };
    }
}
