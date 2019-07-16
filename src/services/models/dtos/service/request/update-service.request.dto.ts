export interface UpdateServiceRequestDto {
    readonly name: string;
    readonly upTime: number;
    readonly serviceableDistance: number;
    readonly isOffline: boolean;
    readonly categoryId: string;
    readonly location: {
        lat: number;
        long: number
    };
}
