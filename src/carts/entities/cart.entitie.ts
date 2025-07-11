import { Product } from "../../products/entities/product.entitie";

export class Cart {
  private readonly _id: number;
  private readonly _userId: number;
  private readonly _products: Product[];

  constructor(
    id: number,
    userId: number,
    products: Product[],
  ) {
    this._id = id;
    this._userId = userId;
    this._products = products;
  }

  get id() {
    return this._id;
  }

  get userId() {
    return this._userId;
  }

  get products() {
    return this._products;
  }

  static create(props: {
    id: number;
    userId: number;
    products: Product[];
  }) {
    return new Cart(
      props.id,
      props.userId,
      props.products,
    );
  }
}