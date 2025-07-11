import { UserResponseDto } from "../dtos/user-response.dto";
import { User } from "../entities/user.entitie";

export class UserMapper {
  static toUserResponseDto(users: User[]): UserResponseDto[] {
    return users.map(user => new UserResponseDto(
      user.id,
      user.userName,
      user.email,
      user.password
    ));
  }
}