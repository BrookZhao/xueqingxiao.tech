const Router = require('koa-router');
const comment = require('../controllers/comment');

const router = new Router();
router
  .get('/stories/:story/comments', comment.getAll)
  .post('/stories/:story/comments', comment.add)
  .get('/stories/:story/comments/:id', comment.getOne)
  .put('/stories/:story/comments/:id', comment.update)
  .delete('/stories/:story/comments/:id', comment.remove);

module.exports = router;
