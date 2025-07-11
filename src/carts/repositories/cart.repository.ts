import { Cart } from '../entities/cart.entitie';
import { ICartRepository } from '../interfaces/cart-repository.interface';
import { CartRequestDto } from '../dtos/cart-request.dto';
import { CartResponseDto } from '../dtos/cart-response.dto';
import { CartMapper } from '../mappers/cart.mapper';

export class CartRepository implements ICartRepository {
    async createCart(request: CartRequestDto): Promise<CartResponseDto> {
      try{    
        const response = await fetch('https://fakestoreapi.com/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        });
        
        const data = await response.json();
        
        const cart = Cart.create({
          id: data.id,
          userId: data.userId,
          products: data.products,
        });

        return CartMapper.toDto(cart);
    } catch (error) {
      throw error;
    }
} }