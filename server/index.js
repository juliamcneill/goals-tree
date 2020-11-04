const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("../database/index");
const { forEachChild } = require("typescript");

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/goals/:period", (req, res) => {
  if (!["life", "year", "month", "week", "day"].includes(req.params.period)) {
    res.status(500).json("Table name is invalid.");
  }

  connection.query(`SELECT * FROM ` + req.params.period + `_goals`, function (
    error,
    results
  ) {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  });
});

if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
