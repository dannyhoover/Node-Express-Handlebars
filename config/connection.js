const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host     : 'localhost',
  user     : 'root',
  password : process.env.LOCAL_MYSQL_PASSWORD,
  database : 'burger_db'
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
