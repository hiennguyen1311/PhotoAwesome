import { combineReducers } from 'redux';
import { ApplicationState } from '@model/appState';
import app from './App/reducer';
import newFeed from './NewFeed/reducer';

export default combineReducers<ApplicationState, any>({
  app,
  newFeed,
} as any);
