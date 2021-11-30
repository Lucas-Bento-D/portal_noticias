module.exports = app => {
    
    app.get('/noticia', (req, res) => {
        res.render('noticias/noticia');
    });
}