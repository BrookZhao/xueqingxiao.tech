const Router = require('koa-router');
const user = require('../controllers/user');

const router = new Router();
router
  .get('/users', user.getAll)
  .get('/users/:id', user.getOne)
  .post('/users', user.add)
  .put('/users', user.update)
  .delete('/users', user.remove);

module.exports = router;
