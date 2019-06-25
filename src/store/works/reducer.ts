const { works: worksDB } = require('../../../db/works.json');
import { ActionType, WorkType } from '../../types';
import { actionConstants } from '../constants';

const { SET_SHOW, SET_HIDE, SET_DESC, SET_TITLE, } = actionConstants;


const initialise: WorkType[] = worksDB.map(
  (work: WorkType) => ({ ...work, visible: false }));

const mapSetShow = (state: WorkType[], action: ActionType) =>
  state.map(work => ({ ...work, visible: (action.id === work.namespace) }));

const mapSetHide = (state: WorkType[], action: ActionType) =>
  state.map(work => ({ ...work, visible: false }));

const mapSetDesc = (state: WorkType[], action: ActionType) =>
  state.map(work => ({ ...work, description: action.id === work.namespace && action.data }));

export default (state: WorkType[] = initialise, action: ActionType) => {
  switch (action.type) {
    default: return state;
    case (SET_TITLE): return ({ ...state, title: action.id });
    case (SET_SHOW): return mapSetShow(state, action);
    case (SET_HIDE): return mapSetHide(state, action);
    case (SET_DESC): return mapSetDesc(state, action);
  }
};
