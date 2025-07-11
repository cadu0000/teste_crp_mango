import { Product } from "../../products/entities/product.entitie";

export class Cart {
  private readonly _id: number;
  private readonly _userId: number;
  private readonly _date: string;
  private readonly _products: Product[];

  constructor(
    id: number,
    userId: number,
    date: string,
    products: Product[],
  ) {
    this._id = id;
    this._userId = userId;
    this._date = date;
    this._products = products;
  }

  get id() {
    return this._id;
  }

  get userId() {
    return this._userId;
  }

  get date() {
    return this._date;
  }

  get products() {
    return this._products;
  }

  static create(props: {
    id: number;
    userId: number;
    date: string;
    products: Product[];
  }) {
    return new Cart(
      props.id,
      props.userId,
      props.date,
      props.products,
    );
  }
}

export class CartProduct {
  private readonly _productId: number;
  private readonly _quantity: number;

  constructor(
    productId: number,
    quantity: number,
  ) {
    this._productId = productId;
    this._quantity = quantity;
  }

  get productId() {
    return this._productId;
  }

  get quantity() {
    return this._quantity;
  }

  static create(props: {
    productId: number;
    quantity: number;
  }) {
    return new CartProduct(
      props.productId,
      props.quantity,
    );
  }
} 