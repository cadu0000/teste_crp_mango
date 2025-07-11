import { Cart, CartProduct } from '../entities/cart.entitie';
import { ICartRepository } from '../interfaces/cart-repository.interface';
import { CartRequestDto } from '../dtos/cart-request.dto';
import { CartResponseDto } from '../dtos/cart-response.dto';
import { CartMapper } from '../mappers/cart.mapper';

export class CartRepository implements ICartRepository {
    async createCart(request: CartRequestDto): Promise<CartResponseDto> {
      try{        
        const cartPayload = {
          userId: request.userId,
          date: request.date.toISOString().split('T')[0], // Converte Date para string YYYY-MM-DD
          products: request.products.map((product: any, index: number) => ({
            productId: product.id,
            quantity: index + 1
          }))
        };
        
        const response = await fetch('https://fakestoreapi.com/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartPayload),
        });
        
        const data = await response.json();
        
        const cartProducts = data.products.map((product: any) => 
          CartProduct.create({
            productId: product.productId,
            quantity: product.quantity,
          })
        );
        
        const cart = Cart.create({
          id: data.id,
          userId: data.userId,
          date: data.date,
          products: cartProducts,
        });
        
        return CartMapper.toDto(cart);
    } catch (error) {
      throw error;
    }
} }