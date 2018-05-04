import express from 'express';
import cors from 'cors';
import _ from 'lodash';
import expressGraphQL from 'express-graphql';
import { printSchema } from 'graphql';
import path from 'path';
import schema from './graphqlSchema';
import Parks from './data/parks';

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

// index page
app.get('/', (req, res) => {
  const model = {
    currentPage: 'Home',
    sticky: 'yes',
    date: new Date(),
  };

  res.render('pages/index', model);
});

// parks page
app.get('/parks', (req, res) => {
  const model = {
    currentPage: 'Parks',
    sticky: 'no',
    date: new Date(),
  };

  res.render('pages/parks', model);
});

// park page
app.get('/park/:id', (req, res) => {
  // TODO: Move find logic to middleware service.
  const park = _.find(Parks, p => p.id === parseInt(req.params.id, 10));
  const model = {
    currentPage: park.name,
    sticky: 'yes',
    park,
    date: new Date(),
  };

  if (model.park) {
    res.render('pages/park', model);
  } else {
    res.render('pages/404');
  }
});

export default app;
