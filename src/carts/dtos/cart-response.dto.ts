import { Product } from "../../products/entities/product.entitie";

export class CartResponseDto {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly products: Product[],
  ) {}

  static create(props: {
    id: number;
    userId: number;
    date: string;
    products: Product[];
  }): CartResponseDto {
    return new CartResponseDto(
      props.id,
      props.userId,
      props.products,
    );
  }
}

