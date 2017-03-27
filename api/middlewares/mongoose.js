const renameKeys = require('deep-rename-keys');
const { isArray, isObject, lowerCase } = require('lodash');
const pluralize = require('pluralize');

const processResult = result =>
  // renameKeys(JSON.parse(JSON.stringify(result)), key => (key === '_id' ? 'id' : key));
  JSON.parse(JSON.stringify(result));

const processParams = params =>
  renameKeys(params, key => (key === 'id' ? '_id' : key));

const addOne = (Collection, params) => {
  return new Promise((resolve, reject) => {
    const instance = new Collection(params);
    instance.save()
      .then((result) => {
        resolve({
          success: true,
          message: `${Collection.modelName} has been added.`,
          [lowerCase(Collection.modelName)]: processResult(result),
        });
      })
      .catch((error) => {
        resolve({
          success: false,
          message: error.message,
          errors: error.errors,
        });
      });
  });
};

const deleteOne = (Collection, params) => {
  return new Promise((resolve, reject) => {
    Collection.findByIdAndRemove(processParams(params))
      .then(result => {
        resolve({
          success: true,
          message: `${Collection.modelName} has been deleted.`,
        });
      })
      .catch(error => {
        resolve({
          success: false,
          message: error.message,
          errors: error.errors,
        });
      });
  });
};

const updateOne = (Collection, params, args) => {
  params = processParams(params);
  return new Promise((resolve, reject) => {
    Collection.update(Object.assign(params, args))
      .then(({ ok }) => {
        if (ok) {
          Collection.findById(params)
            .then(result => {
              resolve({
                success: true,
                message: `${Collection.modelName} has been updated.`,
                [lowerCase(Collection.modelName)]: processResult(result),
              });
            })
            .catch(error => {
              resolve({
                success: false,
                message: error.message,
                errors: error.errors,
              });
            });
          return;
        }
        resolve(null);
      })
      .catch(error => {
        resolve({
          success: false,
          message: error.message,
          errors: error.errors,
        });
      });
  });
};

const getOne = (Collection, params) => {
  params = processParams(params);
  return new Promise((resolve, reject) => {
    Collection.findById(params._id)
      .then(result => {
        resolve({
          success: true,
          [lowerCase(Collection.modelName)]: processResult(result),
        });
      })
      .catch(error => {
        resolve({
          success: false,
          message: error.message,
          errors: error.errors,
        });
      });
  });
};

const getAll = (Collection, params) => {
  return new Promise((resolve, reject) => {
    Collection.find(params)
      .then(result => {
        resolve({
          success: true,
          [pluralize(lowerCase(Collection.modelName))]: processResult(result),
        });
      })
      .catch(error => {
        resolve({
          success: false,
          message: error.message,
          errors: error.errors,
        });
      });
  });
};

const getAllWithPagination = () => {

};

module.exports = (app) => {
  if (app.context.mongoose) {
    return;
  }
  app.context.mongoose = {
    addOne,
    deleteOne,
    updateOne,
    getOne,
    getAll,
    getAllWithPagination,
    processParams,
  };
};
