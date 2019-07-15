import { Model } from 'mongoose';
import { CategoryEntityModel } from '../models/entities/category.entity.model';
export declare class CategoriesService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryEntityModel>);
    createCategory(entityToCreate: CategoryEntityModel): Promise<CategoryEntityModel>;
    getCategoryById(categoryId: string): Promise<CategoryEntityModel>;
    getAllCategories(): Promise<CategoryEntityModel[]>;
    updateCategory(categoryId: string, entityToUpdate: CategoryEntityModel): Promise<CategoryEntityModel>;
    deleteCategory(categoryId: string): Promise<void>;
}
