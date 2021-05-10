const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: "snstest",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: "snstest",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  prodiction: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: "snstest",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
