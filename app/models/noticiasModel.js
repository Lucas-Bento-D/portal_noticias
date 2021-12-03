module.exports = () => {


    this.getNoticias = (connection, callback) => {
        connection.query("select * from noticias", callback);
    }

    this.getNoticia = (connection, callback) =>{
        connection.query('select * from noticias where id_noticia = 1', callback)
    }

    this.salvarNoticia = (noticia, connection, callback) => {
        connection.query('insert into noticias set ? ', noticia, callback)

        //Importante lembrar que nessa forma de insert, os nomes dos campos do JSON(noticia) precisa ser os mesmos nomes dos campos
        //que estão na entidade do banco de dados Mysql
    }

    return this
}