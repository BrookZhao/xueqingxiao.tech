const Story = require('../models/Story');

const add = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkBody('title').notEmpty();
  ctx.checkBody('author').notEmpty();
  ctx.checkBody('content').notEmpty();
  ctx.checkBody('published').notEmpty();
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkBody('title').notEmpty();
  ctx.checkBody('author').notEmpty();
  ctx.checkBody('content').notEmpty();
  ctx.checkBody('published').notEmpty();
  await next();
};

const update = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkBody('title').notEmpty();
  ctx.checkBody('author').notEmpty();
  ctx.checkBody('content').notEmpty();
  ctx.checkBody('published').notEmpty();
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  await next();
};

const getAll = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  await next();
};

const like = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  await next();
};

const dislike = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  await next();
};

const visit = async (ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
  like,
  dislike,
  visit,
};
