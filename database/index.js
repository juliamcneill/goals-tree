const mysql = require("mysql");
const config = require("../config");

const connectionString =
  process.env.CLEARDB_DATABASE_URL || config.CLEARDB_DATABASE_URL;

const connection = mysql.createPool(connectionString);

module.exports = connection;
