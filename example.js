const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
let port = 3000;

const app = express();
app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
  }),
);

app.listen(port);
