/**
 * Arquivo: GetFuncionarios/index.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por listar todos os 'Funcionários'
 *
 * Digitar o snippet: mongo-serverless-list
 */

const createMongoClient = require('../shared/mongo')

module.exports = async context => {
  const { db, connection } = await createMongoClient()


  const Funcionarios = db.collection('funcionarios')
  const res = await Funcionarios.find({})
  const body = await res.toArray()

  connection.close()

  context.res = {
    status: 200,
    body
  }
}
