export interface CreateServiceResponseDto {
    id: string;
    name: string;
    userId: string;
    upTime: number;
    serviceableDistance: number;
    isOffline: boolean;
    category: string;
    location: {
        lat: number;
        long: number;
    };
    isArchived: boolean;
}

