import { SearchResponseDto } from '../dtos/search-response.dto';
import { PaginatedResponse } from '../../commons/dtos/pagination.dto';
import { ProductsResponseDto } from '../dtos/products-response.dto';

export class SearchMapper {
  static toSearchResponse(props: {
    products: PaginatedResponse<ProductsResponseDto>;
    categories?: PaginatedResponse<string>;
    brands?: PaginatedResponse<string>;
  }): SearchResponseDto {
    return SearchResponseDto.create(props);
  }

  static toPaginatedResponse<T>(props: {
    data: T[];
    limit: number;
    offset: number;
    total: number;
    baseUrl?: string;
  }): PaginatedResponse<T> {
    return PaginatedResponse.create(props);
  }
} 