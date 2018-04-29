import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import LocationType from './LocationType';

export default new GraphQLObjectType({
  name: 'Park',
  description: 'This object represents park type.',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: LocationType },
  },
});
