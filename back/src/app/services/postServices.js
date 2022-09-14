const Sequelize = require('sequelize');
const Post = require('../models/Post');
const db = require('../../database/database');

async function create(body) {
  const post = await Post.create(body);
  return post;
}

async function getAll() {
  const posts = await Post.findAll();
  return posts;
}

async function getById(id) {
  const [post] = await db.query(`SELECT * from "posts" where id = ${id}`, {
    type: Sequelize.QueryTypes.SELECT,
  });
  return post;
}

async function updateById(id, body) {
  const post = await Post.update(body, {
    where: {
      id,
    },
  });
  return post;
}

async function deleteById(id) {
  const post = await Post.destroy({
    where: {
      id,
    },
  });
  return post;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
}