const Router = require('koa-router');
const navigation = require('./navigation');

const router = new Router();
router.use(navigation.routes());

module.exports = router;