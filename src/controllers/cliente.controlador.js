const express = require('express');
const router = express.Router();
const clienteRepositorio = require('../repositories/cliente.repositorio');

//get
router.get('/', async (req, res) => {
  try {
    const clientes = await clienteRepositorio.obtenerTodos();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los clientes", error: error.message });
  }
});

//get
router.get('/:id', async (req, res) => {
  try {
    const cliente = await clienteRepositorio.obtenerPorId(req.params.id);
    if (!cliente) return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ mensaje: "ID no válido", error: error.message });
  }
});

//post
router.post('/', async (req, res) => {
  try {
    const nuevoCliente = await clienteRepositorio.crear(req.body);
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el cliente", error: error.message });
  }
});

//put
router.put('/:id', async (req, res) => {
  try {
    const clienteActualizado = await clienteRepositorio.actualizar(req.params.id, req.body);
    if (!clienteActualizado) return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar el cliente", error: error.message });
  }
});

//delete
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await clienteRepositorio.eliminar(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al eliminar el cliente", error: error.message });
  }
});

module.exports = router;