const express = require("express");
const app = express();
const PORT = 3000;

// Ruta de saludo
app.get("/api/saludos", (req, res) => {
  const saludo = { mensaje: "Bienvenido" };
  return res.json(saludo);
});

// Ruta de pizzas
app.get("/api/v1/pizzas", (req, res) => {
  const pizzas = [
    [
  { id: 4, nombre: "Napolitana", ingredientes: ["queso mozzarella", "salsa de tomate", "anchoas", "orégano", "aceite de oliva"] },
  { id: 5, nombre: "Siciliana", ingredientes: ["queso mozzarella", "salsa de tomate", "anchoas", "cebolla", "alcaparras", "orégano"] },
  { id: 6, nombre: "Calzone", ingredientes: ["queso mozzarella", "queso ricotta", "jamón", "salsa de tomate"] },
  { id: 7, nombre: "4 quesos", ingredientes: ["queso mozzarella", "queso gorgonzola", "queso parmesano", "queso provolone"] },
  { id: 8, nombre: "Margarita", ingredientes: ["queso mozzarella", "salsa de tomate", "albahaca fresca"] },
  { id: 9, nombre: "Estilo Chicago", ingredientes: ["queso mozzarella", "salsa de tomate espesa", "salchicha italiana", "pepperoni"] },
  { id: 10, nombre: "Al Taglio", ingredientes: ["queso mozzarella", "salsa de tomate", "aceite de oliva", "ingredientes variados al gusto"] }
]
  ];
  return res.json(pizzas);
});

// Ruta de tamaños
app.get("/api/v1/tamanios", (req, res) => {
  const tamanios = [
    { id: 1, nombre: "Personal" },
    { id: 2, nombre: "Mediana" },
    { id: 3, nombre: "Grande" }
  ];
  return res.json(tamanios);
});

// Ruta de bebidas
app.get("/api/v1/bebidas", (req, res) => {
  const bebidas = [
    { id: 1, nombre: "Coca-Cola Diet" },
    { id: 2, nombre: "Limonada" },
    { id: 3, nombre: "Naranjada" },
    { id: 3, nombre: "Agua" }
  ];
  return res.json(bebidas);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});