/**
 * Arquivo: UpdateFuncionario/index.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por atualizar 'Funcionário' por Id
 *
 * Digitar o snippet: mongo-serverless-update
 */

const { ObjectID } = require('mongodb');
const CreateMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {
    const { id } = req.params;
    const funcionario = req.body || {};

    if (!id || !funcionario) {
        context.res = {
            status: 400,
            body: 'Os dados são obrigatórios!'
        };

        return;
    }

    const { client: MongoClient, closeConnectionFn } = await CreateMongoClient();
    const Funcionarios = MongoClient.collection('funcionarios');

    try {
        const funcionarios = await Funcionarios.findOneAndUpdate(
            { _id: new ObjectID(id) },
            { set: funcionario },
        );

        closeConnectionFn();
        context.res = {
            status: 200,
            body: funcionarios
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Erro ao atualizar o Funcionário'
        };
    }
};