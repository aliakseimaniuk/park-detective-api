import ParkCategoriesType from './ParkCategoriesType';
import ParkCategories from '../../data/parkCategories';

const parkCategories = {
  type: ParkCategoriesType,
  description: 'This object represents list of available park categories.',
  resolve: () => ParkCategories,
};

export default {
  parkCategories,
};
