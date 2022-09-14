const Users = require('../models/Users');
const db = require('../../database/database');
const bcrypt = require('bcrypt');

async function create(body) {
  const encryptedUserPassword = await bcrypt.hash(body.password, 10);

  const user = await Users.create({...body, password: encryptedUserPassword});

  user.password = undefined;

  return user;
}

async function login(body) {
  const [user] = await db.query(`SELECT * FROM users WHERE email = '${body.email}'`);

  if (!user[0]) {
    throw new Error('Users not found');
  }

  const isPasswordValid = await bcrypt.compare(body.password, user[0].password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  user[0].password = undefined;
  return user[0];
}

async function getById(id) {
  const [user] = await db.query(`SELECT * FROM users WHERE id = ${id}`);
  user[0].password = undefined;
  return user[0];
}

async function getAll() {
  const users = await Users.findAll({ attributes: ['id', 'name', 'email'] });
  return users;
}

async function deleteById(id) {
  const [user] = await db.query(`DELETE FROM users WHERE id = ${id}`);
  return user;
}

module.exports = {
  create,
  login,
  getById,
  getAll,
  deleteById
}