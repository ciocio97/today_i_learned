const mysql = require('mysql');
const dotenv = require('dotenv');
const config = require('../config/config');
dotenv.config();

const con = mysql.createConnection(
  config[process.env.NODE_ENV || 'development']
);

console.log(process.env.NODE_ENV);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
