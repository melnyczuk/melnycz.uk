import { StoreType, ContainerType, MediaStoreType, WorkType, NavType } from "../../types";

// Root Selectors
const selectMedia =
  ({ media = null }: StoreType, props: any): MediaStoreType =>
    media;

const selectNav =
  ({ nav }: StoreType, props: any): NavType =>
    nav;

const selectWorks =
  ({ works }: StoreType, props): WorkType[] =>
    works;

export default {
  media: selectMedia,
  nav: selectNav,
  works: selectWorks,
};
