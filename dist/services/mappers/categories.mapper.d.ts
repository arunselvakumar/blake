import { CreateCategoryRequestDto } from '../models/dtos/category/request/create-category.request.dto';
import { UpdateCategoryRequestDto } from '../models/dtos/category/request/update-category.request.dto';
import { CreateCategoryResponseDto } from '../models/dtos/category/response/create-category.response.dto';
import { GetCategoryResponseDto } from '../models/dtos/category/response/get-category.response.dto';
import { UpdateCategoryResponseDto } from '../models/dtos/category/response/update-category.response.dto';
import { CategoryEntityModel } from '../models/entities/category.entity.model';
export declare class CategoriesMapper {
    static mapFromCreateCategoryRequestDtoToEntity(createCategoryDto: CreateCategoryRequestDto): CategoryEntityModel;
    static mapFromUpdateCategoryRequestDtoToEntity(updateCategoryDto: UpdateCategoryRequestDto): CategoryEntityModel;
    static mapFromCategoryEntityToCreateCategoryResponseDto(categoryEntity: CategoryEntityModel): CreateCategoryResponseDto;
    static mapFromCategoryEntityToGetCategoryResponseDto(categoryEntity: CategoryEntityModel): GetCategoryResponseDto;
    static mapFromCategoryEntityToUpdateCategoryResponseDto(categoryEntity: CategoryEntityModel): UpdateCategoryResponseDto;
}
