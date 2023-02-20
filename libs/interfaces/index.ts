/* eslint-disable prettier/prettier */
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
