import { ProductsResponseDto } from "../../products/dtos/products-response.dto";
import { Product } from "../../products/entities/product.entitie";

export class CartRequestDto {
  constructor(
    public readonly userId: number,
    public readonly date: Date,
    public readonly products: ProductsResponseDto[],
  ) {}
  static fromBody(body: any): CartRequestDto {
    return new CartRequestDto(
      body.userId,
      new Date(body.date),
      body.products || []
    );
  }
}

