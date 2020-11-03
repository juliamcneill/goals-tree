const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/route", (req, res) => {
  res.status(200).json("Server is working!");
});

if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
