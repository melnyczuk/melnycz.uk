import db from '../../../db/db.json';
import { ActionType, MediaType } from '../types';

const { media } = db;

export default (state: MediaType = media, action: ActionType) => state;
