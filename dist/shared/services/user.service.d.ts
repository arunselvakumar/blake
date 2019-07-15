import { Model } from 'mongoose';
import { UserEntityModel } from '../models/entities/user.entity.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserEntityModel>);
    updateUser(user: UserEntityModel): Promise<UserEntityModel>;
    getUserByUserId(userId: string): Promise<UserEntityModel>;
}
