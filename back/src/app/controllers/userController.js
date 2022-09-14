const jwt = require('jsonwebtoken');
const Joi = require('joi');

const Users = require('../models/Users');

const authConfig = require('../../config/auth');
const UserServices = require('../services/userServices');

const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

async function register(req, res) {
  try {
    const body = req.body;

    const { error } = userSchema.validate(body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    if(await Users.findOne({ where: { email: body.email } })) {
      return res.status(400).send('User already exists');
    }

    const user = await UserServices.create(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function login(req, res) {
  try {
    const body = req.body;

    const user = await UserServices.login(body);

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    return res.status(200).json({ ...user, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

async function getById(req, res) {
  try {
    const user = await UserServices.getById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getAll(req, res) {
  try {
    const users = await UserServices.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function deleteById(req, res) {
  try {
    const user = await UserServices.deleteById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  register,
  login,
  getById,
  getAll,
  deleteById,
}