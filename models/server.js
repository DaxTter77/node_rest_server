const express = require("express");
var cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        this.middleware();

        this.routes();
    }

    middleware() {
        //CORS
        this.app.use( cors() );

        //Lectura y parse del body
        this.app.use( express.json() );

        //Directorio publico 
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen( process.env.PORT );
    }
}

module.exports = Server;