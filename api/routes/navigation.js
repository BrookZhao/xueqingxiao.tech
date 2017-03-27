const Router = require('koa-router');
const navigation = require('../controllers/navigation');

const router = new Router();
router
  .get('/navigations', navigation.getAll)
  .post('/navigations', navigation.add)
  .get('/navigations/:id', navigation.getOne)
  .put('/navigations/:id', navigation.update)
  .delete('/navigations/:id', navigation.remove);

module.exports = router;
