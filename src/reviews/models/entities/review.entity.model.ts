import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

export const ReviewSchema = new mongoose.Schema({
    serviceId: { type: String, required: true },
    userId: { type: String, required: true },
    rating: { type: Number, required: false, min: 0, max: 5 },
    content: { type: String, required: false },
    modifiedOn: { type: Date, required: true },
    isArchived: { type: String, required: true },
});

ReviewSchema.plugin(mongoosePaginate);

export interface ReviewEntityModel extends mongoose.Document {
    id: string;
    serviceId: string;
    userId: string;
    rating: number;
    content: string;
    modifiedOn: Date;
    isArchived: boolean;
}
