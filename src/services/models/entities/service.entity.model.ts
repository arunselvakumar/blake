import * as mongoose from 'mongoose';
import * as pointSchema from './point.schema';

export const ServiceEntitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    upTime: { type: Number },
    serviceableDistance: { type: Number },
    isOffline: { type: Boolean },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
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
    category: string;
    location: any;
    isArchived: boolean;
}
