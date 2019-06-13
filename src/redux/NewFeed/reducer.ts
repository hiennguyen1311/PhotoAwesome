import {
  GET_NEW_FEED
} from '@constant/actionName';
import { NewFeedState, NewFeedResponse } from '@model/newFeed';

const initialState: NewFeedState = {
  newFeed: {},
  error: '',
  isLoading: false,
};

const newFeed = (state = initialState, action: NewFeedResponse): NewFeedState => {
  switch (action.type) {
    case GET_NEW_FEED: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default newFeed;
