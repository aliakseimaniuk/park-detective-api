import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Bus',
  description: 'This object represents bus type.',
  fields: {
    objectId: { type: new GraphQLNonNull(GraphQLInt) },
    stopName: { type: new GraphQLNonNull(GraphQLString) },
    routes: { type: new GraphQLNonNull(GraphQLString) },
    shelter: { type: new GraphQLNonNull(GraphQLString) },
    bench: { type: new GraphQLNonNull(GraphQLString) },
    stopAbbr: { type: new GraphQLNonNull(GraphQLString) },
    stopId: { type: new GraphQLNonNull(GraphQLString) },
    lat: { type: new GraphQLNonNull(GraphQLFloat) },
    lon: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});
