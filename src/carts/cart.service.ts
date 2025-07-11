import { PaginationRequestDto } from "../commons/dtos/products-request.dto";
import { IProductsRepository } from "../products/interfaces/products-repository.interface";
import { IUsersRepository } from "../users/interfaces/user-repository.interface";
import { CartRequestDto } from "./dtos/cart-request.dto";
import { CartResponseDto } from "./dtos/cart-response.dto";
import { ICartRepository } from "./interfaces/cart-repository.interface";

export class CartServices {
  constructor(
    private readonly cartRepository: ICartRepository,
    private readonly productsRepository: IProductsRepository,
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createCart(request: CartRequestDto): Promise<CartResponseDto> {
    return this.cartRepository.createCart(request);
  }

  async createCartWithAnyFirstProducts(numberOfProducts: number): Promise<CartResponseDto> {
    const products = await this.productsRepository.getProducts(new PaginationRequestDto(numberOfProducts, 0));
    const user = await this.usersRepository.getUsers(new PaginationRequestDto(1, 0));

    const cartRequest = new CartRequestDto(user.data[0].id, new Date(), products.data);
    return this.cartRepository.createCart(cartRequest);
  }
} 