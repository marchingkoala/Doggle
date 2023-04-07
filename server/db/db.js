const Sequelize = require("sequelize");
const DB_URL = "postgres://localhost:5432/dogs";

const db = new Sequelize(process.env.DATABASE_URL || DB_URL, { logging: false });



module.exports = db;