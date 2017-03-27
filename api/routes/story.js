const Router = require('koa-router');
const story = require('../controllers/story');

const router = new Router();
router
  .get('/series/:series/stories', story.getAll)
  .post('/series/:series/stories', story.add)
  .get('/series/:series/stories/:id', story.getOne)
  .put('/series/:series/stories/:id', story.update)
  .delete('/series/:series/stories/:id', story.remove)
  .post('/series/:series/stories/:id/like', story.like)
  .post('/series/:series/stories/:id/dislike', story.dislike)
  .post('/series/:series/stories/:id/visit', story.visit);

module.exports = router;
