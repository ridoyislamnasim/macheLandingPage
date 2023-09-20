const express = require("express");
const landingPage = express.Router();
// Controller
const { landingPageCon } = require("../../controller/landingPage/landingPageController");
// ridoyIslamNasim/portfolio
landingPage.get("/",
landingPageCon,
);

module.exports = landingPage;