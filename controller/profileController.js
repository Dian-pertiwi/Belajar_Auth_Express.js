/**
 * Langkah 8.4 = Pembuatan Controller profile pada Sistem Auth
 */

const config = require("../library/database");

let mysql = require("mysql");
let pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  profile(req, res) {
    let id = req.session.userid;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM user where user_id = '${id}';
                `,
        function (error, results) {
          if (error) throw error;
          res.render("profile", {
            url: "http://localhost:3000/",
            userName: req.session.username,
            nama: results[0]["username"],
            email: results[0]["email"],
          });
        }
      );
      connection.release();
    });
  },
};
/**
 * ekarang, kita lanjut ke bagian desain halaman untuk ditampilkan pada user 
 * melalui browser. Seperti yang telah dijelaskan di awal pelatihan, kita akan 
 * menggunakan template engine EJS. Namun, kamu tidak perlu khawatir karena kode 
 * yang ada di dalamnya hampir sama dengan kode HTML. Kamu juga bisa menambahkan CSS sesuka hati. 
 * Pada modul ini, kita menggunakan bootstrap sebagai framework CSS yang dipanggil melalui CDN.
Sebelumnya
 */
