const boom = require('boom');
const Series = require('../models/Series');

const add = async(ctx, next) => {
  ctx.checkBody('name').notEmpty();
  ctx.checkBody('description').notEmpty();
  ctx.checkBody('logo').notEmpty();
  const requestBody = ctx.request.body;
  const series = new Series({
    name: requestBody.name,
    description: requestBody.description,
    logo: requestBody.logo,
  });
  try {
    ctx.body = await series.save();
  } catch (error) {
    console.log('Can not save series: ', error);
  }
  await next();
};

const remove = async(ctx, next) => {
  ctx.checkBody('id').notEmpty();
  const requestBody = ctx.request.body;
  try {
    ctx.body = await Series.findByIdAndRemove({
      _id: requestBody.id
    });
  } catch (error) {
    console.log(`Can not remove series by id ${requestBody.id}: `, error);
  }
  await next();
};

const update = async(ctx, next) => {
  ctx.checkBody('id').notEmpty();
  ctx.checkBody('name').optional().notEmpty();
  ctx.checkBody('description').optional().notEmpty();
  ctx.checkBody('logo').optional().notEmpty();
  const requestBody = ctx.request.body;
  requestBody._id = requestBody.id;
  delete requestBody.id;
  try {
    await Series.update(requestBody)
    ctx.body = await Series.find(requestBody);
  } catch (error) {
    console.log(`Can not update series ${JSON.stringify(requestBody)}: `, error);
  }
  await next();
};

const getOne = async(ctx, next) => {
  ctx.checkQuery('id').notEmpty();
  await next();
};

const getAll = async(ctx, next) => {
  try {
    const series = await Series.find({});
    ctx.body = {
      series,
    };
  } catch (error) {
    console.log('Can not find series: ', error);
  }
  await next();
};

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
