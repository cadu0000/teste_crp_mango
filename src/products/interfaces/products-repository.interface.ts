import { ProductsRequestDto } from "../dtos/products-request.dto";
import { PaginatedResponse } from "../../commons/dtos/pagination.dto";
import { ProductsResponseDto } from "../dtos/products-response.dto";

export interface IProductsRepository {
  getProducts(request: ProductsRequestDto): Promise<PaginatedResponse<ProductsResponseDto>>;
}