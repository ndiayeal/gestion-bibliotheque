const mysql = require("mysql2");
const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bibliotheque",
});

DB.connect((err) => {
  if (err) {
    console.log("Erreur de connexion à la base de données...");
    
    throw err;
  } else {
    console.log("Connexion à la base de données réussie...");
  }
});
module.exports = DB;