import Koa from 'koa';
import logger from 'koa-logger';
import graphqlHTTP from 'koa-graphql-next';
import graphql from 'graphql';
import { getSchema } from '@risingstack/graffiti-mongoose';
import models from './models';

const schema = getSchema(models);

const app = new Koa();
app.use(logger());
app.use(graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('API Server is running on http://localhost:3000');
})
