const { render } = require("ejs");
const express = require("express");

landingPageCon = async (req, res) => {
    console.log('get')
    res.render('landingPage/landingPage.ejs')
}
module.exports = {
    landingPageCon
};