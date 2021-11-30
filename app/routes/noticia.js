module.exports = app => {
    
    app.get('/noticias', (req, res) => {
        var mysql = require('mysql');
        
        mysql.createConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });

        mysql.createConnection.query("select * from noticias", (error, result) =>{
            res.send(result);
        });
    
        //res.render('noticias/noticia');
    });
}