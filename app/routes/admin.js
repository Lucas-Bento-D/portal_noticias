module.exports = app => {
    app.get('/admin', (req, res) => {
        res.render('admin/form_add_noticia');
    });
}