const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("../database/index");

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/route", (req, res) => {
  res.status(200).json("Server is working!");
});

app.get("/database", (req, res) => {
  connection.query(`SELECT * FROM goals`, function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
