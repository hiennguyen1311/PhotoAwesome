
import { uploadImage as uploadImageApi } from '@service/cloudinaryApi';
import { put, takeLatest } from 'redux-saga/effects';
import { UPLOAD_IMAGE, UPLOAD_IMAGE_FAIL, UPLOAD_IMAGE_SUCCESS } from '@constant/actionName';

function* implementUploadImage(action: any) {
    const { data, error } = yield uploadImageApi(action.payload);
    if (error) {
      yield put({ type: UPLOAD_IMAGE_FAIL, error });
      return;
    }
    yield put({ type: UPLOAD_IMAGE_SUCCESS, data });
  }
  
  function* uploadImage() {
    yield takeLatest(UPLOAD_IMAGE, implementUploadImage);
  }

export default uploadImage;