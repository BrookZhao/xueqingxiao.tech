const Series = require('../models/Series');
const { getErrorPaylod } = require('../utils');

const add = async(ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('description').notEmpty();
  ctx.checkBody('logo').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Series, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.addOne(Series, ctx.request.body);
  await next();
};

const remove = async(ctx, next) => {
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Series, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.deleteOne(Series, ctx.params);
  await next();
};

const update = async(ctx, next) => {
  ctx.checkParams('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('description').optional().notEmpty();
  ctx.checkBody('logo').optional().notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Series, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.updateOne(Series, ctx.params, ctx.request.body);
  await next();
};

const getOne = async(ctx, next) => {
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Series, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.getOne(Series, ctx.params);
  await next();
};

const getAll = async(ctx, next) => {
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Series, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.getAll(Series, {});
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
