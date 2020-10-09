const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host     : 'localhost',
  user     : 'root',
  password : process.env.LOCAL_MYSQL_PASSWORD,
  database : 'burger_db'
});

const query = function(query, values) {
  console.log(Object.values(arguments));
  return new Promise((resolve, reject) => {
    connection.query(...Object.values(arguments), (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  })
}

module.exports = {

}