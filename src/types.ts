import { CSSProperties, FC } from 'react';

export type BioType = {
  id: string;
  short: string;
  long: string;
};

export type EducationType = {
  id: string;
  course: string;
  institution: string;
  startDate: string;
  endDate: string;
};

export type ExhibitionType = {
  id: string;
  name: string;
  space: string;
  location: string;
  description: string;
  projectSet: ProjectType[];
  startDate: string;
  endDate: string;
};

export type ImageType = {
  id: string;
  name: string;
  url: string;
  description?: string;
};

export type JobType = {
  id: string;
  role: string;
  company: string;
  team: string;
  description: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
  skillSet: SkillType[];
  technologySet: TechnologyType[];
};

export type ProjectType = {
  id: string;
  name: string;
  year: string;
  hide: boolean;
  imageSet: ImageType[];
  textSet: TextType[];
};

export type ResidencyType = {
  id: string;
  name: string;
  location: string;
  description: string;
  projectSet: ProjectType[];
  startDate: string;
  endDate: string;
};

export type SkillType = unknown;

export type TechnologyType = unknown;

export type TextType = {
  id: string;
  name: string;
  url: string;
  description?: string;
};

export type ClassAndStyle = {
  className?: string;
  style?: CSSProperties;
};

export type FCWithClassAndStyle<T> = FC<T & ClassAndStyle>;
