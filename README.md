# Mango API

API de exemplo para manipulação de **produtos** e **carrinhos**, integrando com a [FakeStoreAPI](https://fakestoreapi.com/).

---

## Como rodar

### 1. **Clone o projeto**
```bash
$ git clone https://github.com/cadu0000/teste_crp_mango.git
```

### 2. **Build e execução com Docker**
```bash
$ docker build -t fake-store-api .
$ docker run -p 3333:3333 fake-store-api
```
> A API estará disponível em: [http://localhost:3333](http://localhost:3333)

---

## Endpoints Principais

### Produtos
- **GET `/products`**
  - Lista paginada de produtos
  - Parâmetros: `limit`, `offset`, `sort`
  - Exemplo: `/products?limit=5&offset=0`
  - HTTP: 200 

### Usuários
- **GET `/users`**
  - Lista paginada de usuários
  - Parâmetros: `limit`, `offset`, `sort`
  - Exemplo: `/users?limit=5&offset=0`
  - HTTP: 200  

### Carrinhos
- **POST `/carts`**
  - Cria um carrinho para um usuário.
  - Payload: (Perceba que na documentação está o id, mas não faz sentido o enviar, até porque ele será criado apenas após o POST)
    ```json
    {
      "userId": integer,
      "products": Product[]
    }
    ```
  - HTTP: 201 Created 

- **POST `/carts/any-first-products`**
  - Cria um carrinho com os N primeiros produtos (Essa será a rota utilzada para a resposta do desafio, sendo a requisição enviada com o parâmetro de limit=3, igual à requisição de exemplo da rota).
  - Payload
    ```json
    {
      "userId": integer,
      "products": Product[]
    }
    ```
  - Parâmetros: `limit`
  - Exemplo: `/carts/any-first-products?limit=3`
  - HTTP: 201 Created  
---

## Fluxo Interno (Exemplo: POST `/carts`)

1. **Recebe o payload** com `userId` e `products`.
2. **Busca os produtos** na FakeStoreAPI.
3. **Seleciona os produtos enviados** (ou os N primeiros, se usar `/any-first-products`).
4. **Monta o payload** no formato esperado pela FakeStoreAPI.
5. **Envia o payload** para `https://fakestoreapi.com/carts`.
6. **Recebe a resposta** da FakeStoreAPI.
7. **Busca os dados completos dos produtos** para enriquecer a resposta.
8. **Retorna o carrinho criado** com todos os dados dos produtos.

---

## Resolução da avaliação:

### Criar um carrinho com os 3 primeiros produtos da [FakeStoreAPI](https://fakestoreapi.com/products)
```bash
curl -X POST "http://localhost:3333/carts/any-first-products?limit=3"
```

---

## Tecnologias

- Node.js
- TypeScript
- Express
- Docker

---
