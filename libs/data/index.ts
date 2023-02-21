/* eslint-disable prettier/prettier */
import {
  CategoriesProps as categorieDataTypes,
  SpecialOfferProps,
} from '../interfaces';

/* eslint-disable prettier/prettier */
export const specialOfferData: SpecialOfferProps['data'] = [
  {
    id: 1,
    discount: 30,
    discountTitle: 'Todays Special1',
    discountInfo: 'Get DiScount for every order only valid for today',
    thumbnail: require('../../src/assets/images/appIntro/app-intro-1.jpg'),
  },
  {
    id: 2,
    discount: 35,
    discountTitle: 'Todays Special2',
    discountInfo: 'Get DiScount for every order only valid for today',
    thumbnail: require('../../src/assets/images/appIntro/app-intro-2.jpg'),
  },
  {
    id: 3,
    discount: 20,
    discountTitle: 'Todays Special3',
    discountInfo: 'Get DiScount for every order only valid for today',
    thumbnail: require('../../src/assets/images/appIntro/app-intro-3.jpg'),
  },
  {
    id: 4,
    discount: 50,
    discountTitle: 'Todays Special4',
    discountInfo: 'Get DiScount for every order only valid for today',
    thumbnail: require('../../src/assets/images/appIntro/app-intro-4.jpg'),
  },
  {
    id: 5,
    discount: 10,
    discountTitle: 'Todays Special4',
    discountInfo: 'Get DiScount for every order only valid for today',
    thumbnail: require('../../src/assets/images/appIntro/app-intro-5.jpg'),
  },
];
export const categories: categorieDataTypes['data'] = [
  {
    id: 1,
    icon: require('../../src/assets/images/categoriIcons/clothes.png'),
    label: 'Clothes',
  },
  {
    id: 2,
    icon: require('../../src/assets/images/categoriIcons/shoes.png'),
    label: 'Shoes',
  },
  {
    id: 3,
    icon: require('../../src/assets/images/categoriIcons/bags.png'),
    label: 'Bags',
  },
  {
    id: 4,
    icon: require('../../src/assets/images/categoriIcons/electronic.png'),
    label: 'Electronic',
  },
  {
    id: 5,
    icon: require('../../src/assets/images/categoriIcons/watches.png'),
    label: 'Watch',
  },
  {
    id: 6,
    icon: require('../../src/assets/images/categoriIcons/jewellery.png'),
    label: 'Jewellery',
  },
  {
    id: 7,
    icon: require('../../src/assets/images/categoriIcons/kitchen.png'),
    label: 'Kitchen',
  },
  {
    id: 8,
    icon: require('../../src/assets/images/categoriIcons/toys.png'),
    label: 'Toys',
  },
];
export const mostPopularData = [
  'Clothes',
  'Shoes',
  'Bags',
  'Electronic',
  'Watch',
  'Jewellery',
  'Kitchen',
  'Toys',
];
