const boom = require('boom');
const Series = require('../models/Series');

const add = async (ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('description').notEmpty();
  ctx.checkBody('logo').notEmpty();
  ctx.body = { series: await ctx.mongoose.addOne(Series, ctx.request.body) };
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.body = { series: await ctx.mongoose.deleteOne(Series, ctx.request.body) };
  await next();
};

const update = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('description').optional().notEmpty();
  ctx.checkBody('logo').optional().notEmpty();
  ctx.body = { series: await ctx.mongoose.updateOne(Series, ctx.request.body) };
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkParams('id').notEmpty();
  ctx.body = { series: await ctx.mongoose.getOne(Series, ctx.params) };
  await next();
};

const getAll = async (ctx, next) => {
  ctx.body = { series: await ctx.mongoose.getAll(Series, {}) };
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
