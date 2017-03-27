const Router = require('koa-router');
const tag = require('../controllers/tag');

const router = new Router();
router
  .get('/stories/:story/tags', tag.getAll)
  .post('/stories/:story/tags', tag.add)
  .get('/stories/:story/tags/:id', tag.getOne)
  .put('/stories/:story/tags/:id', tag.update)
  .delete('/stories/:story/tags/:id', tag.remove);

module.exports = router;
