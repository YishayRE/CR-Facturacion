const mysql = require("mysql");

/**
 * Configuración de conexión con la base de datos
 */

//Probar conexion (descomentar y comentar la const de abajo)
/* const connection = mysql.createConnection({
    host: "db-cruzroja-facturas.cnelnjkoidd7.us-east-1.rds.amazonaws.com",
    user: "MasterCrzFact",  
    password: "pa5oo5YH74TEoP",  
    database: "facturas", 
    port: 3306,  
    connectionLimit: 10, 
  });
  
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
}); */

const connection = mysql.createPool({
  host: "db-cruzroja-facturas.cnelnjkoidd7.us-east-1.rds.amazonaws.com",
  user: "MasterCrzFact",  
  password: "pa5oo5YH74TEoP",  
  database: "facturas", 
  port: 3306,  
  connectionLimit: 10, 
});

module.exports = connection;