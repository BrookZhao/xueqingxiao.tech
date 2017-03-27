const Navigation = require('../models/Navigation');

const add = async (ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('link').notEmpty();
  ctx.body = { navigation: await ctx.mongoose.addOne(Navigation, ctx.request.body) };
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('link').optional().notEmpty();
  ctx.body = { navigation: await ctx.mongoose.deleteOne(Navigation, ctx.request.body) };
  await next();
};

const update = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('link').optional().notEmpty();
  ctx.body = { navigation: await ctx.mongoose.updateOne(Navigation, ctx.request.body) };
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkParams('id').notEmpty();
  ctx.body = { navigation: await ctx.mongoose.getOne(Navigation, ctx.params) };
  await next();
};

const getAll = async (ctx, next) => {
  const navigations = await Navigation.find({});
  ctx.body = { navigations: await ctx.mongoose.getAll(Navigation, ctx.query) };
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
