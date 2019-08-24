/**
 * Arquivo: GetFuncionarios/index.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por listar todos os 'Funcionários'
 *
 * Digitar o snippet: mongo-serverless-list
 */

const createMongoClient = require('../shared/mongo');

module.exports = async context => {
    const { client: MongoClient, closeConnectionFn } = await createMongoClient();

    const Funcionarios = MongoClient.collection('funcionarios');
    const res = await Funcionarios.find({});
    const body = await res.toArray();

    closeConnectionFn();

    context.res = {
        status: 200,
        body
    };
}; 