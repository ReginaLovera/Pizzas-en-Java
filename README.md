# 🍕 API REST - Sistema de Gestión de Pizzería

API RESTful desarrollada con Node.js, Express y MongoDB para la gestión de productos y clientes de una pizzería (Pizzas, Tamaños, Bebidas y Clientes).

---

## 🛠️ Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución para JavaScript.
* **Express.js** - Framework web para Node.js.
* **MongoDB** - Base de datos NoSQL.
* **Mongoose** - ODM para el modelado de datos en MongoDB.
* **Docker** - Contenedor para la instancia local de MongoDB.
* **Postman** - Pruebas y documentación de los endpoints REST.

---

## 📁 Estructura del Proyecto

```text
PIZZAS EN JAVA
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── pizza.controlador.js
│   │   ├── tamanio.controlador.js
│   │   ├── bebida.controlador.js
│   │   └── cliente.controlador.js
│   ├── repositories/
│   │   ├── pizza.repositorio.js
│   │   ├── tamanio.repositorio.js
│   │   ├── bebida.repositorio.js
│   │   └── cliente.repositorio.js
│   └── app.js
├── .env
├── package.json
└── README.md