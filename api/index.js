import Koa from 'koa';
import graphqlHTTP from 'koa-graphql-next';
import { getSchema } from '@risingstack/graffiti-mongoose';
import graphql from 'graphql';
import models from './models';

export const schema = getSchema(models);

const app = new Koa();
app.use(graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('API Server is running on http://localhost:3000');
})
