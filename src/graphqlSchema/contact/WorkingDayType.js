import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'WorkingDay',
  description: 'This object represents working day type.',
  fields: {
    day: { type: new GraphQLNonNull(GraphQLString) },
    openTime: { type: new GraphQLNonNull(GraphQLString) },
    closeTime: { type: new GraphQLNonNull(GraphQLString) },
  },
});
