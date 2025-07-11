import { UserResponseDto } from "../dtos/user-response.dto";
import { User } from "../entities/user.entitie";
import { UserMapper } from "../mappers/user.mapper";
import { PaginatedResponse } from "../../commons/dtos/pagination.dto";
import { PaginationRequestDto } from "../../commons/dtos/pagination-request.dto";
import { IUsersRepository } from "../interfaces/user-repository.interface";

export class UsersRepository implements IUsersRepository {
  async getUsers(request: PaginationRequestDto): Promise<PaginatedResponse<UserResponseDto>> {
    try {
      const queryParams = new URLSearchParams();
    
      if (request.limit) {
        queryParams.append('limit', request.limit.toString());
      }
      if (request.sort) {
        queryParams.append('sort', request.sort);
      }
      if (request.offset) {
        queryParams.append('offset', request.offset.toString());
      }
      
      const queryString = queryParams.toString();
      const url = queryString ? `https://fakestoreapi.com/users?${queryString}` : 'https://fakestoreapi.com/users';
      
      const response = await fetch(url);  
      const data = await response.json();
      const users = data.map((user: any) => User.create(user));
      const usersDto = UserMapper.toUserResponseDto(users);
      
      return PaginatedResponse.create({
        data: usersDto,
        limit: request.limit,
        offset: request.offset,
        total: data.length, // 
        baseUrl: '/users',
      });
    } catch (error) {
      throw error;
    }
  }
}