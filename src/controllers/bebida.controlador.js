const express = require('express');
const router = express.Router();
const bebidaRepositorio = require('../repositories/bebida.repositorio');

//get
router.get('/', async (req, res) => {
  try {
    const bebidas = await bebidaRepositorio.obtenerTodas();
    res.json(bebidas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener las bebidas", error: error.message });
  }
});

//get
router.get('/:id', async (req, res) => {
  try {
    const bebida = await bebidaRepositorio.obtenerPorId(req.params.id);
    if (!bebida) return res.status(404).json({ mensaje: "Bebida no encontrada" });
    res.json(bebida);
  } catch (error) {
    res.status(400).json({ mensaje: "ID no válido", error: error.message });
  }
});

//post
router.post('/', async (req, res) => {
  try {
    const nuevaBebida = await bebidaRepositorio.crear(req.body);
    res.status(201).json(nuevaBebida);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear la bebida", error: error.message });
  }
});

//put
router.put('/:id', async (req, res) => {
  try {
    const bebidaActualizada = await bebidaRepositorio.actualizar(req.params.id, req.body);
    if (!bebidaActualizada) return res.status(404).json({ mensaje: "Bebida no encontrada" });
    res.json(bebidaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar la bebida", error: error.message });
  }
});

//delete
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await bebidaRepositorio.eliminar(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "Bebida no encontrada" });
    res.json({ mensaje: "Bebida eliminada correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al eliminar la bebida", error: error.message });
  }
});

module.exports = router;