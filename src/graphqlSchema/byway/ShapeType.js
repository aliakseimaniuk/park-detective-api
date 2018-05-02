import { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } from 'graphql';
import GeometryType from './GeometryType';

export default new GraphQLObjectType({
  name: 'shape',
  description: 'This object represents the shape of the byway',
  fields: {
    latitude: { type: new GraphQLNonNull(GraphQLFloat) },
    longitude: { type: new GraphQLNonNull(GraphQLFloat) },
    geometry: { type: GeometryType },
  },
});
