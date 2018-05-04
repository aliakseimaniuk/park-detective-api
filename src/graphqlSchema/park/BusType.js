import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} from 'graphql';

//   stopabbr, stopid, lon, lat

export default new GraphQLObjectType({
  name: 'Bus',
  description: 'This object represents bus type.',
  fields: {
    objectid: { type: new GraphQLNonNull(GraphQLInt) },
    stopname: { type: new GraphQLNonNull(GraphQLString) },
    routes: { type: new GraphQLNonNull(GraphQLString)},
    shelter: { type: new GraphQLNonNull(GraphQLString)},
    bench: { type: new GraphQLNonNull(GraphQLString)},
    stopabbr: { type: new GraphQLNonNull(GraphQLString)},
    stopid: { type: new GraphQLNonNull(GraphQLString)},
    lat: { type: new GraphQLNonNull(GraphQLFloat)},
    lon: { type: new GraphQLNonNull(GraphQLFloat)}
  },
});
