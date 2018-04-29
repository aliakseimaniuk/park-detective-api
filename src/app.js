import express from 'express';
import expressGraphQL from 'express-graphql';
import { printSchema } from 'graphql';
import schema from './graphqlSchema';

const app = express();

app.get('/graphql/schema', (req, res) => {
  res.type('text/plain').send(printSchema(schema));
});

app.use(
  '/graphql',
  expressGraphQL(() => ({
    schema,
    graphiql: true,
  })),
);

export default app;
