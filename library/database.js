// let mysql = require("mysql");

// //konfigurasi untuk koneksi database mysql
// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "express_mysql_dian",
// });

// //kondisi untuk mengecek database berjalan atau tidak
// connection.connect(function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Connected to Database");
//   }
// });

// module.exports = connection;

// langkah 5 : membuat file yang digunakan untuk konfigurasi koneksi database dengan nama database.js
module.exports = {
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "express_mysql_dian",
};
