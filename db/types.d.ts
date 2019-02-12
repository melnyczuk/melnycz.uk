import {
  AreaType,
  BioType,
  InformationType,
  MediaType,
  WorkType,
  WritingType,
} from "../src/store/types";

export interface DB {
  bio: BioType;
  info: InformationType;
  media: MediaType;
  works: Array<WorkType>;
  writing: Array<WritingType>;
  areas: AreaType;
}
