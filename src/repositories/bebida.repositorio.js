const { ObjectId } = require('mongodb');
const { getCollection } = require('../config/db'); 
const COLECCION = 'bebidas'; 

/**
 * 
 */
async function obtenerTodas() {
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
 * @param {Object} datosBebida 
 */
async function crear(datosBebida) {
  const collection = getCollection(COLECCION);
  const resultado = await collection.insertOne(datosBebida); 
  return { _id: resultado.insertedId, ...datosBebida };
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
  obtenerTodas,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};