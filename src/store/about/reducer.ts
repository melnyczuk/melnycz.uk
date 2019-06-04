const { about } = require('../../../db/about.json');
import { ActionType, AboutType } from '../../types';

import { actionConstants } from '../constants';

const {
  SET_TITLE,
  SET_DESC,
  SET_SHOW,
  SET_HIDE,
} = actionConstants;

export default (state: AboutType = about, action: ActionType) => {

  if (!action) return state;

  const { type, namespace, data } = action;

  switch (type) {

    default: { return state; }

    case (SET_TITLE): return ({ ...state, title: namespace })

    case (SET_DESC): return ({ ...state, description: namespace === 'aboutbio' && data })

    case (SET_SHOW): return ({ ...state, visible: (namespace === 'aboutbio') })

    case (SET_HIDE): return ({ ...state, visible: false })

  }

};
