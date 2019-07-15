"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReviewsAdapter {
    static getReviewsEntityModel(userId, serviceId, addReviewRequestDto) {
        return {
            userId,
            serviceId,
            rating: addReviewRequestDto.rating,
            content: addReviewRequestDto.content,
            isArchived: false,
            modifiedOn: new Date(),
        };
    }
}
exports.ReviewsAdapter = ReviewsAdapter;
//# sourceMappingURL=reviews.adapter.js.map