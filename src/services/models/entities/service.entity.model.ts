import * as mongoose from 'mongoose';
import { CategoryEntityModel } from './category.entity.model';
import * as pointSchema from './point.schema';

export const ServiceEntitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    upTime: { type: Number },
    serviceableDistance: { type: Number },
    isOffline: { type: Boolean },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'CategorySchema' },
    isArchived: { type: Boolean },
    location: {
        type: pointSchema,
        required: true,
    },
});

export interface ServiceEntityModel extends mongoose.Document {
    id: string;
    name: string;
    userId: string;
    upTime: number;
    serviceableDistance: number;
    isOffline: boolean;
    categoryId: string;
    location: any;
    isArchived: boolean;
}

export interface ServiceCategoryModel extends mongoose.Document {
    id: string;
    name: string;
    userId: string;
    upTime: number;
    serviceableDistance: number;
    isOffline: boolean;
    location: any;
    isArchived: boolean;
    Categories: CategoryEntityModel;
}
