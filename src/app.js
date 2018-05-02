import express from 'express';
import cors from 'cors';
import expressGraphQL from 'express-graphql';
import { printSchema } from 'graphql';
import schema from './graphqlSchema';

const app = express();

app.use(cors());

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
