import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import ShapeType from './ShapeType';

export default new GraphQLObjectType({
  name: 'Byway',
  description: 'This object represents a byway type.',
  fields: {
    objectid: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    moreinfo: { type: GraphQLString },
    storymap: { type: GraphQLString },
    shape: { type: ShapeType },
  },
});
