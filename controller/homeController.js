//Langkah 8.3: Pembuatan Controller Home pada sistem Authn

module.exports = {
  home(req, res) {
    res.render("home", {
      url: "http://localhost:3000/",
      userName: req.session.username,
    });
  },
};

/**
 * Hanya terdapat satu fungsi di dalamnya yg digunakan utk me- render
 * tampilan home.js sekaligus membawa data berupa userName yang nantinya akan ditampilkan pada browser.
 */
