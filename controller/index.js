/*
Langkah 8 : Pembuatan Controller pada sistem Auth
*/

const login = require("./loginController");
const register = require("./registerController");
const home = require("./homeController");
const profile = require("./profileController");

module.exports = {
  login,
  register,
  home,
  profile,
};
