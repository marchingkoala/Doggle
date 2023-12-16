const Sequelize = require("sequelize");
const config = {
    logging: false,
}
const DB_URL = "postgres://localhost:5432/dogs";

const db = new Sequelize(process.env.DATABASE_URL, config);

//used for local test
// const db = new Sequelize(DB_URL, config);


module.exports = db;