const express = require("express");
const DB = require("./connexion-mysql");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const PORT = 8088;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/categories/list", (req, res) => {
  const sql = "SELECT * FROM categorie";
  DB.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.render("categorie/list-categorie", { categories: result });
    }
  });
});

app.get('/categories/ajout', (req, res) => {
  return res.render('categorie/ajout-categorie');
});

app.post('/categories/ajout', (req, res) => {
  console.log(req.body);
  
  const {nom, description} = req.body;
  
  
  const sql = "INSERT INTO categorie (nom, description) VALUES (?, ?)";
  DB.query(sql, [nom, description], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.redirect('/categories/list');
    }
  });
});

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port :" + PORT);
});
