import * as mongoose from 'mongoose';
import { CategoryEntityModel } from '../entities/category.entity.model';

export interface ServiceCategoryEntityModel extends mongoose.Document {
    id: string;
    name: string;
    upTime: number;
    serviceableDistance: number;
    category: CategoryEntityModel;
    isArchived: boolean;
    isOffline: boolean;
    location: any;
    userId: string;
}
