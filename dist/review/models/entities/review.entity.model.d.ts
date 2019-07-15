import * as mongoose from 'mongoose';
export declare const ReviewSchema: mongoose.Schema<any>;
export interface ReviewEntityModel extends mongoose.Document {
    id: string;
    serviceId: string;
    userId: string;
    content: string;
    modifiedOn: Date;
    isArchived: boolean;
}
