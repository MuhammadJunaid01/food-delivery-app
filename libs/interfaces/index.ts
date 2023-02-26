import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ReactNode} from 'react';

export interface MainLayouteProps {
  children: ReactNode;
}
export interface TouchableBtnProps {
  label: string;
  onpress?: () => void;
  bgColor?: string;
  color?: string;
  height?: number;
  width?: number;
  padding?: number;
  margin?: number;
}
export interface SpecialOfferProps {
  title: string;
  btnLabel: string;
  data: {
    id: number;
    discount: number;
    discountTitle: string;
    discountInfo: string;
    thumbnail: string;
  }[];
}
export interface CategoriesProps {
  data: {id: number; label: string; icon: string}[];
}
export interface MostPopularProps {
  title: string;
  btnLabel: string;
  data: string[];
}
export interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

//NAVIGATION PROPS TYPE
export interface RootStackParamList {
  [key: string]: {[key: string]: any};
  Details: {itemId: number};
}

export interface DetailsScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
  route: RouteProp<RootStackParamList, 'Details'>;
}
