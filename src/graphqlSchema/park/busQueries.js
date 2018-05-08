import { GraphQLList, GraphQLString } from 'graphql';
import _ from 'lodash';
import BusType from './BusType';

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://data.delaware.gov/resource/n5hx-5mgi.json',
};

const busStops = {
  type: new GraphQLList(BusType),
  description: 'List of all matching parks.',
  args: {
    stopId: { type: GraphQLString },
    stopName: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    const stops = new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(body));
        }
      });
    });

    if (args.stopId) {
      return _.filter(stops, { stopId: args.stopId });
    } else if (args.stopName) {
      return _.filter(stops, s => _.includes(s.stopName, args.stopName));
    }

    return stops;
  },
};

export default {
  busStops,
};
