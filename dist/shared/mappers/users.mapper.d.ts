import { UpdateUserRequestDto } from '../../user/models/dtos/update-user.request.dto';
import { UpdateUserResponseDto } from '../../user/models/dtos/update-user.response.dto';
import { GetUserResponseDto } from '../models/dtos/response/get-user.response.dto';
import { UserEntityModel } from '../models/entities/user.entity.model';
export declare class UsersMapper {
    static mapFromUpdateUserRequestDtoToEntity(updateUserRequest: UpdateUserRequestDto): UserEntityModel;
    static mapFromUserEntityToGetUserResponseDto(userEntity: UserEntityModel): GetUserResponseDto;
    static mapFromUserEntityToUpdateUserResponseDto(userEntity: UserEntityModel): UpdateUserResponseDto;
}
