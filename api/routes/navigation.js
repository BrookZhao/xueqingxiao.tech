const Router = require('koa-router');
const navigation = require('../controllers/navigation');

const router = new Router();
router
  .get('/navigations', navigation.getAll)
  .get('/navigations/:id', navigation.getOne)
  .post('/navigations', navigation.add)
  .put('/navigations', navigation.update)
  .delete('/navigations', navigation.remove);

module.exports = router;
