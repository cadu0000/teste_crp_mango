import { ProductsRequestDto } from "./dtos/products-request.dto";
import { PaginatedResponse } from "../commons/dtos/pagination.dto";
import { IProductsRepository } from "./interfaces/products-repository.interface";
import { ProductsResponseDto } from "./dtos/products-response.dto";

export class ProductsServices {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async getProducts(request: ProductsRequestDto): Promise<PaginatedResponse<ProductsResponseDto>> {
    return this.productsRepository.getProducts(request);
  }
}