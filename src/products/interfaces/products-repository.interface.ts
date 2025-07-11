import { PaginatedResponse } from "../../commons/dtos/pagination.dto";
import { PaginationRequestDto } from "../../commons/dtos/products-request.dto";
import { ProductsResponseDto } from "../dtos/products-response.dto";

export interface IProductsRepository {
  getProducts(request: PaginationRequestDto): Promise<PaginatedResponse<ProductsResponseDto>>;
}