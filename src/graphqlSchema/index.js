import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import parkQueries from './park/parkQueries';
import bywayQueries from './byway/bywayQueries';
import busQueries from './park/busQueries';
import parkCategoriesQueries from './park/parkCategoriesQueries';
import parkAmenitiesQueries from './park/parkAmenitiesQueries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...parkQueries,
      ...bywayQueries,
      ...busQueries,
      ...parkCategoriesQueries,
      ...parkAmenitiesQueries,
    },
  }),
});
