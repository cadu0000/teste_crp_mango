import express from 'express'
import { Router, Request, Response } from 'express';
import { ProductsController } from './products/products.controller';
import { ProductsRepository } from './products/repositories/products.repository';
import { ProductsServices } from './products/products.services';

const app = express();
const route = Router()

app.use(express.json())

const productsRepository = new ProductsRepository();
const productsServices = new ProductsServices(productsRepository);
const productsController = new ProductsController(productsServices);

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Página inicial' })
})

route.get('/products', (req: Request, res: Response) => {
  return productsController.getProducts(req, res);
})

app.use(route)
app.listen(3333, () => 'rodando na 3333')