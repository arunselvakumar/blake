import { GetCategoryResponseDto } from '../../category/response/get-category.response.dto';

export interface GetNearbyServiceResponseDto  {
    id: string;
    name: string;
    upTime: number;
    serviceableDistance: number;
    isArchived: boolean;
    isOffline: boolean;
    location: {
        lat: number;
        long: number;
    };
    userId: string;
    distance: number;
    category: GetCategoryResponseDto;
}
