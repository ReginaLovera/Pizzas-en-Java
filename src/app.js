const express = require('express');
const { conectarDB } = require('./config/db');

const pizzaControlador = require('./controllers/pizza.controlador');
const tamanioControlador = require('./controllers/tamanio.controlador');
const bebidaControlador = require('./controllers/bebida.controlador');
const clienteControlador = require('./controllers/cliente.controlador');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/api/pizzas', pizzaControlador);     // Rutas para Pizzas[cite: 1]
app.use('/api/tamanios', tamanioControlador); // Rutas para Tamaños
app.use('/api/bebidas', bebidaControlador);   // Rutas para Bebidas
app.use('/api/clientes', clienteControlador); // Rutas para Clientes

conectarDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
  });
});