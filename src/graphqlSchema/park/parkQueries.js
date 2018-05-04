import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import _ from 'lodash';
import ParkType from './ParkType';
import Parks from '../../data/parks';

const parks = {
  type: new GraphQLList(ParkType),
  description: 'List of all matching parks.',
  args: {
    id: { type: GraphQLInt },
    activity: { type: GraphQLList(GraphQLString)},
    name: { type: GraphQLString },
    category: { type: GraphQLList(GraphQLString)},
    amenities: { type: GraphQLList(GraphQLString)},
  },
  resolve: (parent, args) => {
    if (args.id) {
      return _.filter(Parks, { id: args.id });
    } else if (args.activity) {
      return _.filter(Parks, function (park) {
        return _.some(park.activity, function (activity){
          return _.includes(args.activity, activity);
        });
      });
    } else if (args.name) {
      return _.filter(Parks, { name: args.name })
    } else if (args.category){
      return _.filter(Parks, function (park) {
        return _.some(park.category, function (category){
          return _.includes(args.category, category)
        });
      });
    } else if (args.amenities){
      return _.filter(Parks, function (park) {
        return _.some(park.amenities, function (amenities){
          return _.includes(args.amenities, amenities)
        });
      });
    }
    return Parks;
  },
};

export default {
  parks,
};
