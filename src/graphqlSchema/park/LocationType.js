import { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } from 'graphql';

export default new GraphQLObjectType({
  name: 'Location',
  description: 'This object represents location type.',
  fields: {
    latitude: { type: new GraphQLNonNull(GraphQLFloat) },
    longitude: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});
