import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import LocationType from './LocationType';
import AddressType from '../contact/AddressType';
import ContactInformationType from '../contact/ContactInformationType';
import WorkingDayType from '../contact/WorkingDayType';

export default new GraphQLObjectType({
  name: 'Park',
  description: 'This object represents park type.',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: AddressType },
    location: { type: LocationType },
    category: { type: new GraphQLList(GraphQLString) },
    activity: { type: new GraphQLList(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    amenities: { type: new GraphQLList(GraphQLString) },
    contactInformation: { type: ContactInformationType },
    website: { type: GraphQLString },
    workingHours: { type: new GraphQLList(WorkingDayType) },
    mainImageUrl: { type: new GraphQLNonNull(GraphQLString) },
    imagesUrls: { type: new GraphQLList(GraphQLString) },
  },
});
