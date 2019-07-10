import { Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CategoryEntityModel } from '../models/entity/category.entity.model';
import { DB_ERRORS } from '../utils/constants';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('Category')
        private readonly categoryModel: Model<CategoryEntityModel>,
    ) {}

    public async createCategory(entityToCreate: CategoryEntityModel): Promise<CategoryEntityModel> {
        try {
            return await this.categoryModel.create(entityToCreate);
        } catch {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async getCategoryById(categoryId: string): Promise<CategoryEntityModel> {
        try {
            return await this.categoryModel.findById(categoryId).exec();
        } catch {
            throw new NotFoundException(DB_ERRORS.NotFound);
        }
    }

    public async getAllCategories(): Promise<CategoryEntityModel[]> {
        try {
            return await this.categoryModel.find({ isArchived: false }).exec();
        } catch {
            throw new ServiceUnavailableException(DB_ERRORS.OfflineError);
        }
    }

    public async updateCategory(categoryId: string, entityToUpdate: CategoryEntityModel): Promise<CategoryEntityModel> {
        try {
            await this.categoryModel.findByIdAndUpdate(categoryId, entityToUpdate).exec();
        } catch {
            throw new NotFoundException(DB_ERRORS.NotFound);
        }

        return await this.categoryModel.findById(categoryId);
    }

    public async deleteCategory(categoryId: string): Promise<void> {
        try {
            const entityToBeUpdated = await this.categoryModel.findById(categoryId).exec();
            entityToBeUpdated.isArchived = true;
            await this.categoryModel.findByIdAndUpdate(categoryId, entityToBeUpdated);
        } catch {
            throw new NotFoundException(DB_ERRORS.NotFound);
        }
    }
}
