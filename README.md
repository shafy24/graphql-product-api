# GraphQL Product API

A backend API built with **Express.js, GraphQL, MongoDB, Mongoose, and JWT Authentication**. This project demonstrates user authentication and product management using GraphQL queries and mutations.

## Features

* User registration
* User login
* JWT authentication
* Create product
* Get all products
* Get single product
* Update product
* Delete product
* MongoDB database integration
* GraphQL API with Apollo Server

## Tech Stack

* Node.js
* Express.js
* GraphQL
* Apollo Server
* MongoDB
* Mongoose
* JWT
* bcryptjs

## Project Structure

```txt
src/
├── config/
├── models/
├── graphql/
├── middleware/
├── utils/
├── app.js
└── server.js
```

## Installation

```bash
git clone https://github.com/YOUR_USERNAME/graphql-product-api.git
cd graphql-product-api
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/graphql_product_api
JWT_SECRET=mysecretkey
```

## Run the Project

```bash
npm run dev
```

Server URL:

```txt
http://localhost:4000/graphql
```

## Example Mutation

```graphql
mutation {
  createProduct(
    name: "Laptop"
    price: 85000
    description: "Gaming Laptop"
    image: "https://picsum.photos/200"
  ) {
    id
    name
    price
  }
}
```

## Author

**Amimul Ahsan Shafy**

* GitHub: https://github.com/YOUR_USERNAME
