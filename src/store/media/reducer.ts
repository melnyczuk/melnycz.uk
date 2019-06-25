const { media } = require('../../../db/media.json');
import { ActionType, MediaStoreType } from '../../types';

export default (state: MediaStoreType = media, action: ActionType) => {
  const { type } = action;
  switch (type) {
    default: return state;
  }
};
