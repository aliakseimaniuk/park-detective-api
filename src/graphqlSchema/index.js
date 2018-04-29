import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import parkQueries from './park/parkQueries';
import bywayQueries from './byway/bywayQueries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...parkQueries,
      ...bywayQueries,
    },
  }),
});
