const Sequelize = require('sequelize');
const configDB = require('../config/database');

module.exports = new Sequelize(configDB);
