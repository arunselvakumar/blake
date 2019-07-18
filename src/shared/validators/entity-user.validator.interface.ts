import { Document, Model } from 'mongoose';
import { ValidatedResponse } from '../validators/validatedResponse';

export interface IEntityUserValidator<T extends Document> {

    validate(obj: Model<T>, entityId: string, userId: string): Promise<ValidatedResponse>;
}
