import { all, fork } from 'redux-saga/effects';
import uploadImage from './NewFeed/saga';

export default function* rootSaga() {
  yield all([
    fork(uploadImage),
  ]);
}
