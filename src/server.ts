import express from 'express'
import { Router, Request, Response } from 'express';
import { ProductsController } from './products/products.controller';
import { ProductsRepository } from './products/repositories/products.repository';
import { ProductsServices } from './products/products.service';
import { CartController } from './carts/cart.controller';
import { CartRepository } from './carts/repositories/cart.repository';
import { CartServices } from './carts/cart.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersRepository } from './users/repositories/users.repository';

const app = express();
const route = Router()

app.use(express.json())

const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

const productsRepository = new ProductsRepository();
const productsServices = new ProductsServices(productsRepository);
const productsController = new ProductsController(productsServices);

const cartRepository = new CartRepository();
const cartServices = new CartServices(cartRepository, productsRepository, usersRepository);
const cartController = new CartController(cartServices);

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Página inicial' })
})

route.get('/products', (req: Request, res: Response) => {
  return productsController.getProducts(req, res);
})

route.get('/users', (req: Request, res: Response) => {
  return usersController.getUsers(req, res);
})

route.post('/carts', (req: Request, res: Response) => {
  return cartController.createCart(req, res);
})

route.post('/carts/any-first-products', (req: Request, res: Response) => {
  return cartController.createCartWithAnyFirstProducts(req, res);
})


app.use(route)
app.listen(3333, () => 'rodando na 3333')