const Router = require('koa-router');
const series = require('../controllers/series');

const router = new Router();
router
  .get('/series', series.getAll)
  .post('/series', series.add)
  .get('/series/:id', series.getOne)
  .put('/series/:id', series.update)
  .delete('/series/:id', series.remove);

module.exports = router;
