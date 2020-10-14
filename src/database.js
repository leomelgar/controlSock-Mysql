//uso el mysql y creo una conexion con la base de datos
const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'nerv2309',
    database:'controlStockdb'
});
function getConnection() {
    return connection;
}

module.exports = {getConnection};