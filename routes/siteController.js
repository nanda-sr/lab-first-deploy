const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyCpayMiM_CjZ-40-YAsXwNxDUmylF1EgxE" });
});

module.exports = siteController;

