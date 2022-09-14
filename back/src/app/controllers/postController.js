const Joi = require('joi');

const PostServices = require('../services/postServices');

const postSchema = Joi.object().keys({
  content: Joi.string().required(),
  user_id: Joi.number().required(),
});

async function create(req, res) {
  try {
    const { error } = postSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const post = await PostServices.create(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getAll(req, res) {
  try {
    const posts = await PostServices.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getById(req, res) {
  try {
    const post = await PostServices.getById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function updateById(req, res) {
  try {
    const post = await PostServices.updateById(req.params.id, req.body);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function deleteById(req, res) {
  try {
    const post = await PostServices.deleteById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
};