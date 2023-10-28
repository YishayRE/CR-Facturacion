import express, { json, static as estatic } from "express";
import cors from "cors";
//import fileUpload from "express-fileupload";
import { createServer } from "http";

//import dbConnection from "../database/config.js";
import * as routes from "../routes/index.js";
import { crons } from "../tasks/index.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = createServer(this.app);

    this.paths = {
      donaciones: "/api/donaciones",
    };

    /*
    // Conectar a base de datos
    this.conectarDB();
*/
    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();

    // Tareas programadas
    this.crons();
  }

  /*
  async conectarDB() {
    await dbConnection.dbConnection();
  }
  */

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(json());

    // Directorio Público
    this.app.use(estatic("public"));

    /*
    // Fileupload - Carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    )*/
  }

  routes() {
    this.app.use(this.paths.donaciones, routes.donacion);
  }

  crons() {
    crons();
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

export default Server;