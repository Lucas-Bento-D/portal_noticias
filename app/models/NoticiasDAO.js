function NoticiasDAO(connection){
    this._connection = connection
}


//Nesse refatoring para passar as funções como propriedades de "NoticiasDAO", precisamos retirar todas as arrows functions dessa parte
//Porque a arrow function tem a caracteristica de não fazer o 'bind' na instancia que ela está sendo declarada, ou seja, na expressão 
//lambda, o this não se refere ao objeto que foi declarado.
//Sendo assim, no arrow function nesse caso vai está se referindo ao window(ou o proprio módulo)
//Com a expressão 'function()' o this se refere ao objeto, resolvendo nosso erro


NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query("select * from noticias", callback);
}
NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 1', callback)
}
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback)

    //Importante lembrar que nessa forma de insert, os nomes dos campos do JSON(noticia) precisa ser os mesmos nomes dos campos
    //que estão na entidade do banco de dados Mysql
}

module.exports = () =>  {return NoticiasDAO}