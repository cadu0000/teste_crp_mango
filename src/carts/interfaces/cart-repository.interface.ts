import { CartRequestDto } from "../dtos/cart-request.dto";
import { CartResponseDto } from "../dtos/cart-response.dto";

export interface ICartRepository {
  createCart(request: CartRequestDto): Promise<CartResponseDto>;
} 