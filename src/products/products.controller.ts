import express from 'express';
import { ProductsServices } from './products.service';
import { PaginationRequestDto } from '../commons/dtos/pagination-request.dto';

export class ProductsController {
  constructor(private readonly productsServices: ProductsServices) {}

  async getProducts(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
      const request = PaginationRequestDto.fromQuery(req.query);
      const response = await this.productsServices.getProducts(request);
      
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
