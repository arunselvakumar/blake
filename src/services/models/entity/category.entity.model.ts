import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: String, required: false },
    isArchived: { type: String, required: false },
});

export interface CategoryEntityModel extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
    isArchived: boolean;
}
