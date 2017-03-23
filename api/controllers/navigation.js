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
  
};

const getAll = async (ctx, next) => {

}

module.exports = {
  add,
  remove,
  update,
  getOne,
  getAll,
};
