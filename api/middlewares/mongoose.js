const renameKeys = require('deep-rename-keys');
const { isArray, isObject } = require('lodash');

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
        resolve(processResult(result));
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteOne = (Collection, params) => {
  return new Promise((resolve, reject) => {
    Collection.findByIdAndRemove(processParams(params))
      .then(result => {
        resolve(processResult(result));
      })
      .catch(error => {
        reject(error);
      });
  });
};

const updateOne = (Collection, params) => {
  params = processParams(params);
  return new Promise((resolve, reject) => {
    Collection.update(params)
      .then(result => {
        if (result.ok) {
          Collection.findById(params._id)
            .then(res => {
              resolve(processResult(res));
            })
            .catch(error => {
              reject(error);
            });
          return;
        }
        resolve(null);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getOne = (Collection, params) => {
  params = processParams(params);
  return new Promise((resolve, reject) => {
    Collection.findById(params._id)
      .then(result => {
        resolve(processResult(result));
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getAll = (Collection, params) => {
  return new Promise((resolve, reject) => {
    Collection.find(params)
      .then(result => {
        resolve(processResult(result));
      })
      .catch(error => {
        reject(error);
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
