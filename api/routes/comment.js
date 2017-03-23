const Router = require('koa-router');
const comment = require('../controllers/comment');

const router = new Router();
router
  .get('/stories/:story/comments', comment.getAll)
  .get('/stories/:story/comments/:id', comment.getOne)
  .post('/stories/:story/comments', comment.add)
  .put('/stories/:story/comments', comment.update)
  .delete('/stories/:story/comments', comment.remove);

module.exports = router;
