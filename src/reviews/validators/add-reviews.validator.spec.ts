import { Test, TestingModule } from '@nestjs/testing';
import { AddReviewsValidator } from './add-reviews.validator';

describe('Add Reviews Validator', () => {
    let addReviewsValidator: AddReviewsValidator;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AddReviewsValidator],
        }).compile();

        addReviewsValidator = module.get<AddReviewsValidator>(AddReviewsValidator);
    });

    it('should be truthy', () => {
        expect(addReviewsValidator).toBeTruthy();
    });
});
