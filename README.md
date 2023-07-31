## Objetivo de la página:
Poder realizar una compra de una paleta de Tenis de Mesa, completamente a medida.

## Funcionalidades disponibles
Listado de productos desde MockApi.
Guardado de órdenes y compras en Firebase.
Posibilidad de filtrar por productos.
Posibilidad de ver el detalle del producto y agregar al carrito.
Visualización de carrito con manejo de cantidades y stock.
Formulario de compra con validación adicional de email.
Posibilidad de ver el carrito de compra al momento de completar el formulario.

## Otros comentarios
La página se encuentra modularizada en distintos componentes permitiendo su abstracción y reutilización.
Se utilizó SweetAlert para mostrar notificaciones al agregar al carrito.
Al finalizar la compra el carrito es vaciado para poder realizar una nueva compra.

# Getting Started with Vite

This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Pre-requisitos
- [Visual Studio Code]('https://code.visualstudio.com/')
- [NodeJS > 16]('https://nodejs.org') y npm. (Recomendacion usar [nvm](https://github.com/nvm-sh/nvm))

## Estructura de Carpetas
- `src`: Es la carpeta contenedora de todo nuestro codigo dentro de la aplicacion de React y contiene todas las funcionalidades.
    - `components`: Es la carpeta que contiene todos los componentes de nuestra aplicacion (Ej: Header, Button, Products, etc...).
- `App.js`: Es el componente donde inicia toda la aplicacion.
- `pages`: Es la carpeta que contiene todas las paginas de nuestra aplicacion (Ej: Home, Cart, Checkout, etc...).