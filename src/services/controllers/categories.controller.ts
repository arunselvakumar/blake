import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CategoriesMapper } from '../mappers/categories.mapper';
import { CreateCategoryRequestDto } from '../models/dtos/category/request/create-category.request.dto';
import { UpdateCategoryRequestDto } from '../models/dtos/category/request/update-category.request.dto';
import { CreateCategoryResponseDto } from '../models/dtos/category/response/create-category.response.dto';
import { GetCategoryResponseDto } from '../models/dtos/category/response/get-category.response.dto';
import { UpdateCategoryResponseDto } from '../models/dtos/category/response/update-category.response.dto';
import { CategoriesService } from '../services/categories.service';

@Controller('api/categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    public async createCategory(
        @Body() createCategoryRequest: CreateCategoryRequestDto,
    ): Promise<CreateCategoryResponseDto> {
        const mappedEntity = CategoriesMapper.mapFromCreateCategoryRequestDtoToEntity(createCategoryRequest);
        const serviceResult = await this.categoriesService.createCategory(mappedEntity);
        return CategoriesMapper.mapFromCategoryEntityToCreateCategoryResponseDto(serviceResult);
    }

    @Get()
    public async getAllCategories(): Promise<GetCategoryResponseDto[]> {
        const serviceResult = await this.categoriesService.getAllCategories();
        return serviceResult.map(x => CategoriesMapper.mapFromCategoryEntityToGetCategoryResponseDto(x));
    }

    @Get(':categoryId')
    public async getCategory(@Param('categoryId') categoryId: string): Promise<GetCategoryResponseDto> {
        const serviceResult = await this.categoriesService.getCategoryById(categoryId);
        return CategoriesMapper.mapFromCategoryEntityToGetCategoryResponseDto(serviceResult);
    }

    @Patch(':categoryId')
    public async updateCategory(
        @Param('categoryId') categoryId: string,
        @Body() updateCategoryRequest: UpdateCategoryRequestDto,
    ): Promise<UpdateCategoryResponseDto> {
        const mappedEntity = CategoriesMapper.mapFromUpdateCategoryRequestDtoToEntity(updateCategoryRequest);
        const serviceResult = await this.categoriesService.updateCategory(categoryId, mappedEntity);
        return CategoriesMapper.mapFromCategoryEntityToUpdateCategoryResponseDto(serviceResult);
    }

    @Delete(':categoryId')
    public async deleteCategory(@Param('categoryId') categoryId: string): Promise<void> {
        return await this.categoriesService.deleteCategory(categoryId);
    }
}
