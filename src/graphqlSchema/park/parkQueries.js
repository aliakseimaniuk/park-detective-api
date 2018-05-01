import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import _ from 'lodash';
import ParkType from './ParkType';
import Parks from '../../data/parks';

const parks = {
  type: new GraphQLList(ParkType),
  description: 'List of all matching parks.',
  args: {
    id: { type: GraphQLInt },
    genre: { type: GraphQLString },
  },
  resolve: (p, args) => {
    if (args.id) {
      return _.filter(Parks, { id: args.id });
    } else if (args.genre) {
//      return _.filter(Parks, { genre: args.genre });
      return _.filter(Parks, p => _.includes(p.genre, args.genre))
    }

    return Parks;
  },
};

export default {
  parks,
};
