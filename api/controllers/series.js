const boom = require('boom');
const Series = require('../models/Series');

const add = async (ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('description').notEmpty();
  ctx.checkBody('logo').notEmpty();
  await next();
};

const remove = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('description').optional().notEmpty();
  ctx.checkBody('logo').optional().notEmpty();
  await next();
};

const update = async (ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('description').optional().notEmpty();
  ctx.checkBody('logo').optional().notEmpty();
  await next();
};

const getOne = async (ctx, next) => {
  ctx.checkQuery('id').notEmpty();
  await next();
};

const getAll = async (ctx, next) => {
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
