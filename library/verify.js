//langkah 6 : membuat file verify.js, file ini berfungsi sebagai middleware yg akan
// memproteksi pemanggilan controller dari router sebelum dijalankan

module.exports = {
  /**
   * Jadi, secara singkat, kode ini memastikan bahwa akses ke rute atau fungsi yang menggunakan
   * middleware isLogin hanya diizinkan jika pengguna telah login sebelumnya. Jika belum, pengguna akan
   * diarahkan kembali ke halaman login.
   */
  isLogin(req, res, next) {
    if (req.session.loggedin === true) {
      next();
      return;
    } else {
      req.session.destroy(function (err) {
        res.redirect("/login");
      });
    }
  },

  /**
   * Jadi, secara singkat, kode tersebut memastikan bahwa pengguna diarahkan kembali ke halaman utama (/)
   * jika mereka mencoba mengakses halaman logout (isLogout) saat mereka masih dalam sesi login,
   * sementara mereka dibiarkan mengakses halaman tersebut jika mereka sudah logout.
   */
  isLogout(req, res, next) {
    if (req.session.loggedin !== true) {
      next();
      return;
    }
    res.redirect("/");
  },
};
