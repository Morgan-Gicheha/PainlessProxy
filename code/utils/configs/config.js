// config.js
require("dotenv").config();

const config = {
    Port: process.env.PORT || 3000,
};

module.exports = { config };
