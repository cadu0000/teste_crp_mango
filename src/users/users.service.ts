import { UsersRepository } from "./repositories/users.repository";
import { PaginatedResponse } from "../commons/dtos/pagination.dto";
import { UserResponseDto } from "./dtos/user-response.dto";
import { PaginationRequestDto } from "../commons/dtos/products-request.dto";

export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUsers(request: PaginationRequestDto): Promise<PaginatedResponse<UserResponseDto>> {
    return this.usersRepository.getUsers(request);
  }
}