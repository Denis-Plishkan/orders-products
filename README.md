# Project orders-products

# Node:22.11.0

## Project Setup

To install the project, first clone the repository:

```sh
git clone git@github.com:Denis-Plishkan/orders-products.git
```

Then navigate to the project directory and install dependencies:

```sh
npm install
```

### Start WebSocket Server

```sh
npm run websocket
```

### Start JSON Server

```sh
npm run server
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Run Project with Docker

To build and run the project in Docker:

```sh
docker build -t orders-products .
docker run -p 3030:3030 -p 5000:5000 -p 3001:3001 --name orders-products orders-products
```



