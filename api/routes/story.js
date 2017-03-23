const Router = require('koa-router');
const story = require('../controllers/story');

const router = new Router();
router
  .get('/series/:series/stories', story.getAll)
  .get('/series/:series/stories/:id', story.getOne)
  .post('/series/:series/stories', story.add)
  .put('/series/:series/stories', story.update)
  .delete('/series/:series/stories', story.remove);

module.exports = router;
