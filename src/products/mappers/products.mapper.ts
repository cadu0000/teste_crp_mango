import { PaginatedResponse } from "../../commons/dtos/pagination.dto";
import { ProductsResponseDto } from "../dtos/products-response.dto";
import { Product } from "../entities/product.entitie";

export class ProductsMapper {
  static toDto(product: Product): ProductsResponseDto {
    return new ProductsResponseDto(
      product.id,
      product.title,
      product.price,
      product.description,
      product.category,
      product.image,
    );
  }

  static toDtoList(products: Product[]): ProductsResponseDto[] {
    return products.map(product => this.toDto(product));
  }

  static toPaginatedResponse(props: {
    limit: number;
    offset: number;
    total: number;
    data: ProductsResponseDto[];
    baseUrl?: string;
  }): PaginatedResponse<ProductsResponseDto> {
    return PaginatedResponse.create(props);
  }
}