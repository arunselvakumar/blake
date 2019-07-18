import * as mongoose from 'mongoose';
import { CategoryEntityModel } from '../entities/category.entity.model';

export interface NearbyServiceEntityModel extends mongoose.Document {
    id: string;
    name: string;
    upTime: number;
    serviceableDistance: number;
    category: string;
    isArchived: boolean;
    isOffline: boolean;
    location: Location;
    userId: string;
    dist: Dist;
    Category: CategoryEntityModel;
}

export interface Dist {
    calculated: number;
}

export interface Location {
    type: string;
    coordinates: number[];
}
