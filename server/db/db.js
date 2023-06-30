const Sequelize = require("sequelize");
const config = {
    logging: false,
}
const DB_URL = "postgres://localhost:5432/dogs";

// const db = new Sequelize(process.env.DATABASE_URL, config);
const db = new Sequelize(
  "postgresql://postgres:RyTimzUNzgM7kF5Xrkgo@containers-us-west-32.railway.app:5840/railway",
config
);

module.exports = db;