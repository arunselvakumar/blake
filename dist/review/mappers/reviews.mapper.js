"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReviewsMapper {
    static mapFromReviewEntityToAddReviewResponseDto(reviewEntity) {
        return {
            id: reviewEntity._id,
            content: reviewEntity.content,
            modifiedOn: reviewEntity.modifiedOn,
            serviceId: reviewEntity.serviceId,
            userId: reviewEntity.userId,
        };
    }
    static mapFromReviewEntityToGetReviewResponseDto(reviewEntity) {
        return {
            id: reviewEntity._id,
            content: reviewEntity.content,
            modifiedOn: reviewEntity.modifiedOn,
            serviceId: reviewEntity.serviceId,
            userId: reviewEntity.userId,
        };
    }
}
exports.ReviewsMapper = ReviewsMapper;
//# sourceMappingURL=reviews.mapper.js.map