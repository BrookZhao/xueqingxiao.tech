const Story = require('../models/Story');

const add = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkBody('title').notEmpty();
  ctx.checkBody('author').optional().notEmpty();
  ctx.checkBody('content').notEmpty();
  ctx.body = {
    story: await ctx.mongoose.addOne(
      Story,
      Object.assign(ctx.query, ctx.request.body)
    ),
  };
  await next();
};

const remove = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.body = {
    story: await ctx.mongoose.deleteOne(Story, ctx.params),
  };
  await next();
};

const update = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.checkBody('title').optional().notEmpty();
  ctx.checkBody('author').optional().notEmpty();
  ctx.checkBody('content').optional().notEmpty();
  ctx.body = {
    story: await ctx.mongoose.updateOne(Story, ctx.params, ctx.request.body),
  };
  await next();
};

const getOne = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.body = {
    story: await ctx.mongoose.getOne(Story, ctx.params),
  };
  await next();
};

const getAll = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.body = {
    story: await ctx.mongoose.getAll(Story, {}),
  };
  await next();
};

const like = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.body = {
    likes: await Story.udpate(
      ctx.params, { $inc: { likes: 1 } }
    ).populate('likes'),
  };
  await next();
};

const dislike = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.body = {
    likes: await Story.udpate(
      ctx.params, { $inc: { likes: -1 } }
    ).populate('likes'),
  };
  await next();
};

const visit = async(ctx, next) => {
  ctx.checkParams('series').notEmpty();
  ctx.checkParams('id').notEmpty();
  ctx.body = {
    likes: await Story.udpate(
      ctx.params, { $inc: { uv: 1 } }
    ).populate('uv'),
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
