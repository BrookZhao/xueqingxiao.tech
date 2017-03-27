const getErrorPaylod = (Collection, errors) => ({
  success: false,
  message: `${Collection.modelName} validation failed.`,
  errors: errors,
});

module.exports = {
  getErrorPaylod,
};
