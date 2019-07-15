/// <reference types="mongoose-paginate" />
import { PaginateModel } from 'mongoose';
import { ReviewEntityModel } from '../models/entities/review.entity.model';
export declare class ReviewsService {
    private readonly reviewModel;
    constructor(reviewModel: PaginateModel<ReviewEntityModel>);
    addReview(entityToCreate: ReviewEntityModel): Promise<ReviewEntityModel>;
    getReviewById(reviewId: string): Promise<ReviewEntityModel>;
    getReviewsForService(serviceId: string, page?: number, limit?: number): Promise<ReviewEntityModel[]>;
    getReviewsForServiceByUserId(serviceId: string, userId: string): Promise<ReviewEntityModel[]>;
    deleteReview(reviewId: string): Promise<void>;
}
