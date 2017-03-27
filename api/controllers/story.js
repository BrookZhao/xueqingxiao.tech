const Story = require('../models/Story');
const { getErrorPaylod } = require('../utils');

const add = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkBody('title').notEmpty();
  ctx.checkBody('author').optional().notEmpty();
  ctx.checkBody('content').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.addOne(Story, Object.assign(ctx.params, ctx.request.body));
  await next();
};

const remove = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.deleteOne(Story, ctx.params);
  await next();
};

const update = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.checkBody('title').optional().notEmpty();
  ctx.checkBody('author').optional().notEmpty();
  ctx.checkBody('content').optional().notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.updateOne(Story, ctx.params, ctx.request.body);
  await next();
};

const getOne = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.getOne(Story, ctx.params);
  await next();
};

const getAll = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = await ctx.mongoose.getAll(Story, {});
  await next();
};

const like = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = {
    success: true,
    likes: await Story.findOneAndUpdate({_id: ctx.params.id}, { $inc: { likes: 1 } }).select('likes'),
  };
  await next();
};

const dislike = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = {
    success: true,
    likes: await Story.findOneAndUpdate({ _id: ctx.params.id, enabled: true }, { $inc: { likes: -1 } }).populate('likes'),
  };
  await next();
};

const visit = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  if (ctx.errors) {
    ctx.body = getErrorPaylod(Story, ctx.errors);
    return;
  }
  ctx.body = {
    success: true,
    likes: await Story.findOneAndUpdate(ctx.mongoose.processParams(ctx.params), { $inc: { uv: 1 } }).populate('uv'),
  };
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
