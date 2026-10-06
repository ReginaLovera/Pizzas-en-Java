const { ObjectId } = require('mongodb');
const { getCollection } = require('../config/db');

const COLECCION = 'clientes';

/**
 * 
 */
async function obtenerTodos() {
  const collection = getCollection(COLECCION);
  return await collection.find({}).toArray(); 
}

/**
 * 
 * @param {string} id 
 */
async function obtenerPorId(id) {
  const collection = getCollection(COLECCION);
  return await collection.findOne({ _id: new ObjectId(id) });
}

/**
 * 
 * @param {Object} datosCliente 
 */
async function crear(datosCliente) {
  const collection = getCollection(COLECCION);
  const resultado = await collection.insertOne(datosCliente);
  return { _id: resultado.insertedId, ...datosCliente }; 
}

/**
 * 
 * @param {string} id 
 * @param {Object} nuevosDatos 
 */
async function actualizar(id, nuevosDatos) {
  const collection = getCollection(COLECCION);
  const resultado = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: nuevosDatos },
    { returnDocument: 'after' } 
  );
  return resultado.value || resultado;
}

/**
 * 
 * @param {string} id 
 */
async function eliminar(id) {
  const collection = getCollection(COLECCION);
  const resultado = await collection.deleteOne({ _id: new ObjectId(id) });
  return resultado.deletedCount > 0;
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};