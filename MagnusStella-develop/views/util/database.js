const mysql = require('mysql2');

const conection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'MagnusStella',
    password: 'Temp-946456',
});

module.exports = conection.promise();