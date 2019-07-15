export interface AddReviewResponseDto {
    id: string;
    serviceId: string;
    userId: string;
    rating: number;
    content: string;
    modifiedOn: Date;
}
