import { AddReviewsValidator } from '../validators/add-reviews.validator';
import { DeleteReviewsValidator } from '../validators/delete-reviews.validator';
export declare class ReviewsValidationProvider {
    deleteValidator: DeleteReviewsValidator;
    addValidator: AddReviewsValidator;
    constructor(deleteValidator: DeleteReviewsValidator, addValidator: AddReviewsValidator);
}
