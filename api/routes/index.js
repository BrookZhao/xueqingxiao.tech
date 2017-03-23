const Router = require('koa-router');
const navigation = require('./navigation');

const router = new Router({
  prefix: '/api',
});

router.use(navigation.routes());

module.exports = router;
