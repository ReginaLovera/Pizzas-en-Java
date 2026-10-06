const { ObjectId } = require('mongodb');
const { getCollection } = require('../config/db');

const COLECCION = 'pizzas';

/**
 *
 * @returns {Promise<Array>} 
 */
async function obtenerTodas() {
  const collection = getCollection(COLECCION);
  return await collection.find({}).toArray();
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<Object|null>} 
 */
async function obtenerPorId(id) {
  const collection = getCollection(COLECCION);
  return await collection.findOne({ _id: new ObjectId(id) });
}

/**
 * 
 * @param {Object} datosPizza 
 * @returns {Promise<Object>} 
 */
async function crear(datosPizza) {
  const collection = getCollection(COLECCION);
  const resultado = await collection.insertOne(datosPizza);
  return { _id: resultado.insertedId, ...datosPizza };
}

/**
 * 
 * @param {string} id 
 * @param {Object} nuevosDatos 
 * @returns {Promise<Object|null>} 
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
 * @returns {Promise<boolean>}
 */
async function eliminar(id) {
  const collection = getCollection(COLECCION);
  const resultado = await collection.deleteOne({ _id: new ObjectId(id) });
  return resultado.deletedCount > 0;
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};