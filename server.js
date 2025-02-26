const express = require("express");
const ejs = require("ejs");

const PORT = 8088;
const app = express();
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port :" + PORT);
});
