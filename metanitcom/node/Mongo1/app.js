const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "1z8UyM75Q54z17"
});
 
const user = ["Tom", 29];
const sql = "INSERT INTO users(name, age) VALUES(?, ?)";
 
connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});
 
connection.end();

// Глава 7. ===> Выполнение запросов к MySQL