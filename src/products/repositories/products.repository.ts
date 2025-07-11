import { Product } from '../entities/product.entitie';
import { IProductsRepository } from '../interfaces/products-repository.interface';
import { PaginatedResponse } from '../../commons/dtos/pagination.dto';
import { ProductsMapper } from '../mappers/products.mapper';
import { ProductsResponseDto } from '../dtos/products-response.dto';
import { PaginationRequestDto } from '../../commons/dtos/products-request.dto';

export class ProductsRepository implements IProductsRepository {
  async getProducts(request: PaginationRequestDto): Promise<PaginatedResponse<ProductsResponseDto>> {
    try{
    const queryParams = new URLSearchParams();
    
    if (request.limit) {
      queryParams.append('limit', request.limit.toString());
    }
    if (request.sort) {
      queryParams.append('sort', request.sort);
    }
    
    const queryString = queryParams.toString();
    const url = queryString ? `https://fakestoreapi.com/products?${queryString}` : 'https://fakestoreapi.com/products';
    
    const response = await fetch(url);
    const data = await response.json();
    const products = data.map((product: any) => Product.create(product)) 
    const productsDto = ProductsMapper.toDtoList(products);
    
    return ProductsMapper.toPaginatedResponse({
      data: productsDto,
      limit: request.limit,
      offset: request.offset,
      total: data.length, 
      baseUrl: '/products',
    });} catch (error) {
        throw error;
      }
  }
}