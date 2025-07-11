import { PaginatedResponse } from "../../commons/dtos/pagination.dto";
import { PaginationRequestDto } from "../../commons/dtos/products-request.dto";
import { UserResponseDto } from "../dtos/user-response.dto";

export interface IUsersRepository {
  getUsers(request: PaginationRequestDto): Promise<PaginatedResponse<UserResponseDto>>;
}