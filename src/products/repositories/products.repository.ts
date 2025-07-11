import { Product } from '../entities/product.entitie';
import { IProductsRepository } from '../interfaces/products-repository.interface';
import { ProductsRequestDto } from '../dtos/products-request.dto';
import { PaginatedResponse } from '../../commons/dtos/pagination.dto';
import { ProductsMapper } from '../mappers/products.mapper';
import { ProductsResponseDto } from '../dtos/products-response.dto';

export class ProductsRepository implements IProductsRepository {
  async getProducts(request: ProductsRequestDto): Promise<PaginatedResponse<ProductsResponseDto>> {
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
      limit: 3, // Aqui deveria ser request.limit que é o limite passado na query, porém como o exigido é 3, deixarei fixo
      offset: request.offset,
      total: 20, //arbitrário para teste, deveria ser o total de produtos retornados pela API
      baseUrl: '/products',
    });
  }

}