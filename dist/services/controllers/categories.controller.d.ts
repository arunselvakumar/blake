import { CreateCategoryRequestDto } from '../models/dtos/category/request/create-category.request.dto';
import { UpdateCategoryRequestDto } from '../models/dtos/category/request/update-category.request.dto';
import { CreateCategoryResponseDto } from '../models/dtos/category/response/create-category.response.dto';
import { GetCategoryResponseDto } from '../models/dtos/category/response/get-category.response.dto';
import { UpdateCategoryResponseDto } from '../models/dtos/category/response/update-category.response.dto';
import { CategoriesService } from '../services/categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryRequest: CreateCategoryRequestDto): Promise<CreateCategoryResponseDto>;
    getAllCategories(): Promise<GetCategoryResponseDto[]>;
    getCategory(categoryId: string): Promise<GetCategoryResponseDto>;
    updateCategory(categoryId: string, updateCategoryRequest: UpdateCategoryRequestDto): Promise<UpdateCategoryResponseDto>;
    deleteCategory(categoryId: string): Promise<void>;
}
