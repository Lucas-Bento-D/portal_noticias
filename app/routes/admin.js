module.exports = app => {
    app.get('/admin', (req, res) => {
        res.render('admin/admin');
    });

    app.post('/noticia/salvar', (req, res) => {
        var noticia = req.body;
        res.send(noticia)
    });
}