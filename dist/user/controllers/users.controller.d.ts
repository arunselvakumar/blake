import { GetUserResponseDto } from '../../shared/models/dtos/response/get-user.response.dto';
import { UserService } from '../../shared/services/user.service';
import { UpdateUserRequestDto } from '../models/dtos/update-user.request.dto';
import { UpdateUserResponseDto } from '../models/dtos/update-user.response.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(userId: string, request: Request, updateUserRequest: UpdateUserRequestDto): Promise<UpdateUserResponseDto>;
    getUserById(userId: string): Promise<GetUserResponseDto>;
}
