const { about } = require('../../../db/db.json');
import { ActionType, AboutType } from '../types';

import { actionConstants } from '../constants';
const {
  SET_TITLE,
} = actionConstants;

export default (state: AboutType = about, action: ActionType) => {

  if (!action) return state;

  const { type, namespace } = action;

  switch (type) {

    default: { return state; }

    case (SET_TITLE): return ({ ...state, title: namespace })

  }

};
