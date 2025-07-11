import express from 'express';
import { CartServices } from './cart.service';
import { CartRequestDto } from './dtos/cart-request.dto';
import { PaginationRequestDto } from '../commons/dtos/products-request.dto';

export class CartController {
  constructor(private readonly cartServices: CartServices) {}

  async createCart(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
      if(!req.body) {
        return res.status(400).json({
          status: 400,
          message: 'Body is required',
        });
      }

      const request = CartRequestDto.fromBody(req.body);
      const response = await this.cartServices.createCart(request);
      
      return res.status(201).json({
        status: 201,
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Internal server error',
      });
    }
  }

  async createCartWithAnyFirstProducts(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
      const request = PaginationRequestDto.fromQuery(req.query);
      const response = await this.cartServices.createCartWithAnyFirstProducts(request.limit);
      
      return res.status(201).json({
        status: 201,
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Internal server error',
      });
    }
  }
} 