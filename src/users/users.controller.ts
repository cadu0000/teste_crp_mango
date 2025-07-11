import express from 'express';
import { UsersService } from "./users.service";
import { PaginationRequestDto } from '../commons/dtos/products-request.dto';

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async getUsers(req: express.Request, res: express.Response): Promise<express.Response>  {
    try{
        const request = PaginationRequestDto.fromQuery(req.query);
        const response = await this.usersService.getUsers(request);
        
        return res.status(200).json({
          status: 200,
          ...response,
        });
    } catch (error) {
        return res.status(500).json({
          status: 500,
          message: 'Internal server error',
        });
    }
  }
}
