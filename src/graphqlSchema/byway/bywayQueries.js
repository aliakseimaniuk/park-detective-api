import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import _ from 'lodash';
import BywayType from './BywayType';
import Byways from '../../data/byways';

const byways = {
  type: new GraphQLList(BywayType),
  description: 'List of all matching byways.',
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: (p, args) => {
    if (args.id) {
      return _.filter(Byways, { id: args.id });
    } else if (args.name) {
      return _.filter(Byways, {name: args.name})
    } else {
      return Byways
    }
  }
}
export default {
  byways,
};
