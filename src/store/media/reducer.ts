const { media } = require('../../../db/media.json');
import { ActionType, MediaType } from '../../types';

export default (state: MediaType = media, action: ActionType) => {
  const { type } = action;
  switch (type) {
    default: return state;
  }
};
