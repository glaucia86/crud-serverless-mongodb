/**
 * Arquivo: CreateFuncionario/index.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por criar um novo 'Funcionário'
 *
 * Digitar o snippet: mongo-serverless-create
 */

const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const funcionario = req.body || {}

  if (funcionario) {
    context.res = {
      status: 400,
      body: 'Os dados do(a) Funcionário(a) é obrigatório!'
    }
  }

  const { db, connection } = await createMongoClient()

  const Funcionarios = db.collection('funcionarios')

  try {
    const funcionarios = await Funcionarios.insert(funcionario)
    connection.close()

    context.res = {
      status: 201,
      body: funcionarios.ops[0]
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error ao criar um novo Funcionário(a)'
    }
  }
}
