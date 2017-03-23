const Koa = require('koa');
const logger = require('koa-logger');
const database = require('./database');
const router = require('./routes');

const app = new Koa();
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

const start = async() => {
  try {
    const blogDatabase = await database.connect('mongodb://localhost/blog');
    console.log(`Connected to ${blogDatabase.host}:${blogDatabase.port}/${blogDatabase.name}`);
  } catch (error) {
    console.error('Unable to connect to database', error);
  }
  await app.listen(3000);
  console.log('API Server is running on http://localhost:3000');
};

module.exports = {
  start,
};
