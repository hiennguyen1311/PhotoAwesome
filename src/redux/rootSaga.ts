import { all, fork } from 'redux-saga/effects';
import newFeed from './NewFeed/saga';

export default function* rootSaga() {
  yield all([
    //fork(newFeed),
  ]);
}
