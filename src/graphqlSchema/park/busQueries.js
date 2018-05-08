import { GraphQLList, GraphQLString, GraphQLFloat } from 'graphql';
import _ from 'lodash';
import BusType from './BusType';

const request = require('request');
const geolib = require('geolib');

const options = {
  method: 'GET',
  url: 'https://data.delaware.gov/resource/n5hx-5mgi.json',
};

function toBusTypesArray(body) {
  const a = JSON.parse(body);
  return a.map(val => {
    const b = {
      objectId: val.objectid,
      stopName: val.stopname,
      routes: val.routes,
      shelter: val.shelter,
      bench: val.bench,
      stopAbbr: val.stopabbr,
      stopId: val.stopid,
      lat: val.shape.latitude,
      lon: val.shape.longitude,
    };

    return b;
  });
}

const busStops = {
  type: new GraphQLList(BusType),
  description: 'List of all matching parks.',
  args: {
    stopId: { type: GraphQLString },
    stopName: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    distanceInMeters: { type: GraphQLFloat },
  },
  resolve: (parent, args) =>
    new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          return reject(error);
        }

        const stops = toBusTypesArray(body);
        if (args.stopId) {
          return resolve(_.filter(stops, { stopId: args.stopId }));
        } else if (args.stopName) {
          return resolve(
            _.filter(stops, s => _.includes(s.stopName, args.stopName)),
          );
        } else if (args.latitude && args.longitude) {
          const distance = args.distanceInMeters || 1600;
          const l1 = {
            latitude: args.latitude,
            longitude: args.longitude,
          };

          const r = [];
          for (let i = 0; i < stops.length; i += 1) {
            const l2 = {
              latitude: stops[i].lat,
              longitude: stops[i].lon,
            };

            const d = geolib.getDistance(l1, l2);
            if (d <= distance) {
              r.push(stops[i]);
            }
          }

          return resolve(r);
        }

        return resolve(stops);
      });
    }),
};

export default {
  busStops,
};
