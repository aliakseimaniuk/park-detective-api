import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'pointOfInterest',
  description: 'This object represents points of interest along a byway.',
  fields: {
    address: { type: new GraphQLNonNull(GraphQLString) },
    byway: { type: new GraphQLNonNull(GraphQLString) },
    poi: { type: new GraphQLNonNull(GraphQLString) },
    objectid: { type: new GraphQLNonNull(GraphQLString) },
  },
});
