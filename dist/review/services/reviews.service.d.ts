import { Model } from 'mongoose';
import { ReviewEntityModel } from '../models/entities/review.entity.model';
export declare class ReviewsService {
    private readonly reviewModel;
    constructor(reviewModel: Model<ReviewEntityModel>);
    addReview(entityToCreate: ReviewEntityModel): Promise<ReviewEntityModel>;
    getReviewsForService(serviceId: string): Promise<ReviewEntityModel[]>;
    deleteReview(reviewId: string): Promise<void>;
}
