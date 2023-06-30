const Sequelize = require("sequelize");
const config = {
    logging: false,
}
// const DB_URL = "postgres://localhost:5432/dogs";

const db = new Sequelize(process.env.DATABASE_URL, {logging: false} );


module.exports = db;