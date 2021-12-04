module.exports = app => {
    app.get('/noticia', (req, res) => {
        var connection = app.config.dbConnection()
        var noticiaModel = new app.app.models.NoticiasDAO(connection)

        noticiaModel.getNoticia( (error, result) => {
            res.render('noticias/noticia', {noticia: result});
        })

        // connection.query('select * from noticias where id_noticia = 1', (error, result) => {
        // })
    });
}