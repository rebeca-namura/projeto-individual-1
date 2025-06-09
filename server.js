// server.js
const express = require("express");
const path = require("path");

const routes = require('./routes/index.js');

const app = express();
const port = 3200;

// Middlewares

// Usando as rotas definidas
app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


