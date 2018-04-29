import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './graphqlSchema';
import { printSchema } from 'graphql';

const app = express();

app.get('/graphql/schema', (req, res) => {
  res.type('text/plain').send(printSchema(schema));
});

app.use(
  '/graphql',
  expressGraphQL(req => ({
    schema,
    graphiql: true,
  })),
);

export default app;
