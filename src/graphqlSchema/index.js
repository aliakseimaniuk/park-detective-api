import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import parkQueries from './park/parkQueries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...parkQueries,
    },
  }),
});
