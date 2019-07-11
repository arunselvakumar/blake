import { Injectable } from '@nestjs/common';
import { CreateCategoryRequestDto } from '../models/dtos/category/request/create-category.request.dto';
import { UpdateCategoryRequestDto } from '../models/dtos/category/request/update-category.request.dto';
import { CreateCategoryResponseDto } from '../models/dtos/category/response/create-category.response.dto';
import { GetCategoryResponseDto } from '../models/dtos/category/response/get-category.response.dto';
import { UpdateCategoryResponseDto } from '../models/dtos/category/response/update-category.response.dto';
import { CategoryEntityModel } from '../models/entity/category.entity.model';

@Injectable()
export class CategoriesMapper {
    static mapFromCreateCategoryRequestDtoToEntity(createCategoryDto: CreateCategoryRequestDto): CategoryEntityModel {
        // @ts-ignore
        return {
            name: createCategoryDto.name,
            description: createCategoryDto.description,
            isActive: true,
            isArchived: false,
        };
    }

    static mapFromUpdateCategoryRequestDtoToEntity(updateCategoryDto: UpdateCategoryRequestDto): CategoryEntityModel {
        // @ts-ignore
        return {
            name: updateCategoryDto.name,
            description: updateCategoryDto.description,
            isActive: true,
            isArchived: false,
        };
    }

    static mapFromCategoryEntityToCreateCategoryResponseDto(categoryEntity: CategoryEntityModel): CreateCategoryResponseDto {
        return {
            id: categoryEntity._id,
            name: categoryEntity.name,
            description: categoryEntity.description,
        };
    }

    static mapFromCategoryEntityToGetCategoryResponseDto(categoryEntity: CategoryEntityModel): GetCategoryResponseDto {
        return {
            id: categoryEntity._id,
            name: categoryEntity.name,
            description: categoryEntity.description,
        };
    }

    static mapFromCategoryEntityToUpdateCategoryResponseDto(categoryEntity: CategoryEntityModel): UpdateCategoryResponseDto {
        return {
            id: categoryEntity._id,
            name: categoryEntity.name,
            description: categoryEntity.description,
        };
    }
}
