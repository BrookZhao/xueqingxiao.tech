const Router = require('koa-router');
const user = require('../controllers/user');

const router = new Router();
router
  .get('/users', user.getAll)
  .post('/users', user.add)
  .get('/users/:id', user.getOne)
  .put('/users/:id', user.update)
  .delete('/users/:id', user.remove);

module.exports = router;
