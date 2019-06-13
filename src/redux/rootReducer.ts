import { combineReducers } from 'redux';
import { ApplicationState } from '@model/appState';
import newFeed from './NewFeed/reducer';

export default combineReducers<ApplicationState, any>({
  newFeed,
} as any);
