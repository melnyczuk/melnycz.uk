const { works } = require('../../../db/works.json');
import { ActionType, PortfolioType, WorkType } from '../../types';
import { actionConstants } from '../constants';

const { SET_SHOW, SET_HIDE, SET_DESC } = actionConstants;

const portfolio: PortfolioType = works.reduce((map: PortfolioType, work: WorkType) =>
  ({ ...map, [work.namespace]: { ...work, visible: false } }), {});

const reduceSetShow = (state: PortfolioType, { namespace }: ActionType) =>
  Object.keys(state).reduce((next: object, key: string) => ({
    ...next, [key]: { ...state[key], visible: (key === namespace) }
  }), {});

const reduceSetHide = (state: PortfolioType, action: ActionType) =>
  Object.keys(state).reduce((next, key: string) => ({
    ...next, [key]: { ...state[key], visible: false }
  }), {});

const reduceSetDesc = (state: PortfolioType, { namespace, data }: ActionType) =>
  Object.keys(state).reduce((next, key: string) => ({
    ...next, [key]: { ...state[key], description: key === namespace && data }
  }), {});

export default (state: PortfolioType = portfolio, action: ActionType) => {
  const { type } = action;
  switch (type) {
    default: { return state; }
    case (SET_SHOW): return reduceSetShow(state, action);
    case (SET_HIDE): return reduceSetHide(state, action);
    case (SET_DESC): return reduceSetDesc(state, action);
  }
};
