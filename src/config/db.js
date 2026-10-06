
const { MongoClient } = require('mongodb');

const URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "pizzeria_db";

let client;
let db;

/**
 *
 * @returns {Promise<Object>}
 */
async function conectarDB() {
  if (db) return db;
  try {
    client = new MongoClient(URI);
    await client.connect();
    console.log(" Conectado exitosamente a MongoDB");
    db = client.db(DB_NAME);
    return db;
  } catch (error) {
    console.error(" Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
}

/**
 * 
 * @param {string} coleccionNombre 
 * @returns {Collection}
 */
function getCollection(coleccionNombre) {
  if (!db) {
    throw new Error("Debe llamar a conectarDB() antes de obtener una colección.");
  }
  return db.collection(coleccionNombre);
}

module.exports = { conectarDB, getCollection };