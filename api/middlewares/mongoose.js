const renameKeys = require('deep-rename-keys');
const { isArray, isObject, lowerCase } = require('lodash');
const pluralize = require('pluralize');

const _idToId = key => (key === '_id' ? 'id' : key);
const idTo_id = key => (key === 'id' ? '_id' : key);

const processResult = result => {
  if (isArray(result)) {
    return renameKeys(result.map(value => (value.toObject())), _idToId);
  }
  if (isObject(result)) {
    return renameKeys(result.toObject(), _idToId);
  }
  return null;
};

const processParams = params => {
  return renameKeys(params, idTo_id);
};

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
          errors: errors,
        });
      });
  });
};

const deleteOne = (Collection, params) => {
  return new Promise((resolve, reject) => {
    Collection.remove(processParams(params))
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
          errors: errors,
        });
      });
  });
};

const updateOne = (Collection, params, args) => {
  params = processParams(params);
  return new Promise((resolve, reject) => {
    Collection.update(Object.assign(params, args))
      .then(result => {
        if (result.ok) {
          Collection.findById(params._id)
            .then(res => {
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
                errors: errors,
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
          errors: errors,
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
          errors: errors,
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
          errors: errors,
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
  };
};
