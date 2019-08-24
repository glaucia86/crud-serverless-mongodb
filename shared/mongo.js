/**
 * Arquivo: mongo.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por tratar a conexão da Base de Dados localmente
 * 
 * Digitar o snippet: mongo-serverless-conn
 */

/**
 * Arquivo: mongo.js
 * Data: 24/08/2019
 * Descrição: arquivo responsável por tratar a conexão da Base de Dados localmente
 * 
 * Digitar o snippet: mongo-serverless-conn
 */

const { MongoClient } = require('mongodb');

const config = { 
    url: 'mongodb://localhost:27017/crud-serverless-mongo-wavy',
};

module.exports = () => new Promise((resolve, reject) => {
    MongoClient.connect(config.url, { useNewUrlParser: true }, (err, mongoConnection) => 
    err
    ? reject(err)
    : resolve({ client: mongoConnection.db(config.dbName), 
                closeConnectionFn: () => setTimeout(() => {
                    mongoConnection.close();
                }, 1000),
                mongoConnection 
        })
    );
});


