const Sequelize = require("sequelize");
const config = {
    logging: false,
}
const DB_URL = "postgres://localhost:5432/dogs";
// const TEST_URL =
//   "postgres://dogs_gj8t_user:Zz3LM6sTnenHn9PYHagLskkWUkdoiMfd@dpg-cjuv7mp5mpss7388oku0-a/dogs_gj8t";

// const db = new Sequelize(process.env.DATABASE_URL, config);
const db = new Sequelize(DB_URL, config);
// const db = new Sequelize(TEST_URL, config);

//
module.exports = db;