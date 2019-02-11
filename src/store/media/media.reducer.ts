import { media } from '../../../db/db.json';
import { ActionType, MediaType } from '../types';

export default (state: MediaType = media, action: ActionType) => state;
