export interface GetServicesResponseDto {
    id: string;
    name: string;
    userId: string;
    upTime: number;
    serviceableDistance: number;
    isOffline: boolean;
    category: Category;
    location: {
        lat: number;
        long: number;
    };
    isArchived: boolean;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}
