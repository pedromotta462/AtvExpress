const express = require("express");
const app = express();

let contador = 0;
let incrementar1 = 0;
let incrementar5 = 0;

app.get("/contador", function (req, res) {
    res.send({ contador });
  });

app.get('/incrementar1', (req, res) => {
    contador++;
    incrementar1++;
    res.json({ contador });
  });

  app.get('/incrementar5', (req, res) => {
    contador += 5;
    incrementar5++;
    res.json({ contador });
  });

  app.get('/relatorio', (req, res) => {
    const relatorio = {
      contador,
      incrementar1,
      incrementar5
    };
    res.json(relatorio);
  });

app.listen(3000);