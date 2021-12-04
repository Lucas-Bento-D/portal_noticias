module.exports = app => {
    app.get('/admin', (req, res) => {
        res.render('admin/admin');
    });

    app.post('/noticia/salvar', (req, res) => {
        var noticia = req.body;


        var connection = app.config.dbConnection()
        var noticiasModel = new app.app.models.noticiasModel(connection)

        noticiasModel.salvarNoticia(noticia, (error, result) =>{


            // Função que vai redirecionar o usuario para algum lugar, nesse caso /noticias
            res.redirect('/noticias')

            // res.render('noticias/noticias', {noticias: result});
            // Se for renderizado do jeito acima, geraremos 2 erros:
            // Primeiro erro -> Não terá nenhum retorno de dados em noticias
            // Segundo erro -> Se der reload na pagina, ele vai pedir pra enviar
            // o mesmo JSON de novo para o banco de dados, gerando outro item
        })
    });
}