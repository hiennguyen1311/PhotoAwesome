import {
  GET_NEW_FEED, UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAIL
} from '@constant/actionName';
import { NewFeedState, NewFeedResponse } from '@model/newFeed';
import { ImageCloudinary } from '@model/interface';

const initialState: NewFeedState = {
  newFeed: {},
  error: '',
  isLoading: false,
  imageUploaded: {} as ImageCloudinary,
};

const newFeed = (state = initialState, action: NewFeedResponse): NewFeedState => {
  switch (action.type) {
    case GET_NEW_FEED: {
      return {
        ...state,
      };
    }
    case UPLOAD_IMAGE: {
      return {
        ...state,
        isLoading: true,
        error: '',
        imageUploaded: {} as ImageCloudinary,
      }
    }
    case UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        imageUploaded: action.data,
      }
    }
    case UPLOAD_IMAGE_FAIL: {
      return {
        ...state,
        isLoading: false,
        error:action.error,
        imageUploaded: {} as ImageCloudinary,
      }
    }
    default: {
      return state;
    }
  }
};

export default newFeed;
