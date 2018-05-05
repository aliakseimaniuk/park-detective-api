import { GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';
import _ from 'lodash';
import BusType from './BusType';

var request = require("request");

var options = {
  method: 'GET',
  url: 'https://data.delaware.gov/resource/n5hx-5mgi.json',
};

const busStops= {
  type: new GraphQLList(BusType),
  description: 'List of all matching parks.',
  args: {
    // stopid, lon, stopname, lat
    stopid: { type: GraphQLString},
    stopname: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    var stops = new Promise(function(resolve, reject) {
      request(options, function(error, response, body){
        if (error) {
          reject(err)
        } else {
          resolve(JSON.parse(body))
        }
      })
    })
    if (args.stopid) {
      return _.filter(stops, { stopid: args.stopid })
    } else if (args.stopname) {
      return _.filter(stops, s => _.includes(s.stopname, args.stopname))
    }
    return stops;
  }
};

export default {
  busStops,
};
