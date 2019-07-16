import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { UserEntityModel } from '../models/entities/user.entity.model';
import { DB_ERRORS } from '../utils/constants';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserEntityModel>) {}

    public async updateUser(user: UserEntityModel): Promise<UserEntityModel> {
        try {
            const options = { upsert: true, new: true, setDefaultsOnInsert: true };
            return await this.userModel.findOneAndUpdate({ userId: user.userId }, user, options).exec();
        } catch {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async getUserByUserId(userId: string): Promise<UserEntityModel> {
        try {
            const userEntity = await this.userModel.findOne({ userId }).exec();

            if (userEntity) {
                return userEntity;
            }

            // @ts-ignore
            return {
                id: '',
                userId: '',
                firstName: '',
                lastName: '',
                email: '',
                bio: '',
                dateOfBirth: null,
            };
        } catch {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }
}
