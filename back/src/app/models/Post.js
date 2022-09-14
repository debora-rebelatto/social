const Sequelize = require('sequelize');
const db = require('../../database/database');
const Users = require('./Users');

const Posts = db.define('post', {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
}, {
  timestamps: false
});

Posts.belongsTo(Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = Posts;