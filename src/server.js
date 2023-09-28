import path from "path";
import http from "http";

//importo express
import Express from "express";
//importo cors
import cors from "cors";
import sequelize from "../db/connect.js";

//importo modelos
import {
    Alumno,
    Profesor,
    Curso,
    Aula,
    Pago,
    Telefono
} from "./index.js";



class Server {
    
    constructor(){
        this.app = Express();
        this.port = process.env.PORT || 8080;
        
        //HTTP server
        this.server = http.createServer (this.app);
    }



    async dbConnection(){ //db connection
        try {
            await sequelize.authenticate();
        } catch (error){
            throw new Error(error);
        }
    }

    routes(){
        this.app.use(Alumno);
        this.app.use(Profesor);
        this.app.use(Curso);
        this.app.use(Aula);
        this.app.use(Pago);
        this.app.use(Telefono);

    }

    middlewares(){
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(Express.json());

    //Directorio público
    //this.app.use(Express.static(path.resolve(__dirname, "../public")));
  
    }

    execute() {
        this.middlewares(); //Middelwares
        this.routes(); //routes
        this.dbConnection() //DB
        //listen
        this.server.listen(this.port, () => {
            console.log('Server listening on port' + this.port );
        });
    }
}

export default Server;