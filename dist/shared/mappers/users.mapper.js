"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersMapper {
    static mapFromUpdateUserRequestDtoToEntity(updateUserRequest) {
        return {
            userId: updateUserRequest.id,
            firstName: updateUserRequest.firstName,
            lastName: updateUserRequest.lastName,
            email: updateUserRequest.email,
            bio: updateUserRequest.bio,
            dateOfBirth: updateUserRequest.dateOfBirth,
        };
    }
    static mapFromUserEntityToGetUserResponseDto(userEntity) {
        return {
            id: userEntity.userId,
            firstName: userEntity.firstName,
            lastName: userEntity.lastName,
            email: userEntity.email,
            bio: userEntity.bio,
            dateOfBirth: userEntity.dateOfBirth,
        };
    }
    static mapFromUserEntityToUpdateUserResponseDto(userEntity) {
        return {
            id: userEntity.userId,
            firstName: userEntity.firstName,
            lastName: userEntity.lastName,
            email: userEntity.email,
            bio: userEntity.bio,
            dateOfBirth: userEntity.dateOfBirth,
        };
    }
}
exports.UsersMapper = UsersMapper;
//# sourceMappingURL=users.mapper.js.map