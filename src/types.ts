enum VideoHost {
  DROPBOX = 'DROPBOX',
  YOUTUBE = 'YOUTUBE',
}

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
  parent: ProjectType;
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
  videoSet: VideoType[];
  exhibitionSet: ExhibitionType[];
  residencySet: ResidencyType[];
  skillSet: SkillType[];
  technologySet: TechnologyType[];
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

export type SkillType = {
  id: string;
  name: string;
  yearsExp: number;
  jobs: JobType[];
  projects: ProjectType[];
  technologySet: TechnologyType[];
};

export type TechnologyType = {
  id: string;
  name: string;
  yearsExp: number;
  parent: SkillType;
  jobs: JobType[];
  projects: ProjectType[];
};

export type TextType = {
  id: string;
  name: string;
  url: string;
  parent: ProjectType;
};

export type VideoType = {
  id: string;
  name: string;
  url: string;
  parent: ProjectType;
  host: VideoHost;
};
