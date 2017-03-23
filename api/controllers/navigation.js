const boom = require('boom');
const Navigation = require('../models/Navigation');

const add = async (ctx, next) => {
  try {

  } catch (e) {
    console.error(e);
    ctx.throw(boom.badRequest(ctx.translate('INVALID_NAVIGATION')));
  }
};

const remove = async (ctx, next) => {
  
};

const update = async (ctx, next) => {
  
};

const getOne = async (ctx, next) => {
  const navigation = await Navigation.findOne({});
  ctx.body = {
    navigation,
  };
};

const getAll = async (ctx, next) => {
  const navigations = await Navigation.find({});
  ctx.body = {
    navigations
  };
}

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
