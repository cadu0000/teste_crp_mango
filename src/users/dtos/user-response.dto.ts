import { User } from "../entities/user.entitie";

export class UserResponseDto {
  constructor(
    public readonly id: number,
    public readonly userName: string,
    public readonly email: string,
    public readonly password: string,
  ) {}

  static create(props: User): UserResponseDto {
    return new UserResponseDto(props.id, props.userName, props.email, props.password);
  }
} 