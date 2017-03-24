const boom = require('boom');
const Tag = require('../models/Tag');

const add = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
};

const remove = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
};

const update = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').notEmpty();
};

const getOne = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkParams('id').notEmpty();
};

const getAll = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
