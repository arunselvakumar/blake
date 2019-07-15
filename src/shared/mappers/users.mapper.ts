import { UpdateUserRequestDto } from '../../user/models/dtos/update-user.request.dto';
import { UpdateUserResponseDto } from '../../user/models/dtos/update-user.response.dto';
import { GetUserResponseDto } from '../models/dtos/response/get-user.response.dto';
import { UserEntityModel } from '../models/entities/user.entity.model';

export class UsersMapper {
    public static mapFromUpdateUserRequestDtoToEntity(updateUserRequest: UpdateUserRequestDto): UserEntityModel {
        // @ts-ignore
        return {
            userId: updateUserRequest.id,
            firstName: updateUserRequest.firstName,
            lastName: updateUserRequest.lastName,
            email: updateUserRequest.email,
            bio: updateUserRequest.bio,
            dateOfBirth: updateUserRequest.dateOfBirth,
        };
    }

    public static mapFromUserEntityToGetUserResponseDto(userEntity: UserEntityModel): GetUserResponseDto {
        return {
            id: userEntity.userId,
            firstName: userEntity.firstName,
            lastName: userEntity.lastName,
            email: userEntity.email,
            bio: userEntity.bio,
            dateOfBirth: userEntity.dateOfBirth,
        };
    }

    public static mapFromUserEntityToUpdateUserResponseDto(userEntity: UserEntityModel): UpdateUserResponseDto {
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
