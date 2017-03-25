const renameKeys = require('deep-rename-keys');

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

const deleteOne = () => {

};

const udpateOne = () => {

};

const getOne = () => {

};

const getAll = (Collection, params) => {
  return new Promise((resolve, reject) => {
    Collection.find(params)
      .then(result => {
        resolve(renameKeys(result.map(value => (value.toObject())),
          key => (key === '_id' ? 'id' : key)));
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getAllWithPagination = () => {

}

module.exports = (app) => {
  if (app.context.mongoose) {
    return;
  }
  app.context.mongoose = {
    addOne,
    deleteOne,
    udpateOne,
    getOne,
    getAll,
    getAllWithPagination,
  };
};
