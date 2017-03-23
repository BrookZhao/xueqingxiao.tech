const Router = require('koa-router');
const tag = require('../controllers/tag');

const router = new Router();
router
  .get('/stories/:story/tags', tag.getAll)
  .get('/stories/:story/tags/:id', tag.getOne)
  .post('/stories/:story/tags', tag.add)
  .put('/stories/:story/tags', tag.update)
  .delete('/stories/:story/tags', tag.remove);

module.exports = router;
