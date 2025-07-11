import { Cart } from '../entities/cart.entitie';
import { CartResponseDto } from '../dtos/cart-response.dto';

export class CartMapper {
  static toDto(cart: Cart): CartResponseDto {
    return new CartResponseDto(
      cart.id,
      cart.userId,
      cart.products
    );
  }


  static toDtoList(carts: Cart[]): CartResponseDto[] {
    return carts.map(cart => this.toDto(cart));
  }
} 