import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import _ from 'lodash';
import ParkType from './ParkType';
import Parks from '../../data/parks';

const parks = {
  type: new GraphQLList(ParkType),
  description: 'List of all matching parks.',
  args: {
    id: { type: GraphQLInt },
    activity: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    if (args.id) {
      return _.filter(Parks, { id: args.id });
    } else if (args.activity) {
      return _.filter(Parks, p => _.includes(p.activity, args.activity));
    }

    return Parks;
  },
};

export default {
  parks,
};
