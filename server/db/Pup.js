const { Sequelize} = require("sequelize");
const db = require("./db");

const Pup = db.define("pup", {
  name: {
    type: Sequelize.STRING,
    allownull: false,
  },
  description: {
    type: Sequelize.STRING,
    allownull: true,
  },
  breed:{
      type: Sequelize.STRING,
      allownull: false,
  },
  choices:{
    //   type: Sequelize.STRING,
    //   allownull: false,
    //   get(){
    //       return this.getDataValue('choices').split("/")
    //   }
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [],
  },
  image:{
      type: Sequelize.STRING,
      allownull: false,
  }
});

module.exports = Pup;