const Router = require('koa-router');
const comment = require('./comment');
const navigation = require('./navigation');
const series = require('./series');
const story = require('./story');
const tag = require('./tag');
const user = require('./user');

const router = new Router({
  prefix: '/api',
});

router.use(comment.routes());
router.use(navigation.routes());
router.use(series.routes());
router.use(story.routes());
router.use(tag.routes());
router.use(user.routes());

module.exports = router;
