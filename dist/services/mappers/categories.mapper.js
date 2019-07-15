"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoriesMapper {
    static mapFromCreateCategoryRequestDtoToEntity(createCategoryDto) {
        return {
            name: createCategoryDto.name,
            description: createCategoryDto.description,
            isActive: true,
            isArchived: false,
        };
    }
    static mapFromUpdateCategoryRequestDtoToEntity(updateCategoryDto) {
        return {
            name: updateCategoryDto.name,
            description: updateCategoryDto.description,
            isActive: true,
            isArchived: false,
        };
    }
    static mapFromCategoryEntityToCreateCategoryResponseDto(categoryEntity) {
        return {
            id: categoryEntity._id,
            name: categoryEntity.name,
            description: categoryEntity.description,
        };
    }
    static mapFromCategoryEntityToGetCategoryResponseDto(categoryEntity) {
        return {
            id: categoryEntity._id,
            name: categoryEntity.name,
            description: categoryEntity.description,
        };
    }
    static mapFromCategoryEntityToUpdateCategoryResponseDto(categoryEntity) {
        return {
            id: categoryEntity._id,
            name: categoryEntity.name,
            description: categoryEntity.description,
        };
    }
}
exports.CategoriesMapper = CategoriesMapper;
//# sourceMappingURL=categories.mapper.js.map