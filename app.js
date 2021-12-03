var app = require('./config/server')

// var home = require('./app/routes/home')(app);
// var admin = require('./app/routes/admin')(app);
// var noticia = require('./app/routes/noticia')(app);
// var noticias = require('./app/routes/noticias')(app);
app.listen(3000, () =>{
    console.log('aplicativo online, link: http://localhost:3000/')
})