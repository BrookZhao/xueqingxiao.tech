const Router = require('koa-router');
const series = require('../controllers/series');

const router = new Router();
router
  .get('/series', series.getAll)
  .get('/series/:id', series.getOne)
  .post('/series', series.add)
  .put('/series', series.update)
  .delete('/series', series.remove);

module.exports = router;
