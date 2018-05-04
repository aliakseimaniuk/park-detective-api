import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'ParkCategories',
  description: 'This object represents list of available park categories.',
  fields: {
    categories: { type: new GraphQLList(GraphQLString) },
  },
});
