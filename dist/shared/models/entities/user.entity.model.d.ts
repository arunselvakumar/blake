import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any>;
export interface UserEntityModel extends mongoose.Document {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    dateOfBirth: Date;
}
