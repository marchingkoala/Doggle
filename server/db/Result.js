const { Sequelize } = require("sequelize");
const db = require("./db");

const Result = db.define("result", {
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resultImg: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Result;