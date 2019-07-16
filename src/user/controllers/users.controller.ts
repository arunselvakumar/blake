import { BadRequestException, Body, Controller, Get, Param, Patch, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersMapper } from '../../shared/mappers/users.mapper';
import { GetUserResponseDto } from '../../shared/models/dtos/response/get-user.response.dto';
import { UserService } from '../../shared/services/user.service';
import { UpdateUserRequestDto } from '../models/dtos/update-user.request.dto';
import { UpdateUserResponseDto } from '../models/dtos/update-user.response.dto';

@Controller('api/users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Patch(':userId')
    @UseGuards(AuthGuard('bearer'))
    public async updateUser(
        @Param('userId') userId: string,
        @Req() request: Request,
        @Body() updateUserRequest: UpdateUserRequestDto,
    ): Promise<UpdateUserResponseDto> {
        // @ts-ignore
        const { user } = request;

        if (userId !== user.id) {
            throw new BadRequestException();
        }

        updateUserRequest.id = userId;
        const mappedEntity = UsersMapper.mapFromUpdateUserRequestDtoToEntity(updateUserRequest);
        const serviceResult = await this.userService.updateUser(mappedEntity);
        return UsersMapper.mapFromUserEntityToUpdateUserResponseDto(serviceResult);
    }

    @Get(':userId')
    public async getUserById(@Param('userId') userId: string): Promise<GetUserResponseDto> {
        const serviceResult = await this.userService.getUserByUserId(userId);
        return UsersMapper.mapFromUserEntityToGetUserResponseDto(serviceResult);
    }
}
