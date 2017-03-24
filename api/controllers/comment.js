const Comment = require('../models/Comment');

const add = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkBody('content').notEmpty();
  ctx.checkBody('avatarUrl').optional().notEmpty();
  ctx.checkBody('nickname').notEmpty();
  ctx.checkBody('email').notEmpty();
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkBody('id').notEmpty();
  await next();
};

const update = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('content').notEmpty();
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  ctx.checkParams('id').notEmpty();
  await next();
};

const getAll = async (ctx, next) => {
  ctx.checkParams('story').notEmpty();
  await next();
}

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
