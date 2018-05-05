import ParkAmenitiesType from './ParkAmenitiesType';
import ParkAmenities from '../../data/parkAmenities';

const parkAmenities = {
  type: ParkAmenitiesType,
  description: 'This object represents list of available park amenities.',
  resolve: () => ParkAmenities,
};

export default {
  parkAmenities,
};
