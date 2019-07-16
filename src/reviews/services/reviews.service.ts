import { Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { PaginateModel } from 'mongoose';

import { DB_ERRORS } from '../../shared/utils/constants';
import { ReviewEntityModel } from '../models/entities/review.entity.model';

@Injectable()
export class ReviewsService {
    constructor(@InjectModel('Review') private readonly reviewModel: PaginateModel<ReviewEntityModel>) {}

    public async addReview(entityToCreate: ReviewEntityModel): Promise<ReviewEntityModel> {
        try {
            return await this.reviewModel.create(entityToCreate);
        } catch {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async getReviewById(reviewId: string): Promise<ReviewEntityModel> {
        try {
            return await this.reviewModel.findById(reviewId).exec();
        } catch {
            throw new NotFoundException(DB_ERRORS.NotFound);
        }
    }

    public async getReviewsForService(
        serviceId: string,
        page: number = 1,
        limit: number = 3,
    ): Promise<ReviewEntityModel[]> {
        try {
            const options = {
                page: Number(page),
                limit: Number(limit),
                sort: { modifiedOn: 'desc' },
            };
            const entityResult = await this.reviewModel.paginate({ isArchived: false, serviceId }, options);
            return entityResult.docs;
        } catch {
            throw new NotFoundException(DB_ERRORS.NotFound);
        }
    }

    public async getReviewsForServiceByUserId(serviceId: string, userId: string): Promise<ReviewEntityModel[]> {
        try {
            return await this.reviewModel.find({ serviceId, userId, isArchived: false }).exec();
        } catch {
            return [];
        }
    }

    public async deleteReview(reviewId: string): Promise<void> {
        try {
            const entityToBeDeleted = await this.reviewModel.findById(reviewId).exec();
            entityToBeDeleted.isArchived = true;
            await this.reviewModel.findByIdAndUpdate(reviewId, entityToBeDeleted);
        } catch {
            throw new NotFoundException(DB_ERRORS.NotFound);
        }
    }
}
