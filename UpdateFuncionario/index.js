// @ts-nocheck
/**
 * Arquivo: UpdateFuncionario/index.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por atualizar 'Funcionário' por Id
 *
 * Digitar o snippet: mongo-serverless-update
 */

const { ObjectID } = require('mongodb')
const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const { id } = req.params
  const funcionario = req.body || {}

  if (!id || !funcionario) {
    context.res = {
      status: 400,
      body: 'Os campos são obrigatórios'
    }

    return
  }

  const { db, connection } = await createMongoClient()
  const Funcionarios = db.collection('funcionarios')

  try {
    const funcionarios = await Funcionarios.findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: funcionario }
    )

    connection.close()

    context.res = {
      status: 200,
      body: funcionarios
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Erro ao atualizar o Funcionário'
    }
  }
}
