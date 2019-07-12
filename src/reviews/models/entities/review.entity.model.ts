import * as mongoose from 'mongoose';

export const ReviewSchema = new mongoose.Schema({
    serviceId: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true, minlength: 10, maxlength: 140 },
    modifiedOn: { type: Date, required: true },
    isArchived: { type: String, required: true },
});

export interface ReviewEntityModel extends mongoose.Document {
    id: string;
    serviceId: string;
    userId: string;
    content: string;
    modifiedOn: Date;
    isArchived: boolean;
}
