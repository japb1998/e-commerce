require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize =  new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
      host:'localHost',
      dialect:'mysql',
      port:3306,
  }
);

module.exports = sequelize;
