import { actionConstants } from '../../../constants';
import { Action } from '../../../store.d';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
} = actionConstants;

const modal = {
  setModalShow: (namespace: string): Action => ({ type: SET_SHOW, namespace }),
  setModalHide: (namespace: string): Action => ({ type: SET_HIDE, namespace }),
}

const post = {
  setPostLength: (namespace: string): Action => ({ type: SET_LENGTH, namespace }),
}

export { modal, post };
