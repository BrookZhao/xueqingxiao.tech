const Navigation = require('../models/Navigation');
const { getErrorPaylod } = require('../utils');

const add = async (ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('link').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Navigation, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.addOne(Navigation, ctx.request.body);
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Navigation, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.deleteOne(Navigation, ctx.params);
  await next();
};

const update = async (ctx, next) => {
  ctx.checkParams('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('link').optional().notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Navigation, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.updateOne(Navigation, ctx.params, ctx.request.body);
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Navigation, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.getOne(Navigation, ctx.params);
  await next();
};

const getAll = async (ctx, next) => {
  const navigations = await Navigation.find({});
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Navigation, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.getAll(Navigation, ctx.query);
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
