// server.js
const express = require("express");
const path = require("path");

const routes = require('./routes/index.js');



const app = express();
const port = 3200;

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "views")))
// Usando as rotas definidas

app.use("/", routes);



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


