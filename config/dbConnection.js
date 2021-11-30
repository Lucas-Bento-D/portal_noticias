var mysql = require('mysql');

var connectMySql = () => {
    console.log('Conexão com banco de dados estabelecida.')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = () =>{
    return connectMySql;
}