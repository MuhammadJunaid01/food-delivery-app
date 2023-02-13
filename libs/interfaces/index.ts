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
