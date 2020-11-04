const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("../database/index");
const { forEachChild } = require("typescript");

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/life-goals", (req, res) => {
  connection.query(`SELECT * FROM life_goals`, function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/year-goals", (req, res) => {
  connection.query(`SELECT * FROM year_goals`, function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/month-goals", (req, res) => {
  connection.query(`SELECT * FROM month_goals`, function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/week-goals", (req, res) => {
  connection.query(`SELECT * FROM week_goals`, function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/day-goals", (req, res) => {
  connection.query(`SELECT * FROM day_goals`, function (error, results) {
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
