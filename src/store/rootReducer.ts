import { combineReducers } from 'redux';

import { media as MediaDB } from '../../db/media.json';
import { nav as NavDB } from '../../db/nav.json'
import { works as WorksDB } from '../../db/works.json';

import { actionConstants } from './constants';
import { ActionType, MediaStoreType, WorkType, NavType, ImageType, AVType } from '../types';
import { getBaseUrlAppender } from '../utils';

const {
  SET_ACTIVE,
  SET_DESC,
  SET_HIDE,
  SET_SHOW,
  SET_SITE_TITLE,
  SET_TITLE,
} = actionConstants;

const appendBaseUrl = getBaseUrlAppender(MediaDB.baseUrl);

const init = {
  media: {
    audios: MediaDB.audios.map(appendBaseUrl('audios')) as    AVType[],
    images: MediaDB.images.map(appendBaseUrl('images')) as ImageType[],
    videos: MediaDB.videos.map(appendBaseUrl('videos')) as    AVType[],
  },
  nav: {
    active: NavDB.sitetitle as string,
    labels: [...new Set(WorksDB.map(({ area }: WorkType) => area))] as string[],
    sitetitle: NavDB.sitetitle as string,
  },
  works: WorksDB.map(
    (work: WorkType) => ({ ...work, visible: false })
  ) as WorkType[],
}

const media = (state: MediaStoreType = init.media, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

const nav = (state: NavType = init.nav, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
    case (SET_ACTIVE):
      return ({ ...state, active: action.id });
    case (SET_SITE_TITLE):
      return ({ ...state, sitetitle: action.id });
  }
};

const works = (state: WorkType[] = init.works, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
    case (SET_TITLE):
      return ({ ...state, title: action.id });
    case (SET_SHOW):
      return state.map(work =>
        ({ ...work, visible: (action.id === work.namespace) }));
    case (SET_HIDE):
      return state.map(work =>
        ({ ...work, visible: false }));
    case (SET_DESC):
      return state.map(work =>
        ({ ...work, description: action.id === work.namespace && action.data }));
  }
};


export default combineReducers({ media, nav, works });
