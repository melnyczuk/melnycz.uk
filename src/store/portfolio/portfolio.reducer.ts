const works = require('../../../db/works.json');
import { ActionType, PortfolioType } from '../../types';
import { Work } from '../../../db/types';

import { actionConstants } from '../constants';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LONG,
} = actionConstants;

const portfolio: PortfolioType = works.reduce((map: PortfolioType, work: Work) => ({
  ...map,
  [work.namespace]: {
    ...work,
    visible: false,
  },
}), {});

export default (state: PortfolioType = portfolio, action: ActionType) => {

  if (!action) {
    return state;
  }

  const { type, namespace, data } = action;

  switch (type) {

    default: { return state; }

    case (SET_SHOW): return Object.keys(state)
      .reduce((next: object, key: string) => ({
        ...next, [key]: { ...state[key], visible: (key === namespace) }
      }), {});


    case (SET_HIDE): return Object.keys(state)
      .reduce((next, key: string) => ({
        ...next, [key]: { ...state[key], visible: false }
      }), {});


    case (SET_LONG): return Object.keys(state)
      .reduce((next, key: string) => ({
        ...next, [key]: {
          ...state[key], description: {
            ...state[key].description,
            long: key === namespace && data
          }
        }
      }), {});
  }

};
