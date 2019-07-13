import { Body, Controller, Delete, Get, Param, Post, Query, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ReviewsAdapter } from '../adapters/reviews.adapter';
import { ReviewsMapper } from '../mappers/reviews.mapper';
import { AddReviewRequestDto } from '../models/dtos/request/add-review.request.dto';
import { AddReviewResponseDto } from '../models/dtos/response/add-review.response.dto';
import { GetReviewResponseDto } from '../models/dtos/response/get-review.response.dto';
import { ReviewsValidationProvider } from '../providers/reviews-validation.provider';
import { ReviewsService } from '../services/reviews.service';

@Controller('api/reviews')
export class ReviewsController {
    constructor(
        private readonly reviewsService: ReviewsService,
        private readonly validationProvider: ReviewsValidationProvider,
    ) {}

    @Post(':serviceId')
    @UseGuards(AuthGuard('bearer'))
    public async addReviewForService(
        @Param('serviceId') serviceId: string,
        @Req() request: Request,
        @Body() addReviewRequest: AddReviewRequestDto,
    ): Promise<AddReviewResponseDto> {
        // @ts-ignore
        const { user } = request;
        const addReviewEntity = ReviewsAdapter.getReviewsEntityModel(user.id, serviceId, addReviewRequest);
        const serviceResult = await this.reviewsService.addReview(addReviewEntity);
        return ReviewsMapper.mapFromReviewEntityToAddReviewResponseDto(serviceResult);
    }

    @Get(':serviceId')
    public async getReviewsForService(
        @Param('serviceId') serviceId: string,
        @Query('page') page: number,
    ): Promise<GetReviewResponseDto[]> {
        const serviceResult = await this.reviewsService.getReviewsForService(serviceId, page);
        return serviceResult.map(data => ReviewsMapper.mapFromReviewEntityToGetReviewResponseDto(data));
    }

    @Delete(':reviewId')
    @UseGuards(AuthGuard('bearer'))
    public async deleteReview(@Param('reviewId') reviewId: string, @Req() request: Request): Promise<void> {
        // @ts-ignore
        const { user } = request;

        await this.validationProvider.deleteValidator.validate(reviewId, user.id);
        return await this.reviewsService.deleteReview(reviewId);
    }
}
