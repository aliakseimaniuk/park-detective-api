import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'ParkAmenities',
  description: 'This object represents list of available park amenities.',
  fields: {
    amenities: { type: new GraphQLList(GraphQLString) },
  },
});
