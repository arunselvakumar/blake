export interface CreateServiceRequestDto {
    readonly name: string;
    readonly phone: string;
    readonly upTime: number;
    readonly serviceableDistance: string;
    readonly isOffline: boolean;
    readonly categoryIds: string[];
    readonly location: {
        lat: number;
        long: number
    };
}
