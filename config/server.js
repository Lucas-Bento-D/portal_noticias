//Express: framework para otimizar o desenvolvimento back-end
// Possui Rotas, tratamento de exceções, permite a integração de sistemas de templetes e gerencia diferentes requisições HTTP 
var express = require('express');

// Consign: facilita o gerenciamento das rotas no express
// Pode ser substituido por outros frameworks, um exemplo é o Routes do reactjs
var consign = require('consign');

// Modulo que pode converter o body das requisições para varios formatos, inclusive JSON, como feito abaixo
var bodyParser = require('body-parser');


var app = express();

// EJS: engine de vizualização, transporta dados do backend para o frontend
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app)

module.exports = app