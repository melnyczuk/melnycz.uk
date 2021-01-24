import { CSSProperties, FC } from 'react';

export type ImageType = {
  name: string;
  url: string;
  description?: string;
};

export type TextType = {
  name: string;
  url: string;
  description?: string;
};

export type ProjectType = {
  name: string;
  year: string | Date;
  images: ImageType[];
  text: TextType;
};

export type ClassAndStyle = {
  className?: string;
  style?: CSSProperties;
};

export type FCWithClassAndStyle<T> = FC<T & ClassAndStyle>;
