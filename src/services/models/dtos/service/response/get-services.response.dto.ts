import { GetCategoryResponseDto } from '../../category/response/get-category.response.dto';

export interface GetServicesResponseDto {
    id: string;
    name: string;
    userId: string;
    upTime: number;
    serviceableDistance: number;
    isOffline: boolean;
    category: GetCategoryResponseDto;
    location: {
        lat: number;
        long: number;
    };
    isArchived: boolean;
}
