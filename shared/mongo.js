/**
 * Arquivo: mongo.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por tratar a conexão da Base de Dados localmente
 *
 * Digitar o snippet: mongo-serverless-conn
 */

const { MongoClient } = require('mongodb')

const config = {
  dbName: 'crud-serverless-mongo-wavy',
  url: `mongodb://localhost:27017/${config.dbName}`
}

async function createConnection () {
  const connection = await MongoClient.connect(config.url, { useNewUrlParser: true })
  const db = connection.db(config.dbName)
  return {
    connection,
    db
  }
}

module.exports = createConnection
