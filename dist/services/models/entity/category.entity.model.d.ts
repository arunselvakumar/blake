import * as mongoose from 'mongoose';
export declare const CategorySchema: mongoose.Schema<any>;
export interface CategoryEntityModel extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
    isArchived: boolean;
}
