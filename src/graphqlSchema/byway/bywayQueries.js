import { GraphQLList, GraphQLString } from 'graphql';
import _ from 'lodash';
import BywayType from './BywayType';
import Byways from '../../data/byways';
import PointsOfInterestType from './PointsOfInterestType';
import PointsOfInterest from '../../data/pointsOfInterest';

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
      return _.filter(Byways, { name: args.name });
    }

    return Byways;
  },
};

const pointsOfInterest = {
  type: new GraphQLList(PointsOfInterestType),
  description: 'List all matching points of interest.',
  args: {
    byway: { type: GraphQLString },
    poi: { type: GraphQLString },
  },
  resolve: (p, args) => {
    if (args.byway) {
      return _.filter(PointsOfInterest, { byway: args.byway });
    } else if (args.poi) {
      return _.filter(PointsOfInterest, { byway: args.poi });
    }

    return PointsOfInterest;
  },
};
export default {
  byways,
  pointsOfInterest,
};
