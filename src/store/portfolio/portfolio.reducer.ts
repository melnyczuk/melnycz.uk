import path from 'path';
import { works } from '../../../db/works.json';
import { ActionType, PortfolioType, WorkType } from '../../types';
import { actionConstants } from '../constants';

const {
  SET_SHOW,
  SET_HIDE,
  SET_DESC,
} = actionConstants;

const portfolio: PortfolioType = works.reduce((map: PortfolioType, work: WorkType) => ({
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

  console.log('action', type, namespace, data);

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


    case (SET_DESC): return Object.keys(state)
      .reduce( async (next: PortfolioType, key: string) => {
        return {
          ...next,
          [key]: {
            ...state[key],
            description: key === namespace && data,
          }
        }
      }, {});
  }

};
