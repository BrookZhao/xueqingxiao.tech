const Navigation = require('../models/Navigation');

const add = async (ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('link').notEmpty();
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('link').optional().notEmpty();
  await next();
};

const update = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('link').optional().notEmpty();
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkQuery('id').notEmpty();
  ctx.checkQuery('name').optional().notEmpty();
  ctx.checkQuery('link').optional().notEmpty();
  const navigation = await Navigation.findOne({});
  ctx.body = {
    navigation,
  };
  await next();
};

const getAll = async (ctx, next) => {
  const navigations = await Navigation.find({});
  ctx.body = {
    navigations
  };
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
