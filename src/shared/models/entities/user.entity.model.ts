import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    bio: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
});

export interface UserEntityModel extends mongoose.Document {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    dateOfBirth: Date;
}
