import { PaginatedResponse } from "../commons/dtos/pagination.dto";
import { IProductsRepository } from "./interfaces/products-repository.interface";
import { ProductsResponseDto } from "./dtos/products-response.dto";
import { PaginationRequestDto } from "../commons/dtos/products-request.dto";

export class ProductsServices {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async getProducts(request: PaginationRequestDto): Promise<PaginatedResponse<ProductsResponseDto>> {
    return this.productsRepository.getProducts(request);
  }
}