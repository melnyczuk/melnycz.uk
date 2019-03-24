import { media } from '../../../db.json';
import { ActionType, MediaType } from '../../types';

export default (state: MediaType = media, action: ActionType) => state;
